# PIR

## Technical Overview

**PIR (Passive Infrared) Sensors** detect motion by sensing infrared radiation changes emitted by humans or animals. They have the following features:
- Detection Range: 3-7 meters
- Detection Angle: Horizontal 110°, Vertical 90°
- Operating Voltage: 3.3V-5V
- Low power design, suitable for battery-powered scenarios

### Typical Application Scenarios
- Security monitoring systems
- Smart lighting control
- Automatic snapshot systems
- Smart home automation

## Development Preparation

### Hardware Configuration
- Standard development board (ESP32-S3 core board)
- PIR sensor module (recommended model: HC-SR501)
- Complete hardware connection guide: [Hardware Connection Instructions](.././Hardware%20Guide/Hardware%20Connection)

### Software Resources
1. **Precompiled Firmware**:
   - Obtain PIR example firmware
   - Flashing method reference: [Development Environment Setup Guide](./../Software%20Guide/Development%20Environment%20Setup)

2. **Source Code Development**:
   - Supports local compilation (see development implementation guide section for details)

## Function Verification Process

1. **Firmware Upgrade**
   - Use the flashing tool to write the PIR example firmware

2. **Function Test**
   - Correctly connect the PIR sensor
   - Power on the device and wait for initialization to complete
   - After entering sleep mode, trigger the PIR sensor:
     - Observe the status indicator light up (indicating successful wake-up)
     - Verify the automatic snapshot and image upload functions

3. **Parameter Adjustment**
   - Adjust detection sensitivity according to actual needs
   - Complete operation guide reference: [Quick Start Manual](./../Quick%20Start)

## Development Implementation Guide

### Development Environment Requirements
- Latest version of Visual Studio Code
- ESP-IDF v5.1.1 toolchain
- PIR example code library

### Development Steps

1. **Obtain Source Code**
   ```bash
   mkdir pir && cd pir
   git clone git@github.milesight.com:ne101.git
   ```

2. **Enable PIR Functionality**
   - Modify the `main/pir.h` file:
   ```c
   #define PIR_ENABLE 1  // Enable PIR functionality
   ```

3. **GPIO Configuration**
   - Ensure to use RTC GPIO (supports wake-up functionality)
   - Avoid external pull-up resistors affecting signal detection
   
   ![GPIO Configuration Diagram](/img/NE101_example_6.png)

4. **Sensitivity Adjustment**
   - Modify detection parameters based on the application scenario:
   
   ![Sensitivity Parameter Configuration](/img/NE101_example_5.png)

5. **Log Optimization**
   - Set the log level to Error in menuconfig
   - Reduce the impact of serial output on timing

6. **Compile and Flash**
   - Execute the complete compilation process
   - Flash the generated firmware to the device

## Precautions

1. **Power Management**
   - Frequent triggers will significantly increase power consumption
   - For battery-powered scenarios, it is recommended to:
     - Set a reasonable trigger interval
     - Enable deep sleep mode

2. **System Stability**
   - IDF v5.1.1 has a deep sleep wake-up bug
   - It is recommended to upgrade to v5.1.6

3. **Anti-Interference Design**
   - Keep away from electromagnetic interference sources
   - Appropriately increase the PULSE_C parameter value

4. **Environmental Adaptability**
   - Avoid direct sunlight on the sensor
   - Keep the sensor lens clean
   - Adjust the detection angle based on the installation height