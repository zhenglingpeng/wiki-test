# Pose Estimation Over Mediapipe

---

## 1. 环境概述

- **Jetson Orin 系列**（如Orin Nano, Orin NX, Orin AGX等）
- **操作系统**：JetPack (基于Ubuntu 20.04/22.04 LTS)，NVIDIA提供的官方系统镜像
- **MediaPipe版本**：可以使用最新的 `master` 分支或特定版本号（如 `v0.9.x` 等）
- **依赖工具**：
  - [Bazel](https://bazel.build/)（建议 4.2.0+ 版本，MediaPipe官方也会在 [docs](https://google.github.io/mediapipe/getting_started/install.html) 中说明）
  - Python 3.7+（可选，如需跑Python API）
  - OpenCV、FFmpeg、GStreamer、Protobuf 等库

在开始前，建议确保Jetson Orin上的NVIDIA驱动和CUDA/GPU加速库（cuDNN、TensorRT等）已经正常安装并可用。通常，使用官方 **JetPack** 安装后，这些组件会自动集成好。

---

## 2. 准备工作

1. **更新系统**
   
   ```bash
   sudo apt-get update
   sudo apt-get upgrade
   ```

2. **安装开发所需依赖**
   
   常见依赖包括 Git、curl、unzip、Python3-dev、pip、numpy、OpenCV 等。如果要编译C++ demo，需要安装 `build-essential`，以及GStreamer开发包（可以后续根据需要再装）。
   
   ```bash
   sudo apt-get install -y \
       build-essential cmake git wget curl unzip \
       python3-dev python3-pip python3-opencv \
       libopencv-dev libprotobuf-dev protobuf-compiler \
       libssl-dev libtool autoconf autogen automake \
       libudev-dev libgles2-mesa-dev \
       libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev \
       libavcodec-dev libavformat-dev libavutil-dev libswscale-dev libavdevice-dev
   ```

3. **安装/升级PIP并安装Python包**
   
   ```bash
   python3 -m pip install --upgrade pip
   pip3 install numpy protobuf
   # 如果需要后面使用MediaPipe Python包，可以先安装后续需要的依赖
   # pip3 install opencv-python mediapipe 等
   ```

---

## 3. 安装 Bazel

MediaPipe 的构建系统依赖 [Bazel](https://bazel.build/) 来进行编译。可以从Bazel官方提供的安装脚本或二进制发布版本来安装，也可以使用 apt 仓库等方式，下面示例以安装Bazel 5.3.0为例（请根据MediaPipe官方要求或实际情况调整版本）：

```bash
# 以Bazel安装脚本为例:
curl -OL https://github.com/bazelbuild/bazel/releases/download/5.3.0/bazel-5.3.0-linux-arm64
chmod +x bazel-5.3.0-linux-arm64
sudo mv bazel-5.3.0-linux-arm64 /usr/local/bin/bazel
bazel version
```

成功后，执行 `bazel version` 能看到对应的Bazel版本信息。  

> **提示**：某些版本的MediaPipe对Bazel版本有所要求，最好对照MediaPipe官方的 [release note](https://github.com/google/mediapipe/releases) 或 [官方文档](https://google.github.io/mediapipe/getting_started/install.html) 进行匹配。

---

## 4. 获取MediaPipe源码

1. **克隆MediaPipe仓库**
   
   ```bash
   git clone https://github.com/google/mediapipe.git
   cd mediapipe
   # 可选择切换到特定标签或分支，例如 git checkout v0.9.1
   ```

2. **检查目录结构**
   
   常见的示例会在 `mediapipe/examples/` 或 `mediapipe/graphs/` 下，您可以根据需要选择要编译的demo。

---

## 5. 配置与编译

MediaPipe一般可以有两种主要使用方式：

1. 通过C++编译和构建示例、二进制文件；
2. 通过Python包的形式使用（官方提供预编译包，但不一定适配ARM64加速）。

在Jetson Orin上，为了充分利用GPU加速（CUDA、TensorRT等），通常需要自己进行编译并启用相应的加速选项。

### 5.1 配置示例（C++编译）

假设我们想要构建 `examples/desktop/hello_world` 作为最简单的测试，可以先编辑项目根目录下的 `WORKSPACE` 或 `BUILD` 文件以确保OpenCV、FFmpeg等路径正常识别。

> **提示**：如果想开启CUDA支持，需要检查`mediapipe/framework/tool/mediapipe_opencv_configure.bzl`、`BUILD`文件中是否有`--config=cuda`以及对应的编译标志等。MediaPipe的官方文档有提及[在Linux下的GPU编译配置](https://google.github.io/mediapipe/getting_started/gpu_support.html)。

示例命令：

```bash
cd mediapipe
# bazel build [target] --config=cuda 是可能需要的flag
bazel build -c opt \
    --define MEDIAPIPE_DISABLE_GPU=0 \
    --copt -DMESA_EGL_NO_X11_HEADERS \
    --action_env PYTHON_BIN_PATH=$(which python3) \
    mediapipe/examples/desktop/hello_world:hello_world
```

- `-c opt`：开启优化编译
- `--define MEDIAPIPE_DISABLE_GPU=0`：启用GPU相关功能（在某些场景下也要加 `--config=cuda`）
- `--copt -DMESA_EGL_NO_X11_HEADERS`：适配EGL相关定义（Jetson可能需要）
- `--action_env PYTHON_BIN_PATH`：指定Python路径，避免Bazel自动检测到其他版本

如果编译成功，会生成一个可执行文件，通常路径在 `bazel-bin/mediapipe/examples/desktop/hello_world/hello_world`。  

### 5.2 编译其他常见Demo（如手势识别、姿态检测等）

MediaPipe仓库中有不少预置的图（graph），可以在 `mediapipe/graphs/` 目录下查看。例如要编译 `mediapipe/examples/desktop/hand_tracking`：

```bash
# 建议先安装或检查手部追踪模型文件是否已下载
# 然后执行构建
bazel build -c opt \
    --define MEDIAPIPE_DISABLE_GPU=0 \
    mediapipe/examples/desktop/hand_tracking:hand_tracking_cpu
# 或者 GPU 版本
bazel build -c opt \
    --config=cuda \
    --define MEDIAPIPE_DISABLE_GPU=0 \
    mediapipe/examples/desktop/hand_tracking:hand_tracking_gpu
```

编译完成后，在 `bazel-bin/mediapipe/examples/desktop/hand_tracking/` 下会生成相应的可执行文件。

---

## 6. 运行示例

以**手部追踪**为例演示如何运行：

```bash
# CPU版本可执行程序
cd mediapipe
GLOG_logtostderr=1 \
bazel-bin/mediapipe/examples/desktop/hand_tracking/hand_tracking_cpu \
    --calculator_graph_config_file=mediapipe/graphs/hand_tracking/hand_tracking_desktop_live.pbtxt
```

- `GLOG_logtostderr=1`：将log输出到stderr，方便调试
- `--calculator_graph_config_file=`：指定要使用的图

若要使用视频文件作为输入，可以使用类似：

```bash
GLOG_logtostderr=1 \
bazel-bin/mediapipe/examples/desktop/hand_tracking/hand_tracking_cpu \
    --calculator_graph_config_file=mediapipe/graphs/hand_tracking/hand_tracking_desktop_live.pbtxt \
    --input_video_path=./your_video.mp4 \
    --output_video_path=./output_video.mp4
```

若要利用GPU加速（支持OpenGL/CUDA/EGL等），可以用 GPU 可执行文件并指定相应Graph：

```bash
GLOG_logtostderr=1 \
bazel-bin/mediapipe/examples/desktop/hand_tracking/hand_tracking_gpu \
    --calculator_graph_config_file=mediapipe/graphs/hand_tracking/hand_tracking_desktop_live_gpu.pbtxt
```

成功后，会打开一个窗口或者处理完成后输出带手部关键点标注的视频。

---

## 7. Python方式（可选）

MediaPipe也有[Python API](https://google.github.io/mediapipe/getting_started/python.html)，通常在x86平台可以用 `pip install mediapipe` 直接使用预编译包。然而在ARM64平台（Jetson）上可能没法直接安装官方wheel，会遇到兼容性问题。如果想要在Jetson上使用Python接口，需要：

1. 手动在Jetson Orin上编译出Python wheel；
2. 或者尝试社区/第三方编译好的“非官方”whl包（可能存在版本兼容风险）。

一般流程（简化版本）：

```bash
cd mediapipe
python3 setup.py gen_protos  # 生成protobuf
python3 setup.py bdist_wheel \
    --experimental_deps=gpu \
    --enable_android_arm=False \
    --enable_ios=False
```

完成后，在 `dist/` 下可能会生成 `mediapipe-<version>-cp37-cp37m-linux_aarch64.whl` 等文件，再执行：

```bash
pip3 install dist/mediapipe-<version>-cp37-cp37m-linux_aarch64.whl
```

然后你可以在Python脚本中：

```python
import cv2
import mediapipe as mp

mp_hands = mp.solutions.hands
hands = mp_hands.Hands()

cap = cv2.VideoCapture(0)
while True:
    success, image = cap.read()
    if not success:
        break

    # BGR -> RGB
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    results = hands.process(image_rgb)

    # 在这里可以获取手势关键点信息
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            print(hand_landmarks)

    cv2.imshow('MediaPipe Hands', image)
    if cv2.waitKey(5) & 0xFF == 27:
        break

cap.release()
```

> **注意**：Python端的GPU加速在Jetson上有时并不完全支持，需要关注MediaPipe官方对`GPU/GL/EGL`管线的兼容情况，以及NVIDIA Jetson的GL环境。如果编译时未启用对应的后端，可能只能使用CPU推理。

---

## 8. 性能与优化

- **CUDA / TensorRT 加速**  
  部分MediaPipe子图或模型支持TensorRT加速，可以大幅减少推理时延。需要在 `BUILD` 或 `WORKSPACE` 中启用 `--config=tensorrt` 或按照 [MediaPipe + TensorRT](https://google.github.io/mediapipe/getting_started/tensor_rt_support.html) 文档进行配置。

- **多线程**  
  Jetson Orin具备多个CPU核心，可通过在Calculator Graph配置或OpenCV/GStreamer管线进行多线程处理。

- **模型剪枝与EdgeTPU**  
  如果使用其他形式的加速器或想压缩模型，可以参考 [MediaPipe Model Maker](https://google.github.io/mediapipe/solutions/model_maker/) 的相关资料（部分功能需要官方支持）。

---

## 9. 常见问题与调试

1. **无法找到 `libxyz.so`**  
   多半是路径或库未安装正确，或者需要在 `LD_LIBRARY_PATH` 中指定库路径。检查 `sudo ldconfig -p | grep libraryname`。

2. **GStreamer相关错误**  
   MediaPipe在Linux下默认使用GStreamer读写媒体文件和相机流。确保安装了 `libgstreamer1.0-dev`、`libgstreamer-plugins-base1.0-dev` 以及可能需要的插件（如 `gstreamer1.0-plugins-good`、`gstreamer1.0-plugins-bad`、`gstreamer1.0-plugins-ugly`）。  
   
   ```bash
   sudo apt-get install -y gstreamer1.0-plugins-{base,good,bad,ugly}
   ```

3. **性能不佳**  
   
   - 确认是否启用了GPU加速 (`--define MEDIAPIPE_DISABLE_GPU=0`，`--config=cuda`)；  
   - 使用 `-c opt` 编译；  
   - 需要更进一步的TensorRT集成。  
   - 确认电源模式是否在最大性能（可用 `sudo nvpmodel -q` 查询；如需更改可使用 `sudo nvpmodel -m <MODE>` 或 `jetson_clocks` 命令）。

4. **Python wheel编译失败**  
   
   - 确认Bazel版本和Python环境匹配；  
   - 注意ARM64架构需要额外配置；  
   - 有时需要在 `setup.py` 或 `WORKSPACE` 中手动注释掉某些Android/iOS专用依赖。

---

## 10. 总结

在NVIDIA Jetson Orin上运行MediaPipe的核心流程包括：

1. **安装编译环境**（Bazel、Protobuf、OpenCV、GStreamer等）  
2. **Clone源码 & 调整配置**（明确GPU/EGL等后端支持）  
3. **使用Bazel进行编译**（根据需要编译C++或Python版本）  
4. **运行示例并查看效果**（如手势检测、人体姿态跟踪等）  

随着MediaPipe和Jetson平台本身不断迭代，建议定期关注[MediaPipe官方文档](https://google.github.io/mediapipe/)及[NVIDIA Jetson论坛](https://forums.developer.nvidia.com/c/embedded/jetson-orin/)获取最新的兼容性与优化信息。

祝您在Jetson Orin平台上使用MediaPipe取得良好的性能与体验！若遇到问题，也可在GitHub Issues或相关社区咨询并共享调试过程。
