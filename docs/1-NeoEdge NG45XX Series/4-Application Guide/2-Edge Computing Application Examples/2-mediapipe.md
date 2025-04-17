

# Pose Estimation

---

## 1. 概览

本文介绍如何在 **Jetson Orin** 平台（Nano / NX / AGX）上使用 **MediaPipe** 运行实时 **姿态估计（Pose Estimation）**，在支持的情况下启用 GPU 加速。

姿态估计广泛应用于手势识别、健身追踪、人机交互等领域。

【图片】*图示：实时姿态估计输出示例*

---

## 2. 系统要求

### 硬件

- Jetson Orin 系列（Nano、NX、AGX）  
- USB / CSI 摄像头（可选但推荐）

### 软件

- **操作系统**：Ubuntu 20.04/22.04 LTS（基于 JetPack）  
- **JetPack**：官方镜像（包含 CUDA、cuDNN、TensorRT）  
- **MediaPipe**：GitHub 源代码（`master` 分支或指定版本，如 `v0.9.x`）  
- **依赖项**：  
  - Bazel 4.2+（构建系统）  
  - Python 3.7+  
  - OpenCV、FFmpeg、GStreamer、Protobuf

确保 JetPack 安装正确，CUDA 可用。

---

## 3. 环境配置

### 步骤 1：更新系统并安装依赖

```bash
sudo apt update && sudo apt upgrade
sudo apt install -y \
    build-essential cmake git curl unzip \
    python3-dev python3-pip python3-opencv \
    libopencv-dev libprotobuf-dev protobuf-compiler \
    libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev \
    libavcodec-dev libavformat-dev libswscale-dev
```

### 步骤 2：安装 Python 包

```bash
python3 -m pip install --upgrade pip
pip3 install numpy protobuf
```

---

## 4. 安装 Bazel

MediaPipe 使用 [Bazel](https://bazel.build/) 构建源代码：

```bash
curl -OL https://github.com/bazelbuild/bazel/releases/download/5.3.0/bazel-5.3.0-linux-arm64
chmod +x bazel-5.3.0-linux-arm64
sudo mv bazel-5.3.0-linux-arm64 /usr/local/bin/bazel
bazel version
```

> 📌 **注意**：MediaPipe 版本必须与 Bazel 版本兼容，参考官方 [兼容性指南](https://google.github.io/mediapipe/getting_started/install.html)

---

## 5. 克隆 MediaPipe 源码

```bash
git clone https://github.com/google/mediapipe.git
cd mediapipe
# 可选：切换至稳定版本
# git checkout v0.9.1
```

示例与图结构文件路径：

- `mediapipe/examples/`
- `mediapipe/graphs/`

---

## 6. 构建与配置

### 步骤 1：基础 C++ 构建（示例）

编译一个 Hello World 或手部追踪示例：

```bash
bazel build -c opt \
    --define MEDIAPIPE_DISABLE_GPU=0 \
    --copt -DMESA_EGL_NO_X11_HEADERS \
    --action_env PYTHON_BIN_PATH=$(which python3) \
    mediapipe/examples/desktop/hello_world:hello_world
```

### 步骤 2：编译姿态估计示例

```bash
bazel build -c opt \
    --config=cuda \
    --define MEDIAPIPE_DISABLE_GPU=0 \
    mediapipe/examples/desktop/pose_tracking:pose_tracking_gpu
```

> 首次运行前可能需要下载姿态估计模型文件

---

## 7. 运行示例

### 使用摄像头进行实时推理（GPU）

```bash
GLOG_logtostderr=1 \
bazel-bin/mediapipe/examples/desktop/pose_tracking/pose_tracking_gpu \
  --calculator_graph_config_file=mediapipe/graphs/pose_tracking/pose_tracking_gpu.pbtxt
```

### 使用本地视频文件：

```bash
GLOG_logtostderr=1 \
bazel-bin/mediapipe/examples/desktop/pose_tracking/pose_tracking_gpu \
  --calculator_graph_config_file=mediapipe/graphs/pose_tracking/pose_tracking_gpu.pbtxt \
  --input_video_path=input.mp4 \
  --output_video_path=output_pose.mp4
```

---

## 8. 可选：Python API

MediaPipe 支持 Python 接口，但官方预编译版本在 ARM64 上可能不可用。

### 方案 1：从源码构建 Python 模块

```bash
cd mediapipe
python3 setup.py gen_protos
python3 setup.py bdist_wheel --experimental_deps=gpu
```

安装生成的 `.whl` 包：

```bash
pip3 install dist/mediapipe-*.whl
```

### Python 示例代码

```python
import cv2
import mediapipe as mp

mp_pose = mp.solutions.pose
pose = mp_pose.Pose()

cap = cv2.VideoCapture(0)
while True:
    ret, frame = cap.read()
    image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = pose.process(image)

    if results.pose_landmarks:
        print(results.pose_landmarks)
    cv2.imshow("Pose", frame)
    if cv2.waitKey(5) & 0xFF == 27:
        break
cap.release()
```

---

## 9. 性能与优化建议

| 模式       | FPS（AGX Orin） | GPU 使用率 | 是否加速   |
| -------- | ------------- | ------- | ------ |
| 仅使用 CPU  | ~5–10 FPS     | 低       | ❌      |
| 启用 CUDA  | ~25–40 FPS    | 中等      | ✅      |
| TensorRT | （开发中/手动）      | 低 / 高   | ⚙️ 有潜力 |

### 优化建议

- 添加 `--config=cuda` 以启用 GPU  
- 确保 `--define MEDIAPIPE_DISABLE_GPU=0` 被设置  
- 启用 `jetson_clocks` 和设置 `nvpmodel` 为最大性能

【图片】*图示：性能指标图（占位）*

---

## 10. 🛠️ 故障排查

| 问题           | 建议                                  |
| ------------ | ----------------------------------- |
| 缺少 `.so` 文件  | 添加至 `LD_LIBRARY_PATH` 或通过 apt 安装    |
| GStreamer 报错 | 安装全部插件：`good`、`bad`、`ugly`          |
| Bazel 构建失败   | 检查 MediaPipe 对应的 Bazel 版本           |
| Python 包构建失败 | 检查 `setup.py` 和对应 Bazel / Python 版本 |

```bash
# 若缺少插件，可运行以下命令补全：
sudo apt install gstreamer1.0-plugins-{base,good,bad,ugly}
```

---

## 11. 附录

### 源码目录结构示例

```bash
mediapipe/
├── graphs/
│   └── pose_tracking/
├── examples/
│   └── desktop/
│       └── pose_tracking/
```

### 参考资源

- [MediaPipe 官方文档](https://google.github.io/mediapipe/)  
- [Jetson Orin 开发者论坛](https://forums.developer.nvidia.com/c/embedded/jetson-orin/)  
- [MediaPipe GitHub 仓库](https://github.com/google/mediapipe)
