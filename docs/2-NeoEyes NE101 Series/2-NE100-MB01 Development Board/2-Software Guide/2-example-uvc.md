# usb video streaming

## 概述
本示例展示如何通过UVC协议实现视频流实时传输，基于ESP32-S3开发平台。

### 技术背景
**UVC(USB Video Class)**是USB-IF制定的标准协议，主要特点包括：
- 支持高分辨率图像采集
- 即插即用兼容性
- 标准化控制接口
- 简化硬件设计

## 准备工作

### 硬件需求
- NE100-CM01开发板
- 兼容UVC协议的摄像头模组

### 软件资源
1. **预编译固件**：
   [usb_camera_mic_spk.zip](https://github.com/camthink-ai/iot_samples/blob/main/bin/usb_camera_mic_spk.zip)

2. **源码开发**：
   ```bash
   git clone https://github.com/camthink-ai/iot_samples
   ```

## 功能验证

### 使用预编译固件
1. **设备连接**：
   - 开发板连接UVC摄像头模组
   - 参考[硬件连接说明](../Hardware%20Guide/Hardware%20Connection)

2. **固件烧录**：
   方法参考：[System Flashing](./../Software%20Guide/System%20Flashing%20and%20Initialization)

3. **功能测试**：
   - 连接WiFi热点`ESP32S3-UVC`
   - 访问http://192.168.4.1
   - 验证视频流显示

   ![UVC视频流](/img/NE101_example_uvc1.png)

### 源码开发验证
1. **工程配置**：
   - 使用VS Code打开`examples/usb/host/usb_camera_mic_spk`

   ![工程目录](/img/NE101_uvc_dir.png)

2. **芯片选择**：
   设置目标为ESP32-S3

   ![芯片选择](/img/NE101_idf_IC.png)

3. **编译烧录**：

   ![编译过程](/img/NE101_idf_build.png)

   ![烧录过程](/img/NE101_idf_flash.png)

## 注意事项
1. **协议限制**：
   - ESP32-S3仅支持USB 1.1
   - 确保摄像头兼容USB 1.1标准

2. **性能优化**：
   - 合理设置帧缓冲区大小
   - 建议分辨率640x480@30fps

3. **调试建议**：
   - 使用`idf.py monitor`查看日志
   - 检查USB连接质量

> 提示：开发过程中建议保持串口监控，及时捕获异常信息。
