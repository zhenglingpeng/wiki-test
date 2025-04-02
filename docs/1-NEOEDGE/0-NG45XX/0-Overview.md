import Link from "@docusaurus/Link";


# Overview

## 产品简介
![NG45XX](../../assets/Overview/NG45xx/NG45XX.png)

CamThink Edge AI Box NG45XX系列产品具有强大的边缘计算能力，设备内嵌 NVIDIA® Jetson Orin™ NX 或 Nano核心模块，支持NVIDIA Super Developer Kit，能够充分发挥NVIDIA® Jetson Orin™核心模组性能，相比于升级起提高了1.7倍的性能，可以运行最流行的生成式AI模型，如transformers, large language models, vision-language models等。设备支持丰富的物理接口和通讯模块扩展支持（WiFi/4G/5G），易于扩展各种边缘计算应用场景，包括机器人、智能车载终端、智慧工厂计算中心、边缘计算网关等，能够在 -20℃ 到 60℃ 的温度范围内稳定运行，保证卓越的可靠性，适用于各种边缘计算应用的部署。


### 支持NVIDIA Super Developer Kit

NVIDIA Super Developer Kit 在众多流行的 **大语言模型（LLM）**、**视觉语言模型（VLM）** 和 **视觉 Transformer（ViT）** 上，相较于前代产品实现了显著的性能提升，更多升级特性可见[Jetson Orin Super Developer Kit](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/) 。

<div className="performance-cards" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  {[
    {
      title: 'Large Language Models',
      imageSrc: require('../../assets/Overview/NG45xx/LLM.png').default,
      altText: 'LLM性能提升',
      description: 'LLM 在 NVIDIA Super Developer Kit 上的性能提升',
    },
    {
      title: 'Vision Language Models',
      imageSrc: require('../../assets/Overview/NG45xx/VLM.png').default,
      altText: 'VLM性能提升',
      description: 'VLM 在 NVIDIA Super Developer Kit 上的性能提升',
    },
    {
      title: 'Vision Transformers',
      imageSrc: require('../../assets/Overview/NG45xx/Vision.png').default,
      altText: 'ViT性能提升',
      description: 'ViT 在 NVIDIA Super Developer Kit 上的性能提升',
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


### 高性能 AI 计算
- 搭载 **NVIDIA Jetson Orin** 系列模块，提供从 **20 TOPS** 到 **100 TOPS**（标准模式），或 **34 TOPS** 至 **157 TOPS**（SUPER 模式）的 AI 计算能力，满足不同复杂度的 AI 推理需求。
- 配备 **最高 1024 CUDA 核心** 和 **32 Tensor 核心**，加速深度学习推理与计算机视觉任务。
- 内置支持**NVIDIA JetPack 6.0**以上的系统，是构建端到端加速AI应用程序最全面的解决方案，可大大缩短产品上市时间，更多特性可见[**Jetpack SDK 6.0**](https://developer.nvidia.com/embedded/jetpack-sdk-60)，如何对产品进行系统烧录的教程详见[**「系统烧录教程」**](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md)
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
  <img src={require("../../assets/Overview/NG45xx/Jetpack.png").default} style={{ maxHeight: '300px' }} />
</div>
<p></p>


### 丰富接口，广泛兼容
- 提供 **双千兆以太网接口**，适用于工业通信及边缘计算。
- 配备 **4×USB3.1 + 1×Type-C（USB3.2）**，支持高速数据传输及外设扩展。
- 具备 **RS232、RS485、CAN 总线**，满足工业级设备通信需求。
- **DI/DO 接口** 支持数字信号输入输出，适用于自动化控制应用。
- 硬件接口使用教程可见[**「接口使用指南」**](./2-Hardware%20Guide/1-Hardware%20Connection.md)
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("../../assets/Overview/NG45xx/Product2.png").default} style={{ maxHeight: '300px' }} />
</div>

### 灵活存储与扩展
- **M.2 Key M PCIe 4.0 SSD** 支持 **128GB 至 1TB NVMe SSD**，满足大数据存储需求。
- **M.2 Key B & Key E** 支持 **4G/5G、Wi-Fi Halow、Wi-Fi/Bluetooth** 等无线通讯模块。
- 提供 **Nano SIM 卡槽**，支持蜂窝网络通信，适用于边缘计算场景。
- 扩展模块的安装与使用可见[**「硬件PCB指南」**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md)
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("../../assets/Overview/NG45xx/Product1.png").default} style={{ maxHeight: '300px' }} />
</div>

### 灵活安装与高效散热
- 机身尺寸 **140mm × 128mm × 60mm**，支持 **桌面或壁挂式安装**，适用于多种部署环境。
- **无风扇设计**，优化散热结构，提升设备稳定性并降低维护成本。
- 设备安装部署可见[**「设备安装与部署」**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md)
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("../../assets/Overview/NG45xx/Product3.png").default} style={{ maxHeight: '300px' }} />
</div>

### 坚固耐用，适应严苛环境
- **宽温设计**，工作温度范围 **-25°C 至 60°C**，存储温度 **-40°C 至 85°C**，适应各种工业环境。
- **20%-90% 湿度适应能力**，非冷凝条件下稳定运行。
- 通过 **CE/FCC/RoHS 认证**，符合工业级安全标准。


## 应用示例
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
      image:require("../../assets/Overview/NG45xx/application/deepseek.png").default, 
      description: "As large language models (LLMs) become integral to various applications, efficiently running these models on local devices is crucial for developers. This guide provides a comprehensive walkthrough for deploying the DeepSeek-R1 model on NVIDIA Jetson Orin devices, enabling offline inference and interaction.", 
      link: "./Application%20Guide/Edge%20Computing%20Application%20Examples/Local%20deepseek-r1%20deployment.md"
    },
    { 
      title: "yolo", 
      image:require("../../assets/Overview/NG45xx/application/ultralytice.png").default, 
      description: "本教程将指导您如何在 NVIDIA Jetson Orin 平台上部署 YOLOv8 模型，并利用 TensorRT 进行推理加速。通过此过程，您将能够在 Jetson Orin 上高效地运行 YOLOv8，实现实时的目标检测。", 
      link: "./Application%20Guide/Edge%20Computing%20Application%20Examples/YOLOv8%20over%20TensorRT.md"
    }
  ].map((item, index) => (
    <Link to={item.link} key={index} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          border: "1px solid #ddd",
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
        style={{ maxWidth: "100%", height: "150px", objectFit: "contain", borderRadius: "8px", margin: "0 auto" }}
      />
      <p
        style={{
          color: "#666",
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


## 产品规格

| Feature                      | NG4510                     | NG4511                     | NG4520                     | NG4521                     |
|------------------------------|----------------------------|----------------------------|----------------------------|----------------------------|
| **NVIDIA Jetson Module**     | Jetson Orin Nano 4GB       | Jetson Orin Nano 8GB       | Jetson Orin NX 8G          | Jetson Orin NX 16G         |
| **AI Performance**           | 20 TOPS                    | 40 TOPS                    | 70 TOPS                    | 100 TOPS                   |
| **AI Performance (SUPER)**   | 34 INT8 TOPs               | 67 INT8 TOPs               | 117 INT8 TOPs              | 157 INT8 TOPs              |
| **GPU**                      | 512 NVIDIA® CUDA® cores<br />16 Tensor cores | 1024 NVIDIA® CUDA® cores<br />32 Tensor cores | 1024 NVIDIA® CUDA® cores<br />32 Tensor cores | 1024 NVIDIA® CUDA® cores<br />32 Tensor cores |
| **CPU**                      | 6-core Arm® Cortex® A78AE (64-bit) HMP<br />2x Clusters | 6-core Arm® Cortex® A78AE v8.2 (64-bit) HMP<br />2x Clusters | 8-core Arm® Cortex® A78AE v8.2 (64-bit) HMP<br />2x Clusters | 8-core Arm® Cortex® A78AE v8.2 (64-bit) HMP<br />2x Clusters |
| **DRAM SIZE**                | 4G                         | 8G                         | 8G                         | 16G                        |
| **DRAM BW**                  | 64-bit LPDDR5 DRAM<br />34 GB/s \| 51 GB/s | 128-bit LPDDR5 DRAM<br />68 GB/s \| 102 GB/s | 128-bit LPDDR5 DRAM<br />3200 MHz<br />102 GB/s | 128-bit LPDDR5 DRAM<br />3200 MHz<br />102 GB/s |
| **OS**                       | Linux                      | Linux                      | Linux                      | Linux                      |
| **Button**                   | 1 x Power Button, 1 x Reset Button | 1 x Power Button, 1 x Reset Button | 1 x Power Button, 1 x Reset Button | 1 x Power Button, 1 x Reset Button |
| **Ethernet**                 | 2 x RJ45 (1000Mbps Ethernet) | 2 x RJ45 (1000Mbps Ethernet) | 2 x RJ45 (1000Mbps Ethernet) | 2 x RJ45 (1000Mbps Ethernet) |
| **USB**                      | 4 x USB3.1, 1 x Type-C     | 4 x USB3.1, 1 x Type-C     | 4x Type-A(USB3.1), 1x Type-C(USB3.2) | 4x Type-A(USB3.1), 1x Type-C(USB3.2) |
| **I/O Connector**            | 4 x DI, 4 x DO, 4 x GND_DI, 4 x GND_DO,<br />1 x CAN, 1 x RS232, 1 x RS485,<br />1 x DC 5V Power | 4 x DI, 4 x DO, 4 x GND_DI, 4 x GND_DO,<br />1 x CAN, 1 x RS232, 1 x RS485,<br />1 x DC 5V Power | 4 x DI, 4 x DO, 4 x GND_DI, 4 x GND_DO,<br />1 x CAN, 1 x RS232, 1 x RS485,<br />1 x DC 5V Power | 4 x DI, 4 x DO, 4 x GND_DI, 4 x GND_DO,<br />1 x CAN, 1 x RS232, 1 x RS485,<br />1 x DC 5V Power |
| **HDMI**                     | 1 x HDMI                   | 1 x HDMI                   | 1 x HDMI                   | 1 x HDMI                   |
| **Audio**                    | 1 x Audio Jack (Mic Input + Audio L/R output) | 1 x Audio Jack (Mic Input + Audio L/R output) | 1 x Audio Jack (Mic Input + Audio L/R output) | 1 x Audio Jack (Mic Input + Audio L/R output) |
| **SIM Card Slot**            | 1 x Nano SIM Slot          | 1 x Nano SIM Slot          | 1 x Nano SIM Slot          | 1 x Nano SIM Slot          |
| **RTC**                      | CR2032 RTC Battery         | CR2032 RTC Battery         | CR2032 RTC Battery         | CR2032 RTC Battery         |
| **FAN**                      | 1 x Fan Connector (5V PWM) | 1 x Fan Connector (5V PWM) | 1 x Fan Connector (5V PWM) | 1 x Fan Connector (5V PWM) |
| **M.2 Key B**                | M.2 Key B 2242/2252 support 4G/5G/Wi-Fi Halow | M.2 Key B 2242/2252 support 4G/5G/Wi-Fi Halow | M.2 Key B 2242/2252 support 4G/5G/Wi-Fi Halow | M.2 Key B 2242/2252 support 4G/5G/Wi-Fi Halow |
| **M.2 Key E**                | M.2 Key E 2230 support Wi-Fi/Bluetooth | M.2 Key E 2230 support Wi-Fi/Bluetooth | M.2 Key E 2230 support Wi-Fi/Bluetooth | M.2 Key E 2230 support Wi-Fi/Bluetooth |
| **Wi-Fi Halow**              | M.2 Key B support Wi-Fi Halow | M.2 Key B support Wi-Fi Halow | M.2 Key B support Wi-Fi Halow | M.2 Key B support Wi-Fi Halow |
| **Storage**                  | 1 x M.2 Key M PCIe*4_Gen3 SSD<br /> (NVMe 2280 SSD 128G/256G/512G/1T included)<br />1 x M.2 Key M PCIe*1_Gen3 SSD | 1 x M.2 Key M PCIe*4_Gen3 SSD<br /> (NVMe 2280 SSD 128G/256G/512G/1T included)<br />1 x M.2 Key M PCIe*1_Gen3 SSD | 1 x M.2 Key M PCIe*4_Gen4 SSD<br /> (NVMe 2280 SSD 128G/256G/512G/1T included)<br />1 x M.2 Key M PCIe*1_Gen4 SSD | 1 x M.2 Key M PCIe*4_Gen4 SSD<br /> (NVMe 2280 SSD 128G/256G/512G/1T included)<br />1 x M.2 Key M PCIe*1_Gen4 SSD |
| **Power Supply**             | DC input 12V-36V, Peak Power 120W | DC input 12V-36V, Peak Power 120W | DC input 12V-36V, Peak Power 120W | DC input 12V-36V, Peak Power 120W |
| **LED Indicator**            | 1 x Power LED, 1 x Wi-Fi LED,<br />1 x 4G LED, 1 x Ethernet LED | 1 x Power LED, 1 x Wi-Fi LED,<br />1 x 4G LED, 1 x Ethernet LED | 1 x Power LED, 1 x Wi-Fi LED,<br />1 x 4G LED, 1 x Ethernet LED | 1 x Power LED, 1 x Wi-Fi LED,<br />1 x 4G LED, 1 x Ethernet LED |
| **Operating Temperature**    | -25°C to 70°C              | -25°C to 70°C              | -25°C to 70°C              | -25°C to 70°C              |
| **Storage Temperature**      | -40°C to 85°C              | -40°C to 85°C              | -40°C to 85°C              | -40°C to 85°C              |
| **Operating Humidity**       | 20% - 90% (non-condensing) | 20% - 90% (non-condensing) | 20% - 90% (non-condensing) | 20% - 90% (non-condensing) |
| **Dimensions**               | 140mm x 128mm x 60mm       | 140mm x 128mm x 60mm       | 140mm x 128mm x 60mm       | 140mm x 128mm x 60mm       |
| **Installation**             | Desk, Wall mounting        | Desk, Wall mounting        | Desk, Wall mounting        | Desk, Wall mounting        |
| **SMA Antenna Connector**    | 6                          | 6                          | 6                          | 6                          |
| **Thermal**                  | Fanless                    | Fanless                    | Fanless                    | Fanless                    |
| **Certification**            | CE/FCC/RoHs                | CE/FCC/RoHs                | CE/FCC/RoHs                | CE/FCC/RoHs                |
| **Warranty**                 | -                          | -                          | -                          | -                          |


## 产品资料

### 产品教程
关于如何快速使用Edge AI Box可见[「快速使用教程」](./1-Quick%20Start.md)

关于如何使用Edge AI Box硬件特性和使用说明可见[「硬件使用指南」](./2-Hardware%20Guide/0-Components%20Overview.md)

关于如何使用Edge AI Box系统驱动和开发指引可见[「系统和驱动指南」](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md)

常见产品问题可见[「参见问题支持」](./6-FAQ%20and%20Support/0-FAQ.md)


### 产品资源

| 资源名称                 | 地址                                                                 |
|--------------------------|----------------------------------------------------------------------|
| 硬件原理图               | [/docs/hardware-schematic](/docs/hardware-schematic)                 |
| 硬件设计指南             | [/docs/hardware-guide](/docs/hardware-guide)                         |
| 物料清单 (BOM)           | [/docs/bom-list](/docs/bom-list)                                     |
| 项目工程示例代码         | [GitHub](https://github.com/your-repo/examples)                  |
| API 参考文档             | [/docs/api-reference](/docs/api-reference)                           |
| SDK 工具包               | [/downloads/sdk-toolkit](/downloads/sdk-toolkit)                     |


## 技术支持与社区

  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
    margin: '50px 0',
  }}>
    {/* Discord 卡片 */}
    <a 
      href="https://discord.gg/your-invite-link" 
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
        src={require('../../assets/Discord-Logo-White.png').default} 
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
        加入开发者社区
      </h2>
      <p style={{ 
        margin: 0,
        lineHeight: 1.6,
        fontSize: '1rem',
        color: '#ffffff'
      }}>
        与开发者实时交流技术问题<br />
        获取最新产品动态和教程资源
      </p>
    </a>

    {/* GitHub 卡片 */}
    <a 
      href="https://github.com/your-repo" 
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
        src={require('../../assets/GitHub_Lockup_Light.png').default} 
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
        GitHub 仓库
      </h2>
      <p style={{ 
        margin: 0,
        lineHeight: 1.6,
        fontSize: '1rem',
        color: '#ffffff'
      }}>
        提交Issue报告问题<br />
        查看源代码和参与贡献
      </p>
    </a>
  </div>