# Low-Power Capture Based on Cellular

## Overview

This solution demonstrates how to utilize **LTE Cat 1** technology for low-power image capture and transmission in outdoor environments, specifically suitable for applications without WiFi coverage and lacking gateway devices.

### Technical Background

**LTE Cat 1** is a communication standard designed by 3GPP for the Internet of Things (IoT), featuring the following core advantages:

- **Efficient Transmission**: Supports up to 10 Mbps downlink and 5 Mbps uplink speeds
- **Full Functionality**: Includes mobility management and VoLTE voice communication capabilities
- **Energy Efficiency**: Optimized power consumption, suitable for long-term battery-powered devices
- **Wide Coverage**: Can directly access existing 4G network infrastructure, facilitating easy deployment

## Development Preparation

### Hardware Requirements

- **Main Control Unit**: Core development board
- **Communication Module**: LTE Cat 1 wireless module
- **Network Access**: Activated 4G SIM card

![Cat1 Module Hardware Connection Diagram](/img/Overview/NE101/cat1PCBA.png)

### Software Resources

#### 1. Quick Experience Firmware

- Precompiled production firmware download:
  [lowpower_camera bin](https://github.com/camthink-ai/lowpower_camera/tree/main/bin/NE_101_FCC.zip)

#### 2. Development Environment Configuration

- **IDE Tool**: Visual Studio Code (v1.99.2+)
- **Development Framework**: ESP-IDF plugin (v5.1.6)
- **Sample Code Repository**:
  [lowpower_camera](https://github.com/camthink-ai/lowpower_camera.git)

## Function Verification

### Precompiled Firmware Usage Guide

#### 1. Hardware Preparation

1. Properly install the Cat1 communication module
2. Insert an activated 4G SIM card

> For detailed connection instructions, refer to:
> [Hardware Connection Guide](../Hardware%20Guide/Hardware%20Connection)

#### 2. Firmware Flashing

Follow the standard flashing process:
[System Flashing and Initialization Guide](./../Software%20Guide/System%20Flashing%20and%20Initialization)

#### 3. Network Status Verification

1. Short press the function key to enter configuration mode
2. Access the device's web management interface (http://192.168.1.1)
3. Check the "Cellular Network" status information

![Network Status Display Interface 1](/img/NE101_example_cat1_1.png)
![Network Status Display Interface 2](/img/NE101_example_cat1_2.png)

#### 4. Data Transmission Test

1. Configure MQTT server connection parameters
2. Perform test capture and image upload functionality

> For the complete operation guide, refer to:
> [Quick Start Guide](./../Quick%20Start)

### Source Code Development Verification Process

#### 1. Obtain the Code Repository

```bash
git clone https://github.com/camthink-ai/lowpower_camera.git
```

#### 2. Project Configuration

Open the project directory with VS Code:

![Project Directory Structure](/img/NE101_code_dir.png)

#### 3. Compilation and Deployment

1. Execute project compilation:

![Compilation Process](/img/NE101_idf_build.png)

2. Flash the generated firmware:

![Firmware Flashing Interface](/img/NE101_idf_flash.png)

#### 4. Function Verification

Network status check and data transmission test methods are the same as in the precompiled firmware section.

## Notes

### SIM Card Management

- Ensure the SIM card has an active 4G data service

### Signal Quality Assessment

- **Excellent Signal**: RSSI > -85 dBm
- **Moderate Signal**: -85 dBm > RSSI > -95 dBm  
- **Weak Signal**: RSSI < -95 dBm

> **Development Suggestions**:
> 1. Use a serial tool to monitor AT command interactions to quickly troubleshoot communication issues
> 2. The network registration process typically takes 30-60 seconds, which is normal
> 3. Adjust the device position in weak signal environments