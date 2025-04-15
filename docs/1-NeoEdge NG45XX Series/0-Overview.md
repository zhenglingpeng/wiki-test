import Link from "@docusaurus/Link";


# Overview

## 产品简介
![NG45XX](/img/Overview/NG45xx/NG45XX.png)

CamThink Edge AI Box NeoEdge NG45XX 系列具备强大的边缘计算能力，集成了 NVIDIA® Jetson Orin™ NX 或 Nano 核心模块，并兼容 NVIDIA Super Developer Kit，充分释放 Jetson Orin™ 的计算性能。与上一代产品相比，整体性能提升最高可达 1.7 倍。除了支持视觉 AI 应用的部署外，它还能高效运行主流生成式 AI 模型，包括 Transformers、大语言模型（LLMs）和视觉语言模型（VLMs）。此外NG45XX支持多种物理接口及可扩展的通信模块（WiFi/4G/5G），能够灵活适配各类边缘计算应用场景，例如机器人系统、智能车载终端、智慧工厂计算中心以及边缘计算网关。其工业级设计保障设备在 -20°C 至 60°C 的环境下稳定运行，具备出色的可靠性，可满足多样化的边缘计算部署需求。

### 支持NVIDIA Super Developer Kit

NVIDIA Super Developer Kit 在众多主流的大语言模型（LLMs）、视觉语言模型（VLMs）以及视觉 Transformer（ViTs）中，相较于前代产品实现了显著的性能提升。有关升级特性的更多信息，请参阅[Jetson Orin Super Developer Kit](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/) 。

<div className="performance-cards" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  {[
    {
      title: 'Large Language Models',
      imageSrc: require('/img/Overview/NG45xx/LLM.png').default,
      altText: 'LLM性能提升',
      description: 'LLM 在 NVIDIA Super Developer Kit 上的性能提升',
    },
    {
      title: 'Vision Language Models',
      imageSrc: require('/img/Overview/NG45xx/VLM.png').default,
      altText: 'VLM性能提升',
      description: 'VLM 在 NVIDIA Super Developer Kit 上的性能提升',
    },
    {
      title: 'Vision Transformers',
      imageSrc: require('/img/Overview/NG45xx/Vision.png').default,
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


### 高性能 AI 计算平台
- 搭载 **NVIDIA Jetson Orin** 系列模块，提供从 **20 TOPS** 到 **100 TOPS**（标准模式）或从 **34 TOPS** 到 **157 TOPS**（SUPER 模式）的 AI 算力，满足不同复杂度的 AI 推理需求。  
- 最多配备 **1024 个 CUDA 核心** 和 **32 个 Tensor 核心**，加速深度学习推理与计算机视觉任务。  
- 内置支持 **NVIDIA JetPack 6.0** 及更高版本，提供构建端到端加速 AI 应用的最全面解决方案，大幅缩短产品上市时间。详见 [**Jetpack SDK 6.0**](https://developer.nvidia.com/embedded/jetpack-sdk-60)。系统烧录教程请参考 [**《系统烧录指南》**](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md)。

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
  <img src={require("/img/Overview/NG45xx/Jetpack.png").default} style={{ maxHeight: '300px' }} />
</div>
<p></p>


### 丰富接口，广泛兼容
- 提供 **双千兆以太网接口**，适用于工业通信及边缘计算。
- 配备 **4×USB3.1 + 1×Type-C（USB3.2）**，支持高速数据传输及外设扩展。
- 具备 **RS232、RS485、CAN 总线**，满足工业级设备通信需求。
- **DI/DO 接口** 支持数字信号输入输出，适用于自动化控制应用。
- 硬件接口使用教程可见[**「接口使用指南」**](./2-Hardware%20Guide/1-Hardware%20Connection.md)
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("/img/Overview/NG45xx/Product2.png").default} style={{ maxHeight: '300px' }} />
</div>

### 灵活存储与扩展
- **M.2 Key M PCIe 4.0 SSD** 支持 **128GB 至 1TB 及以上容量的 NVMe 固态硬盘**，满足大容量数据存储需求。  
- **M.2 Key B 与 Key E** 支持无线通信模块，如 **4G/5G、Wi-Fi Halow、Wi-Fi/Bluetooth** 等。  
- 提供一个 **Nano SIM 卡槽**，支持蜂窝网络通信，适用于边缘计算与数据传输场景。  
- 扩展模块的安装与使用可见[**「硬件指南」**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md)
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("/img/Overview/NG45xx/Product1.png").default} style={{ maxHeight: '300px' }} />
</div>

### 灵活安装与高效散热
- 设备尺寸为 **160mm × 125mm × 75mm**，支持 **桌面或壁挂安装**，适用于多种部署环境。  
- 采用 **无风扇设计**，配合优化的散热结构，提高设备稳定性，降低维护成本。  
- 设备的安装与部署说明详见 [**「设备安装与部署」**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md)。
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("/img/Overview/NG45xx/Product3.png").default} style={{ maxHeight: '300px' }} />
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
      image:require("/img/Overview/NG45xx/application/deepseek.png").default, 
      description: "本指南提供了在NVIDIA Jetson Orin设备上部署DeepSeek-R1模型的全面操作步骤，从而实现离线推理和交互。", 
      link: "./Application%20Guide/Edge%20Computing%20Application%20Examples/Local%20deepseek-r1%20deployment.md"
    },
    { 
      title: "yolo", 
      image:require("/img/Overview/NG45xx/application/ultralytice.png").default, 
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
| 项目工程示例代码         | [GitHub](https://github.com/camthink-ai/examples)                  |
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
