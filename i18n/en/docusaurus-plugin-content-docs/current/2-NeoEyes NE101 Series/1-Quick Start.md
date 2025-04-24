# Quick Start

## Product Overview

The NE100 series is a high-performance smart camera product line designed for IoT applications, with the NE101 standard firmware providing core functions such as timed capture and data reporting. This guide will help you quickly master the usage of the product.

## Hardware Preparation

### Hardware Components
- **Complete Device**: Includes full enclosure and battery compartment
- **Development Board**: Exposed PCB board for easy debugging and development
- **Accessory Pack**: Includes USB data cable, mounting bracket, etc.

For detailed hardware descriptions, please refer to:
- [Hardware Components Overview](./Hardware%20Guide/Components%20Overview)
- [Hardware Connection Guide](./Hardware%20Guide/Hardware%20Connection)

## Operating Guide

### Device Installation

#### Complete Device Mode (Factory Configuration)
![NE101 Complete Device Appearance](/img/NE101_Complete_Machine.png)  
![NE101 Complete Device Disassembly Diagram](/img/NE101_Complete_Machine2.png)  

**Usage Points**:
1. Open the back cover to install the battery (pay attention to the polarity)
2. Waterproof design, suitable for outdoor installation
3. Standard 1/4 screw hole, compatible with most brackets

#### Development Board Mode (Debugging)
![NE101 Main Board Front View](/img/NE101_Main_Board.png)  
![NE101 Main Board Interface Diagram](/img/NE101_Main_Board2.png)  

**Usage Points**:
1. Power via Type-C interface (5V/1A or above)
2. Interface designed to prevent incorrect connections
3. Reserved debugging serial port (115200 bps)

> **Safety Tips**: Ensure correct battery installation in complete device mode; avoid short-circuit risks in development board mode

### Quick Start Process

1. **Powering the Device**
   - Complete Device: Automatically starts after battery installation
   - Development Board: Connect USB power

2. **Status Confirmation**
   - Power indicator lights up for 1 second indicating successful start
   - System initialization takes approximately 1 minute

3. **Entering Configuration Mode**
   - Short press the function key (about 0.5 seconds)
   - Device hotspot name displays as NE101_XXXXXX

4. **Connecting to Management Interface**
   - Connect your phone/computer to the device WiFi
   - Access http://192.168.1.1

![Device WiFi Connection Diagram](/img/NE101_wifi_connect.png)
![Device Management Interface Overview](/img/NE101_web.png)

### Core Function Configuration

#### Image Capture Settings
![Real-time Image Preview](/img/NE101_web_cam.png)

**Key Parameters**:
- **Flash Mode**:
  - Intelligent Auto (default)
  - Timed On
  - Forced Off

- **Image Adjustment**:
  - Brightness grading adjustment (0-90 levels)
  - Three-axis adjustment (brightness/contrast/saturation)
  - Image mirroring function

![Image Adjustment Interface](/img/NE101_web_ImageAdjustment.png)

#### Capture Plan Configuration
![Capture Settings Interface](/img/NE101_web_cap_setting.png)

**Working Modes**:
1. **Timed Capture**: Set specific time points
2. **Interval Shooting**: Set cycle period (5 minutes - 24 hours)
3. **External Trigger Mode**: Trigger via Alarm-In signal
4. **Manual Mode**: Capture triggered by button press

#### Network and Data
![Network Connection Interface](/img/NE101_web_WLANConnection.png)

**Network Test (Serial Connection)**:
```bash
# Example of executing ping test via serial port
ping www.example.com -c 4
```
![Network Test Diagram](/img/NE101_ping.png)

**Data Reporting**:
1. Configure MQTT server parameters
2. Verify data stream using MQTTX tool
3. Check reporting status

![Data Reporting Configuration Interface](/img/NE101_web_DataReport.png)
![MQTT Data Stream Example](/img/NE101_MQTT.png)

### Function Verification Process

1. Enter sleep mode (auto wake-up after 5 minutes)
2. Trigger capture task (timed/manual/external trigger)
3. Confirm image quality (resolution/exposure/focus)
4. Verify data upload (server reception confirmation)

![Capture Success Prompt](/img/NE101_cap_success.png)

## Detailed Device Working Modes

| Mode       | Trigger Condition | Duration   | Main Function       |
|------------|-------------------|------------|---------------------|
| Initialization | Auto on power-up | ~1 minute  | System self-check, time synchronization |
| Configuration | Button trigger    | 1-5 minutes | Parameter setting, status check |
| Working    | Plan trigger       | As needed  | Image capture, data reporting |
| Sleep      | Auto entry         | As planned | Low-power standby   |

## Advanced Functions

### Device Maintenance
- **Hardware Reset**: Short press reset button to restart
- **Device Information**: View MAC address/firmware version
- **Wireless Upgrade**: Supports OTA firmware updates

![OTA Upgrade Interface](/img/NE101_ota.png)

> **Technical Support**: It is recommended to complete a full function test during the first use.