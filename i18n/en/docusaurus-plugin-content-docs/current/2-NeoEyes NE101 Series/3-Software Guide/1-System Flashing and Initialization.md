# System Flashing

## Device Flashing Instructions

### Hardware Information
- Main Control Chip: ESP32-S3
- Development Framework: ESP-IDF v5.1.1

Official reference document: [ESP-IDF v5.1 Programming Guide](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32s3/get-started/windows-setup.html)

### Recommended Flashing Methods

#### 1. VSCode Plugin Flashing (Recommended)
- Integrated code editing, compiling, and flashing functions.
- Development environment configuration reference: [Development Environment Setup Guide](./Development%20Environment%20Setup)

#### 2. Standalone Flashing Tool
Download the flashing tool here: [Tool Download Link]

##### Operating Steps:
1. Launch the flashing tool

   ![Flashing Tool Launch Interface](/img/NE101_flash_tool.png)

2. Configure Flashing Parameters:
   - Select the firmware file.
   - Set the Flash address.
   - Choose the corresponding COM port.

3. Execute Flashing:
   - First, perform the ERASE operation.
   - Then execute START to begin flashing.
   - Wait for the device to automatically restart.

   ![Flashing Process Interface](/img/NE101_flash_tool1.png)

## OTA Wireless Upgrade Guide

### Upgrade Steps

1. **Enter Configuration Mode**
   - Press and hold the device function key for 3 seconds to enter configuration mode.
   - Connect to the device's WiFi hotspot (SSID: NE101_XXXXXX).

2. **Upload Upgrade Package**
   - Access the device's web interface (http://192.168.1.1).
   - Navigate to "Device Maintenance" → "Firmware Upgrade".
   - Select the upgrade file and upload it.

   ![OTA Upgrade Interface](/img/NE101_ota.png)

3. **Wait for Upgrade to Complete**
   - The system will automatically verify and install the new firmware.
   - After the upgrade is complete, the WiFi will automatically reconnect.

   ![Upgrade Progress Interface](/img/NE101_ota2.png)

4. **Verify Version Information**
   - Confirm the new version number on the device information page.
   - Check if all functional modules are working properly.

   ![Version Information Interface](/img/NE101_ota3.png)

### Precautions
1. Ensure stable power supply during the upgrade process.
2. It is recommended to back up important configurations before upgrading.
3. If the upgrade fails, the device will automatically revert to the last usable version.
4. Complete upgrade logs can be viewed through the serial monitor.