# Quick Start

## Overview

This chapter provides a quick guide to using the NG45XX series products.

## Hardware-related

- ​**​Hardware Overview​**​: For details, refer to the [Hardware Component Description](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Hardware%20Guide/Components%20Overview).
- ​**​Device Assembly​**​: For instructions, see the [Hardware Connection Guide](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Hardware%20Guide/Hardware%20Connection).

## Software-related

- ​**​Environment Setup​**​: For setting up the software development environment, refer to [Development Environment Setup](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Software%20Guide/Development%20Environment%20Setup).
- ​**​Firmware Flashing​**​: For detailed steps on firmware flashing, see [System Firmware Flashing and Initialization](http://192.168.13.9:3000/docs/Edge%20AI%20Box/NeoEdge%20NG45XX%20Series/Software%20Guide/System%20Flashing%20and%20Initialization).

## Initial System Startup Configuration

### 1. User Configuration

Follow the on-screen prompts to complete the system configuration:

1. Check `accept license` and continue.

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Licenses.png)

2. Set the language and continue.

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Language.png)

3. Configure the keyboard layout and continue.

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Keyboard.png)

4. Set the timezone (e.g., `Asia/Shanghai`) and continue.

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Local.png)

5. Configure 'Your name' and 'password', then continue.

![System Configuration](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration.jpg)

6. Finally, wait for the system installation to complete and restart automatically.

### 2. System Status & Version Confirmation

- Use the ​**​Jtop​**​ tool to monitor system resources:
  
  ```shell
  # Install Jtop
  sudo apt update
  sudo apt install python3-pip
  sudo pip3 install -U jetson-stats
  
  # Restart the service
  sudo systemctl restart jtop.service
  
  # Run Jtop
  sudo jtop
  ```
  
  This will display real-time resource usage, including CPU, memory, GPU, disk, and fan status.And confirm the current system is installed TensorRT, CUDA version.

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_JTOP.png)

 

## NVIDIA Official Resource

**NVIDIA Jetson Software:**

 [Jetson Linux Developer Guide - Quick Start](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/IN/QuickStart.html)

[Jetson Jetpack SDK](https://developer.nvidia.com/embedded/jetpack)

[Jetson FAQ](https://developer.nvidia.com/embedded/faq)

[Jetson Download Center](https://developer.nvidia.com/embedded/downloads)

[Download NVIDIA SDK Manager](https://developer.nvidia.com/sdk-manager)

**Software Forum:**

 [Jetson Developer Forum](https://forums.developer.nvidia.com/c/agx-autonomous-machines/jetson-embedded-systems)
