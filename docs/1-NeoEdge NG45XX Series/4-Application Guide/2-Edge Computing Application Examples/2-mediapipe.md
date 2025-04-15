# Pose Estimation

---

## 1. Overview

This article describes how to run real-time **pose estimation** using **MediaPipe** on the **Jetson Orin** platform (Nano / NX / AGX), leveraging GPU acceleration when possible.

Pose estimation is useful for gesture recognition, fitness tracking, human-computer interaction, etc.

【image】*Fig: Real-time pose estimation output example*

---

## 2. System Requirements

### Hardware

- Jetson Orin Series (Nano, NX, AGX)
- USB / CSI Camera (optional but recommended)

### Software

- **OS**: Ubuntu 20.04/22.04 LTS (JetPack-based)
- **JetPack**: NVIDIA official image (includes CUDA, cuDNN, TensorRT)
- **MediaPipe**: GitHub source (`master` or tagged version like `v0.9.x`)
- **Dependencies**:
  - Bazel 4.2+ (build system)
  - Python 3.7+
  - OpenCV, FFmpeg, GStreamer, Protobuf

Ensure JetPack and GPU drivers are properly installed and CUDA is available.

---

## 3.  Environment Setup

### Step 1: Update and Install Dependencies

```bash
sudo apt update && sudo apt upgrade
sudo apt install -y \
    build-essential cmake git curl unzip \
    python3-dev python3-pip python3-opencv \
    libopencv-dev libprotobuf-dev protobuf-compiler \
    libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev \
    libavcodec-dev libavformat-dev libswscale-dev
```

### Step 2: Python Packages

```bash
python3 -m pip install --upgrade pip
pip3 install numpy protobuf
```

---

## 4. Installing Bazel

MediaPipe requires [Bazel](https://bazel.build/) to build from source.

```bash
curl -OL https://github.com/bazelbuild/bazel/releases/download/5.3.0/bazel-5.3.0-linux-arm64
chmod +x bazel-5.3.0-linux-arm64
sudo mv bazel-5.3.0-linux-arm64 /usr/local/bin/bazel
bazel version
```

> 📌 **Note**: MediaPipe version must match Bazel version; refer to official [compatibility guide](https://google.github.io/mediapipe/getting_started/install.html).

---

## 5. Clone MediaPipe Source

```bash
git clone https://github.com/google/mediapipe.git
cd mediapipe
# Optional: Checkout stable version
# git checkout v0.9.1
```

Explore available demos in:

- `mediapipe/examples/`
- `mediapipe/graphs/`

---

## 6. Build and Configure

### Step 1: Basic C++ Build (Example)

Compile a simple hello world or hand tracking demo:

```bash
bazel build -c opt \
    --define MEDIAPIPE_DISABLE_GPU=0 \
    --copt -DMESA_EGL_NO_X11_HEADERS \
    --action_env PYTHON_BIN_PATH=$(which python3) \
    mediapipe/examples/desktop/hello_world:hello_world
```

### Step 2: Pose Estimation Demo Build

```bash
bazel build -c opt \
    --config=cuda \
    --define MEDIAPIPE_DISABLE_GPU=0 \
    mediapipe/examples/desktop/pose_tracking:pose_tracking_gpu
```

> You may need to download pose models before running.

---

## 7. Running the Demo

### Live Webcam Input (GPU):

```bash
GLOG_logtostderr=1 \
bazel-bin/mediapipe/examples/desktop/pose_tracking/pose_tracking_gpu \
  --calculator_graph_config_file=mediapipe/graphs/pose_tracking/pose_tracking_gpu.pbtxt
```

### Video File Input:

```bash
GLOG_logtostderr=1 \
bazel-bin/mediapipe/examples/desktop/pose_tracking/pose_tracking_gpu \
  --calculator_graph_config_file=mediapipe/graphs/pose_tracking/pose_tracking_gpu.pbtxt \
  --input_video_path=input.mp4 \
  --output_video_path=output_pose.mp4
```

---

## 8. Optional: Python API

MediaPipe also supports Python APIs, but official wheels may not work directly on ARM64.

### Option 1: Build from Source

```bash
cd mediapipe
python3 setup.py gen_protos
python3 setup.py bdist_wheel --experimental_deps=gpu
```

Install generated wheel:

```bash
pip3 install dist/mediapipe-*.whl
```

### Example Python Script

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

## 9. Performance & Optimization

| Mode         | FPS (Orin AGX) | GPU Usage | Acceleration |
| ------------ | -------------- | --------- | ------------ |
| CPU only     | ~5–10 FPS      | Low       | ❌            |
| CUDA enabled | ~25–40 FPS     | Medium    | ✅            |
| TensorRT     | (WIP/manual)   | Low/High  | ⚙️ Potential |

### Tips

- Use `--config=cuda` for GPU support
- Try `--define MEDIAPIPE_DISABLE_GPU=0`
- Check `jetson_clocks` and `nvpmodel` for performance mode

【image】*Fig: Placeholder for performance metrics chart*

---

## 10. 🛠️ Troubleshooting

| Issue                        | Suggestion                                           |
| ---------------------------- | ---------------------------------------------------- |
| Missing `.so` files          | Add to `LD_LIBRARY_PATH` or reinstall via `apt`      |
| GStreamer errors             | Install all plugins: `good`, `bad`, `ugly`           |
| Build failed (Bazel version) | Match Bazel version to MediaPipe documentation       |
| Python wheel fails to build  | Check `setup.py` + compatible Bazel, Python versions |

```bash
# Install missing plugins if needed
sudo apt install gstreamer1.0-plugins-{base,good,bad,ugly}
```

---

## 11. Appendix

### Source Tree (Example)

```bash
mediapipe/
├── graphs/
│   └── pose_tracking/
├── examples/
│   └── desktop/
│       └── pose_tracking/
```

### Resources

- [MediaPipe Docs](https://google.github.io/mediapipe/)
- [Jetson Orin Forum](https://forums.developer.nvidia.com/c/embedded/jetson-orin/)
- [MediaPipe GitHub](https://github.com/google/mediapipe)
