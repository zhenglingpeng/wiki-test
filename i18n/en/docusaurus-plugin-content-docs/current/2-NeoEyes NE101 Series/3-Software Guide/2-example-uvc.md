# USB Video Streaming

## Overview

This example demonstrates how to achieve real-time video streaming using the UVC protocol. You can develop various practical applications based on this example.

### Technical Background

**UVC (USB Video Class) Protocol** is a standard protocol established by the USB Implementers Forum for plug-and-play communication between video devices and host devices via USB interfaces. Its main advantages include:

- Support for high-resolution image capture
- Easy replacement of different camera modules
- Use of standardized USB interfaces, offering strong scalability
- Simplification of hardware wiring complexity

## Preparation

### Hardware Configuration Requirements

- Standard development board (ESP32-S3 core board)
- UVC protocol-compatible camera module
- For detailed hardware connection instructions, please refer to: [Hardware Connection Guide](.././Hardware%20Guide/Hardware%20Connection)

### Software Resource Acquisition

1. **Precompiled Firmware**:
   
   - Obtain the latest UVC example firmware
   - For the flashing method, please refer to: [Development Environment Setup Guide](./../Software%20Guide/Development%20Environment%20Setup)

2. **Source Code Development**:
   
   - Supports local compilation (see the development guide section below for details)

## Function Verification Process

1. **Firmware Upgrade**
   
   - Use the flashing tool to write the example firmware

2. **Device Initialization**
   
   - Correctly connect the hardware devices
   - Power on and start the device

3. **Function Testing**
   
   - Connect to WiFi ESP32S3-UVC
   - Access the web management interface (http://192.168.4.1)
   - Verify if the real-time video stream is displayed correctly
     ![UVC Video Stream](/img/NE101_example_uvc1.png)

## Development Implementation Guide

### Development Environment Requirements

- The latest version of Visual Studio Code
- ESP-IDF Plugin (version 5.1.1)
- UVC example code library

### Detailed Development Steps

1. **Obtain the Source Code**
   
   ```bash
   git clone git@github.milesight.com:ne101.git
   ```

2. **Compile and Flash**
   
   - Use VS Code to open the example project `examples/usb/host/usb_camera_mic_spk`
   - Set the target chip to ESP32-S3
   - Execute the full compilation process
   - Flash the generated firmware to the device

## Important Considerations

1. **Protocol Compatibility**
   
   - ESP32-S3 only supports the USB 1.1 protocol
   - Custom UVC devices must ensure compatibility with the USB 1.1 standard

2. **Performance Optimization Suggestions**
   
   - For high resolutions, properly set the frame buffer