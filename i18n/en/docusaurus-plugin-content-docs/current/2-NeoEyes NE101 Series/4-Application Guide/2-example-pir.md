# Capture Moving Objects

## Overview

This example demonstrates how to use a **PIR sensor** to detect moving objects and trigger a capture function upon detection.

### Technical Background

**PIR (Passive Infrared) Sensor** detects motion by sensing changes in infrared radiation emitted by humans or animals. It has the following features:

- Detection range: 3-7 meters
- Detection angle: Horizontal 110°, Vertical 90°
- Operating voltage: 3.3V-5V
- Low power consumption, suitable for battery-powered scenarios

## Development Preparation

### Hardware Configuration

- Standard development board (ESP32-S3 core board)
- PIR sensor module (recommended model: HC-SR501)
- For detailed hardware connection instructions, please refer to: [Hardware Connection Guide](.././Hardware%20Guide/Hardware%20Connection)

### Software Resources

1. **Precompiled Firmware**:
   
   - Obtain the PIR example firmware
   - For the flashing method, please refer to: [Development Environment Setup Guide](./../Software%20Guide/Development%20Environment%20Setup)

2. **Source Code Development**:
   
   - Supports local compilation (see the development implementation guide section below for details)

## Function Verification Process

1. **Firmware Upgrade**
   
   - Use the flashing tool to write the example firmware

2. **Function Testing**
   
   - Correctly connect the PIR sensor
   - Power on the device and wait for initialization to complete
   - After the device enters sleep mode, trigger the PIR sensor:
     - Observe the status indicator light up (indicating successful wake-up)
     - Verify the automatic capture and image upload functionality

3. **Parameter Adjustment**
   
   - Adjust detection sensitivity according to actual needs
   - For detailed operation instructions, please refer to: [Quick Start Manual](./../Quick%20Start)

## Development Implementation Guide

### Development Environment Requirements

- The latest version of Visual Studio Code
- ESP-IDF v5.1.1 toolchain
- PIR example code library

### Development Steps

1. **Obtain the Source Code**
   
   ```bash
   git clone git@github.milesight.com:ne101.git
   ```

2. **GPIO Configuration**
   
   - Connect the PIR module
   - Ensure the use of RTC GPIO (supports wake-up function)
   - Avoid external pull-up resistors affecting signal detection
   
   ![GPIO Configuration Diagram](/img/NE101_example_6.png)

3. **Sensitivity Adjustment**
   
   - Modify detection parameters according to the application scenario:
   
   ![Sensitivity Parameter Configuration](/img/NE101_example_5.png)

4. **Compile and Flash**
   
   - Execute the full compilation process
   - Flash the generated firmware to the device

## Considerations

1. **Power Management**
   
   - Frequent triggers will significantly increase power consumption
   - For battery-powered scenarios, it is recommended to:
     - Set a reasonable trigger interval

2. **System Stability**
   
   - IDF v5.1.1 has a deep sleep wake-up bug
   - It is recommended to upgrade to version v5.1.6

3. **Interference Resistance Design**
   
   - Keep away from electromagnetic interference sources
   - Appropriately increase the PULSE_C parameter value

4. **Environmental Adaptability**
   
   - Avoid direct sunlight on the sensor
   - Keep the sensor lens clean
   - Adjust the detection angle according to the installation height