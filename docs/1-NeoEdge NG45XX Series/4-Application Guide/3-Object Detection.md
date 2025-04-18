

# Object Detection

---

## 1. 概览

本文介绍如何在 **Jetson Orin** 平台上部署并运行基于 **YOLOv8** 的目标检测模型，并使用 **TensorRT** 进行加速。

应用场景：使用 USB 或 CSI 摄像头实现边缘设备上低延迟、高性能的实时目标检测。

【图片】*图示：实时目标检测输出（占位图）*

---

## 2. 前提条件

### 硬件要求

- Jetson AGX Orin / Orin NX  
- CSI 摄像头或 USB 摄像头  
- 电源（建议 AGX 使用 65W 以上电源）

### 软件环境

- **JetPack 5.1+**（包含 CUDA 11.4、cuDNN 8.6、TensorRT 8.5）  
- Ubuntu 20.04 LTS（JetPack 默认系统）  
- Python 3.8+  
- PyTorch 1.13（用于模型导出）  
- ONNX ≥ 1.12

```bash
# 推荐环境初始化命令
sudo apt update
sudo apt install python3-pip
pip3 install numpy opencv-python onnx onnxruntime
```

### 模型准备

- 基础模型：[YOLOv8n.pt](https://github.com/ultralytics/ultralytics)（适合 Jetson 性能）  
- 转换流程：PyTorch → ONNX → TensorRT `.engine`（见下一节）

---

## 3. 开发与部署流程

### 步骤 1：转换 YOLOv8 模型（PyTorch → ONNX → TensorRT）

```bash
# 导出为 ONNX 格式
yolo export model=yolov8n.pt format=onnx opset=12
```

```bash
# 使用 trtexec 转换为 TensorRT 引擎
trtexec --onnx=yolov8n.onnx --saveEngine=yolov8n.engine --fp16
```

> ⚠️ 请确保使用 Jetson 自带的 `tensorrt` 和 `trtexec` 工具（JetPack 中预装）

---

### 步骤 2：摄像头输入与预处理

```python
cap = cv2.VideoCapture(0)
while True:
    ret, frame = cap.read()
    input_tensor = preprocess(frame)  # 包括 resize、归一化、维度变换等
```

### 步骤 3：加载 TensorRT 引擎并运行推理

```python
import tensorrt as trt
# 加载引擎并分配缓冲区（示例代码略）
context.execute_async_v2(bindings=bindings, stream_handle=stream)
```

### 步骤 4：后处理与结果可视化

```python
# 解码边框、非极大值抑制、类别标签处理
draw_boxes(frame, detections)
cv2.imshow("YOLOv8 Inference", frame)
```

---

## 4. 性能与优化

| 指标            | YOLOv8n 结果          |
| ------------- | ------------------- |
| 输入尺寸          | 640x640             |
| 实时帧率（USB 摄像头） | ~42 FPS             |
| 总体延迟          | ~22 ms              |
| 精度模式          | FP16                |
| GPU 使用率       | ~38%（Orin AGX 32GB） |

【图片】*图示：性能对比图表（占位）*

优化建议：

- 使用 **INT8 量化** 可进一步加速（需校准数据集）  
- 若延迟敏感，可将输入图像缩小至 416x416  

---

## 5. 故障排查

| 问题                | 解决方案                               |
| ----------------- | ---------------------------------- |
| `trtexec` 报错尺寸不匹配 | 检查是否使用动态 shape，建议使用固定尺寸            |
| 帧率过低              | 禁用图形界面，使用 headless 模式或 DeepStream  |
| 检测框错位             | 确保预处理与训练时保持一致                      |
| 内存不足错误            | 使用 batch=1、FP16 或更小的模型（如 n / s 版本） |

---

## 6. 扩展应用

- 替换 YOLOv8n 为 YOLOv8m/l 提升检测精度（以性能为代价）  
- 多路摄像头支持（可用 GStreamer 实现）  
- 集成 MQTT / HTTP / RTSP，实现智能摄像头部署  
- 使用 **DeepStream SDK** 实现更强大的视频处理流水线

---

## 7. 附录

### 示例代码仓库

[GitHub：jetson-yolov8-tensorrt-example](https://github.com/camthink-ai/YOLOv8-TensorRT)

### 项目目录结构示例

```bash
├── models/
│   └── yolov8n.engine
├── scripts/
│   ├── infer.py
│   └── preprocess.py
├── utils/
│   └── postprocess.py
```

### 模型转换脚本

- 提供于 `scripts/export_and_build.py`

### 参考资源

- [Ultralytics YOLOv8 文档](https://docs.ultralytics.com/)  
- [TensorRT 开发者指南](https://docs.nvidia.com/deeplearning/tensorrt/)  
- [Jetson 开发者论坛](https://forums.developer.nvidia.com/c/jetson)
