# Quick Start

## 概述

本章主要帮助您快速使用NG45XX系列产品。

## 硬件准备

- **硬件概述**，请参阅[硬件组件说明](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Hardware%20Guide/Components%20Overview)

- **设备组装**，请参阅[硬件连接指南](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Hardware%20Guide/Hardware%20Connection)

## 软件部署

如果选择的是无预烧录的设备，请参考下述链接，完成固件烧录。

- **环境搭建**，软件开发环境，请参阅[开发环境搭建](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Software%20Guide/Development%20Environment%20Setup)

- **固件烧录**，详细固件烧录步骤，请参阅[系统固件烧录](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Software%20Guide/System%20Flashing%20and%20Initialization)

## 首次系统启动引导配置

参考上述的内容，完成硬件连接后，给NG45XX上电后，按照下面提示完成系统的第一次初始化配置。

### 1. 系统初始化配置

根据屏幕提示，完成系统配置，步骤如下：

1. 勾选 `接受许可协议`，点击下一步

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Licenses.png)

2. 设置语言，点击下一步

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Language.png)

3. 设置键盘布局，点击下一步

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Keyboard.png)

4. 设置时区（例如：`Asia/Shanghai`），点击下一步

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Local.png)

5. 配置“您的姓名”和“密码”，点击下一步

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration.jpg)

6. 最后，等待系统安装，自动重启

### 2. 系统运行状态&版本确认

通过Jtop工具监控，参考以下步骤：

```shell
# 安装 Jtop 工具
sudo apt update
sudo apt install python3-pip
sudo pip3 install -U jetson-stats

# 重启服务
sudo systemctl restart jtop.service

#运行 Jtop
sudo jtop
```

运行后如下图所示，通过键盘查看当前 Jetson 设备的各种资源使用情况，包括 CPU、内存、GPU、磁盘、风扇等，以及确认目前系统所安装TensorRT、CUDA等版本。

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_JTOP.png)

## 模型部署

下面将会介绍如何在AIBOX上部署运行NanoOWL实时视觉推理模型，下面以NG4511为例，使用imx219摄像头。

### 硬件需求

| 组件   | 要求                           |
| ---- | ---------------------------- |
| 设备   | Jetson Orin（Nano / NX / AGX） |
| 内存   | ≥ 8GB（更大模型需更高内存）             |
| 存储空间 | ≥ 10GB（取决于模型大小）              |
| GPU  | 支持 CUDA 的 NVIDIA GPU         |

### 软件环境

- ​**​JetPack版本​**​：
  - JetPack 5 (L4T r35.x)
  - JetPack 6 (L4T r36.x)

### 环境准备

1. 安装依赖

```shell
sudo apt update
sudo apt-get install -y docker.io
sudo apt-get install -y nvidia-container-toolkit
sudo apt-get install nvidia-jetpack
```

2. 安装jetson-containers

```shell
# 获取源码
git clone https://github.com/dusty-nv/jetson-containers

# 安装依赖
bash jetson-containers/install.sh
```

3. 开始部署，自动拉去/构建nanoowl容器。(注：获取完容器，会启动启动容器)

```shell
cd jetson-containers/
jetson-containers run --workdir /opt/nanoowl $(autotag nanoowl)
```

此命令会自动检测您的硬件配置，拉取或构建适合的容器镜像。

### 运行示例

1. 检查摄像头设备

```shell
ls /dev/video*
```

2. 运行nanoowl容器，完成下述配置
   
   - 运行启动docker，并进入测试案例路径下
   
   ```shell
   cd jetson-containers/
   jetson-containers run --workdir /opt/nanoowl $(autotag nanoowl)
   
   # 进入测试案例路径
   cd /opt/nanoowl/examples/tree_demo
   ```
   
   - 安装依赖
   
   ```shell
   apt update
   apt-get install vim
   pip install aiohttp
   ```
   
   - 修改`/opt/nanoowl/examples/tree_demo`文件
   
   ```shell
   # 屏蔽下面这句代码
   camera = cv2.VideoCapture(CAMERA_DEVICE)
   
   # 修改替换为下述内容
   gst_pipeline = (
       "nvarguscamerasrc ! "
       "video/x-raw(memory:NVMM), width=(int)1280, height=(int)720, format=(string)NV12, framerate=(fraction)30/1 ! "
       "nvvidconv ! "
       "video/x-raw, format=(string)BGRx ! "
       "videoconvert ! "
       "video/x-raw, format=(string)BGR ! "
       "appsink"
   )
   camera = cv2.VideoCapture(gst_pipeline, cv2.CAP_GSTREAMER)
   ```

3. 启动终端，运行测试案例
   
   ```shell
   python3 tree_demo.py --camera 0 --resolution 1920x1080 ../../data/owl_image_encoder_patch32.engine
   ```

4. 结果
   
   - 打开浏览器，输入当前NG4511设备的ip地址，如`http://<ip address>:7860`
   - 输入任何你想识别的内容，如
     - [a face [a nose, an eye, a mouth]]
     - [a table [a keyboard, a pen, a mouse]]

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_Quickstart_NanoOWL.png)

## NVIDIA 官方参考资源

**NVIDIA Jetson 软件：**

 [Jetson Linux Developer Guide - Quick Start](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html)

[Jetson Jetpack SDK](https://developer.nvidia.com/embedded/jetpack)

[Jetson FAQ](https://developer.nvidia.com/embedded/faq)

[Jetson Download Center](https://developer.nvidia.com/embedded/downloads)

[Download NVIDIA SDK Manager](https://developer.nvidia.com/sdk-manager)

**软件论坛:**

 [Jetson Developer Forum](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems)
