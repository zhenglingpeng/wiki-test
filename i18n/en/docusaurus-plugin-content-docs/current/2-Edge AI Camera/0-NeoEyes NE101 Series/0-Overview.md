import Link from "@docusaurus/Link";

# Overview

## Product Introduction
![NE101](/img/Overview/NE101/NE101.png)

The CamThink NeoEyes NE101 is a low-power camera based on event-triggered capture, featuring hardware modularity and high product flexibility/extensibility. Combined with the hardware design files, developer Wiki, SDK, firmware, accessories and other resources provided by CamThink, developers can quickly expand various definitions like sensors, power supplies, and enclosures according to scenario requirements to DIY event-based image capture cameras for various scenarios. This enables rapid implementation of edge image capture and computing applications.

### Key Features
- **Wireless Installation & Deployment**: Supports battery power and interchangeable communication modules (WiFi, Cat1, WiFi-Halow) for easy installation.
- **Low-Power Design**: Supports ultra-low-power operation modes. With WiFi communication, the product can achieve over 3 years of battery life at 1 capture per day.
- **Open-Source Firmware**: All firmware source code is open-source and free for commercial use. Offers out-of-the-box functionality while supporting secondary development to accelerate hardware implementation.
- **Modular Structural Design**: Easily disassembled into front cover, main body, and rear cover with screw-fastening, supporting DIY modifications.
- **Outdoor Deployment Support**: IP67-rated for outdoor deployment.

### Hardware Modularity
- **Modular Design**: Front/middle/rear separable modular design for easy expansion and disassembly. Modular hardware includes camera module, communication module, and mainboard for flexible scenario adaptation.
- **Structural Expandability**: Tempered glass front cover with good light transmission and screw-fastening for easy module replacement. Features: 
  - Side-mounted capture button for instant snapshots
  - Bracket mounting holes for enclosure expansion
  - Bottom 4mm threaded holes for various bracket types
  - Side rubber grommets for external wiring

<div className="performance-cards" style={{ width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  {[
    {
      title: 'Modular Structure Design',
      imageSrc: require('/img/Overview/NE101/Module.png').default,
      altText: 'Modular Structure Design',
    },
    {
      title: 'Front Cover Design',
      imageSrc: require('/img/Overview/NE101/ProductTop.png').default,
      altText: 'Front Cover Design',
    },
    {
      title: 'Reserved Sensor Ports',
      imageSrc: require('/img/Overview/NE101/ProductL.png').default,
      altText: 'Reserved Sensor Ports',
    },
    {
      title: 'Function Buttons',
      imageSrc: require('/img/Overview/NE101/ProductR.png').default,
      altText: 'Function Buttons',
    },
    {
      title: 'Bracket Mounting Holes',
      imageSrc: require('/img/Overview/NE101/ProductB.png').default,
      altText: 'Bracket Mounting Holes',
    }
  ].map((card, index) => (
    <div key={index} className="card" style={{ border: '1px', borderRadius: '8px', padding: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>{card.title}</h3>
      <img
        src={card.imageSrc}
        alt={card.altText}
        style={{
          height: '150px',
          objectFit: 'contain',
          margin: '15px 0',
          borderRadius: '4px'
        }}
      />
    </div>
  ))}
</div>

### Modular PCBA Design
#### 1. Feature-Rich Expandable Mainboard
- **Abundant PCBA Interfaces**: Supports plug-and-play communication modules for easy hardware expansion. See [「Hardware Guide」](../0-NeoEyes%20NE101%20Series/2-Hardware%20Guide/0-Components%20Overview.md)
- **16Pin IO Interface**: Supports various sensor-triggered captures (resource usage depends on communication module and USB camera). See [「IO Resource Table」](../0-NeoEyes%20NE101%20Series/2-Hardware%20Guide/0-Components%20Overview.md)
- **Power Interface**: Supports battery or Type-C power. See [「Hardware Guide」](../0-NeoEyes%20NE101%20Series/2-Hardware%20Guide/0-Components%20Overview.md)
- **Micro TF Card Slot**: For storage expansion. See [「Hardware Guide」](../0-NeoEyes%20NE101%20Series/2-Hardware%20Guide/0-Components%20Overview.md)
- **Debug Interface**: Type-C & UART for development. See [「Hardware Guide」](../0-NeoEyes%20NE101%20Series/2-Hardware%20Guide/0-Components%20Overview.md)

#### 2. Optional Cat-1 Communication Module
- **Module**: Quectel EG912UGL (LTE FDD/TDD & GSM, global support except North America)
- **Size**: 60mm x 60mm

#### 3. Optional WiFi HaLow Module
- **Module**: Quectel FGH100M (IEEE 802.11ah protocol for long-range low-power connectivity)
- **Size**: 60mm x 60mm

#### 4. Interchangeable Lens Modules
- **OV5640 Module** (60° FOV, 8cm focus): Close-range capture
- **OV5640 Module** (60° FOV, 3m focus): Standard-range capture
- **OV5640 Module** (120° FOV, 15cm focus): Close-range wide-angle
- **OV5640 Module** (120° FOV, 4m focus): Standard-range wide-angle

<div className="performance-cards" style={{ width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  {[
    {
      title: 'Mainboard Front',
      imageSrc: require('/img/Overview/NE101/PCB1.png').default,
      altText: 'Mainboard Front',
    },
    {
      title: 'Mainboard Back',
      imageSrc: require('/img/Overview/NE101/PCB2.png').default,
      altText: 'Mainboard Back',
    },
    {
      title: 'Cat-1 PCBA',
      imageSrc: require('/img/Overview/NE101/cat1PCBA.png').default,
      altText: 'Cat-1 PCBA',
    },
    {
      title: 'WiFi HaLow PCBA',
      imageSrc: require('/img/Overview/NE101/wifihalow.png').default,
      altText: 'WiFi HaLow PCBA',
    }
  ].map((card, index) => (
    <div key={index} className="card" style={{ border: '1px', borderRadius: '8px', padding: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>{card.title}</h3>
      <img
        src={card.imageSrc}
        alt={card.altText}
        style={{
          height: '150px',
          objectFit: 'contain',
          margin: '15px 0',
          borderRadius: '4px'
        }}
      />
    </div>
  ))}
</div>

### Deployment Support
- **Expandable Brackets**: Supports wall/desk mounting with various brackets and enclosure extensions.
<div className="performance-cards" style={{ width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  {[
    {
      title: 'Tabletop Bracket',
      imageSrc: require('/img/Overview/NE101/Bracket/1.png').default,
      altText: 'Tabletop Bracket',
    },
    {
      title: 'Water Meter Bracket',
      imageSrc: require('/img/Overview/NE101/Bracket/2.png').default,
      altText: 'Water Meter Bracket',
    },
    {
      title: 'Wall Mount Bracket',
      imageSrc: require('/img/Overview/NE101/Bracket/3.png').default,
      altText: 'Wall Mount Bracket',
    },
    {
      title: 'Dial Mount Bracket',
      imageSrc: require('/img/Overview/NE101/Bracket/4.png').default,
      altText: 'Dial Mount Bracket',
    },
    {
      title: 'Pole Mount Bracket',
      imageSrc: require('/img/Overview/NE101/Bracket/5.png').default,
      altText: 'Pole Mount Bracket',
    }
  ].map((card, index) => (
    <div key={index} className="card" style={{ border: '1px', borderRadius: '8px', padding: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>{card.title}</h3>
      <img
        src={card.imageSrc}
        alt={card.altText}
        style={{
          height: '150px',
          objectFit: 'contain',
          margin: '15px 0',
          borderRadius: '4px'
        }}
      />
    </div>
  ))}
</div>

### Open-Source Hardware
- Provides structural design files for DIY enclosures (3D printable) or custom expansions. See [Product Resources - Structural Design Files](#product-resources)
- Offers hardware schematics for design extensions or external sensor integration. See [Product Resources - Hardware Schematics](#product-resources)
- Complete open-source firmware with out-of-the-box features: low-power modes, device wake-up, MQTT data transfer, fill-light control, timed capture, image parameter adjustment, network management. For development and flashing, see [「Software Guide」](../0-NeoEyes%20NE101%20Series/3-Software%20Guide/1-System%20Flashing%20and%20Initialization.md)

<p align="center">
  <img src={require('/img/Overview/NE101/software.png').default} alt="software" style={{ width: '300px' }} />
</p>

## Application Scenarios
### Basic Applications  
Periodic capture for:
- Utility meter reading (water/industrial meters)  
- HVAC dust accumulation monitoring for maintenance scheduling  

### Event-Triggered Applications  
Sensor-activated capture:
- **PIR/Radar**: Intrusion detection (e.g., farm animal/human monitoring)  
- **Sound Sensor**: Abnormal noise capture (e.g., elderly care facility alerts)  
- **Light Sensor**: Variable lighting condition capture (e.g., greenhouse plant monitoring)  
- **Vibration Sensor**: Equipment status monitoring (e.g., industrial machinery inspection)  
- **Temperature Sensor**: Thermal event capture (e.g., waste facility anomaly detection)  

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  }}
>
  {[  
    { 
      title: "deepseek-r1", 
      image:require("/img/Overview/NG45xx/application/deepseek.png").default, 
      description: "As large language models (LLMs) become integral to various applications, efficiently running these models on local devices is crucial for developers. This guide provides a comprehensive walkthrough for deploying the DeepSeek-R1 model on NVIDIA Jetson Orin devices, enabling offline inference and interaction.", 
      link: "/docs/Edge AI Box/NeoEdge NG45XX Series/Application Guide/Edge Computing Application Examples/Local deepseek-r1 deployment"
    },
    { 
      title: "yolo", 
      image:require("/img/Overview/NG45xx/application/ultralytice.png").default, 
      description: "This tutorial will guide you through deploying the YOLOv8 model on the NVIDIA Jetson Orin platform, using TensorRT for inference acceleration. By following this process, you will be able to efficiently run YOLOv8 on Jetson Orin for real-time object detection.", 
      link: "/docs/Edge AI Box/NeoEdge NG45XX Series/Application Guide/Edge Computing Application Examples/YOLOv8 over TensorRT"
    }
  ].map((item, index) => (
    <Link to={item.link} key={index} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
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
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem" }}>{item.title}</h3>
      <img
        className="no-zoom"
        src={item.image}
        alt={item.title}
        style={{ maxWidth: "100%", height: "150px", objectFit: "contain", borderRadius: "5px", margin: "0 auto" }}
      />
      <p
        style={{
          marginTop: "0.5rem",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: 3,
          textOverflow: "ellipsis",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {item.description}
      </p>
    </div>
   </Link>
  ))}
</div>

## Specifications
| Parameter                | NE101                               |
|-------------------------|-------------------------------------|
| MCU                     | ESP32-S3                            |
| RAM                     | 8MB                                 |
| Flash                   | 16MB                                |
| UART                    | By Type-C or Wafer 4Pins            |
| Storage                 | Micro-TF                            |
| Sensor                  | OV5640                              |
| WiFi                    | 802.11b/g/n                         |
| Bluetooth               | Bluetooth v4.2 BR/EDR, BLE          |
| Communication           | Cat-1 / WiFi-Halow Module           |
| Alarm                   | Alarm*1                             |
| Buttons                 | Boot*1, Reset*1, Snap*1             |
| Expansion IOs           | Pinheader for UART, I2C, SPI, GPIOs |
| Illumination            | 3000K LED*1 + Photodiode*1          |
| Power                   | DC 4-6V (2Pin Wafer/Type-C)         |
| Operation Temperature   | -20° to 60°                         |
| Storage Temperature     | -40° to 85°                         |
| Certifications          | CE/FCC                              |
| Dimension               | 60mm × 60mm                         |

## Product Resources

### Product Tutorials
- [Quick Start Guide](./1-Quick%20Start.md)
- [Hardware User Guide](./2-Hardware%20Guide/0-Components%20Overview.md)  
- [System & Driver Guide](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md)  
- [FAQ & Support](./6-FAQ%20and%20Support/0-FAQ.md)  

### Download Resources
| Resource              | Link                                  |
|-----------------------|---------------------------------------|
| Hardware Schematics   | [/docs/hardware-schematic](/docs/hardware-schematic) |
| 3D Design Files       | [/downloads/sdk-toolkit](/downloads/sdk-toolkit)     |
| Example Code          | [GitHub](https://github.com/your-repo/examples)  |
| SDK Toolkit           | [/downloads/sdk-toolkit](/downloads/sdk-toolkit)     |

## Technical Support

<div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    margin: '50px 0',
}}>
    <a 
        href="https://discord.gg/your-invite-link"
        style={{
            background: 'linear-gradient(135deg, #5865F2 0%, #8146FF 100%)',
            borderRadius: '16px',
            padding: '30px',
            color: 'white',
            textAlign: 'center',
            textDecoration: 'none'
        }}
    >
        <img 
            src={require('/img/Discord-Logo-White.png').default} 
            alt="Discord"
            style={{ height: '50px', marginBottom: '20px' }}
        />
        <h2>Developer Community</h2>
        <p>
            Real-time developer communication<br/>
            Latest product updates and tutorials
        </p>
    </a>

    <a 
        href="https://github.com/your-repo"
        style={{
            background: 'linear-gradient(135deg, #24292f 0%, #2b3137 100%)',
            borderRadius: '16px',
            padding: '30px',
            color: 'white',
            textAlign: 'center',
            textDecoration: 'none'
        }}
    >
        <img 
            src={require('/img/GitHub_Lockup_Light.png').default} 
            alt="GitHub"
            style={{ height: '50px', marginBottom: '20px' }}
        />
        <h2>GitHub Repository</h2>
        <p>
            Submit issues and reports<br/>
            Access source code and contribute
        </p>
    </a>
</div>