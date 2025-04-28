import Link from "@docusaurus/Link";
import SupportGrid from '@site/src/components/SupportGrid';
import AccessoriesTable from '@site/src/components/AccessoriesTable';
import ApplicationScenarios from '@site/src/components/ApplicationScenarios';

# Overview

## Product Introduction

![NG45XX](/img/Overview/NG45xx/NG45XX.png)

The CamThink Edge AI Box NeoEdge NG45XX series delivers powerful edge computing capabilities, integrating NVIDIA® Jetson Orin™ NX or Nano core modules while being compatible with the **NVIDIA Super Developer Kit**, fully unleashing the computational performance of Jetson Orin™. Compared to previous-generation products without NVIDIA Super Developer Kit support, it achieves **up to 1.7x performance improvement**. Beyond deploying common visual AI applications, it efficiently runs various mainstream generative AI models, including **large language models (LLMs), vision language models (VLMs), and multimodal large language models (MLLMs)**. Additionally, the NG45XX supports multiple physical interfaces and expandable communication modules (WiFi/4G/5G), enabling flexible adaptation to diverse edge computing scenarios for device-to-device communication and edge-to-cloud collaboration. It finds extensive applications in robotic systems, intelligent vehicle terminals, smart factory computing centers, and AI edge computing gateways. Its **industrial-grade design** ensures stable operation in environments ranging from -20°C to 60°C, offering exceptional reliability to meet diverse scenario requirements.

### NVIDIA Super Developer Kit Support

The NeoEdge NG45XX series supports the NVIDIA Super Developer Kit, delivering significant performance improvements across numerous mainstream large language models (LLMs), vision language models (VLMs), and vision transformers (ViTs) compared to previous-generation products. **Purchasing the CamThink Edge AI Box NeoEdge NG45XX series allows you to experience the latest performance and features**. For more details on upgrade features, refer to [Jetson Orin Super Developer Kit](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/).

<div className="performance-cards" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  {[
    {
      title: 'Large Language Models',
      imageSrc: require('/img/Overview/NG45xx/LLM.png').default,
      altText: 'LLM Performance Improvement',
      description: 'LLM performance improvement on NVIDIA Super Developer Kit',
    },
    {
      title: 'Vision Language Models',
      imageSrc: require('/img/Overview/NG45xx/VLM.png').default,
      altText: 'VLM Performance Improvement',
      description: 'VLM performance improvement on NVIDIA Super Developer Kit',
    },
    {
      title: 'Vision Transformers',
      imageSrc: require('/img/Overview/NG45xx/Vision.png').default,
      altText: 'ViT Performance Improvement',
      description: 'ViT performance improvement on NVIDIA Super Developer Kit',
    }
  ].map((card, index) => (
    <div key={index} className="card" style={{ borderRadius: '8px', padding: '10px' }}>
      <h3 style={{ textAlign: 'center' }}>{card.title}</h3>
      <img
        src={card.imageSrc}
        alt={card.altText}
        style={{
          width: '100%',
          height: '200px', // Fixed image height
          objectFit: 'cover', // Maintain aspect ratio while filling container
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

### High-Performance AI Platform

> Built on NVIDIA Jetson Orin series modules, delivering 20-157 TOPS of powerful AI computing with up to 1024 CUDA cores and 32 Tensor cores. Supports the complete **JetPack 6.0** development suite, pre-installed with CUDA, TensorRT, and other toolchains, compatible with mainstream AI frameworks. Ideal for computer vision, robotics, edge computing gateways, and other edge AI applications.

- Equipped with **NVIDIA Jetson Orin** series modules, offering tiered AI performance:
  
  - **Standard Mode**: 20 TOPS (NG4510) → 100 TOPS (NG4521).
  - **SUPER Mode (INT8)**: 34 TOPS → 157 TOPS.

- Heterogeneous computing architecture:
  
  - **GPU**: Up to 1024 NVIDIA® CUDA® cores + 32 Tensor cores.
  - **CPU**: 8-core Arm® Cortex®-A78AE v8.2 (64-bit) @ 2.0GHz.
  - **Memory**: LPDDR5 up to 16GB, bandwidth up to 102GB/s.

- Pre-installed **NVIDIA JetPack 6.0+ SDK**, including complete development environment with CUDA, cuDNN, TensorRT, DeepStream, etc. For system features, see [**Jetpack SDK 6.0**](https://developer.nvidia.com/embedded/jetpack-sdk-60). For system flashing instructions, refer to the [**System Flashing Guide**](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md) provided in this wiki.

- Supports various mainstream AI frameworks: TensorFlow/Keras, PyTorch, ONNX Runtime, etc.
  
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
  <img src={require("/img/Overview/NG45xx/Jetpack.png").default} style={{ maxHeight: '300px' }} />
  </div>

### Rich Hardware Interfaces

> The NG45XX offers extensive interface capabilities to meet various industrial and edge computing scenario requirements. For usage tutorials, see [**Hardware Interface Usage Guide**](./2-Hardware%20Guide/1-Hardware%20Connection.md).

- **Gigabit Network Connectivity**: Features **dual gigabit Ethernet ports** for stable and reliable network communication, suitable for industrial communication and edge computing applications, capable of **simultaneously processing up to 16 video streams** (depending on model).

- **Abundant USB Ports**: Includes **4×USB 3.1 + 1×Type-C (USB 3.2)** ports for high-speed data transfer, supporting external cameras, storage devices, and other USB peripherals.

- **Industrial-Grade Communication Protocols**: Built-in **RS232, RS485, CAN bus** interfaces for seamless integration with industrial-grade devices, meeting stringent communication requirements with anti-interference design for complex electromagnetic environments.

- **Automation Control Applications**: Features **DI/DO interfaces** for digital signal input/output, enabling automation control and logic judgment.

- **HDMI Output**: HDMI port supporting 4K display.

- **3.5mm Audio Jack**: Supports microphone input and audio output.

- **6×SMA Antenna Ports**: Supports external high-gain antennas.
  
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
  <img src={require("/img/Overview/NG45xx/Product2.png").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
  <img src={require("/img/Overview/NG45xx/Product1.png").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
  </div>

### Expandability and Flexibility

> The NG45XX carrier board provides powerful storage and communication expansion capabilities, along with other interfaces to meet various application scenario requirements. For module installation and usage, see [**Hardware PCBA Usage Guide**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md).

- **NVMe SSD Storage Expansion**: Supports **M.2 Key M PCIe 4.0 SSD**, compatible with 2280 NVMe SSDs (pre-installed 256GB/512GB/1TB), accommodating **256GB to 1TB or larger** NVMe SSDs for massive data storage. An additional M.2 Key M (PCIe×1 Gen3) slot allows for a second SSD.

- **Wireless Communication Expansion**: **M.2 Key B and Key E** interfaces support various wireless communication modules for diverse edge wireless communication needs.
  
  - **4G/5G/Wi-Fi Halow Expansion**: Via **M.2 Key B** slot (supports 2242/2252 modules) for flexible cellular network or Wi-Fi Halow expansion.
  - **Wi-Fi 6/Bluetooth 5.0**: Via **M.2 Key E** slot (2230 specification) for high-speed wireless connectivity.
  - **Nano SIM Slot**: Compatible with SIM cards for 4G/5G modules.

- **RTC Real-Time Clock**: Built-in CR2032 battery.

- **Video Module Interface**: Supports **4-lane MIPI×2** camera interfaces, allowing simultaneous connection of multiple high-resolution industrial cameras on the carrier board for various edge scenario applications.
  
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
  <img src={require("/img/Overview/NG45xx/PCB.jpg").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
  <img src={require("/img/Overview/NG45xx/PCB2.jpg").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
  </div>

### Durability and Reliability

> Designed for harsh industrial environments, this edge computing device adheres to industrial-grade manufacturing standards, ensuring long-term stable operation under adverse conditions. For installation and deployment instructions, see [**Device Installation and Deployment**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md).

- **Industrial-Grade Power Design**: Wide voltage input (12V-36V DC), adaptable to industrial voltage fluctuations, with peak power of 120W to meet high-performance computing needs. Built-in multi-protection circuits (overvoltage/overcurrent/reverse polarity protection) ensure stable support for SUPER mode continuous operation.

- **Compact and Rugged Structure**: Device dimensions of 160mm × 125mm × 75mm, all-metal enclosure, supporting **desktop placement, wall mounting, and DIN rail mounting**.

- **Excellent Environmental Adaptability**: **Fanless passive cooling architecture and wide-temperature design**, operating temperature range of -25°C to 60°C, storage temperature range of -40°C to 85°C, suitable for various industrial environments.
  
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("/img/Overview/NG45xx/Product3.png").default} style={{ maxHeight: '300px' }} />
  </div>

## Product Information

### Product Specifications

The NG45XX series product and carrier board specifications are as follows:

<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
  <img src={require("/img/Overview/NG45xx/Product2.png").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
  <img src={require("/img/Overview/NG45xx/PCB.jpg").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
</div>
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
      <td colSpan="4">-25°C to 60°C</td>
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
      <td colSpan="4">Desk, Wall mounting, DIN frame</td>
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
      <td colSpan="4">2 year</td>
    </tr>
  </tbody>
</table>

### Product Accessories

#### Standard Accessories

> The CamThink Edge AI Box NeoEdge NG45XX series includes the following standard accessories:

<AccessoriesTable
  accessories={[
    {
      image: "/img/Accessories/ng45xx_power_adapter.jpg",
      name: "Power Adapter",
      quantity: "1",
      description: [
        "Input: 100-240V AC",
        "Output: 12V/5A DC"
      ]
    },
    {
      image: "/img/Accessories/ng45xx_power_cable.jpg",
      name: <a href="./2-Hardware Guide/1-Hardware Connection.md">Power Cable</a>,
      quantity: "1",
      description: ["Standard 3-core power cable 1.5m, default European standard"]
    },
    {
      image: "/img/Accessories/ng45xx_connector.jpg",
      name: "Industrial Terminal Blocks",
      quantity: "2",
      description: ["16-pin male terminal, 8-pin male terminal"]
    },
    {
      image: "/img/Accessories/ng45xx_bracket.jpg",
      name: "Mounting Brackets",
      quantity: "2",
      description: ["Wall mounting brackets"]
    }
  ]}
/>

#### Optional Accessories

> The CamThink Edge AI Box NeoEdge NG45XX series supports the following optional accessories:

<AccessoriesTable
  accessories={[
    {
      image: "/img/Accessories/ng45xx_ssd.png",
      name: "SSD",
      quantity: "1",
      description: ["M.2 NVMe SSD with 256GB-1TB capacity options"]
    },
    {
      image: "/img/Accessories/ng45xx_wifi.png",
      name: "WiFi Module",
      quantity: "1",
      description: ["6221M-PUC dual-band Wi-Fi and Bluetooth 5.0 module"]
    },
    {
      image: "/img/Accessories/ng45xx_4g.png",
      name: "4G Module + Antenna",
      quantity: "1",
      description: [
        "Quectel EM05 EM05-G 4G M.2 module, compatible with Europe, USA, China, Japan, Australia, and other major regions"]
    },
    {
      image: "/img/Accessories/ng45xx_5g.png",
      name: "5G Module + Antenna",
      quantity: "1",
      description: ["Quectel RM520N-GL 5G M.2 module, compatible with major global regions"]
    },
    {
      image: "/img/Accessories/ng45xx_fan.png",
      name: "Cooling Fan",
      quantity: "1",
      description: ["Cooling fan kit, compatible with NG45XX carrier board"]
    },
    {
      image: "/img/Accessories/IMX219.png",
      name: "Sony Camera Module",
      quantity: "1",
      description: ["SONY IMX219 3280*2464 1/4' 1.12um"]
    },
    {
      image: "/img/Accessories/SC0870.png",
      name: "Raspberry Pi Camera Module",
      quantity: "1",
      description: ["SC0870 Raspberry Pi M12 High Quality Camera"]
    }
  ]}
/>

## Product Applications

### Application Scenarios

> The NG45xx series edge computing devices, with their powerful AI computing and industrial-grade reliability, can be applied across multiple industries.

<ApplicationScenarios
  imagePosition="center"
  maxDescriptionLines={4}
  categories={[
    {
      title: "Smart Manufacturing",
      items: [
        {
          title: "Industrial Quality Inspection",
          description: "Combining YOLOv5/v8 object detection models with high-resolution industrial cameras for real-time defect detection on production lines. The system can simultaneously process multiple production lines with detection accuracy exceeding 99.5%, significantly reducing manual inspection costs and improving efficiency.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-MZk8nC4dpWB3RVIh_X1MJdjgPXwTtDT5w&s"
        },
        {
          title: "Intelligent Sorting",
          description: "Collaborating with industrial robotic arms for automatic classification of mixed materials via visual recognition systems, achieving speeds of 60 items/minute with over 98% accuracy, maintaining stable performance under varying lighting and orientation conditions.",
          image: "https://p0.itc.cn/images01/20231009/1c0b3fd2d48b4def85979dc839e9388e.jpeg"
        }
      ]
    },
    {
      title: "Smart Cities",
      items: [
        {
          title: "Traffic Monitoring",
          description: "Supports simultaneous processing of up to 16 HD video streams for analysis, deploying license plate recognition, vehicle classification, traffic violation detection, and other AI models with recognition speeds under 100ms/frame, ensuring stable operation in nighttime and adverse weather conditions.",
          image: "https://hailo.ai/wp-content/uploads/2023/10/Powerful-Edge-AI-to-Boost-Intelligent-Traffic-Systems-ITS-1024x458.jpeg"
        },
        {
          title: "Intrusion Detection",
          description: "Integrates face recognition, behavior analysis, and anomaly detection for security monitoring in campuses, malls, and communities, with response times under 1 second, seamlessly integrating with existing security systems.",
          image: "https://p8.itc.cn/images01/20231222/71051bef9d2f412fa433b5131629a924.png"
        }
      ]
    },
    {
      title: "Autonomous Systems",
      items: [
        {
          title: "AGV Navigation",
          description: "Based on hybrid SLAM technology with LiDAR and visual sensors, enabling precise positioning and navigation in complex environments like factories and warehouses, with positioning accuracy up to ±2cm, supporting multi-AGV coordination and obstacle avoidance for logistics and manufacturing.",
          image: "https://www.lscm.hk/files/image/2-Technology-Commercialisation/Case%20Studies/Case-AGV-1.jpg"
        },
        {
          title: "Drone Inspection",
          description: "Integrating 5G modules for high-bandwidth video transmission, processing HD video streams directly at the edge to detect anomalies in power lines, oil pipelines, wind turbines, and other infrastructure, reducing bandwidth requirements by 95% for long-distance inspection missions.",
          image: "https://www.hcuav.com/uploads/images/2023/0421/S7qkgHCnyWmCCwkKQkEcztHQlBtO6lJptf3OEOqf.jpg"
        },
        {
          title: "Service Robots",
          description: "Deploying multimodal interaction systems integrating voice recognition, face recognition, and behavior tracking with response latency under 200ms, protecting user privacy through local processing, suitable for hospitals, hotels, and public venues.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMK1Iu8Dv-u-6AZZbUyDCi5knSzrFqzOJu-Q&s"
        }
      ]
    },
    {
      title: "Healthcare",
      items: [
        {
          title: "Medical Imaging Analysis",
          description: "Supports DICOM-standard medical imaging processing, deploying AI-assisted diagnostic models for X-rays, CT scans, ultrasounds, and other modalities with accuracy over 93%, processing times under 10 seconds, aiding rapid lesion screening.",
          image: "https://developer-blogs.nvidia.com/zh-cn-blog/wp-content/uploads/sites/2/2022/06/Swin.png"
        },
        {
          title: "Intelligent Triage",
          description: "Integrates NLP and face recognition for patient identification, symptom screening, and department triage, simplifying medical processes, saving 8-15 minutes of waiting time per patient, improving healthcare efficiency.",
          image: "http://www.lovechuangchuang.com/image/dzjqr1.jpg"
        },
        {
          title: "Remote Consultation",
          description: "Through 4K HD video capture and low-latency transmission with edge AI preprocessing, enabling remote consultations between primary clinics and tertiary hospitals with end-to-end latency under 250ms, ensuring real-time and accurate diagnostics.",
          image: "https://upload-cdn.orayimg.com/upload/help/2106/202106050928526013.png"
        }
      ]
    }
  ]}
/>

### Application Examples

> The NG45XX series can be applied in various real-world scenarios. Below are some typical use cases, each with detailed deployment guides for quick replication and application.

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  }}
>
  {/* Define a base URL constant for easier maintenance */}
  {(() => {
    const BASE_URL = "/en/docs/NeoEdge NG4500 Series/Application Guide/";
    
    const examples = [
      { 
        title: "LLM Chatbot", 
        image: require("/img/Overview/NG45xx/application/OpenWebUI.png").default, 
        description: "This guide explains how to use Ollama (a lightweight inference engine) to locally deploy the DeepSeek-R1 large language model on NVIDIA Jetson Orin devices for offline AI interaction, with simple and efficient setup.", 
        path: "Deepseek-r1"
      },
      { 
        title: "Pose Estimation", 
        image: require("/img/Overview/NG45xx/application/Pose.png").default, 
        description: "This article describes how to run real-time pose estimation (Pose Estimation) using MediaPipe on Jetson Orin platforms (Nano/NX/AGX), with GPU acceleration where supported.", 
        path: "mediapipe"
      },
      { 
        title: "YoLo Object Detection", 
        image: require("/img/Overview/NG45xx/application/ObjectDetection.png").default, 
        description: "This tutorial guides you through deploying YOLOv8 models on NVIDIA Jetson Orin platforms using TensorRT for accelerated inference, enabling efficient real-time object detection.", 
        path: "Object Detection"
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

For quick start guides, see [Quick Start Tutorial](./1-Quick%20Start.md)

For hardware features and usage instructions, see [Hardware Usage Guide](./2-Hardware%20Guide/0-Components%20Overview.md)

For system drivers and development guidance, see [System and Driver Guide](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md)


### Product Resources

| Resource Name           | URL                                                  |
| ----------------------- | ---------------------------------------------------- |
| Hardware Schematics     | [/docs/hardware-schematic](/docs/hardware-schematic) |
| Hardware Design Guide   | [/docs/hardware-guide](/docs/hardware-guide)         |
| Bill of Materials (BOM) | [/docs/bom-list](/docs/bom-list)                     |
| Example Project Code    | [GitHub](https://github.com/camthink-ai/examples)    |
| API Reference           | [/docs/api-reference](/docs/api-reference)           |
| SDK Toolkit             | [/downloads/sdk-toolkit](/downloads/sdk-toolkit)     |

## Technical Support and Community

<SupportGrid />