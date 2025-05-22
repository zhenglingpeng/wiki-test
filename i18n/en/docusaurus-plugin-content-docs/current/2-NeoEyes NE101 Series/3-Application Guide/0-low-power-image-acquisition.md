# Low Power Image Acquisition

## Application Introduction

This project demonstrates an example implementation of a low-power image acquisition camera based on NE101 hardware features. The software engineering implements application logic supporting low-power working modes, communication management, MQTT management, data transmission, and more, suitable for use in image acquisition scenarios. Based on this project, developers can combine sensor data collection for acquisition decisions or integrate local AI algorithms for richer application extensions.

## Key Features

- Ultra-low power design, supporting long-term battery-powered operation
- Flexible wake-up mechanisms, supporting both timing and sensor triggers
- Complete image acquisition and data transmission process
- Open extension interfaces, supporting AI and sensor function extensions
  - For sensor extension, see ["PIR Example"](../3-Software%20Guide/3-example-pir.md)
  - For AI extension, see ["Face Recognition Example"](1-human-face-detect.md)

## Program Logic

```mermaid
flowchart LR
    %% 设置节点样式
    classDef default fill:#f9f9f9,stroke:#333,stroke-width:2px
    classDef highlight fill:#e1f5fe,stroke:#01579b,stroke-width:2px
    classDef process fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px

    %% 定义节点
    A[Device Startup]:::highlight
    B[Device Sleep]:::default
    C1[Wake-up - Timer Triggered]:::default
    C2[Wake-up - IO Triggered, See "PIR Example"]:::process
    D[Capture Image]:::default
    E[Data Processing]:::default
    E1[AI Recognition, See "Face Recognition Example"]:::process
    E2[Image Transmission Only]:::default
    F[MQTT Transmission]:::default
    G[Application Usage]:::highlight

    %% 连接关系
    A --> B
    B --> C1
    B --> C2
    C1 --> D
    C2 --> D
    D --> E
    E --> E1
    E --> E2
    E1 --> F
    E2 --> F
    F --> G
    F --> B
```

## Software Resources

1. **Pre-compiled Firmware**:
   
   - Example firmware: [lowpower_camera bin](https://github.com/camthink-ai/lowpower_camera/tree/main/bin/NE_101.1.0.1.bin)

2. **Source Code Development**:
   
   - Latest Visual Studio Code (1.99.2 or above)
   - ESP-IDF plugin (v5.1.6 version)
   - Example code repository [lowpower_camera](https://github.com/camthink-ai/lowpower_camera.git)

### Using Pre-compiled Firmware Update

1. **Device Connection**
   
   Complete hardware connection guide: [Hardware Connection Guide](.././Hardware%20Guide/Hardware%20Connection)

2. **Device Flashing**
   
   For flashing instructions, refer to: [System Flashing](./../Software%20Guide/System%20Flashing%20and%20Initialization)

### Using Source Code Development

1. **Get Source Code**
   
   ```bash
   git clone https://github.com/camthink-ai/lowpower_camera.git
   ```

2. **Open Project**
   
   Open the project directory with VS Code
   
   ![NE101_code_dir.png](/img/NE101_code_dir.png)

3. **Build**
   
   ![NE101_idf_build.png](/img/NE101_idf_build.png)

4. **Flash**
   
   ![NE101_idf_flash.png](/img/NE101_idf_flash.png)

## Software Description

This section introduces the software function modules in the project, including image adjustment, capture settings, data reporting, and other core functions. Through the configuration and use of these function modules, a complete low-power image acquisition application process can be implemented.

### Software Functions

The software functions include the following main parts:

- Image adjustment: For controlling image parameters such as brightness, contrast, saturation
- Capture settings: Supporting multiple capture modes including timed capture and alarm-triggered capture
- Data reporting: Uploading image data to the server via MQTT protocol
- Device maintenance: Providing device management and maintenance functions

The following will detail the specific parameters and usage methods of each function module.

#### Image Adjustment

- **Supplement Light**
  - Option: `Always off`
- **Brightness**
  - Adjustable range: Slider control (Current value: 0)
- **Contrast**
  - Adjustable range: Slider control (Current value: 0)
- **Saturation**
  - Adjustable range: Slider control (Current value: 2)
- **Flip Horizontal**
  - Switch status: Enabled
- **Flip Vertical**
  - Switch status: Enabled
- **Default Button**
  - Function: Reset image parameters to default values
    <img src="/img/Overview/NE101/Software/1.png" alt="Image Adjustment" style={{height: "300px", display: "block", margin: "20px auto"}} />

#### Capture Setting

- **Enable Scheduled Capture**
  - Switch status: Enabled
- **Capture Mode**
  - Current setting: `Timed Capture`
- **Time Setting**
  - Capture times:
    - Daily 09:00
    - Daily 10:00
    - Daily 11:00
    - Daily 12:00
- **Enable Alarm-In Capture**
  - Switch status: Disabled
- **Enable Capture Button**
  - Switch status: Enabled
    <img src="/img/Overview/NE101/Software/2.png" alt="Capture Setting" style={{height: "300px", display: "block", margin: "20px auto"}} />

#### Data Report

- **Host**: `192.168.44.80`
- **MQTT Port**: `1884`
- **Topic**: `left`
- **Client ID**: `HNezYuG6EVzNjJ6PAQZ0`
- **QoS**: `QoS 0`
- **Username / Password**: Empty
- **Save Button**
  - Save data reporting related configuration
    <img src="/img/Overview/NE101/Software/3.png" alt="Data Report" style={{height: "300px", display: "block", margin: "20px auto"}} />

#### Device Maintenance

- **Device Name**: `NE101 Sensing Camera 01`
- **MAC Address**: `D8:3B:DA:4E:10:88`
- **Battery**: `100%`
- **Hardware Version**: `V1.0`
- **Firmware Version**: `NE_101.1.0.1`
- **Upgrade Firmware**
  - Upgrade through local firmware file upload
    <img src="/img/Overview/NE101/Software/4.png" alt="Device Maintenance" style={{height: "300px", display: "block", margin: "20px auto"}} />

#### Connection

- **Supported Network Types**
  - Wi-Fi: Supports 2.4GHz/5GHz dual-band connection
  - WiFi HaLow: Supports 868MHz/915MHz long-range connection
  - Cat.1: Supports global cellular network connection
- **Network Configuration Features**
  - Wi-Fi network list display
    - Signal strength indicator (RSSI)
    - Encryption type display (WPA/WPA2/WPA3)
    - Real-time connection status update
  - WiFi HaLow specific configuration
    - Region selection (Europe/North America)
    - Automatic frequency band adaptation
  - Cat.1 cellular network settings
    - APN configuration
    - SIM card status display
- **Network Management**
  - One-click refresh: Quick scan for available networks
  - Auto reconnect: Automatic recovery after network interruption

<img src="/img/Overview/NE101/Software/5.png" alt="WLAN Connection" style={{height: "300px", display: "block", margin: "20px auto"}} />

#### Sleep Mode

- **Sleep Mode Button**
  - Function: One-click switch device to low-power sleep state

### Software Usage Instructions

For software usage instructions, see [Quick Start](../1-Quick%20Start.md)

## Application Instructions

> The NE101's characteristic as a low-power image acquisition device is its strong lifecycle for image capture. Below explains how to use and apply the data collected by the device with a simple example.

### Receiving MQTT Data with MQTTX

To verify if the device's data reporting function is working properly, you can use an MQTT client tool (such as [MQTTX](https://mqttx.app/)) for data reception testing.

#### Step-by-Step Instructions

> Ensure that the MQTTX server and NE101 are in the same network environment

1. Open MQTTX, click `New Connection`.
2. Set the following connection parameters:
   - **Host**: `192.168.44.80`
   - **Port**: `1884`
   - **Client ID**: Any string, e.g., `mqttx-client-01`
   - **Topic**: `left`
   - **Username / Password**: Empty
3. After connecting, subscribe to Topic `left`.
4. When the device captures image data, it will publish messages to this Topic via MQTT.

#### Data Format Description

The MQTT message payload sent by the device is in JSON format, as shown below:

```json
{
  "ts": 1740640441620,
  "values": {
    "devName": "NE101 Sensing Camera",
    "devMac": "D8:3B:DA:4D:10:2C",
    "battery": 84,
    "snapType": "Button",
    "localtime": "2025-02-27 15:14:01",
    "imageSize": 74371,
    "image": "data:image/jpeg;base64,..."
  }
}
```

#### Field Descriptions

- `ts`: Timestamp (milliseconds)
- `devName`: Device name
- `devMac`: Device MAC address
- `battery`: Battery level (percentage)
- `snapType`: Image capture type (e.g., `Button`, `Scheduled`, `PIR`, etc.)
- `localtime`: Local time (string format)
- `imageSize`: Image size (in bytes)
- `image`: Base64 encoded JPEG image data, prefixed with `data:image/jpeg;base64,`

#### Visualization Suggestions

Use Base64 image data for quick preview in web pages or tools:

```html
<img src="data:image/jpeg;base64,...">
```

You can also paste the Base64 data into [Base64 Image Viewer](https://base64.guru/converter/decode/image) for online preview.
