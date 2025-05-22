import AccessoriesTable from '@site/src/components/AccessoriesTable';

# Quick Start

## Overview
This tutorial provides detailed instructions for using the NE101 device, covering basic operation, device configuration, and installation procedures.

## Product Preparation
Before starting, prepare the following items: NE101 device, 4×AA batteries (size 5), a Phillips screwdriver, and optional accessories such as Cat-1 communication module or WiFi-Halow module. If you don't have an NE101 yet, visit our [online store](https://www.camthink.ai) to purchase.

![NE101](/img/QuickStart/NE101/ne101_1.png)

## Device Operation
### Powering On
1. Use the screwdriver to remove the rear cover.
2. Install batteries into the battery compartment as indicated.
3. Wait for the **indicator light** on the front to **flash**, indicating successful boot-up.
4. Reattach the rear cover.

<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_2.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_3.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_4.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_5.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
</div>

### Device Configuration
The NE101 provides a configuration web interface via its built-in WiFi AP (SSID: **NE101_ABC123**). Connect to this AP using a smartphone/computer, then access `http://192.168.1.1` to configure device parameters.

#### 1. Verify Power Status
Press the capture button on the right side. If the flash activates, the device is powered on. In normal operation, pressing this button triggers image capture and MQTT upload.

<div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_6.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
</div>

#### 2. Connect to WiFi AP
After booting, locate the **NE101_ABC123** WiFi network and connect (no password required). For newer firmware versions, **long-press the capture button for 3 seconds** to activate the AP mode (indicator flashes).

<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_7.gif" alt="bracket" style={{ height: '400px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_9.png" alt="bracket" style={{ height: '200px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_10.png" alt="bracket" style={{ height: '400px', objectFit: 'contain', margin: '0 auto' }} />
</div>

#### 3. Configuration Settings
##### Image Settings
> Applies to OV5640 camera modules. USB modules only support fill light settings.
- **Reset Button**: Restores factory settings for OV5640 modules.
- **Fill Light Mode**:
  - *Auto*: Activates fill light when ambient light drops below a set threshold (adjustable via light sensor data).
  - *Custom*: Enables scheduled operation with time ranges and intensity (1-100).
  - *Always On/Off*: Constant fill light state.
- **Image Adjustments**:
  - Brightness/Contrast/Saturation: 0-2 scales.
  - Horizontal/Vertical Flip: For installation adjustments.

<div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_11.png" alt="bracket" style={{ height: '400px', objectFit: 'contain', margin: '0 auto' }} />
</div>

##### Capture Settings
- **Scheduled Capture**:
  - *Timed Mode*: Daily or weekly schedules (up to 8 time points).
  - *Interval Mode*: Minute/hour/day-based intervals (single rule).
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_12.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_13.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
</div>

- **Alarm-In Trigger**: Uses hardware signals via the rear Alarm-In port.
<div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_18.png" alt="bracket" style={{ height: '400px', objectFit: 'contain', margin: '0 auto' }} />
</div>

- **Button Capture**: Enabled by default. Disabling this prevents manual capture via the side button.
<div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_19.png" alt="bracket" style={{ height: '400px', objectFit: 'contain', margin: '0 auto' }} />
</div>

##### Data Reporting (MQTT)
Configure MQTT parameters for data transmission:
- Host: Domain/IP of MQTT broker.
- Port: Default 1883.
- Topic: Data publication topic.
- Client ID: Unique MQTT client identifier.
- QoS: 0/1/2.
- Username/Password: Broker authentication.

<div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_15.png" alt="bracket" style={{ height: '400px', objectFit: 'contain', margin: '0 auto' }} />
</div>

##### Device Management
View device info and update firmware:
- Device Name: Editable identifier included in MQTT data.
- MAC/SN: Hardware identifiers.
- Battery Level: Current charge.
- Firmware Version: Display and update via file upload.

<div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_14.png" alt="bracket" style={{ height: '400px', objectFit: 'contain', margin: '0 auto' }} />
</div>

##### Network Configuration
- **WiFi**: Scan and connect to available networks (stores latest credentials).
<div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_13.png" alt="bracket" style={{ height: '400px', objectFit: 'contain', margin: '0 auto' }} />
</div>

- **Cat-1 (Cellular)**:
  1. Insert compatible SIM card (non-North American regions).
  2. Configure APN, credentials, and PIN in the Cellular section.
  3. Test connectivity and save settings.
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_21.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_20.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_23.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_22.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
</div>

- **WiFi Halow**: Select region frequency and connect to Halow gateways.
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/QuickStart/NE101/ne101_24.png" alt="bracket" style={{ height: '200px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_25.png" alt="bracket" style={{ height: '200px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_26.png" alt="bracket" style={{ height: '200px', objectFit: 'contain', margin: '0 auto' }} />
</div>

### Device Testing
Verify functionality by capturing images and checking MQTT data reception using tools like [MQTTX](https://mqttx.app/).

#### MQTTX Setup Example
1. Create a new connection with:
   - **Host**: `192.168.44.80`
   - **Port**: `1884`
   - **Topic**: `left`
2. Subscribe to the topic and press the device's capture button.
3. Validate received JSON payload containing image data in Base64 format:

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

##### Field Descriptions

- `ts`: Timestamp (milliseconds)
- `devName`: Device name
- `devMac`: Device MAC address
- `battery`: Battery level (percentage)
- `snapType`: Image capture type (e.g., `Button`, `Scheduled`, `PIR`, etc.)
- `localtime`: Local time (string format)
- `imageSize`: Image size (in bytes)
- `image`: Base64 encoded JPEG image data, prefixed with `data:image/jpeg;base64,`

##### Visualization Suggestions

You can quickly preview images in a web page or tool using the Base64 image data:

```html
<img src="data:image/jpeg;base64,...">
```

You can also paste the Base64 data into a[Base64 IMAGE View](https://base64.guru/converter/decode/image) for online preview.



## Product Installation
>The NE101 offers various installation options, and you can choose from the wide range of brackets provided by CamThink. Below, we'll explain how to simply use and install the main optional brackets.
### Bottom Bracket Extension
Locate the screw hole on the side of the NE101. Align the bracket with the device, then use screws to secure it. Once fixed, you can rotate the bracket to adjust the angle. Secure the bottom of the bracket to the desired mounting location by drilling screw holes.
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/Overview/NE101/Bracket/1.png" alt="bracket" style={{ height: '400px', objectFit: 'contain', margin: '0 auto' }} />
   <img src="/img/QuickStart/NE101/ne101_27.png" alt="bracket" style={{ height: '400px', objectFit: 'contain', margin: '0 auto' }} />
</div>


### Back Bracket Extension
Locate the screw hole on the side of the NE101. Align the bracket with the device, then use screws to secure it. Find the desired wall-mounting location and secure the bracket by screwing into the screw holes on both sides.
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/Overview/NE101/Bracket/3.png" alt="bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/QuickStart/NE101/ne101_28.png" alt="bracket" style={{ height: '400px', objectFit: 'contain', margin: '0 auto' }} />
</div>

