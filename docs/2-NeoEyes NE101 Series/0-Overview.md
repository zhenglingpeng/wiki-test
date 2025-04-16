import Link from "@docusaurus/Link";
import SupportGrid from '@site/src/components/SupportGrid';

# Overview

## 产品介绍
![NE101](/img/Overview/NE101/NE101.png)

NE101是一款基于事件触发抓拍的低功耗相机，具有硬件模块化和产品高度灵活可扩展的特点，结合CamThink提供的硬件设计文件、开发者Wiki、SDK、固件、配件等资源开发者可快速根据场景需求自行拓展传感器、电源、外壳等各种定义DIY各种场景的事件图像采集相机，快速完成应用场景的从0到1商业化落地。

### 主要特点
- **无线安装和部署**：支持电池供电和可互换通信模块（WiFi、Cat1、WiFi-Halow），便于安装。
- **低功耗设计**：支持超低功耗运行模式。使用WiFi通信时，每天拍摄1次可实现超过3年的电池寿命。
- **开源固件**：所有固件源代码开源且可免费商用。提供开箱即用功能的同时支持二次开发，加速硬件实现。
- **模块化结构设计**：采用螺丝固定，可轻松拆分为前盖、主体和后盖，支持DIY改装。
- **户外部署支持**：IP67防护等级，适合户外部署。

### 硬件模块化
- **模块化设计**：前/中/后可分离的模块化设计便于扩展和拆卸。模块化硬件包括相机模块、通信模块和主板，可灵活适应不同场景。
- **结构可扩展性**：采用钢化玻璃前盖，具有良好的透光性和螺丝固定便于更换模块。特点：
  - 侧边拍摄按钮用于即时抓拍
  - 支架安装孔用于外壳扩展
  - 底部4mm螺纹孔适配各种支架类型
  - 侧边橡胶密封圈用于外部布线

<div className="performance-cards" style={{ width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  {[
    {
      title: '模块化结构设计',
      imageSrc: require('/img/Overview/NE101/Module.png').default,
      altText: '模块化结构设计',
    },
    {
      title: '前盖设计',
      imageSrc: require('/img/Overview/NE101/ProductTop.png').default,
      altText: '前盖设计',
    },
    {
      title: '预留传感器接口',
      imageSrc: require('/img/Overview/NE101/ProductL.png').default,
      altText: '预留传感器接口',
    },
    {
      title: '功能按钮',
      imageSrc: require('/img/Overview/NE101/ProductR.png').default,
      altText: '功能按钮',
    },
    {
      title: '支架安装孔',
      imageSrc: require('/img/Overview/NE101/ProductB.png').default,
      altText: '支架安装孔',
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

### 模块化PCBA设计
#### 1. 功能丰富的可扩展主板
- **丰富的PCBA接口**：支持即插即用通信模块，便于硬件扩展。详见[「硬件指南」](../0-NeoEyes%20NE101%20Series/2-Hardware%20Guide/0-Components%20Overview.md)
- **16Pin IO接口**：支持各种传感器触发拍摄（资源使用取决于通信模块和USB相机）。详见[「IO资源表」](../0-NeoEyes%20NE101%20Series/2-Hardware%20Guide/0-Components%20Overview.md)
- **电源接口**：支持电池或Type-C供电。详见[「硬件指南」](../0-NeoEyes%20NE101%20Series/2-Hardware%20Guide/0-Components%20Overview.md)
- **Micro TF卡槽**：用于存储扩展。详见[「硬件指南」](../0-NeoEyes%20NE101%20Series/2-Hardware%20Guide/0-Components%20Overview.md)
- **调试接口**：Type-C和UART用于开发。详见[「硬件指南」](../0-NeoEyes%20NE101%20Series/2-Hardware%20Guide/0-Components%20Overview.md)

#### 2. 可选Cat-1通信模块
- **模块**：移远EG912UGL（支持LTE FDD/TDD和GSM，除北美外全球支持）
- **尺寸**：60mm x 60mm

#### 3. 可选WiFi HaLow模块
- **模块**：移远FGH100M（IEEE 802.11ah协议，用于长距离低功耗连接）
- **尺寸**：60mm x 60mm

#### 4. 可互换镜头模块
- **OV5640模块**（60°视角，8cm对焦）：近距离拍摄
- **OV5640模块**（60°视角，3m对焦）：标准距离拍摄
- **OV5640模块**（120°视角，15cm对焦）：近距离广角
- **OV5640模块**（120°视角，4m对焦）：标准距离广角

<div className="performance-cards" style={{ width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  {[
    {
      title: '主板正面',
      imageSrc: require('/img/Overview/NE101/PCB1.png').default,
      altText: '主板正面',
    },
    {
      title: '主板背面',
      imageSrc: require('/img/Overview/NE101/PCB2.png').default,
      altText: '主板背面',
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

### 部署支持
- **可扩展支架**：支持墙面/桌面安装，提供多种支架和外壳扩展选项。
<div className="performance-cards" style={{ width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  {[
    {
      title: '桌面支架',
      imageSrc: require('/img/Overview/NE101/Bracket/1.png').default,
      altText: '桌面支架',
    },
    {
      title: '水表支架',
      imageSrc: require('/img/Overview/NE101/Bracket/2.png').default,
      altText: '水表支架',
    },
    {
      title: '壁挂支架',
      imageSrc: require('/img/Overview/NE101/Bracket/3.png').default,
      altText: '壁挂支架',
    },
    {
      title: '表盘安装支架',
      imageSrc: require('/img/Overview/NE101/Bracket/4.png').default,
      altText: '表盘安装支架',
    },
    {
      title: '立杆安装支架',
      imageSrc: require('/img/Overview/NE101/Bracket/5.png').default,
      altText: '立杆安装支架',
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

### 开源硬件
- 提供结构设计文件用于DIY外壳（可3D打印）或自定义扩展。详见[产品资源 - 结构设计文件](#产品资源)
- 提供硬件原理图用于设计扩展或外部传感器集成。详见[产品资源 - 硬件原理图](#产品资源)
- 完整开源固件，具备开箱即用功能：低功耗模式、设备唤醒、MQTT数据传输、补光控制、定时拍摄、图像参数调整、网络管理。开发和烧录请参见[「软件指南」](../0-NeoEyes%20NE101%20Series/3-Software%20Guide/1-System%20Flashing%20and%20Initialization.md)

<p align="center">
  <img src={require('/img/Overview/NE101/software.png').default} alt="software" style={{ width: '300px' }} />
</p>

## 应用场景
### 基础应用
定期拍摄用于：
- 公用事业表计读数（水表/工业仪表）
- 暖通空调积尘监测以安排维护

### 事件触发应用
传感器激活拍摄：
- **PIR/雷达**：入侵检测（如农场动物/人员监控）
- **声音传感器**：异常噪音图像捕捉（如养老院警报）
- **光线传感器**：条件拍摄（如温室植物监测）
- **振动传感器**：设备状态监测（如工业机械检查）
- **温度传感器**：热事件捕捉（如废物处理设施异常检测）

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
      description: "随着大语言模型（LLMs）成为各种应用的重要组成部分，在本地设备上高效运行这些模型对开发者来说至关重要。本指南提供了在NVIDIA Jetson Orin设备上部署DeepSeek-R1模型的完整流程，实现离线推理和交互。", 
      link: "/docs/Edge AI Box/NeoEdge NG45XX Series/Application Guide/Edge Computing Application Examples/Local deepseek-r1 deployment"
    },
    { 
      title: "yolo", 
      image:require("/img/Overview/NG45xx/application/ultralytice.png").default, 
      description: "本教程将指导您在NVIDIA Jetson Orin平台上部署YOLOv8模型，使用TensorRT进行推理加速。通过遵循此过程，您将能够在Jetson Orin上高效运行YOLOv8进行实时目标检测。", 
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

## 产品资源

### 产品教程
- [快速入门指南](./1-Quick%20Start.md)
- [硬件用户指南](./2-Hardware%20Guide/0-Components%20Overview.md)
- [系统与驱动指南](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md)
- [常见问题与支持](./6-FAQ%20and%20Support/0-FAQ.md)

### 下载资源
| 资源                   | 链接                                  |
|-----------------------|---------------------------------------|
| 硬件原理图            | [/docs/hardware-schematic](/docs/hardware-schematic) |
| 3D设计文件            | [/downloads/sdk-toolkit](/downloads/sdk-toolkit)     |
| 示例代码              | [GitHub](https://github.com/camthink-ai/examples)  |
| SDK工具包             | [/downloads/sdk-toolkit](/downloads/sdk-toolkit)     |

## 技术支持

<SupportGrid />