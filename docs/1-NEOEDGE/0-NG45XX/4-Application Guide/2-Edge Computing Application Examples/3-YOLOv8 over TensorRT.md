# YOLOv8 并使用 TensorRT 加速

本教程将指导您如何在 NVIDIA Jetson Orin 平台上部署 YOLOv8 模型，并利用 TensorRT 进行推理加速。通过此过程，您将能够在 Jetson Orin 上高效地运行 YOLOv8，实现实时的目标检测。

## 先决条件

- **硬件**：NVIDIA Jetson Orin 开发板
- **操作系统**：已安装 JetPack 5.1.1 或更高版本的 Ubuntu 系统
- **开发环境**：已配置 CUDA、cuDNN 等必要的依赖项

## 步骤

### 1. 安装必要的依赖项

首先，确保系统的包管理器和已安装的软件包是最新的：

```bash
sudo apt-get update
sudo apt-get upgrade
```

然后，安装一些必要的工具和库：

```bash
sudo apt-get install -y python3-pip libopencv-dev
```

### 2. 安装 Miniforge（可选）

为了更好地管理 Python 环境，建议安装 Miniforge：

1. 从 [Miniforge GitHub 仓库](https://github.com/conda-forge/miniforge) 下载适用于 `aarch64` 架构的安装脚本。

2. 赋予安装脚本可执行权限并运行：
   
   ```bash
   chmod +x Miniforge3-Linux-aarch64.sh
   ./Miniforge3-Linux-aarch64.sh
   ```

3. 按照提示完成安装，并在安装完成后重新启动终端以使更改生效。

### 3. 创建并激活虚拟环境

使用 Miniforge 创建一个新的虚拟环境：

```bash
conda create -n yolov8_env python=3.8
conda activate yolov8_env
```

### 4. 安装 PyTorch 和 torchvision

由于 Jetson 平台的特殊性，需要安装与之兼容的 PyTorch 和 torchvision 版本。可以参考 [Jetson Zoo](https://elinux.org/Jetson_Zoo) 获取适用于 Jetson 的 PyTorch 安装包。以下是安装示例：

```bash
# 安装 PyTorch
pip install torch-1.10.0-cp38-cp38-linux_aarch64.whl

# 安装 torchvision
pip install torchvision-0.11.1-cp38-cp38-linux_aarch64.whl
```

请根据您的 JetPack 版本选择相应的 PyTorch 和 torchvision 版本。

### 5. 安装 Ultralytics YOLOv8

安装 Ultralytics 提供的 YOLOv8 库：

```bash
pip install ultralytics
```

### 6. 导出 YOLOv8 模型为 ONNX 格式

使用以下 Python 脚本将 YOLOv8 模型导出为 ONNX 格式：

```python
from ultralytics import YOLO

# 加载预训练的 YOLOv8 模型
model = YOLO('yolov8n.pt')

# 导出模型为 ONNX 格式
model.export(format='onnx', opset=12)
```

此操作将生成一个名为 `yolov8n.onnx` 的文件。

### 7. 使用 TensorRT 转换 ONNX 模型

使用 TensorRT 将 ONNX 模型转换为 TensorRT 引擎：

```bash
/usr/src/tensorrt/bin/trtexec --onnx=yolov8n.onnx --saveEngine=yolov8n.engine --fp16
```

此命令将生成一个名为 `yolov8n.engine` 的 TensorRT 引擎文件，并启用 FP16 精度以提高推理性能。

### 8. 使用 TensorRT 引擎进行推理

编写一个 Python 脚本，使用生成的 TensorRT 引擎进行推理。可以使用 `tensorrt` 和 `pycuda` 库加载并运行引擎。由于篇幅限制，此处不再详细展开，您可以参考相关的 TensorRT 示例代码进行实现。

## 参考资料

- [在 NVIDIA Jetson 上使用 TensorRT 部署 YOLOv8](https://wiki.seeedstudio.com/cn/YOLOv8-TRT-Jetson/)
- [Ultralytics YOLO 文档](https://docs.ultralytics.com/zh/integrations/tensorrt/)

---

通过以上步骤，您应能够在 NVIDIA Jetson Orin 上成功部署 YOLOv8，并利用 TensorRT 实现高效的推理加速。如在操作过程中遇到问题，建议参考上述参考资料或相关社区论坛获取更多支持。
