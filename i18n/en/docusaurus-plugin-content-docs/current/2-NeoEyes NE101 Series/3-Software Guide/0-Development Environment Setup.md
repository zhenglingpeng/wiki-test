# Development Environment Setup

## Document Overview

This guide details how to set up the development environment for the ESP32-S3 on a Windows system, based on the official Espressif ESP-IDF v5.1.1 framework. It provides two mainstream development methods: VSCode extension installation and command-line toolchain configuration.

Official reference document: [ESP-IDF v5.1 Programming Guide](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32s3/get-started/index.html)

## Development Tool Selection

Two IDE installation schemes are offered, with this guide focusing on the VSCode scheme:

1. [Eclipse Plugin Scheme](https://github.com/espressif/idf-eclipse-plugin/blob/master/README.md)
2. [VSCode Extension Scheme](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md) (Recommended)

## Command Line Development Method

Reference document: [Standard Toolchain Configuration Guide for Windows](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32s3/get-started/windows-setup.html)

## VSCode Development Environment Configuration

### Development Environment Installation

1. **Install VSCode**
   - Download and install the latest version of Visual Studio Code from the official website.
   - Search for and install the "Espressif IDF" extension in the extension marketplace.

   ![VSCode Extension Installation Illustration](/img/NE101_Setup_idf1.png)

2. **Configure ESP-IDF Environment**
   - Use the shortcut `Ctrl+Shift+P` to open the command palette.
   - Type and select "Configure ESP-IDF extension".

   ![Command Palette Operation Illustration](/img/NE101_Setup_idf2.png)

### Installation Mode Selection

The system offers three installation methods:

![Installation Mode Selection Interface](/img/NE101_Setup_idf3.png)

1. **Quick Install (EXPRESS)** (Recommended)
   - Automatically downloads the specified version of ESP-IDF (select v5.1.1).
   - Creates a Python virtual environment.
   - Default installation path: `X:\Espressif`.
   - Note: Depends on GitHub download speed.

2. **Advanced Install (ADVANCED)**
   - Customize ESP-IDF version and Python environment.
   - Supports multi-version co-existence configuration.
   - Allows specifying the toolchain installation directory.

3. **Use Existing Setup (USE EXISTING SETUP)**
   - Automatically recognizes the already installed development environment.
   - Suitable for users with existing configurations.

Select **Quick Install**, specify version v5.1.1 to start the installation:

![Version Selection Interface](/img/NE101_Setup_idf4.png)
![Installation Process Illustration](/img/NE101_Setup_idf5.png)

Installation success indicator:

![Installation Completion Interface](/img/NE101_Setup_idf6.png)

## Project Development Process

### Obtain Project Code

```bash
git clone git@github.milesight.com:ne101.git
```

### Compile and Flash

1. **Open Project**
   - In VSCode, select "Open Folder".
   - Navigate to the project directory.

   ![Project Directory Structure](/img/NE101_CodeList.png)
   ![Project File Browsing](/img/NE101_CodeList1.png)

2. **Device Configuration**
   - Select the correct COM port.
   - Choose the chip type "esp32s3".

3. **Compile and Flash**
   - Optional: Run "menuconfig" to modify configurations.
   - Click "build" to compile the project.
   - Click "flash" to burn the firmware.

   ![Compilation Operation Interface](/img/NE101_Setup_idf7.png)
   ![Flashing Process Illustration](/img/NE101_flash_vscode.png)

## Environment Verification

After successful flashing, the device will automatically restart. You can view the startup log through the serial monitor to confirm the firmware is running normally.

> Tip: It is recommended to run the example program to verify the environment configuration on first use. If network issues cause component download failures, you can configure domestic mirror sources to speed up the download.