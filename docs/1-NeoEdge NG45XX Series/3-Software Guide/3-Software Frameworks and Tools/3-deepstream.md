# DeepStream

---

本指南介绍如何在 **Jetson Orin** 设备上安装并运行 **NVIDIA DeepStream SDK**。DeepStream 支持使用 GPU 加速的 AI 视频分析流水线，针对 Jetson 的 CUDA/NvMedia 平台高度优化。

---

## 1. 概览

- NVIDIA 提供的实时视频分析 SDK  
- 基于 TensorRT 和 CUDA 加速  
- 支持多路 AI 推理与目标追踪  
- 输入支持 RTSP、USB、CSI 摄像头及本地视频文件  
- 内置目标检测、分类、追踪功能

本指南包括：

- 安装方法（.deb 包和 Docker）
- 示例流水线运行
- 自定义模型集成
- Docker 使用（含 jetson-containers）
- 常见问题与技巧

![overview](/img/NG45XX_deepstream_overview.png)

---

## 2. 系统要求

### 硬件

| 组件   | 最低要求                        |
| ---- | --------------------------- |
| 设备   | Jetson Orin Nano / NX / AGX |
| 内存   | ≥ 8GB                       |
| 存储空间 | ≥ 10GB                      |

### 软件

- JetPack 5.1.1 或更高版本（L4T ≥ R35.3）  
- Ubuntu 20.04 / 22.04  
- CUDA、TensorRT、cuDNN（已包含在 JetPack 中）  
- Docker（可选，用于容器化部署）

---

## 3. 安装 DeepStream

### 方法 A：本地安装（.deb 包）

1. 前往 DeepStream 下载页面：
   
   - [DeepStream Jetson 下载页面](https://developer.nvidia.com/deepstream-sdk-download-tesla#jetson)  
   - 选择与你 JetPack 版本对应的 DeepStream 包

2. 使用 `dpkg` 安装：

```bash
sudo apt install ./deepstream-<version>_arm64.deb
```

3. 验证安装：

```bash
deepstream-app --version
```

【图片】*图示：CLI 输出 DeepStream 安装及版本信息*

---

### 方法 B：基于 Docker 的安装

若你更偏好容器化工作流：

```bash
sudo docker run --rm -it --runtime=nvidia --network host \
  nvcr.io/nvidia/deepstream:6.3-triton-devel \
  /bin/bash
```

> 🧩 来自 NVIDIA NGC 镜像，使用前确保设备已注册 [NGC](https://ngc.nvidia.com/)

你也可以使用社区维护的 [jetson-containers](https://github.com/dusty-nv/jetson-containers)：

```bash
jetson-containers run dusty-nv/deepstream
```

---

## 4. 运行示例流水线

### 步骤 1：运行默认示例

执行内置视频目标检测示例：

```bash
deepstream-app -c /opt/nvidia/deepstream/deepstream/samples/configs/deepstream-app/source1_usb_dec_infer_resnet_int8.txt
```

该命令将弹出视频窗口，实时显示检测结果。

【图片】*图示：DeepStream 运行实时目标检测*

---

### 步骤 2：使用 USB 或 CSI 摄像头

修改配置文件中的输入部分：

```ini
[source0]
enable=1
type=1
camera-width=1280
camera-height=720
camera-fps-n=30
```

然后运行：

```bash
deepstream-app -c <your_camera_config>.txt
```

> 🎥 USB 摄像头对应 `type=1`，CSI 摄像头使用 `nvarguscamerasrc`

---

### 步骤 3：使用 RTSP 流

使用以下配置片段：

```ini
[source0]
enable=1
type=4
uri=rtsp://<your-camera-stream>
```

---

## 5. Docker 中运行（进阶）

示例：在 Docker 中运行 DeepStream 6.3 + Triton + PyTorch：

```bash
sudo docker run -it --rm --runtime=nvidia \
  -v /tmp/.X11-unix:/tmp/.X11-unix \
  -e DISPLAY=$DISPLAY \
  nvcr.io/nvidia/deepstream:6.3-triton-devel
```

容器内执行：

```bash
deepstream-app -c /opt/nvidia/deepstream/deepstream/samples/configs/deepstream-app/source1_usb_dec_infer_resnet_int8.txt
```

【图片】*图示：带 GUI 显示的 DeepStream Docker 容器运行界面*

---

## 6. 集成自定义模型

DeepStream 支持通过 TensorRT 或 ONNX 集成自定义模型。

### 步骤 1：模型转换

使用 `trtexec` 或 `tao-converter` 工具：

```bash
trtexec --onnx=model.onnx --saveEngine=model.engine
```

### 步骤 2：更新配置文件

```ini
[primary-gie]
enable=1
model-engine-file=model.engine
network-type=0
```

【图片】*图示：配置块中的自定义模型路径*

---

## 7. 小贴士与故障排查

| 问题            | 解决方法                                       |
| ------------- | ------------------------------------------ |
| Docker 中无图像显示 | 挂载 X11 socket 并设置 `DISPLAY` 变量             |
| 帧率低           | 使用 INT8 引擎或降低输入分辨率                         |
| USB 摄像头无法识别   | 使用 `v4l2-ctl --list-devices` 检查设备          |
| GStreamer 报错  | 检查插件是否安装，必要时重刷 JetPack                     |
| RTSP 延迟/丢帧    | 设置 `drop-frame-interval=0` 和 `latency=200` |

---

## 8. 附录

### 关键路径

| 用途               | 路径                                                   |
| ---------------- | ---------------------------------------------------- |
| 示例配置文件           | `/opt/nvidia/deepstream/deepstream/samples/configs/` |
| 模型引擎文件           | `/opt/nvidia/deepstream/deepstream/models/`          |
| 日志目录             | `/opt/nvidia/deepstream/logs/`                       |
| DeepStream 命令行工具 | `/usr/bin/deepstream-app`                            |

### 参考资源

- [DeepStream 官方页面](https://developer.nvidia.com/deepstream-sdk)  
- [NGC 镜像仓库 - DeepStream](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/deepstream)  
- [GitHub - dusty-nv/jetson-containers](https://github.com/dusty-nv/jetson-containers)  
- [NVIDIA 论坛 - DeepStream](https://forums.developer.nvidia.com/c/deepstream-sdk/)
