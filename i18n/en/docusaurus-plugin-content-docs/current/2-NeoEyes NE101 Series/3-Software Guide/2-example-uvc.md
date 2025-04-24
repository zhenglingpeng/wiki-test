# USB Video Streaming

## Overview
This example demonstrates how to achieve real-time video streaming via the UVC protocol, based on the ESP32-S3 development platform.

### Technical Background
**UVC (USB Video Class)** is a standard protocol defined by USB-IF, with key features including:
- Support for high-resolution image capture
- Plug-and-play compatibility
- Standardized control interface
- Simplified hardware design

## Preparations

### Hardware Requirements
- ESP32-S3 development board
- UVC-compliant camera module
- USB Type-C data cable

### Software Resources
1. **Precompiled Firmware**:
   [usb_camera_mic_spk.bin](https://github.com/camthink-ai/iot_samples/blob/main/bin/usb_camera_mic_spk.bin)

2. **Source Code Development**:
   ```bash
   git clone https://github.com/camthink-ai/iot_samples
   ```

## Function Verification

### Using Precompiled Firmware
1. **Device Connection**:
   - Connect the development board to the UVC camera module
   - Refer to the [Hardware Connection Guide](../Hardware%20Guide/Hardware%20Connection)

2. **Firmware Flashing**:
   Refer to the method in: [System Flashing](./../Software%20Guide/System%20Flashing%20and%20Initialization)

3. **Function Testing**:
   - Connect to the WiFi hotspot `ESP32S3-UVC`
   - Access http://192.168.4.1
   - Verify video stream display

   ![UVC video stream](/img/NE101_example_uvc1.png)

### Source Code Development Verification
1. **Project Configuration**:
   - Open `examples/usb/host/usb_camera_mic_spk` with VS Code

   ![Project Directory](/img/NE101_uvc_dir.png)

2. **Chip Selection**:
   Set the target to ESP32-S3

   ![Chip Selection](/img/NE101_idf_IC.png)

3. **Compilation and Flashing**:

   ![Compilation Process](/img/NE101_idf_build.png)
   
   ![Flashing Process](/img/NE101_idf_flash.png)

## Notes
1. **Protocol Limitations**:
   - ESP32-S3 only supports USB 1.1
   - Ensure the camera is compatible with USB 1.1 standards

2. **Performance Optimization**:
   - Set the frame buffer size appropriately
   - Recommended resolution is 640x480@30fps

3. **Debugging Tips**:
   - Use `idf.py monitor` to view logs
   - Check the quality of the USB connection

> Tip: It is recommended to keep the serial monitor active during development to capture any abnormal information promptly.