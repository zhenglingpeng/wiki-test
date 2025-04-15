# UVC

## Technical Overview

**UVC (USB Video Class) Protocol** is a universal standard protocol for video devices formulated by the USB Implementers Forum. It supports plug-and-play communication between video devices and host devices via USB interfaces. This solution implements the image capture and transmission functions of a UVC camera based on the ESP32-S3 platform.

### Solution Advantages
- Supports higher resolution image capture
- Flexible replacement of different specifications of camera modules
- Uses standardized USB interfaces for convenient expansion
- Simplifies hardware wiring complexity

## Preparation

### Hardware Configuration Requirements
- Standard development board (ESP32-S3 core board)
- UVC protocol-compatible camera module
- Complete hardware connection guide reference: [Hardware Connection Instructions](.././Hardware%20Guide/Hardware%20Connection)

### Software Resources
1. **Precompiled Firmware**:
   - Obtain the latest UVC example firmware
   - Flashing method reference: [Development Environment Setup Guide](./../Software%20Guide/Development%20Environment%20Setup)

2. **Source Code Development**:
   - Supports local compilation (see the development guide section below for details)

## Function Verification Process

1. **Firmware Upgrade**
   - Use the flashing tool to write the UVC example firmware

2. **Device Initialization**
   - Connect the hardware devices correctly
   - Power on and wait for the system to complete initialization (approximately 1 minute)

3. **Function Test**
   - Short press the function key to enter configuration mode
   - Access the Web management interface (http://192.168.1.1)
   - Verify if the real-time video stream displays correctly
   
   ![Video Preview Interface](/img/NE101_example_2.png)

4. **Snapshot Test**
   - Set snapshot parameters and execute the test
   - Complete operation guide reference: [Quick Start Manual](./../Quick%20Start)

## Development Implementation Guide

### Development Environment Requirements
- Latest version of Visual Studio Code
- ESP-IDF plugin (v5.1.1 version)
- UVC example code library

### Detailed Development Steps

1. **Obtain Source Code**
   ```bash
   mkdir uvc && cd uvc
   git clone git@github.milesight.com:ne101.git
   ```

2. **Project Configuration**
   - Open the project directory with VS Code
   - Enable UVC functionality: modify the `main/camera.c` file, setting `CAMERA_USE_UVC=1`

3. **Resolution Configuration**
   - Modify the resolution parameters in `main/uvc.c`
   - Ensure to adjust the buffer size configuration accordingly
   
   ![Resolution Configuration Interface](/img/NE101_example_1.png)

4. **Compile and Flash**
   - Execute the complete compilation process
   - Flash the generated firmware to the device

## Important Notes

1. **Protocol Compatibility**
   - ESP32-S3 only supports USB 1.1 protocol
   - Custom UVC devices must ensure compatibility with the USB 1.1 standard

2. **Performance Optimization Suggestions**
   - Set the frame buffer size reasonably under high resolution