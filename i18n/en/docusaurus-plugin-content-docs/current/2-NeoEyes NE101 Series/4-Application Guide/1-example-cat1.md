# CAT1

## Technical Overview

**LTE Cat 1** is a communication standard for the Internet of Things (IoT) defined by 3GPP, featuring:
- Maximum downlink speed of 10Mbps and uplink speed of 5Mbps
- Support for mobility and VoLTE voice functions
- Low power design, suitable for battery-powered devices
- Wide network coverage, can directly access existing 4G networks

### Typical Application Scenarios
- Data transmission in outdoor environments without WiFi/gateways
- Mobile device monitoring
- Remote data collection systems
- Smart city infrastructure

## Development Preparation

### Hardware Configuration
- Standard development board (ESP32-S3 core board)
- LTE Cat 1 communication module
- SIM card (supports 4G network)

![Cat1 Module Connection Diagram](/img/Overview/NE101/cat1PCBA.png)

Complete hardware connection guide: [Hardware Connection Instructions](.././Hardware%20Guide/Hardware%20Connection)

### Software Resources
1. **Precompiled Firmware**:
   - Obtain Cat1 communication example firmware
   - Flashing method reference: [Development Environment Setup Guide](./../Software%20Guide/Development%20Environment%20Setup)

2. **Source Code Development**:
   - Supports local compilation (see development guide section for details)

## Function Verification Process

1. **Hardware Connection**
   - Correctly install the Cat1 module
   - Insert a valid SIM card
   - Power on the device

2. **Network Status Check**
   - Short press the function key to enter configuration mode
   - Access the Web management interface (http://192.168.1.1)
   - View the "Cellular Network" status display
   
   ![Network Status Interface 1](/img/NE101_example_cat1_1.png)
   ![Network Status Interface 2](/img/NE101_example_cat1_2.png)

3. **Data Transmission Test**
   - Configure MQTT server parameters
   - Execute test snapshots and image uploads
   - Complete operation guide reference: [Quick Start Manual](./../Quick%20Start)

## Development Implementation Guide

### Development Environment Requirements
- Latest version of Visual Studio Code
- ESP-IDF v5.1.1 toolchain
- Cat1 example code library

### Development Steps

1. **Obtain Source Code**
   ```bash
   mkdir cat1 && cd cat1
   git clone git@github.milesight.com:ne101.git
   ```

2. **Project Configuration**
   - Open the project directory with VS Code

3. **Compile and Flash**
   - Execute the complete compilation process
   - Flash the generated firmware to the device
   - Detailed reference: [Development Environment Setup Guide](./../Software%20Guide/Development%20Environment%20Setup)

## Precautions

1. **SIM Card Management**
   - Ensure the SIM card is activated for 4G service
   - Check if the SIM card contacts are good

2. **Signal Strength Judgment**
   - RSSI > -85dBm: Excellent signal
   - -85dBm > RSSI > -95dBm: Average signal
   - RSSI < -95dBm: Weak signal

> Technical Tip: During development, it is recommended to use a serial debugging tool to monitor AT command interactions in real-time, which can quickly locate communication issues. Network registration usually takes 30-60 seconds, so please be patient.