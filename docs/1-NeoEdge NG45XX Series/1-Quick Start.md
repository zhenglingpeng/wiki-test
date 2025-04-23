# Quick Start

## 概述

本章主要帮助您快速使用NG45XX系列产品。

## 硬件准备

- **硬件概述**，请参阅[硬件组件说明](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Hardware%20Guide/Components%20Overview)

- **设备组装**，请参阅[硬件连接指南](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Hardware%20Guide/Hardware%20Connection)

## 软件相关

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

## NVIDIA 官方资源

**NVIDIA Jetson 软件：**

 [Jetson Linux Developer Guide - Quick Start](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html)

[Jetson Jetpack SDK](https://developer.nvidia.com/embedded/jetpack)

[Jetson FAQ](https://developer.nvidia.com/embedded/faq)

[Jetson Download Center](https://developer.nvidia.com/embedded/downloads)

[Download NVIDIA SDK Manager](https://developer.nvidia.com/sdk-manager)

**软件论坛:**

 [Jetson Developer Forum](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems)
