# Development Environment Setup

## Document Overview

This guide provides a detailed process for setting up the ESP32-S3 development environment on the Windows operating system, based on the official Espressif ESP-IDF v5.1.6 development framework. The document offers two mainstream development options: the VSCode extension installation method and the command-line toolchain configuration method, with a strong recommendation to use VSCode as the development environment.

Official reference document: [ESP-IDF v5.1 Programming Guide](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32s3/get-started/index.html)

## Development Tool Selection

We offer two installation options for integrated development environments (IDE):

1. [Eclipse Plugin Method](https://github.com/espressif/idf-eclipse-plugin/blob/master/README.md) (suitable for developers familiar with Eclipse)
2. [VSCode Extension Method](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md) (recommended method, offering a better development experience)

## Command-Line Development Method (Optional)

For advanced developers who prefer command-line operations, refer to: [Standard Toolchain Configuration Guide for Windows](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32s3/get-started/windows-setup.html)

## VSCode Development Environment Configuration (Recommended)

### Development Environment Installation Steps

1. **Install Visual Studio Code**
   
   - Download and install the latest version from the [VSCode official website](https://code.visualstudio.com/)
   - Launch VSCode, search for and install the "Espressif IDF" extension from the extension marketplace
   
   ![VSCode extension installation illustration](/img/NE101_Setup_idf1.png)

2. **Configure the ESP-IDF Development Environment**
   
   - Use the shortcut `Ctrl+Shift+P` to bring up the command palette
   - Enter and select the "Configure ESP-IDF extension" command
   
   ![Command palette operation illustration](/img/NE101_Setup_idf2.png)

### Installation Mode Selection

The system offers three flexible installation methods:

![Installation mode selection interface](/img/NE101_Setup_idf3.png)

1. **Quick Install (EXPRESS)** (Recommended Method)
   
   - Automatically downloads and installs the specified version of ESP-IDF (recommended to select v5.1.6)
   - Automatically creates a Python virtual environment
   - Default installation path: `X:\Espressif`
   - Note: This method relies on GitHub download speeds; users in China may need to configure a proxy

2. **Advanced Install (ADVANCED)**
   
   - Supports custom ESP-IDF version and Python environment configuration
   - Allows management of multiple versions
   - Enables specifying the toolchain installation directory

3. **Use Existing Setup (USE EXISTING SETUP)**
   
   - Automatically detects the development environment already installed on the system
   - Suitable for users who have previously configured the development environment

It is recommended to choose the **Quick Install** mode and specify version v5.1.6 to start the installation:

![Version selection interface](/img/NE101_Setup_idf4.png)
![Installation process illustration](/img/NE101_Setup_idf5.png)

Interface displayed after successful installation:

![Installation completion interface](/img/NE101_Setup_idf6.png)

## Project Development Process

### Obtain Project Code

Clone the project repository using the Git command:

```bash
git clone https://github.com/camthink-ai/lowpower_camera.git
```

### Compilation and Flashing Process

1. **Open the Project**
   
   - Use the "File > Open Folder" feature in VSCode
   - Navigate to the project directory
   
   ![Project directory structure](/img/NE101_CodeList.png)
   ![Project file browsing](/img/NE101_CodeList1.png)

2. **Device Configuration**
   
   - Select the correct COM port in the bottom status bar
   - Ensure the chip type is set to "esp32s3"
   
   ![Chip selection illustration](/img/NE101_idf_IC.png)

3. **Compilation and Flashing Operations**
   
   - (Optional) Run the "menuconfig" command to modify project configurations
   - Click the "build" button on the toolbar to compile the project
   
   ![Compilation process illustration](/img/NE101_idf_build.png)
   
   - Click the "flash" button to flash the firmware to the device
   
   ![Flashing process illustration](/img/NE101_idf_flash.png)

## Environment Verification

After successfully flashing, the device will automatically restart. Developers can use the integrated serial monitor in VSCode to view the device startup logs and confirm whether the firmware is running correctly.

> Important Notes:
> 1. It is recommended to first run the official example program to verify the environment configuration.
> 2. If network issues cause component download failures, configure domestic mirror sources to accelerate downloads.
> 3. Ensure a stable USB connection during development to avoid interruptions during flashing.

This guide covers the main processes for setting up the ESP32-S3 development environment. For more advanced configuration options, please refer to the official Espressif documentation or contact technical support.