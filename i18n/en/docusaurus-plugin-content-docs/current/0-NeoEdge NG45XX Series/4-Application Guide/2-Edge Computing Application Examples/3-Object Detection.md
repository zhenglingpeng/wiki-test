# Object Detection

---

## 1.  Overview

This document walks through how to deploy and run a YOLOv8 object detection model accelerated by TensorRT on the **Jetson Orin** platform.

Use case: Real-time object detection from a USB/CSI camera with minimal latency and high performance at the edge.

【图片】*Fig: Real-time object detection output (placeholder)*

---

## 2.  Prerequisites

### Hardware Requirements

- Jetson AGX Orin / Orin NX
- CSI camera or USB webcam
- Power supply (recommended: 65W+ for AGX)

### Software Environment

- **JetPack 5.1+** (CUDA 11.4, cuDNN 8.6, TensorRT 8.5)
- Ubuntu 20.04 LTS (preinstalled with JetPack)
- Python 3.8+
- PyTorch 1.13 (for model export)
- ONNX >= 1.12

```bash
# Suggested environment setup
sudo apt update
sudo apt install python3-pip
pip3 install numpy opencv-python onnx onnxruntime
```

### Model Preparation

- Base model: [YOLOv8n.pt](https://github.com/ultralytics/ultralytics) (for performance on Jetson)
- Convert to ONNX, then TensorRT `.engine` format (see next section)

---

## 3.  Development & Deployment Workflow

### Step 1: Convert YOLOv8 Model (PyTorch → ONNX → TensorRT)

```bash
# Export to ONNX
yolo export model=yolov8n.pt format=onnx opset=12
```

```bash
# Convert ONNX to TensorRT engine
trtexec --onnx=yolov8n.onnx --saveEngine=yolov8n.engine --fp16
```

> ⚠️ Make sure to install `tensorrt` and use Jetson-compatible trtexec (comes with JetPack).

---

### Step 2: Input Stream & Preprocessing

```python
cap = cv2.VideoCapture(0)
while True:
    ret, frame = cap.read()
    input_tensor = preprocess(frame)  # resize, normalize, transpose
```

### Step 3: Load TensorRT Engine and Run Inference

```python
import tensorrt as trt
# Load engine and allocate buffers (code not shown for brevity)
context.execute_async_v2(bindings=bindings, stream_handle=stream)
```

### Step 4: Post-processing & Visualization

```python
# Decode bounding boxes, NMS, class labels
draw_boxes(frame, detections)
cv2.imshow("YOLOv8 Inference", frame)
```

---

## 4.  Performance and Optimization

| Metric               | Result (YOLOv8n)     |
| -------------------- | -------------------- |
| Input Size           | 640x640              |
| FPS (USB cam)        | ~42 FPS              |
| Latency (end-to-end) | ~22 ms               |
| Precision Mode       | FP16                 |
| GPU Usage            | ~38% (Orin AGX 32GB) |

【图片】*Fig: Placeholder for performance comparison graph*

Tips:

- Use **INT8 quantization** for further improvements (requires calibration set).
- Reduce image size to 416x416 if latency is critical.

---

## 5. Troubleshooting

| Problem                         | Solution                                           |
| ------------------------------- | -------------------------------------------------- |
| `trtexec` fails with dimensions | Check dynamic shape parameters or use fixed size   |
| Low FPS                         | Disable GUI, use headless mode or DeepStream       |
| Output boxes are off            | Ensure preprocessing matches training pipeline     |
| Out of memory errors            | Use batch=1, FP16, or smaller model (n/s versions) |

---

## 6. Extensions

- Replace YOLOv8n with YOLOv8m/l for better accuracy (at cost of FPS)
- Multi-camera support with GStreamer pipelines
- Integration with MQTT/HTTP/RTSP for smart camera deployment
- Use **DeepStream SDK** for pipeline acceleration

---

## 7. Appendix

### Code Repository

[GitHub: jetson-yolov8-tensorrt-example](https://github.com/camthink-ai/YOLOv8-TensorRT)

### File Structure

```bash
├── models/
│   └── yolov8n.engine
├── scripts/
│   ├── infer.py
│   └── preprocess.py
├── utils/
│   └── postprocess.py
```

### Model Conversion Script

- Provided in `scripts/export_and_build.py`

### Resources

- [Ultralytics YOLOv8 Docs](https://docs.ultralytics.com/)
- [TensorRT Developer Guide](https://docs.nvidia.com/deeplearning/tensorrt/)
- [Jetson Forum](https://forums.developer.nvidia.com/c/jetson)
