# Quick Start

## 概述

本章主要帮助您快速使用本NE100系列产品。以NE101标准固件为例，主要实现的功能为相机定时抓拍+上传。

## 硬件相关

- 硬件概述，参考：[Components Overview](./Hardware%20Guide/Components%20Overview)

- 组装和连接，参考：[Hardware Connection](./Hardware%20Guide/Hardware%20Connection) 

## 软件相关

- 软件开发环境搭建，参考：[Development Environment Setup](./Software%20Guide/Development%20Environment%20Setup) 

- 软件烧录，参考：[System Flashing](./Software%20Guide/System%20Flashing%20and%20Initialization)

## 设备使用说明

### 设备模式

1. 初始化模式
   
   系统启动后默认会进入该模式，进行检查更新与时间同步，之后进入休眠。

2. 配置模式
   
   通过功能按键进入，同时开启wifi ap+sta，设备wifi名称为NE101_XXXXXX。连接后访问http://192.168.1.1 进行配置。功能有图像调节、抓图设置、数据上报、设备维护以及网络模组的设置（WIFI、HALOW、蜂窝）。网络模组根据相应的组件有不同的配置。
   
   在配置模式下未连接wifi则1分钟会进入休眠，连接wifi5分钟未操作也会进入休眠。

3. 工作模式
   
   配置好抓图设置和数据上报后，会定时抓图或者排程抓图+上报。在网络不佳的情况下图片会保存到本地（总空间7M），等到网络通畅时再一次性上报。

### 设备测试

1. 安装好设备后，接上电池，等待设备初始化，设备启动时会亮灯1S。初始化阶段大概1分钟。

2. 按下按键，设备进入配置模式，连接设备wifi ap，访问web进行配置。
   
   ![NE101_wifi_connect.png](/img/NE101_wifi_connect.png)
   
   ![NE101_web.png](/img/NE101_web.png)

3. 查看camera的图像是否正常。
   
   转动设备摄像头，看预览图是否有正常刷新。
   
   ![NE101_web_cam.png](/img/NE101_web_cam.png)

4. 图像设置与抓图设置，例如设置为间隔5分钟抓图。
   
   图像调整功能，包括
   
   - 闪光灯模式设置：包括自由模式（根据光敏阈值）、用户模式（自定义时间段）、常开、常关。
   
   - 闪光灯亮度调节：选择闪光灯常开，根据实际情况选择合适的亮度；结束后复原闪光灯模式。
   
   - camera图像调整：根据实际情况调整合适的明亮度、对比度、饱和度。
   
   - 图像翻转功能：左右翻转、上下翻转。
   
   根据以下选项设置
   
   ![NE101_web_ImageAdjustment.png](/img/NE101_web_ImageAdjustment.png)
   
   工作模式下的抓图设置
   
   - 排程抓图。定时抓图、间隔抓图。
   - Alarm-In抓图。
   - 按键抓图。
   
   ![NE101_web_cap_setting.png](/img/NE101_web_cap_setting.png)

5. 设置数据上报，MQTT的搭建或者订阅可以参考文档：
   
   在配置模式下启动按键抓图，同时按下按键，查看图片是否能正常推送。
   
   ![NE101_web_DataReport.png](/img/NE101_web_DataReport.png)

6. WLAN连接，选择可以使用的wifi进行连接。
   
   ![NE101_web_WLANConnection.png](/img/NE101_web_WLANConnection.png)
   
   开发者可以在控制台中使用ping命令确认网络是否正常。
   
   ![NE101_ping.png](/img/NE101_ping.png)

7. 点击休眠模式，让设备进入休眠。等待设备5分钟后进入抓拍并上报。设备启动时会亮灯1秒。同时查看图片是否正常推送。
   
   ![NE101_cap_success.png](/img/NE101_cap_success.png)

### 其他功能

- 重启按键：实现软件重启。参考 [Components Overview](./Hardware%20Guide/Components%20Overview)

- 设备信息查看。设备名称、MAC地址、SN、软件版本、硬件版本、电池电量。如图所示。

- ota升级，详细可参考：[System Flashing](./Software%20Guide/System%20Flashing%20and%20Initialization) 的OTA介绍。

![NE101_ota.png](/img/NE101_ota.png)
