import Link from "@docusaurus/Link";
import SupportGrid from '@site/src/components/SupportGrid';
import AccessoriesTable from '@site/src/components/AccessoriesTable';
import ApplicationScenarios from '@site/src/components/ApplicationScenarios';

# Overview

## Product Introduction
![NE101](/img/Overview/NE101/NE101.png)

CamThink Event Camera NeoEyes NE101 is a low-power intelligent camera based on event-triggered capture, adopting a modular design concept with the feature of **ultra-low power consumption** (standby less than 1W). The camera supports developers to expand various trigger shooting methods (PIR/laser radar/sound, etc.), and can be equipped with different sensor modules to achieve **event monitoring image capture**. It autonomously wakes up and captures images according to trigger conditions, greatly saving power consumption. Its **open hardware architecture** allows developers to flexibly expand functional modules according to actual needs, quickly completing the transition from prototype to commercial product.

### Hardware Features
> The NeoEyes NE101 product consists of multiple functional units such as the front cover, lens module, motherboard, communication module, and battery module. The modules are connected through standardized interfaces, facilitating disassembly and maintenance, and supporting developers to replace, upgrade, or customize specific modules as needed.
- **Layered Structure Design**: Adopts a modular layout with front/middle/rear separation, facilitating quick disassembly and functional expansion, supporting users to DIY modifications as needed. For structural design files, please refer to [Product Resources](#产品资源).
- **Diverse Installation Support**: The main structure reserves a variety of mounting holes, compatible with various bracket and shell expansion schemes. With CamThink's [Product Accessories](#产品配件), it can be flexibly deployed in different usage scenarios.
- **Optional Camera Modules**: The motherboard supports CPI and USB camera modules, allowing the replacement of lenses with different specifications to meet the image capture needs of different scenarios. For details on camera module replacement and supported specifications, see [Replaceable Camera Modules](#可更换相机模组).
- **Optional Communication Solutions**: Supports WiFi, LTE Cat-1, WiFi-Halow communication solution switching to meet the communication needs of different scenarios. For details on communication module replacement and supported specifications, see [Communication Solution Expansion](#通讯方案扩展).
- **Optional Power Supply Solutions**: Default support for battery compartment power supply, 4 AA batteries can work, and can also be powered via the motherboard's USB-C for wired power supply.
- **Hardware Openness**: Provides structural design files for DIY shells (3D printable) or custom expansion, offers complete open-source firmware with out-of-the-box functions: low power mode, device wake-up, MQTT data transmission, fill light control, timed shooting, image parameter adjustment, and network management. For development and flashing, please refer to [Software Guide](./3-Software%20Guide/1-System%20Flashing%20and%20Initialization.md).

![NE101](/img/Overview/NE101/Module.png)

### Ultra-Low Power Support
> The NeoEyes NE101 adopts advanced low-power design concepts, suitable for applications with strict requirements on battery life such as periodic image capture. The official software supports low-power working mode by default, and developers can flexibly expand functions based on the basic project.
- **Ultra-Long Battery Life**: In Wi-Fi communication mode, the default low-power configuration supports 10 shots per day, with a battery life of over 3 years (theoretical value), greatly reducing maintenance frequency. Suitable for field or non-continuous power supply environments. For more power consumption test performance, see the table below:

  | Communication Method | 6V Battery Life | 7.2V Lithium Battery Life | Usage Recommendations |
  |----------------------|-----------------|---------------------------|-----------------------|
  | Wi-Fi                | 2.39 years      | 6.20 years                | Best performance under 7.2V high-energy battery, suitable for most medium and short-distance deployment needs |
  | Halow Wi-Fi          | 1.46 years      | 4.30 years                | Balances battery life and long-distance communication, suitable for remote or obstructed environments |
  | Cat.1                | 0.83 years      | 2.08 years                | Although it supports wide-area cellular networks, it is recommended to use external power supply optimization strategies in ultra-low power scenarios |
  > Note: The test conditions are 10 shots per day, with a battery usage rate of 70%. The 6V battery is a standard AA battery, and the 7.2V lithium battery is a 4-cell 38.8Wh specification. **The lithium battery is not currently supported by the standard battery compartment. Please contact us if needed**.

- **Sensor Low-Power Expansion Support**: Supports event wake-up capture operation mechanism in image trigger mode (such as PIR, radar, temperature, etc.), entering deep sleep in non-working states, fully ensuring controllable power consumption under different trigger frequencies. For development cases on how to expand sensor event capture and sensor connection, see [PIR Example](./3-Software%20Guide/3-example-pir.md).

- **Open-Source Firmware, Commercial Support**: The firmware source code is completely open-source, supporting free commercial use and secondary development. The firmware provides out-of-the-box functions such as image capture, low-power management, and data communication. Developers can quickly expand application logic based on this, shortening the development cycle from prototype to landing. For firmware functions and developer guidance, see [Low-Power Capture Camera Example](./4-Application%20Guide/0-low-power-image-acquisition.md).

![Wireless communication](/img/Overview/NE101/Conet.png)

### Hardware Interface Expansion
> The NeoEyes NE101 supports expanding hardware capabilities according to hardware usage scenarios. For the use of various physical interfaces, see [Hardware Guide](./2-Hardware%20Guide/0-Components%20Overview.md).
- **16Pin IO Interface**: The back of the motherboard reserves a 16pin socket with GPIOs, DI, DO, etc., supporting the connection of various sensor-triggered shooting (resource usage depends on the communication module and USB camera occupation). For specific IO resources, see [Hardware Guide - Hardware Connection - 16Pin GPIO Expansion](./2-Hardware%20Guide/1-Hardware%20Connection.md).
- **Power Interface**: The back of the motherboard has a 2pin power socket supporting battery compartment connection power supply. The front bottom of the motherboard has a USB-C interface supporting wired direct power supply (the whole machine needs to be led out through the bottom opening).
- **Micro TF Card Slot**: Can be used for storage expansion, suitable for local image or data storage.
- **Debug Interface**: Type-C and UART are used for development serial debugging.
- **Fill Light**: Fill light and light-sensitive support, suitable for image capture in close-range dark environments.
- **Alarm Interface**: 2Pin Wafer supports alarm input.
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/Overview/NE101/PCBT.png" alt="Front of the motherboard" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/Overview/NE101/PCBB.png" alt="Back of the motherboard" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
</div>

### Communication Solution Expansion
> The NeoEyes NE101 supports WiFi communication transmission by default and supports the selection of LTE Cat-1 and WiFi-Halow communication modules. The modules are connected to the pin socket on the front of the motherboard to support LTE Cat-1 and WiFi-Halow communication, facilitating the replacement and expansion of hardware communication solutions. For the replacement and use of modules, see [Hardware Guide](./2-Hardware%20Guide/0-Components%20Overview.md).
- **Interface and Compatibility**: Standard PIN socket connection, located on the front of the motherboard, supporting driver-free recognition.
- **Cat-1 Module Specifications**: Quectel EG912UGL, supporting LTE FDD/TDD and GSM (global support except North America), size 60mm x 60mm.
- **WiFi HaLow Module Specifications**: Quectel FGH100M, based on IEEE 802.11ah protocol for long-distance low-power connection, size 60mm x 60mm.
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/Overview/NE101/cat1PCBA.png" alt="Cat-1 PCBA" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/Overview/NE101/wifihalow.png" alt="WiFi HaLow PCBA" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
</div>

### Replaceable Camera Modules
> The NeoEyes NE101 adopts a modular camera design, supporting users to flexibly replace lens modules with different parameters according to actual application scenarios to adapt to different shooting angles and focusing distance requirements. For details on module replacement and usage, see [Hardware Guide](./2-Hardware%20Guide/0-Components%20Overview.md).

#### Hardware Feature Advantages
- **Flexible Deployment**: Choose the most suitable lens module according to deployment height, space size, and recognition target.
- **Low-Cost Upgrade**: Significantly improve visual effects by simply replacing the lens module without needing to replace the motherboard.

#### Supported Camera Module Specifications
<table style={{ width: '100%', tableLayout: 'fixed' }}>
  <thead>
    <tr>
      <th style={{ width: '20%' }}>Type</th>
      <th style={{ width: '20%' }}>Model</th>
      <th style={{ width: '20%' }}>Field of View</th>
      <th style={{ width: '20%' }}>Focusing Distance</th>
      <th style={{ width: '20%' }}>Application Scenario</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan="4">CPI Camera</td>
      <td>OV5640</td>
      <td>60°</td>
      <td>8cm</td>
      <td>Close-range shooting</td>
    </tr>
    <tr>
      <td>OV5640</td>
      <td>60°</td>
      <td>3m</td>
      <td>Standard distance shooting</td>
    </tr>
    <tr>
      <td>OV5640</td>
      <td>120°</td>
      <td>15cm</td>
      <td>Wide-angle close-range shooting</td>
    </tr>
    <tr>
      <td>OV5640</td>
      <td>120°</td>
      <td>4m</td>
      <td>Wide-angle standard distance shooting</td>
    </tr>
    <tr>
      <td rowSpan="2">USB Camera</td>
      <td>2MP USB Module</td>
      <td>60°</td>
      <td>9m</td>
      <td>Long-range shooting</td>
    </tr>
    <tr>
      <td>2MP USB Module</td>
      <td>120°</td>
      <td>5m</td>
      <td>Standard distance shooting</td>
    </tr>
  </tbody>
</table>
Note: The USB camera module will occupy additional IO resources. For details, see [Hardware Guide - Hardware Connection - 16Pin GPIO Expansion](./2-Hardware%20Guide/1-Hardware%20Connection.md).

<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/Overview/NE101/sensor1.png" alt="Cat-1 PCBA" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/Overview/NE101/sensor2.png" alt="WiFi HaLow PCBA" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
</div>

### Applicability and Deployment
> The NeoEyes NE101 is designed to balance outdoor stability and flexible deployment capabilities, suitable for a variety of installation environments and scenarios.
- **Front Cover Lens Tempered Glass**: The lens front cover is made of high-transparency tempered glass, with excellent rainwater accumulation prevention capabilities, ensuring stable long-term outdoor shooting effects.
- **Wireless and Outdoor Deployment Support**: Supports battery power supply and low-power operation, combined with IP67 protection design, suitable for long-term deployment in various harsh environments.
- **Flexible Installation Methods**: Supports wall, ceiling, and pole mounting, providing a variety of original brackets and shell expansion components to meet diverse deployment needs. For bracket specifications and common uses, see [Product Accessories - Optional Accessories](#产品选配配件).
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/Overview/NE101/Bracket/1.png" alt="Bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/Overview/NE101/Bracket/3.png" alt="Bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/Overview/NE101/Bracket/5.png" alt="Bracket" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
</div>

## Product Information
### Product Specifications
The specifications of the NE101 product are as follows:
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', justifyContent: 'center', alignItems: 'center' }}>
  <img src="/img/Overview/NE101/NE101.png" alt="NE101" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/Overview/NE101/ProductBL.png" alt="NE101" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
  <img src="/img/Overview/NE101/ProductR.png" alt="NE101" style={{ height: '300px', objectFit: 'contain', margin: '0 auto' }} />
</div>
<table style={{ width: '100%', tableLayout: 'fixed' }}>
  <thead>
    <tr>
      <th style={{ width: '20%' }}>Product Model</th>
      <th style={{ width: '20%' }}>NE101</th>
      <th style={{ width: '20%' }}>NE101-L01GL</th>
      <th style={{ width: '20%' }}>NE101-HL00</th>
      <th style={{ width: '20%' }}>NE101-HL01</th>
    </tr>
  </thead>
  <tbody style={{ textAlign: 'center' }}>
    <tr>
      <td style={{ width: '20%' }}><strong>Communication</strong></td>
      <td style={{ width: '20%' }}>WiFi</td>
      <td style={{ width: '20%' }}>Cat.1 (Global)</td>
      <td style={{ width: '20%' }}>WiFi-HaLow (868MHz)</td>
      <td style={{ width: '20%' }}>WiFi-HaLow (915MHz)</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>MCU</strong></td>
      <td colSpan="4">ESP32-S3</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>RAM</strong></td>
      <td colSpan="4">8MB</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Flash</strong></td>
      <td colSpan="4">16MB</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Camera Module</strong></td>
      <td colSpan="4">OV5640 Module, selectable 120°/60°FOV and near/far focus options</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Fill Light</strong></td>
      <td colSpan="4">Supported</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Bluetooth</strong></td>
      <td colSpan="4">Supported</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Button</strong></td>
      <td colSpan="4"> Snap (on the side of the host), Boot (on the motherboard), Reset (on the motherboard)</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Storage</strong></td>
      <td colSpan="4">Micro-TF (on the motherboard)</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Alarm Interface</strong></td>
      <td colSpan="4">Alarm *1 (on the motherboard)</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Expansion IO</strong></td>
      <td colSpan="4">UART *1, 16Pin IO *1 (on the motherboard)</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Power Supply</strong></td>
      <td colSpan="4">Battery power, Type-C power support (on the motherboard)</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Operating Temperature</strong></td>
      <td colSpan="4">-20°C ~ 50°C</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Operating Humidity</strong></td>
      <td colSpan="4">10% ~ 90% RH</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Protection Rating</strong></td>
      <td colSpan="4">IP67</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Certification</strong></td>
      <td colSpan="4">CE / FCC / RoHs</td>
    </tr>
    <tr>
      <td style={{ width: '20%' }}><strong>Dimensions</strong></td>
      <td colSpan="4">77mm × 77mm × 48mm</td>
    </tr>
  </tbody>
</table>

### Product Accessories

#### Standard Accessories
>The standard accessories provided for the CamThink Event Camera NeoEyes NE101 product series are as follows:

<AccessoriesTable
  accessories={[
    {
      image: "/img/Accessories/Battery.png",
      name: "Battery",
      quantity: "4",
      description: ["AA batteries"]
    }
  ]}
/>

#### Optional Accessories
>The optional accessories supported by the CamThink Event Camera NeoEyes NE101 product series are as follows:

<AccessoriesTable
  accessories={[
    {
      image: "/img/Overview/NE101/Bracket/1.png",
      name: "Bottom Bracket Extension",
      quantity: "1",
      description: ["Suitable for top and bottom installation expansion"]
    },
    {
      image: "/img/Overview/NE101/Bracket/3.png",
      name: "Back Bracket Extension",
      quantity: "1",
      description: ["Suitable for wall-mounted camera expansion"]
    },
    {
      image: "/img/Overview/NE101/Bracket/5.png",
      name: "Pole Bracket",
      quantity: "1",
      description: ["Suitable for complex scenarios requiring multi-angle adjustment of the camera. The kit includes 2 metal poles and 2 adapters, with customizable metal poles."]
    },
    {
      image: "/img/Overview/NE101/Bracket/4.png",
      name: "Dial Bracket",
      quantity: "1",
      description: ["Suitable for fixed installation of instruments with less environmental light impact"]
    },
    {
      image: "/img/Overview/NE101/Bracket/2.png",
      name: "Water Meter Bracket",
      quantity: "-",
      description: ["3D design files can be provided for self-3D printing. Not a physical bracket option."]
    },
    {
      image: "/img/Overview/NE101/sensor2.png",
      name: "OV5640 Camera Module",
      quantity: "1",
      description: [
        "Supports 4 specifications:",
        "60° FOV, 15cm focus",
        "60° FOV, 4m focus",
        "120° FOV, 8cm focus",
        "120° FOV, 3m focus",
      ]
    },
    {
      image: "/img/Overview/NE101/sensor1.png",
      name: "2MP USB Camera Module",
      quantity: "1",
      description: [
        "Supports 2 specifications:",
        "60° FOV, 9m focus",
        "120° FOV, 5m focus",
      ]
    },
    {
      image: "/img/Overview/NE101/wifihalow.png",
      name: "WiFi-Halow Communication Module + Antenna",
      quantity: "1",
      description: ["Can be assembled through the motherboard slot, supports 868/915 frequency band selection"]
    },
    {
      image: "/img/Overview/NE101/cat1PCBA.png",
      name: "Cat.1 Communication Module + Antenna",
      quantity: "1",
      description:["Can be assembled through the motherboard slot, currently only supports the global version"]
    },
  ]}
/>

## Product Applications

### Applicable Scenarios

>The NE101 low-power intelligent camera, with its ultra-low power consumption and modular design, can be widely used in IoT scenarios that require event-triggered or periodic image capture.

<ApplicationScenarios
  imagePosition="center"
  maxDescriptionLines={4}
  categories={[
    {
      title: "Smart Agriculture",
      items: [
        {
          title: "Crop Growth Monitoring",
          description: "By timing shots or triggering through environmental changes, the growth status of crops is recorded. It supports remote monitoring of crop growth. With a battery life of over 3 years for 10 shots per day, it is particularly suitable for remote farmland scenarios.",
          image: "https://vst.co.jp/wp-content/uploads/2023/12/crop-growth-monitoring.jpg"
        },
        {
          title: "Livestock Behavior Analysis", 
          description: "Combined with PIR sensors to monitor livestock activities, it automatically captures behavioral images to help detect sick animals or animals in estrus in a timely manner, improving breeding management efficiency.",
          image: "https://cdn.prod.website-files.com/6479eab6eb2ed5e597810e9e/67ed59d05b90b9b7844d7b8d_66574ab3528f7a863374f263_Abi%2520Animals%2520fig2%2520(1).png"
        }
      ]
    },
    {
      title: "Industrial Monitoring",
      items: [
        {
          title: "Equipment Instrument Reading",
          description: "Periodically captures images of industrial instrument data, and automatically recognizes values through AI algorithms with 99% accuracy, replacing manual meter reading. Suitable for water meters, electricity meters, etc.",
          image: "https://paddlepaddle-static.cdn.bcebos.com/paddle-wechat-image/mmbiz.qpic.cn/mmbiz_jpg/sKia1FKFiafggJl2ia9vZspq5HEUD40PZ45jncMjpzAkFTS2rGdUgKUVRbv6BEv6pVHrUxCgib0EGRGWX8ewYMZL4A/image"
        },
        {
          title: "Equipment Status Monitoring",
          description: "Captures abnormal status triggered by vibration sensors, and combines temperature sensors to provide overheating alerts. It supports local storage and cloud synchronization to prevent equipment failures.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kIJ75qOclzQcDP17foO33PreHzALfI2RUA&s"
        }
      ]
    },
    {
      title: "Outdoor Detection",
      items: [
        {
          title: "Intrusion Detection",
          description: "Paired with PIR/radar sensors to achieve low-power perimeter protection, it automatically wakes up and captures images upon detecting moving objects and uploads alarm images. The standby power consumption is only 0.8W, saving more than 90% of energy compared to traditional IPCs.",
          image: "https://ai-studio-static-online.cdn.bcebos.com/cd55436715184210b0877245a1b2e88a4ccb3b799e61443f94925578a596eb3f"
        },
        {
          title: "Wildlife Monitoring",
          description: "Deployed in nature reserves, it captures wildlife activities triggered by infrared sensors. It supports WiFi HaLow long-distance transmission with a maximum communication distance of up to 1km. Powered by batteries, it can operate for over 2 years.",
          image: "https://cdn.prod.website-files.com/6479eab6eb2ed5e597810e9e/67ed59d05b90b9b7844d7b9b_66574b3555420ad0324a7750_Abi%2520Animals%2520fig6%2520(1).png"
        }
      ]
    },
  ]}
/>

### Application Engineering Examples

>The NE101 product series can meet diverse application needs through flexible configuration. The following are typical application cases. Each case provides a detailed deployment guide to help you quickly implement your project.

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  }}
>
  {(() => {
    const BASE_URL = "/docs/NeoEyes NE101 Series/Application Guide/";
    
    const examples = [
      { 
        title: "AI Face Recognition", 
        image: "/img/NE101_example_human_detect_1.png", 
        description: "This example demonstrates how to use the NE101 to implement a real-time face detection application, which can be replaced with other AI scene applications as needed.", 
        path: "human-face-detect"
      },
      { 
        title: "Low-Power Image Capture", 
        image: "/img/Overview/NE101/lowpower.png", 
        description: "This project implements the low-power working mode of the NE101, with a battery life of over 3 years for 10 shots per day. It can be expanded to capture images in event scenarios using sensors. The project provides complete project engineering source code, supporting secondary development and expansion by developers.", 
        path: "low-power-image-acquisition"
      }
    ];
    
    return examples.map((item, index) => (
      <a href={`${BASE_URL}${item.path}`} key={index} style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            border: "1px solid var(--ifm-color-emphasis-200)",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "1rem",
            textAlign: "left",
            cursor: "pointer",
            position: "relative",
            transition: "all 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>{item.title}</h3>
          <img
            className="no-zoom"
            src={item.image}
            alt={item.title}
            style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "0", width: "100%" }}
          />
          <p
            style={{
              marginTop: "0.5rem",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              WebkitLineClamp: 2,
              textOverflow: "ellipsis",
              transition: "all 0.3s ease-in-out",
            }}
          >
            {item.description}
          </p>
        </div>
      </a>
    ));
  })()}
</div>

## Product Resources
### Product Tutorials
For instructions on how to quickly use the NE101 product series, see [Quick Start Guide](./1-Quick%20Start.md).

For information on how to use the hardware features of the NE101 series, see [Hardware Guide](./2-Hardware%20Guide/0-Components%20Overview.md).

For instructions on using the system drivers and development guidance for the NE101 series, see [System and Driver Guide](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md).

### Product Resources

| Resource Name                 | Address                                                                 |
|--------------------------|----------------------------------------------------------------------|
| Hardware Schematic               | [/docs/hardware-schematic](/docs/hardware-schematic)                 |
| Hardware Design Guide             | [/docs/hardware-guide](/docs/hardware-guide)                         |
| Bill of Materials (BOM)           | [/docs/bom-list](/docs/bom-list)                                     |
| Project Engineering Example Code         | [GitHub](https://github.com/camthink-ai/examples)                  |
| API Reference Documentation             | [/docs/api-reference](/docs/api-reference)                           |
| SDK Toolkit               | [/downloads/sdk-toolkit](/downloads/sdk-toolkit)                     |

## Technical Support

<SupportGrid />