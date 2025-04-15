import Link from "@docusaurus/Link";

# Overview

## Product introduction

![NG45XX](/img/Overview/NG45xx/NG45XX.png)

The CamThink Edge AI Box NeoEdge NG45XX series offers powerful edge computing capabilities, integrating the NVIDIA® Jetson Orin™ NX or Nano core modules and supporting compatibility with the NVIDIA Super Developer Kit to fully unleash Jetson Orin™ computing performance. Compared to the previous generation, its performance has improved by up to 1.7 times. In addition to deploying Vision AI applications, it efficiently runs mainstream generative AI models, including Transformers, Large Language Models (LLMs), and Vision-Language Models (VLMs).

Furthermore, the product supports various physical interfaces and expandable communication modules (WiFi/4G/5G), making it adaptable to a wide range of edge computing applications such as robotics, intelligent in-vehicle terminals, smart factory computing centers, and edge computing gateways. Its industrial-grade design ensures stable operation in environments ranging from -20°C to 60°C, providing exceptional reliability to meet the deployment needs of diverse edge computing scenarios.

### Support NVIDIA Super Developer Kit

The NVIDIA Super Developer Kit has achieved significant performance improvements over its predecessor across many popular Large Language Models (LLMs), Vision-Language Models (VLMs), and Vision Transformers (ViTs). For more details on the upgraded features, refer to the [Jetson Orin Super Developer Kit](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/) 。

<div className="performance-cards" style={{ 
  width: '100%', 
  margin: '0 auto', 
  display: 'grid', 
  gridTemplateColumns: 'repeat(2, 1fr)', // 每行显示2个卡片
  gap: '20px' 
}}>
  {[
    {
      title: 'Large Language Models',
      imageSrc: require('/img/Overview/NG45xx/LLM.png').default,
      altText: 'LLM Performance Boost',
      description: 'On the NVIDIA Super Developer Kit, LLM inference speed has increased by 1.7 times, supporting larger-scale models.',
    },
    {
      title: 'Vision Language Models',
      imageSrc: require('/img/Overview/NG45xx/VLM.png').default,
      altText: 'VLM Performance Boost',
      description: 'VLM achieves faster multimodal inference on the NVIDIA Super Developer Kit, enhancing vision-language integration.',
    },
    {
      title: 'Vision Transformers',
      imageSrc: require('/img/Overview/NG45xx/Vision.png').default,
      altText: 'ViT Performance Boost',
      description: 'ViT delivers higher computational throughput on the NVIDIA Super Developer Kit, supporting higher-resolution inputs.',
    }
  ].map((card, index) => (
    <div key={index} className="card" style={{ borderRadius: '8px', padding: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>{card.title}</h3>
      <img
        src={card.imageSrc}
        alt={card.altText}
        style={{
          width: '100%',
          height: '200px', // 设置图片固定高度
          objectFit: 'cover', // 保持纵横比并填充整个容器
          margin: '15px 0',
          borderRadius: '4px'
        }}
      />
      <p style={{ textAlign: 'center', fontWeight: '600'}}>
        {card.description}
      </p>
    </div>
  ))}
</div>

### High-performance AI computing platform

- Equipped with **NVIDIA Jetson Orin** series modules, providing AI computing power from **20 TOPS** to **100 TOPS** (Standard Mode) or **34 TOPS** to **157 TOPS** (SUPER Mode), meeting AI inference requirements of varying complexity.  

- Features up to **1024 CUDA cores** and **32 Tensor cores**, accelerating deep learning inference and computer vision tasks.  

- Comes with built-in support for **NVIDIA JetPack 6.0** and later, offering the most comprehensive solution for building end-to-end accelerated AI applications, significantly reducing time-to-market. For more details, see [**Jetpack SDK 6.0**](https://developer.nvidia.com/embedded/jetpack-sdk-60). For a system flashing tutorial, refer to [**「System Flashing Guide」**](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md).  
  
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
  <img src={require("/img/Overview/NG45xx/Jetpack.png").default} style={{ maxHeight: '300px' }} />
  </div>
  <p></p>

### Rich Interfaces, Wide Compatibility

- Provides **dual Gigabit Ethernet interfaces**, suitable for industrial communication and edge computing.
- Equipped with **4×USB3.1 + 1×Type-C (USB3.2)**, supporting high-speed data transfer and peripheral expansion.
- Features **RS232, RS485, CAN bus**, meeting the communication needs of industrial-grade devices.
- **DI/DO interfaces** support digital signal input and output, suitable for automation control applications.
- A hardware interface usage tutorial is available at [**「Interface Usage Guide」**](./2-Hardware%20Guide/1-Hardware%20Connection.md).

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("/img/Overview/NG45xx/Product2.png").default} style={{ maxHeight: '300px' }} />
</div>

### Flexible Storage and Expansion

- **M.2 Key M PCIe 4.0 SSD** supports **128GB to 1TB NVMe SSD** or higher, meeting large data storage requirements.
- **M.2 Key B & Key E** support wireless communication modules such as **4G/5G, Wi-Fi Halow, Wi-Fi/Bluetooth**.
- Provides a **Nano SIM card slot**, supporting cellular network communication, suitable for edge computing and data transmission scenarios.
- Installation and usage of expansion modules can be found in the [**「Hardware Expansion Guide」**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md).

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("/img/Overview/NG45xx/Product1.png").default} style={{ maxHeight: '300px' }} />
</div>

### Flexible Installation and Efficient Heat Dissipation

- The dimensions of the device are **160mm × 125mm × 75mm**, supporting **desktop or wall-mount installation**, suitable for various deployment environments.

- **Fanless design** with optimized heat dissipation structure, enhancing device stability and reducing maintenance costs.

- Device installation and deployment can be found in the [**「Device Installation and Deployment」**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md).
  
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("/img/Overview/NG45xx/Product3.png").default} style={{ maxHeight: '300px' }} />
  </div>

### Rugged and Durable, Designed for Harsh Environments

- **Wide temperature design**, with operating temperature range from **-25°C to 60°C** and storage temperature from **-40°C to 85°C**, suitable for various industrial environments.
- **20%-90% humidity tolerance**, stable operation under non-condensing conditions.
- Certified with **CE/FCC/RoHS**, meeting industrial safety standards.

## Application Examples

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
        className="card"
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
      <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.5rem", textAlign:"center" }}>{item.title}</h3>
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

## Product Specifications

    <table>
      <thead>
        <tr>
          <th rowSpan="2">Feature</th>
          <th colSpan="2">NG4510/NG4511</th>
          <th colSpan="2">NG4520/NG4521</th>
        </tr>
        <tr>
          <th>NG4510</th>
          <th>NG4511</th>
          <th>NG4520</th>
          <th>NG4521</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>NVIDIA Jetson Module</strong></td>
          <td>Jetson Orin Nano 4GB</td>
          <td>Jetson Orin Nano 8GB</td>
          <td>Jetson Orin NX 8G</td>
          <td>Jetson Orin NX 16G</td>
        </tr>
        <tr>
          <td><strong>AI Performance</strong></td>
          <td>20 TOPS</td>
          <td>40 TOPS</td>
          <td>70 TOPS</td>
          <td>100 TOPS</td>
        </tr>
        <tr>
          <td><strong>AI Performance (SUPER)</strong></td>
          <td>34 INT8 TOPs</td>
          <td>67 INT8 TOPs</td>
          <td>117 INT8 TOPs</td>
          <td>157 INT8 TOPs</td>
        </tr>
        <tr>
          <td><strong>GPU</strong></td>
          <td colSpan="2">512 NVIDIA® CUDA® cores<br />16 Tensor cores</td>
          <td colSpan="2">1024 NVIDIA® CUDA® cores<br />32 Tensor cores</td>
        </tr>
        <tr>
          <td><strong>CPU</strong></td>
          <td colSpan="2">6-core Arm® Cortex® A78AE (64-bit) HMP<br />2x Clusters</td>
          <td colSpan="2">8-core Arm® Cortex® A78AE v8.2 (64-bit) HMP<br />2x Clusters</td>
        </tr>
        <tr>
          <td><strong>DRAM SIZE</strong></td>
          <td>4G</td>
          <td>8G</td>
          <td>8G</td>
          <td>16G</td>
        </tr>
        <tr>
          <td><strong>DRAM BW</strong></td>
          <td colSpan="2">64-bit LPDDR5 DRAM<br />34 GB/s \| 51 GB/s</td>
          <td colSpan="2">128-bit LPDDR5 DRAM<br />3200 MHz<br />102 GB/s</td>
        </tr>
        <tr>
          <td><strong>OS</strong></td>
          <td colSpan="4">Linux</td>
        </tr>
        <tr>
          <td><strong>Button</strong></td>
          <td colSpan="4">1 x Power Button, 1 x Reset Button</td>
        </tr>
        <tr>
          <td><strong>Ethernet</strong></td>
          <td colSpan="4">2 x RJ45 (1000Mbps Ethernet)</td>
        </tr>
        <tr>
          <td><strong>USB</strong></td>
          <td colSpan="4">4 x USB3.1, 1 x Type-C 4x Type-A(USB3.1), 1x Type-C(USB3.2)</td>
        </tr>
        <tr>
          <td><strong>I/O Connector</strong></td>
          <td colSpan="4">4 x DI, 4 x DO, 4 x GND_DI, 4 x GND_DO, 1 x CAN, 1 x RS232, 1 x RS485, 1 x DC 5V Power</td>
        </tr>
        <tr>
          <td><strong>HDMI</strong></td>
          <td colSpan="4">1 x HDMI</td>
        </tr>
        <tr>
          <td><strong>Audio</strong></td>
          <td colSpan="4">1 x Audio Jack (Mic Input + Audio L/R output)</td>
        </tr>
        <tr>
          <td><strong>SIM Card Slot</strong></td>
          <td colSpan="4">1 x Nano SIM Slot</td>
        </tr>
        <tr>
          <td><strong>RTC</strong></td>
          <td colSpan="4">CR2032 RTC Battery</td>
        </tr>
        <tr>
          <td><strong>FAN</strong></td>
          <td colSpan="4">1 x Fan Connector (5V PWM)</td>
        </tr>
        <tr>
          <td><strong>M.2 Key B</strong></td>
          <td colSpan="4">M.2 Key B 2242/2252 support 4G/5G/Wi-Fi Halow</td>
        </tr>
        <tr>
          <td><strong>M.2 Key E</strong></td>
          <td colSpan="4">M.2 Key E 2230 support Wi-Fi/Bluetooth</td>
        </tr>
        <tr>
          <td><strong>Wi-Fi Halow</strong></td>
          <td colSpan="4">M.2 Key B support Wi-Fi Halow</td>
        </tr>
        <tr>
          <td><strong>Storage</strong></td>
          <td colSpan="4">1 x M.2 Key M PCIe*4_Gen3 SSD<br /> (NVMe 2280 SSD 128G/256G/512G/1T included)<br />1 x M.2 Key M PCIe*1_Gen3 SSD</td>
        </tr>
        <tr>
          <td><strong>Power Supply</strong></td>
          <td colSpan="4">DC input 12V-36V, Peak Power 120W</td>
        </tr>
        <tr>
          <td><strong>LED Indicator</strong></td>
          <td colSpan="4">1 x Power LED, 1 x Wi-Fi LED,<br />1 x 4G LED, 1 x Ethernet LED</td>
        </tr>
        <tr>
          <td><strong>Operating Temperature</strong></td>
          <td colSpan="4">-25°C to 70°C</td>
        </tr>
        <tr>
          <td><strong>Storage Temperature</strong></td>
          <td colSpan="4">-40°C to 85°C</td>
        </tr>
        <tr>
          <td><strong>Operating Humidity</strong></td>
          <td colSpan="4">20% - 90% (non-condensing)</td>
        </tr>
        <tr>
          <td><strong>Dimensions</strong></td>
          <td colSpan="4">160mm x 125mm x 75mm</td>
        </tr>
        <tr>
          <td><strong>Installation</strong></td>
          <td colSpan="4">Desk, Wall mounting</td>
        </tr>
        <tr>
          <td><strong>SMA Antenna Connector</strong></td>
          <td colSpan="4">6</td>
        </tr>
        <tr>
          <td><strong>Thermal</strong></td>
          <td colSpan="4">Fanless</td>
        </tr>
        <tr>
          <td><strong>Certification</strong></td>
          <td colSpan="4">CE/FCC/RoHs</td>
        </tr>
        <tr>
          <td><strong>Warranty</strong></td>
          <td colSpan="4">-</td>
        </tr>
      </tbody>
    </table>

## Product Information

### Product Tutorials

For a quick start guide on using the Edge AI Box, see the [**Quick Start**](./1-Quick%20Start.md).

For a guide on using the Edge AI Box hardware features and instructions, see the [**Hardware Guide**](./2-Hardware%20Guide/0-Components%20Overview.md).

For a guide on using the Edge AI Box system drivers and development instructions, see the [**Software Guide**](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md).

For frequently asked questions, see the [**FAQ Support**](./6-FAQ%20and%20Support/0-FAQ.md).

### Product Resources

| Resource Name         | Link                                                 |
| --------------------- | ---------------------------------------------------- |
| Hardware Schematic    | [/docs/hardware-schematic](/docs/hardware-schematic) |
| Hardware Design Guide | [/docs/hardware-guide](/docs/hardware-guide)         |
| Example Project Code  | [GitHub](https://github.com/camthink-ai/examples)      |
| SDK Toolkit           | [/downloads/sdk-toolkit](/downloads/sdk-toolkit)     |

## Technical Support and Community

<div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    margin: '50px 0',
  }}>
    {/* Discord Card */}
    <a 
      href="https://discord.com/invite/6TZb2Y8WKx" 
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: 'linear-gradient(135deg, #5865F2 0%, #8146FF 100%)',
        borderRadius: '16px',
        padding: '30px',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 4px 20px rgba(88, 101, 242, 0.3)',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 25px rgba(88, 101, 242, 0.4)'
        }
      }}
    >
      <img 
        src={require('/img/Discord-Logo-White.png').default} 
        alt="Discord"
        style={{
          height: '50px',
          marginBottom: '20px',
          filter: 'brightness(0) invert(1)'
        }}
        className="no-zoom"
      />
      <h2 style={{ 
        margin: '15px 0', 
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#ffffff'

      }}>
        Join the Developer Community
      </h2>
      <p style={{ 
        margin: 0,
        lineHeight: 1.6,
        fontSize: '1rem',
        color: '#ffffff'
      }}>
        Communicate with developers in real-time<br />
        Get the latest product updates and tutorials
      </p>
    </a>
    
    {/* GitHub Card */}
    <a 
      href="https://github.com/camthink-ai" 
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: 'linear-gradient(135deg, #24292f 0%, #2b3137 100%)',
        borderRadius: '16px',
        padding: '30px',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 4px 20px rgba(36, 41, 47, 0.3)',
        ':hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 25px rgba(36, 41, 47, 0.4)'
        }
      }}
    >
      <img 
        src={require('/img/GitHub_Lockup_Light.png').default} 
        alt="GitHub"
        style={{
          height: '50px',
          marginBottom: '20px',
          filter: 'brightness(0) invert(1)'
        }}
      />
      <h2 style={{ 
        margin: '15px 0', 
        fontSize: '1.5rem',
        fontWeight: 600,
        color: '#ffffff'
      }}>
        GitHub Repository
      </h2>
      <p style={{ 
        margin: 0,
        lineHeight: 1.6,
        fontSize: '1rem',
        color: '#ffffff'
      }}>
        Submit issues and report problems<br />
        View source code and contribute
      </p>
    </a>

</div>
