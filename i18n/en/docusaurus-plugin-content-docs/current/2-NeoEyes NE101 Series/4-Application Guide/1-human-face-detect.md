# Human Face Detection

## Overview

This example provides a human face detection feature that you can extend into a variety of practical applications.

[ESP-DL](https://github.com/espressif/esp-dl) offers a rich set of deep learning interfaces for ESP-WHO, which, combined with various peripherals, can enable many interesting applications.

## Preparation

### Hardware Configuration Requirements

- Standard development board (with a camera sensor)

### Software Resources

1. **Precompiled Firmware**:
   
   - Obtain the latest example firmware
   - For flashing methods, refer to: [Development Environment Setup Guide](./../Software%20Guide/Development%20Environment%20Setup)

2. **Source Code Development**:
   
   - Supports local compilation (see the development guide section below for details)

## Function Verification Process

1. **Firmware Upgrade**
   
   - Use the flashing tool to write the example firmware

2. **Device Initialization**
   
   - Correctly connect the hardware devices
   - Power on the device
   - Connect to the serial port with a baud rate of 115200

3. **Function Testing**
   
   - Point the camera at a real face or a photo
   - Move the camera left and right to see if the serial port displays face detection information

![Face Detection Illustration](/img/NE101_example_human_detect_1.png)

![Face Detection GIF](/img/NE101_example_human_detect.gif)

## Development Implementation Guide

### Development Environment Requirements

- The latest version of Visual Studio Code
- ESP-IDF plugin (version 5.4.0 or above)
- Example code library

### Detailed Development Steps

1. **Obtain the Source Code**
   
   ```bash
   git clone git@github.milesight.com:ne101.git
   ```

2. **Compile and Flash**
   
   - Use VS Code to open the project directory
   - Set the target chip to ESP32-S3
   - Execute the full compilation process
   - Flash the generated firmware to the device
   - For detailed instructions, refer to: [Development Environment Setup Guide](./../Software%20Guide/Development%20Environment%20Setup)

## Reference Documents

- ESP-DL Model Quantization: [GitHub - espressif/esp-dl: Espressif deep-learning library for AIoT applications](https://github.com/espressif/esp-dl?tab=readme-ov-file)
- ESP-Official Examples: [GitHub - espressif/esp-who: Face detection and recognition framework](https://github.com/espressif/esp-who/tree/master)