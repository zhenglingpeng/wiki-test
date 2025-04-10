# example-UVC

### 简介

UVC模组相关连接与相关信息参考：[Hardware Connection](.././Hardware%20Guide/Hardware%20Connection)

代码的获取和编译参考：[Development Environment Setup](./../Software%20Guide/Development%20Environment%20Setup)

应用场景：可以使用定制的专用摄像头，usb线路简单，便于扩展。

示例固件如下，升级方法参考：[Development Environment Setup](./../Software%20Guide/Development%20Environment%20Setup)

### 测试

1. 连接好设备，等待设备启动并初始化。

2. 按下按键进入配置模式，进入web界面后查看图像是否正常。
   
   ![NE101_example_2.png](./../../../assets/NE101_example_2.png)

3. 设置抓拍，并确认抓图是否正常。
   
   详细步骤可参考：[Quick Start](./../Quick%20Start)

### 软件实现（开发者）

1. 代码中打卡UVC功能。将main/camera.c中CAMERA_USE_UVC设置为1。

2. 代码中默认使用UVC的最高分辨率。分辨率参数修改在main/uvc.c下，调整的同时需要适当修改buffer大小。
   
   ![NE101_example_1.png](./../../../assets/NE101_example_1.png)

3. 代码编译并烧录。

### 注意事项

- ESP32S3平台支持的USB协议是1.1，如果是自定义的uvc需要支持usb1.1。
