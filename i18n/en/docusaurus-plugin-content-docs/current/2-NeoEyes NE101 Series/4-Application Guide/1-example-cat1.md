# Low-Power Capture Based on Cellular

## Overview

This example introduces how to achieve low-power capture using **LTE Cat 1**, suitable for outdoor scenarios without WiFi and gateways.

### Technical Background

**LTE Cat 1** is a communication standard defined by 3GPP specifically for IoT, featuring:

- Maximum downlink rate of 10 Mbps and uplink rate of 5 Mbps
- Support for mobility and VoLTE voice functionality
- Low power design, suitable for battery-powered devices
- Wide network coverage, directly accessible to existing 4G networks

## Development Preparation

### Hardware Configuration

- Standard development board (ESP32-S3 core board)
- LTE Cat 1 communication module
- SIM card (supporting 4G network)

![Cat1 Module Connection Diagram](/img/Overview/NE101/cat1PCBA.png)

Complete hardware connection guide: [Hardware Connection Guide](.././Hardware%20Guide/Hardware%20Connection)

### Software Resources

1. **Precompiled Firmware**:
   
   - Obtain the Cat1 communication example firmware
   - For the flashing method, refer to: [Development Environment Setup Guide](./../Software%20Guide/Development%20Environment%20Setup)

2. **Source Code Development**:
   
   - Supports local compilation (see the development guide section below for details)

## Function Verification Process

1. **Hardware Connection**
   
   - Properly install the Cat1 module
   - Insert a valid SIM card
   - Power on the device

2. **Network Status Check**
   
   - Short press the function button to enter configuration mode
   - Access the web management interface (http://192.168.1.1)
   - Check the "Cellular Network" status display
   
   ![Network Status Interface 1](/img/NE101_example_cat1_1.png)
   ![Network Status Interface 2](/img/NE101_example_cat1_2.png)

3. **Data Transmission Test**
   
   - Configure the MQTT server parameters
   - Perform a test capture and image upload
   - For a complete operation guide, refer to: [Quick Start Manual](./../Quick%20Start)

## Development Implementation Guide

### Development Environment Requirements

- The latest version of Visual Studio Code
- ESP-IDF v5.1.1 toolchain
- Cat1 example code library

### Development Steps

1. **Obtain the Source Code**
   
   ```bash
   git clone git@github.milesight.com:ne101.git
   ```

2. **Project Configuration**
   
   - Use VS Code to open the project directory

3. **Compile and Flash**
   
   - Execute the full compilation process
   - Flash the generated firmware to the device
   - For detailed reference, see: [Development Environment Setup Guide](./../Software%20Guide/Development%20Environment%20Setup)

## Considerations

1. **SIM Card Management**
   
   - Ensure the SIM card has activated 4G service
   - Check if the SIM card contacts are good

2. **Signal Strength Evaluation**
   
   - RSSI > -85 dBm: Excellent signal
   - -85 dBm > RSSI > -95 dBm: Average signal
   - RSSI < -95 dBm: Weak signal

> Technical Tip: During development, it is recommended to use a serial debugging tool to monitor AT command interactions in real-time, which can quickly locate communication issues. The network registration process typically takes 30-60 seconds, so please be patient.