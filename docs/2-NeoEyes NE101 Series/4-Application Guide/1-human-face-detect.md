# Human Face Detect

## 概述

本示例提供了人脸检测功能，您可以基于这个示例衍生出丰富的实际应用。

[ESP-DL](https://github.com/espressif/esp-dl) 为 ESP-WHO 提供了丰富的深度学习相关接口，配合各种外设可以实现许多有趣的应用。

## 准备工作

### 硬件配置要求

- 标准开发板（带摄像头传感器）

### 软件资源获取

1. **预编译固件**：
   
   - 获取最新示例固件
   - 烧录方法请参考：[开发环境配置指南](./../Software%20Guide/Development%20Environment%20Setup)

2. **源码开发**：
   
   - 支持本地编译（详见下方开发指南章节）

## 功能验证流程

1. **固件升级**
   
   - 使用烧录工具写入示例固件

2. **设备初始化**
   
   - 正确连接硬件设备
   - 上电启动
   - 连接串口，波特率设置为115200

3. **功能测试**
   
   - 将摄像头对准实际的人脸或照片
   - 左右晃动摄像头，查看串口中是否有识别到人脸的信息

![人脸检测示意图](/img/NE101_example_human_detect_1.png)

![NE101_example_human_detect.gif](/img/NE101_example_human_detect.gif)

## 开发实现指南

### 开发环境要求

- 最新版 Visual Studio Code
- ESP-IDF 插件（v5.4.0 版本以上）
- 示例代码库

### 开发步骤详解

1. **获取源码**
   
   ```bash
   git clone git@github.milesight.com:ne101.git
   ```

2. **编译烧录**
   
   - 使用 VS Code 打开工程目录
   - 设置目标芯片为 ESP32-S3
   - 执行完整编译流程
   - 烧录生成的固件到设备
   - 详细参考：[开发环境配置指南](./../Software%20Guide/Development%20Environment%20Setup)



## 参考文档

ESP-DL模型量化：[GitHub - espressif/esp-dl: Espressif deep-learning library for AIoT applications](https://github.com/espressif/esp-dl?tab=readme-ov-file)

ESP-官方示例：[GitHub - espressif/esp-who: Face detection and recognition framework](https://github.com/espressif/esp-who/tree/master)