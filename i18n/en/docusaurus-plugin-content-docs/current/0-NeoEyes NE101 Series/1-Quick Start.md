# Quick Start

## Product Overview

This chapter will guide you through the core functions of the NE100 series products. Using the NE101 standard firmware as an example, it focuses on the implementation process of scheduled snapshots and data reporting.

## Hardware Preparation

- **Hardware Overview**: For understanding the components of the device, please refer to [Hardware Components Overview](./Hardware%20Guide/Components%20Overview).
- **Device Assembly**: For detailed installation steps, refer to [Hardware Connection Guide](./Hardware%20Guide/Hardware%20Connection).

## Software Configuration

- **Environment Setup**: For guidance on configuring the development environment, see [Development Environment Setup](./Software%20Guide/Development%20Environment%20Setup).
- **Firmware Flashing**: For instructions on writing the system program, see [System Firmware Flashing](./Software%20Guide/System%20Flashing%20and%20Initialization).

## Operating Instructions

### Device Operating Modes

1. **Initialization Mode**
   - The system starts in the default mode, automatically performing system update checks and time synchronization.
   - After initialization, it enters a low-power sleep state.

2. **Configuration Mode**
   - Press and hold the function key for 3 seconds to activate configuration mode.
   - Enables dual-band WiFi (AP+STA), with the hotspot name displayed as NE101_XXXXXX.
   - Access the configuration parameters via a browser at http://192.168.1.1.
   - Configuration options include:
     - Image parameter adjustment (brightness/contrast/saturation)
     - Capture schedule settings (timed/interval/triggered snapshots)
     - Network module configuration (WiFi/HALOW/cellular network)
     - Device maintenance functions
   - Sleep mechanism without operation:
     - No WiFi connection: Automatically sleeps after 1 minute.
     - WiFi connected: Enters sleep mode after 5 minutes of no operation.

3. **Working Mode**
   - Executes the preset capture schedule and automatically uploads data.
   - Locally caches images when the network is abnormal (maximum storage of 7MB).
   - Automatically resumes uploading cached data when the network is restored.

### Functional Test Process

1. **Device Initialization**
   - Properly install the device and connect the power.
   - Observe the status indicator light up for 1 second (indicating successful startup).
   - Wait approximately 1 minute for initialization to complete.

2. **Enter Configuration Interface**
   - Short press the function key to activate configuration mode.
   - Connect to the device hotspot NE101_XXXXXX.
   - Access the management page at http://192.168.1.1.
 
   ![Device WiFi Connection Illustration](/img/NE101_wifi_connect.png)
   
   ![Device Management Interface Overview](/img/NE101_web.png)

3. **Camera Detection**
   - Adjust the device viewing angle.
   - Observe the real-time update of the preview screen on the web interface.
 
   ![Real-time Preview](/img/NE101_web_cam.png)

4. **Image Parameter Settings**
   - Flashlight control:
     - Intelligent mode (photosensitive automatic adjustment)
     - Timed mode (custom time period)
     - Manual switch control
   - Brightness adjustment (0-100 levels)
   - Image enhancement settings:
     - Three-axis adjustment for brightness/contrast/saturation
     - Image mirroring function (horizontal/vertical flip)
 
   ![Image Adjustment Interface](/img/NE101_web_ImageAdjustment.png)

5. **Capture Schedule Configuration**
   - Timed snapshots (executed at fixed time points)
   - Interval shooting (periodic cycles)
   - External trigger snapshots (triggered by Alarm-In signal)
   - Manual snapshots (triggered by a button press)
 
   ![Capture Settings Interface](/img/NE101_web_cap_setting.png)

6. **Data Reporting Test**
   - Configure MQTT server parameters (setup guide in the appendix document).
   - Manually trigger test shooting.
   - Check the data push status.
 
   ![Data Reporting Configuration Interface](/img/NE101_web_DataReport.png)

7. **Network Connection Verification**
   - Select an available WiFi network.
   - Perform a Ping test to verify connectivity.
 
   ![Network Connection Interface](/img/NE101_web_WLANConnection.png)
   
   ![Network Test Illustration](/img/NE101_ping.png)

8. **Full Function Test**
   - Activate sleep mode.
   - Wait for 5 minutes for the automatic wake-up and shooting.
   - Confirm successful data upload.
 
   ![Snapshot Success Prompt](/img/NE101_cap_success.png)

## Extended Functions

- **Hardware Reset**: Use the reset button for a soft reset (see [Hardware Components Overview](./Hardware%20Guide/Components%20Overview)).
- **Device Information**: View device identification information and operating status (MAC address/serial number/firmware version/battery information).
- **Wireless Upgrade**: For OTA upgrade instructions, see [System Firmware Flashing](./Software%20Guide/System%20Flashing%20and%20Initialization).

![OTA Upgrade Interface](/img/NE101_ota.png)

> Tip: It is recommended to complete all basic tests during the first use to ensure that all functional modules are working correctly. If any abnormal conditions occur, record the status indicator light flashing mode and contact technical support.