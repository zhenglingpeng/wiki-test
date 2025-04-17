import Link from "@docusaurus/Link";
import SupportGrid from '@site/src/components/SupportGrid';


# Overview

## 产品简介
![NG45XX](/img/Overview/NG45xx/NG45XX.png)

CamThink Edge AI Box NeoEdge NG45XX 系列具备强大的边缘计算能力，集成了NVIDIA® Jetson Orin™ NX 或 Nano 核心模块，并兼容**NVIDIA Super Developer Kit**，能够充分释放 Jetson Orin™ 的计算性能。与未支持NVIDIA Super Developer Kit的上一代产品相比，整体**性能提升最高可达1.7倍**。除了支持常见视觉AI应用的部署外，它还能高效运行各种主流生成式AI模型，包括**文本大语言模型（LLMs）、视觉大语言模型（VLMs）、多模态大语言模型（MLLMs）**。此外NG45XX支持多种物理接口及可扩展的通信模块（WiFi/4G/5G），能够灵活适配各类边缘计算应用场景的设备间通讯及边缘与云端协同通信，在例如机器人系统、智能车载终端、智慧工厂计算中心以及AI边缘计算网关场景中可广泛应用。其**工业级设计**保障设备在 -20°C 至 60°C 的环境下稳定运行，具备出色的可靠性，可满足多样化的场景需求。

### 支持NVIDIA Super Developer Kit

NeoEdge NG45XX 系列产品支持NVIDIA Super Developer Kit，在众多主流的大语言模型（LLMs）、视觉语言模型（VLMs）以及视觉 Transformer（ViTs）中，相较于前代产品实现了显著的性能提升，**购买CamThink Edge AI Box NeoEdge NG45XX系列产品即可以体验最新性能与特性**。有关升级特性的更多信息，请参阅[Jetson Orin Super Developer Kit](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/) 。

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
>基于NVIDIA Jetson Orin系列模块打造，提供20-157 TOPS的强劲AI算力，配备最多1024个CUDA核心和32个Tensor核心。支持**JetPack 6.0**完整开发套件，预装CUDA、TensorRT等工具链，兼容主流AI框架。适用于计算机视觉、工业质检、自主机器等边缘AI应用场景，系统烧录教程请参考本wiki中心提供的 [**「系统烧录指南」**](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md)。
- 搭载 **NVIDIA Jetson Orin** 系列模块，提供阶梯式 AI 算力：
  - **标准模式**：20 TOPS（NG4510）→ 100 TOPS（NG4521）。
  - **SUPER 模式（INT8）**：34 TOPS → 157 TOPS。
- 异构计算架构：
  - **GPU**：最多 1024 个 NVIDIA® CUDA® 核心 + 32 个 Tensor 核心。
  - **CPU**：8 核 Arm® Cortex®-A78AE v8.2（64位）@ 2.0GHz。
  - **内存**：LPDDR5 最高 16GB，带宽达 102GB/s。
- 预装 **NVIDIA JetPack 6.0+ SDK**，包含完整开发环境CUDA、cuDNN、TensorRT、VisionWorks等，系统特性详见 [**Jetpack SDK 6.0**](https://developer.nvidia.com/embedded/jetpack-sdk-60)。
- 支持各种主流 AI 框架：TensorFlow/Keras、PyTorch、ONNX Runtime等。
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
  <img src={require("/img/Overview/NG45xx/Jetpack.png").default} style={{ maxHeight: '300px' }} />
</div>

### 丰富接口，广泛兼容
>NG45XX拥有丰富的接口能力，满足各种工业和边缘计算场景需求，使用教程可见[**「硬件接口使用指南」**](./2-Hardware%20Guide/1-Hardware%20Connection.md)
- **高速网络连接：** 配备 **双千兆以太网接口**，确保稳定可靠的网络通信，适用于工业通信和边缘计算应用，并可**同时处理最多16路视频流**（视型号而定）。
- **高速数据传输与扩展：** 搭载 **4×USB 3.1 + 1×Type-C (USB 3.2)** 接口，实现高速数据传输，支持外接摄像头、存储设备等USB外设。
- **工业级通信协议：** 内置 **RS232、RS485、CAN 总线** 接口，无缝对接各类工业级设备，满足严苛的通信需求，抗干扰设计，适用于复杂电磁环境。
- **自动化控制应用：** 配备 **DI/DO 接口**，支持数字信号输入输出，方便实现自动化控制和逻辑判断。
- **HDMI输出**：HDMI接口输出，支持4K显示。
- **3.5mm音频接口**：支持麦克风输入、声音输出。
- **6×SMA天线接口**：支持外接高增益天线。
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
  <img src={require("/img/Overview/NG45xx/Product2.png").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
  <img src={require("/img/Overview/NG45xx/Product1.png").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
</div>


### 扩展性与灵活性
>NG45XX载板提供强大的存储和通讯扩展及其他接口能力，满足各种应用场景需求，扩展模块的安装与使用可见[**「硬件PCBA使用指南」**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md)
- **NVMe SSD存储扩展：** 支持 **M.2 Key M PCIe 4.0 SSD**，支持2280 NVMe SSD（预装256GB/512GB/1TB），可搭载 **256GB 至 1TB 及以上**的 NVMe 固态硬盘，满足海量数据存，额外M.2 Key M（PCIe×1 Gen3）可扩展第二块SSD
- **无线通信能力扩展：**  **M.2 Key B 与 Key E** 接口支持多种无线通信模块，满足各种边缘无线通讯需求
  - **4G/5G/Wi-Fi Halow扩展：**通过**M.2 Key B**插槽（支持2242/2252模块）灵活扩展蜂窝网络或Wi-Fi Halow。
  - **Wi-Fi 6/蓝牙5.0：** 通过**M.2 Key E**插槽（2230规格）扩展高速无线连接。
  - **Nano SIM卡槽**：兼容4G/5G模块
- **RTC实时时钟**：内置CR2032电池
- **视频输入接口**：支持**4 lanes MIPI×2**摄像头接口，可同时接入多路高分辨率工业相机。
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
  <img src={require("/img/Overview/NG45xx/PCB.jpg").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
  <img src={require("/img/Overview/NG45xx/PCB2.jpg").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
</div>

### 坚固耐用与可靠性
>专为严苛工业环境设计的边缘计算设备，采用工业级制造标准，确保在恶劣条件下长期稳定运行。设备安装与部署说明详见[**「设备安装与部署」**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md)。
- **工业级电源设计**：宽电压输入（12V-36V DC），适应工业现场电压波动，峰值功率120W，满足高性能计算需求，内置多重保护电路（过压/过流/反接保护）,稳定支持支持SUPER模式持续工作。
- **紧凑坚固的结构**：设备尺寸为160mm × 125mm × 75mm，全金属外壳，支持**桌面放置、壁挂安装、DIN导轨安装**等多种安装方式。
- **较好的环境适应性**：**无风扇被动散热架构及宽温设计**，工作温度范围-25°C 至 60°C，存储温度-40°C 至 85°C，适应各种工业环境。
- 通过CE/FCC/RoHS 认证，符合工业级安全标准。
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("/img/Overview/NG45xx/Product3.png").default} style={{ maxHeight: '300px' }} />
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


## 产品应用
### 产品适用场景
>NG45xx系列边缘计算设备凭借其强大的AI算力和工业级可靠性，可应用于多个行业领域
- **智能制造**
  - **工业质检**：搭载YOLOv5/v8模型，实现生产线上的实时缺陷检测，准确率>99.5%
  - **设备预测性维护**：通过振动传感器+AI分析，提前预警设备故障
  - **智能分拣**：配合机械臂实现物料自动分类，速度达60件/分钟

- **智慧城市**
  - **交通监控**：支持16路视频流分析，实时识别违章行为
  - **安防巡检**：人脸识别+行为分析，异常事件秒级响应
  - **环境监测**：对接各类传感器，实现空气质量智能分析

- **无人系统**
  - **AGV导航**：基于激光雷达+视觉的混合SLAM方案
  - **无人机巡检**：支持5G图传+边缘AI分析
  - **服务机器人**：多模态交互系统，响应延迟小于200ms

- **医疗健康**
  - **医疗影像分析**：支持DICOM标准的X光片实时诊断
  - **智能导诊**：自然语言处理+人脸识别一体化方案
  - **远程会诊**：4K视频采集+低延迟传输

### 应用示例
>NG45XX系列产品可在多个实际场景中进行应用，以下为部分典型应用案例。每个案例都配有详细的部署指南，帮助您快速复现和应用。

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  }}
>
  {[
    { 
      title: "LLM Chatbot", 
      image: require("/img/Overview/NG45xx/application/OpenWebUI.png").default, 
      description: "本指南介绍如何使用 Ollama（轻量推理引擎）在 NVIDIA Jetson Orin 设备上本地部署 DeepSeek-R1 大语言模型，实现离线 AI 交互，安装配置简单高效。", 
      link: "./Application Guide/Edge Computing Application Examples/Deepseek-r1"
    },
    { 
      title: "Pose Estimation", 
      image: require("/img/Overview/NG45xx/application/Pose.png").default, 
      description: "本文介绍如何在 Jetson Orin 平台（Nano / NX / AGX）上使用 MediaPipe 运行实时姿态估计（Pose Estimation），在支持的情况下启用 GPU 加速。", 
      link: "./Application Guide/Edge Computing Application Examples/mediapipe"
    },
    { 
      title: "YoLo Object Detection", 
      image: require("/img/Overview/NG45xx/application/ObjectDetection.png").default, 
      description: "本教程将指导您如何在 NVIDIA Jetson Orin 平台上部署 YOLOv8 模型，并利用 TensorRT 进行推理加速。通过此过程，您将能够在 Jetson Orin 上高效地运行 YOLOv8，实现实时的目标检测。", 
      link: "./Application Guide/Edge Computing Application Examples/Object Detection"
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
        style={{ maxWidth: "100%", height: "150px", objectFit: "cover", borderRadius: "8px", margin: "0 auto", width: "100%" }}
      />
      <p
        style={{
          color: "#666",
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
   </Link>
  ))}
</div>


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

<SupportGrid />
