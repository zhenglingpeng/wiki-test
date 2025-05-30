# Quick Start

## 概述

本章主要帮助您快速使用NG4500系列产品。

## 硬件准备

- **硬件概述**，请参阅[硬件组件说明](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Hardware%20Guide/Components%20Overview)

- **设备组装（补充接线的整机图,或安装步骤图）** 

  拿到整机后，若非预装版本，须拆开底板后盖进行配件相关装配后才可使用。

  1. 拿到样机后，拆包装后确认样机外观无缺损

  2. 拆开底部盖板

  3. 将SSD装配 J11 的M.2 Key M PCIex4 接口（建议），或 J13 的M.2 Key M PCIex1接口

  4. 将WiFi&BT模组固定到J19的 M.2 Key E 2230，并连接到外接天线（Optional）

  5. 将4G/5G模组固定到J15的M.2 Key B 2242, or M.2 Key B 2252 ,并将Sim卡插到J18的Sim卡槽 ，并连接到外置天线（Optional）

  6. 将 RTC Battery CR1220固定到 BT1的 Holder上（Optional）

  7. 确认安装完毕后，重新锁好底部盖板

  8. HDMI接口连接到外部显示器

  9. 将有线鼠标和键标连接到USB Type-A接口中任意两个

  10. 将网线连接到 LAN 口中任意一个

  11. 将USB Type-C 接口连接到调试电脑

  12. 确认以上操作无误后，将电源适配器连接到 DC-JACK，即可开始进行套件开发调试    

      > [!WARNING]
      >
      > 1、请使用原装标配的适配器
      >
      > 2、Orin Nano 4/8G 模组内部只支持5V输入， 请保证“Power Mode Switch” 在OFF状态 

      

## 软件部署

如果设备尚未烧录固件，请参考以下链接以完成固件烧录步骤；如果您已经完成固件烧录，可直接进行部署。

- **环境搭建**，软件开发环境，请参阅[开发环境搭建](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Software%20Guide/Development%20Environment%20Setup)

- **固件烧录**，详细固件烧录步骤，请参阅[系统固件烧录](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Software%20Guide/System%20Flashing%20and%20Initialization)

## 首次系统启动引导配置

确认设备已完成固件烧录后，，为NG4500接通设备电源，并根据屏幕提示，按照以下步骤完成首次系统初始化配置。

### 1. 系统初始化配置

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

按照以下步骤安装 Jtop 工具，以监控当前设备的资源使用情况：
运行后，界面将显示如下图所示的信息。可以通过键盘查看当前 Jetson 设备的资源使用情况，包括 CPU、内存、GPU、磁盘、风扇等。同时还可以确认当前系统所安装的 TensorRT、CUDA 版本信息等。

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

下面将会介绍如何在AIBOX上部署运行NanoOWL实时视觉推理模型，以NG4511为例，使用imx219摄像头。

### 硬件需求

| 组件   | 要求                       |
| ---- | ------------------------ |
| 设备   | Jetson Orin（Nano / NX /） |
| 内存   | ≥ 8GB（更大模型需更高内存）         |
| 存储空间 | ≥ 10GB（取决于模型大小）          |
| GPU  | 支持 CUDA 的 NVIDIA GPU     |

### 软件环境

- **支持​​JetPack版本**​​：
  - JetPack 5 (L4T r35.x)
  - JetPack 6 (L4T r36.x) （系统默认版本）

### 环境准备

1. 硬件连接，连接IMX219摄像头 （注：连接金属片朝上）
   
   ![](/img/NG45XX_SOFTWARE/NG45XX_IMX219.png)

2. 安装依赖

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

3. 开始部署，自动拉取/构建nanoowl容器。(注：获取完容器，会启动启动容器)

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
