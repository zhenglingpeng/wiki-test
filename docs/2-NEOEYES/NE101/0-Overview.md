import Link from "@docusaurus/Link";


# Overview

## 产品简介
![NE101](../../assets/Overview/NE101/NE101.png)

NE101是一款基于事件触发抓拍的低功耗相机，具有硬件模块化和产品高度灵活可扩展的特点，结合CamThink提供的硬件设计文件、开发者Wiki、SDK、固件、配件等资源开发者可快速根据场景需求自行拓展传感器、电源、外壳等各种定义DIY各种场景的事件图像采集相机，快速完成应用场景的从0到1商业化落地。

### 产品特点
- **无线安装部署**：设备支持电池供电，支持wifi、cat1、wifi-halow各种通讯模式，易于安装和部署。
- **低功耗设计**：支持低功耗工作模式，wifi通讯下产品1天1拍的寿命长达3年，低功耗且节能。
- **固件开源开放**：设备固件全部开源开放，支持开发者进行产品功能的二次开发。
- **模块化结构设计**：整机可方便拆装，结构分为前盖、主体、后盖，螺丝拆装，支持二次DIY。防护等级达到IP67，适合户外部署使用。


### 模块化设计
- **前盖设计**：采用钢化玻璃，透光性好，螺丝便于拆卸，可单独更换通讯模块或相机模组。
- **操作按钮**：侧面预留拍照按键，点击即可抓拍，同时预留支架安装孔，便于扩展外壳部件。
- **可定制化设计**：底部有4mm开孔，可安装各种4mm螺孔支架。整机侧面预留包胶开孔，便于引线外接。
<div className="performance-cards" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  {[
    {
      title: '模块化结构设计',
      imageSrc: require('../../assets/Overview/NE101/Module.png').default,
      altText: '模块化结构设计',
    },
    {
      title: '前盖设计',
      imageSrc: require('../../assets/Overview/NE101/ProductTop.png').default,
      altText: '前盖设计',
    },
    {
      title: '预留包胶',
      imageSrc: require('../../assets/Overview/NE101/ProductL.png').default,
      altText: '预留包胶',
    },
    {
      title: '功能按键',
      imageSrc: require('../../assets/Overview/NE101/ProductR.png').default,
      altText: '功能按键',
    },
    {
      title: '支架安装孔',
      imageSrc: require('../../assets/Overview/NE101/ProductB.png').default,
      altText: '支架安装孔',
    }
  ].map((card, index) => (
    <div key={index} className="card" style={{ border: '1px solid #eaecef', borderRadius: '8px', padding: '10px' }}>
      <h4 style={{ textAlign: 'center', color: '#2e8555' }}>{card.title}</h4>
      <img
        src={card.imageSrc}
        alt={card.altText}
        style={{
          height: '150px', // 设置图片固定高度
          objectFit: 'cover', // 保持纵横比并填充整个容器
          margin: '15px 0',
          borderRadius: '4px'
        }}
      />
    </div>
  ))}
</div>

### 可更换镜头模组
- **OV5640 Module** (60°角，8cm对焦)：用于近距离图像采集。
- **OV5640 Module** (60°角，3m对焦)：用于常规距离图像采集。
- **OV5640 Module** (120°角，15cm对焦)：用于近距离广角图像采集。
- **OV5640 Module** (120°角，4m对焦)：用于常规距离广角图像采集。

### 可替换的通讯方案
- **Cat-1通讯模块**：支持全球地区（除北美）。采用Quectel EG912U-GL模块，支持LTE FDD/TDD及GSM。
  - **模块**: Quectel EG912UGL
  - **通信接口**: UART
  - **尺寸**: 60mm x 60mm
  - **认证**: CE
- **WiFi HaLow通讯模块**：采用Quectel FGH100M模块，支持IEEE 802.11ah协议，适用于远距离低功耗连接。
  - **模块**: Quectel FGH100M
  - **通信接口**: SPI
  - **操作频率**: Sub-1G: 850–950 MHz
  - **尺寸**: 60mm x 60mm
  - **认证**: CE/FCC

### 接口扩展支持
- **16Pin IO接口**：支持接入各种传感器触发图像抓拍，具体资源使用受通讯模块和USB相机模组影响。
- **电源接口**：支持电池或Type-C电源供电。
- **Micro TF卡槽**：用于存储和扩展功能。
- **开发调试接口**：Type-C & UART接口，方便开发与调试。

### 产品部署支持
- **扩展支架支持**：提供支架安装孔，支持墙面、桌面安装，以及外壳扩展件安装。
<div className="performance-cards" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  {[
    {
      title: '座装支架',
      imageSrc: require('../../assets/Overview/NE101/Bracket/1.png').default,
      altText: '座装支架',
    },
    {
      title: '水表支架',
      imageSrc: require('../../assets/Overview/NE101/Bracket/2.png').default,
      altText: '水表支架',
    },
    {
      title: '壁装支架',
      imageSrc: require('../../assets/Overview/NE101/Bracket/3.png').default,
      altText: '壁装支架',
    },
    {
      title: '表盘支架',
      imageSrc: require('../../assets/Overview/NE101/Bracket/4.png').default,
      altText: '表盘支架',
    },
    {
      title: '杆件支架',
      imageSrc: require('../../assets/Overview/NE101/Bracket/5.png').default,
      altText: '杆件支架',
    }
  ].map((card, index) => (
    <div key={index} className="card" style={{ border: '1px solid #eaecef', borderRadius: '8px', padding: '10px' }}>
      <h4 style={{ textAlign: 'center', color: '#2e8555' }}>{card.title}</h4>
      <img
        src={card.imageSrc}
        alt={card.altText}
        style={{
          height: '150px', // 设置图片固定高度
          objectFit: 'cover', // 保持纵横比并填充整个容器
          margin: '15px 0',
          borderRadius: '4px'
        }}
      />
    </div>
  ))}
</div>

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
| **参数**                | **NE101**                               |
|-------------------------|--------------------------------------------|
| **MCU**                 | ESP32-S3                                   |
| **RAM**                 | 8MB                                        |
| **Flash**               | 16MB                                       |
| **UART**                | By Type-C or Wafer 4Pins                  |
| **Storage**             | Micro-TF                                   |
| **Sensor**              | OV5640                                     |
| **WiFi**                | 802.11b/g/n                                |
| **Bluetooth**           | Bluetooth v4.2 BR/EDR, BLE                 |
| **Communication**       | Cat-1 / WiFi-Halow Module                 |
| **Alarm**               | Alarm*1                                    |
| **Buttons**             | Boot Button*1, Reset Button*1, Snap Button*1 |
| **Expansion IOs**       | Pinheader for UART, I2C, SPI, GPIOs       |
| **Illumination**        | 3000K LED*1 and Photodiode*1              |
| **Power**               | DC 4 - 6V, By 2Pin Wafer or Type-C        |
| **Operation Temperature** | -20° - 60°                                |
| **Storage Temperature** | -40° - 85°                                 |
| **Certifications**      | CE/FCC                                     |
| **Dimension**           | 60mm*60mm                                  |



## 产品资料

### 产品教程
关于如何快速使用NE101可见[「快速使用教程」](./1-Quick%20Start.md)

关于如何使用NE101硬件特性和使用说明可见[「硬件使用指南」](./2-Hardware%20Guide/0-Components%20Overview.md)

关于如何使用NE101系统驱动和开发指引可见[「系统和驱动指南」](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md)

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
    margin: '50px 0'
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
      />
      <h2 style={{ 
        margin: '15px 0', 
        fontSize: '1.5rem',
        fontWeight: 600
      }}>
        加入开发者社区
      </h2>
      <p style={{ 
        margin: 0,
        opacity: 0.9,
        lineHeight: 1.6,
        fontSize: '1rem'
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
        fontWeight: 600
      }}>
        GitHub 仓库
      </h2>
      <p style={{ 
        margin: 0,
        opacity: 0.9,
        lineHeight: 1.6,
        fontSize: '1rem'
      }}>
        提交Issue报告问题<br />
        查看源代码和参与贡献
      </p>
    </a>
  </div>