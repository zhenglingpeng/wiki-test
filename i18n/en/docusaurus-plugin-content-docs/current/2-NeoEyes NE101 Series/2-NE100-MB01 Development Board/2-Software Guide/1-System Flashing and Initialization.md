# System Flashing

## Device Flashing Instructions

Default firmware download link: [lowpower_camera bin](https://github.com/camthink-ai/lowpower_camera/tree/main/bin/NE_101.1.0.1.bin)

### Hardware Information

- Main Control Chip: ESP32-S3
- Development Framework: ESP-IDF v5.1.6

Official reference document: [ESP-IDF v5.1 Programming Guide](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32s3/get-started/windows-setup.html)

### Recommended Flashing Methods

#### 1. VSCode Plugin Flashing (Recommended)

- Integrates code editing, compilation, and flashing functionalities
- Development environment setup reference: [Development Environment Setup Guide](./Development%20Environment%20Setup)

#### 2. Standalone Flashing Tool

Flashing tool download link: [flash_download_tool_3.9.3_0.zip](https://github.com/camthink-ai/lowpower_camera/blob/main/tools/flash_download_tool_3.9.3_0.zip)

##### Operation Steps:

1. Launch the flashing tool
   
   ![Flashing tool launch interface](/img/NE101_flash_tool.png)

2. Configure flashing parameters:
   
   - Select the firmware file
   - Set the Flash address
   - Choose the corresponding COM port

3. Execute flashing:
   
   - First, perform the ERASE operation
   - Then, execute START to begin flashing
   - Wait for the device to automatically restart
   
   ![Flashing process interface](/img/NE101_flash_tool1.png)

## OTA Wireless Upgrade Guide

### Upgrade Steps

1. **Enter Configuration Mode**
   
   - Press the device function button to enter configuration mode
   - Connect to the device WiFi hotspot (SSID: NE101_XXXXXX)

2. **Upload the Upgrade Package**
   
   - Access the device web interface (http://192.168.1.1)
   - Navigate to "Device Maintenance" → "Firmware Upgrade"
   - Select the upgrade file and upload it
   
   ![OTA upgrade interface](/img/NE101_ota.png)

3. **Wait for the Upgrade to Complete**
   
   - The system will automatically verify and install the new firmware
   - After the upgrade is complete, the WiFi will automatically reconnect
   
   ![Upgrade progress interface](/img/NE101_ota2.png)

4. **Verify Version Information**
   
   - Confirm the new version number on the device information page
   - Check whether all functional modules are operating normally
   
   ![Version information interface](/img/NE101_ota3.png)

### Notes

1. Ensure a stable power supply during the upgrade process
2. It is recommended to back up important configurations before upgrading
3. If the upgrade fails, the device will automatically roll back to the last available version
4. The complete upgrade log can be viewed through the serial monitor