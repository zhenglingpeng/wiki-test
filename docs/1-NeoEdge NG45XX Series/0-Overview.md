import Link from "@docusaurus/Link";
import SupportGrid from '@site/src/components/SupportGrid';
import AccessoriesTable from '@site/src/components/AccessoriesTable';
import ApplicationScenarios from '@site/src/components/ApplicationScenarios';


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


### 高性能AI平台
>基于NVIDIA Jetson Orin系列模块打造，提供20-157 TOPS的强劲AI算力，配备最多1024个CUDA核心和32个Tensor核心。支持**JetPack 6.0**完整开发套件，预装CUDA、TensorRT等工具链，兼容主流AI框架。适用于计算机视觉、机器人、边缘计算网关等边缘AI应用场景。
- 搭载 **NVIDIA Jetson Orin** 系列模块，提供阶梯式 AI 算力：
  - **标准模式**：20 TOPS（NG4510）→ 100 TOPS（NG4521）。
  - **SUPER 模式（INT8）**：34 TOPS → 157 TOPS。
- 异构计算架构：
  - **GPU**：最多 1024 个 NVIDIA® CUDA® 核心 + 32 个 Tensor 核心。
  - **CPU**：8 核 Arm® Cortex®-A78AE v8.2（64位）@ 2.0GHz。
  - **内存**：LPDDR5 最高 16GB，带宽达 102GB/s。
- 预装 **NVIDIA JetPack 6.0+ SDK**，包含完整开发环境CUDA、cuDNN、TensorRT、DeepStream等，系统特性详见 [**Jetpack SDK 6.0**](https://developer.nvidia.com/embedded/jetpack-sdk-60)，系统烧录教程请参考本wiki中心提供的 [**「系统烧录指南」**](./3-Software%20Guide/0-System%20Flashing%20and%20Initialization.md)。
- 支持各种主流 AI 框架：TensorFlow/Keras、PyTorch、ONNX Runtime等。
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
  <img src={require("/img/Overview/NG45xx/Jetpack.png").default} style={{ maxHeight: '300px' }} />
</div>

### 硬件接口丰富
>NG45XX拥有丰富的接口能力，满足各种工业和边缘计算场景需求，使用教程可见[**「硬件接口使用指南」**](./2-Hardware%20Guide/1-Hardware%20Connection.md)
- **千兆网络连接：** 配备 **双千兆以太网接口**，确保稳定可靠的网络通信，适用于工业通信和边缘计算应用，并可**同时处理最多16路视频流**（视型号而定）。
- **丰富的USB接口：** 搭载 **4×USB 3.1 + 1×Type-C (USB 3.2)** 接口，实现高速数据传输，支持外接摄像头、存储设备等USB外设。
- **工业级通信协议：** 内置 **RS232、RS485、CAN 总线** 接口，无缝对接各类工业级设备，满足严苛的通信需求，抗干扰设计，适用于复杂电磁环境。
- **自动化控制应用：** 配备 **DI/DO 接口**，支持数字信号输入输出，方便实现自动化控制和逻辑判断。
- **HDMI输出**：HDMI接口输出，支持4K显示。
- **3.5mm音频接口**：支持麦克风输入、声音输出。
- **6×SMA天线接口**：支持外接高增益天线。
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
  <img src={require("/img/Overview/NG45xx/Product2.png").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
  <img src={require("/img/Overview/NG45xx/Product1.png").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
</div>


### 扩展与灵活性
>NG45XX载板提供强大的存储和通讯扩展及其他接口能力，满足各种应用场景的硬件扩展需求，扩展模块的安装与使用可见[**「硬件PCBA使用指南」**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md)
- **NVMe SSD存储扩展：** 支持 **M.2 Key M PCIe 4.0 SSD**，支持2280 NVMe SSD（预装256GB/512GB/1TB），可搭载 **256GB 至 1TB 及以上**的 NVMe 固态硬盘，满足海量数据存，额外M.2 Key M（PCIe×1 Gen3）可扩展第二块SSD
- **无线通信能力扩展：**  **M.2 Key B 与 Key E** 接口支持多种无线通信模块，满足各种边缘无线通讯需求
  - **4G/5G/Wi-Fi Halow扩展：**通过**M.2 Key B**插槽（支持2242/2252模块）灵活扩展蜂窝网络或Wi-Fi Halow。
  - **Wi-Fi 6/蓝牙5.0：** 通过**M.2 Key E**插槽（2230规格）扩展高速无线连接。
  - **Nano SIM卡槽**：兼容4G/5G模块所需的SIM卡安装
- **RTC实时时钟**：内置CR2032电池
- **视频模组接口**：支持**4 lanes MIPI×2**摄像头接口，在载板上可同时接入多路高分辨率工业相机，适用于各种边缘场景应用扩展。
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
  <img src={require("/img/Overview/NG45xx/PCB.jpg").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
  <img src={require("/img/Overview/NG45xx/PCB2.jpg").default} style={{ maxHeight: '300px', width: '100%', objectFit: 'contain' }} />
</div>

### 耐用与可靠性
>专为严苛工业环境设计的边缘计算设备，采用工业级制造标准，确保在恶劣条件下长期稳定运行。设备安装与部署说明详见[**「设备安装与部署」**](./2-Hardware%20Guide/2-Schematics%20and%20PCB%20Design%20Documents.md)。
- **工业级电源设计**：宽电压输入（12V-36V DC），适应工业现场电压波动，峰值功率120W，满足高性能计算需求，内置多重保护电路（过压/过流/反接保护）,稳定支持支持SUPER模式持续工作。
- **紧凑坚固的结构**：设备尺寸为160mm × 125mm × 75mm，全金属外壳，支持**桌面放置、壁挂安装、DIN导轨安装**等多种安装方式。
- **较好的环境适应性**：**无风扇被动散热架构及宽温设计**，工作温度范围-25°C 至 60°C，存储温度-40°C 至 85°C，适应各种工业环境。
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>  
  <img src={require("/img/Overview/NG45xx/Product3.png").default} style={{ maxHeight: '300px' }} />
</div>


## 产品信息
### 产品规格
NG45XX系列整机产品和载板的规格信息如下
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


### 产品配件

#### 产品标准配件
>CamThink Edge AI Box NeoEdge NG45XX产品系列提供的标准配件如下：

<AccessoriesTable
  accessories={[
    {
      image: "/img/Accessories/ng45xx_power_adapter.jpg",
      name: "电源适配器",
      quantity: "1",
      description: [
        "输入: 100-240V AC",
        "输出: 12V/5A DC"
      ]
    },
    {
      image: "/img/Accessories/ng45xx_power_cable.jpg",
      name: <a href="./2-Hardware Guide/1-Hardware Connection.md">电源线</a>,
      quantity: "1",
      description: ["标准三芯电源线1.5m，默认欧规"]
    },
    {
      image: "/img/Accessories/ng45xx_connector.jpg",
      name: "工业级接线端子",
      quantity: "2",
      description: ["16pin公端子、8pin公端子"]
    },
    {
      image: "/img/Accessories/ng45xx_bracket.jpg",
      name: "安装支架",
      quantity: "2",
      description: ["壁挂安装支架"]
    }
  ]}
/>

#### 产品选配配件
>CamThink Edge AI Box NeoEdge NG45XX产品系列支持选配配件如下：

<AccessoriesTable
  accessories={[
    {
      image: "/img/Accessories/ng45xx_ssd.png",
      name: "SSD",
      quantity: "1",
      description: ["M.2 NVMe SSD 容量256G-1TB可选"]
    },
    {
      image: "/img/Accessories/ng45xx_wifi.png",
      name: "WiFi模组",
      quantity: "1",
      description: ["6221M-PUC 双频 Wi-Fi 和蓝牙 5.0 模块"]
    },
    {
      image: "/img/Accessories/ng45xx_4g.png",
      name: "4G模块+天线",
      quantity: "1",
      description: [
        "Quectel EM05 EM05-G 4G M.2模块，支持欧洲、美国、中国、日本、澳大利亚等主要地区使用"]
    },
    {
      image: "/img/Accessories/ng45xx_5g.png",
      name: "5G模块+天线",
      quantity: "1",
      description: ["Quectel RM520N-GL 5G M.2模块，支持全球主要地区使用"]
    },
    {
      image: "/img/Accessories/ng45xx_fan.png",
      name: "风扇",
      quantity: "1",
      description: ["散热风扇套件, NG45XX载板可用"]
    },
    {
      image: "/img/Accessories/IMX219.png",
      name: "索尼相机模组",
      quantity: "1",
      description: ["SONY IMX219 3280*2464 1/4' 1.12um"]
    },
    {
      image: "/img/Accessories/SC0870.png",
      name: "树莓派相机模组",
      quantity: "1",
      description: ["SC0870 Raspberry Pi M12 High Quality Camera"]
    }
  ]}
/>

## 产品应用
### 产品适用场景
>NG45xx系列边缘计算设备凭借其强大的AI算力和工业级可靠性，可应用于多个行业领域

<ApplicationScenarios
  imagePosition="center"
  maxDescriptionLines={4}
  categories={[
    {
      title: "智能制造",
      items: [
        {
          title: "工业质检",
          description: "结合YOLOv5/v8目标检测模型与高分辨率工业相机，实现对生产线产品的实时缺陷检测。系统可同时处理多条生产线，检测精度达99.5%以上，大幅减少人工检查成本，提高生产效率。",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-MZk8nC4dpWB3RVIh_X1MJdjgPXwTtDT5w&s"
        },
        {
          title: "设备预测性维护",
          description: "通过连接振动、温度、电流等多类型传感器，结合边缘AI算法分析设备运行状态，建立异常检测模型，提前7-14天预警潜在设备故障，降低维护成本，避免生产线意外停机。",
          image: "https://lh6.googleusercontent.com/proxy/xTsclU49YVc4V7rntI0ljuBRviYIV4rA9vySkINSMZWx_dlxkpeczhg_hXnGSxcPsZCioCd5PEoG4QVDEMaouSE"
        },
        {
          title: "智能分拣",
          description: "与工业机械臂协同工作，通过视觉识别系统对混合物料进行自动分类，处理速度可达60件/分钟，识别精度超过98%，能在复杂光照和姿态变化条件下保持稳定运行。",
          image: "https://p0.itc.cn/images01/20231009/1c0b3fd2d48b4def85979dc839e9388e.jpeg"
        }
      ]
    },
    {
      title: "智慧城市",
      items: [
        {
          title: "交通监控",
          description: "支持同时处理最多16路高清视频流分析，部署车牌识别、车型分类、交通违章行为检测等多种AI模型，识别速度小于100ms/帧，支持夜间和恶劣天气条件下的稳定工作。",
          image: "https://hailo.ai/wp-content/uploads/2023/10/Powerful-Edge-AI-to-Boost-Intelligent-Traffic-Systems-ITS-1024x458.jpeg"
        },
        {
          title: "入侵检测",
          description: "结合人脸识别、行为分析和异常事件检测技术，可覆盖校园、商场、社区等场景的安全监控，系统对异常事件响应时间小于1秒，支持与现有安防系统无缝集成。",
          image: "https://p8.itc.cn/images01/20231222/71051bef9d2f412fa433b5131629a924.png"
        },
        {
          title: "环境监测",
          description: "对接空气质量、噪声、水质等多类传感器，建立区域环境数据分析平台，可实现数据本地化处理和异常报警，通过边缘分析减少约90%的不必要数据传输，延长电池供电设备使用寿命。",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBThyZn5ZIA3OQav5Aeb96yvlcqTe7Ne1ybQ&s"
        }
      ]
    },
    {
      title: "无人系统",
      items: [
        {
          title: "AGV导航",
          description: "基于激光雷达、视觉传感器的混合SLAM技术，支持工厂、仓库等复杂环境下的精确定位与导航，定位精度可达±2cm，支持多AGV协同运行和智能避障，适用于物流、制造等场景。",
          image: "https://www.lscm.hk/files/image/2-Technology-Commercialisation/Case%20Studies/Case-AGV-1.jpg"
        },
        {
          title: "无人机巡检",
          description: "集成5G通信模块实现高带宽图传，在边缘端直接处理高清视频流，检测电力线路、石油管道、风电设备等基础设施异常，减少95%传输带宽需求，支持超长距离巡检任务。",
          image: "https://www.hcuav.com/uploads/images/2023/0421/S7qkgHCnyWmCCwkKQkEcztHQlBtO6lJptf3OEOqf.jpg"
        },
        {
          title: "服务机器人",
          description: "部署多模态交互系统，集成语音识别、人脸识别、行为追踪等功能，系统响应延迟低于200ms，通过本地处理保护用户隐私，适用于医院、酒店、展馆等公共服务场所。",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMK1Iu8Dv-u-6AZZbUyDCi5knSzrFqzOJu-Q&s"
        }
      ]
    },
    {
      title: "医疗健康",
      items: [
        {
          title: "医疗影像分析",
          description: "支持DICOM标准医疗影像处理，可部署X光片、CT、超声等多模态医学影像AI辅助诊断模型，准确率达到93%以上，处理时间控制在10秒内，帮助医生快速筛查病灶。",
          image: "https://developer-blogs.nvidia.com/zh-cn-blog/wp-content/uploads/sites/2/2022/06/Swin.png"
        },
        {
          title: "智能导诊",
          description: "整合自然语言处理和人脸识别技术，实现患者身份识别、症状初筛和科室分诊一体化方案，简化就医流程，平均每位患者节省8-15分钟排队等待时间，提升医疗机构服务效率。",
          image: "http://www.lovechuangchuang.com/image/dzjqr1.jpg"
        },
        {
          title: "远程会诊",
          description: "通过4K高清视频采集和低延迟传输技术，结合边缘AI预处理，实现基层医疗机构与三甲医院专家的远程会诊，端到端延迟控制在250ms以内，保证远程诊疗的实时性与准确性。",
          image: "https://upload-cdn.orayimg.com/upload/help/2106/202106050928526013.png"
        }
      ]
    }
  ]}
/>

### 应用工程示例
>NG45XX系列产品可在多个实际场景中进行应用，以下为部分典型应用案例。每个案例都配有详细的部署指南，帮助您快速复现和应用。

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  }}
>
  {/* 定义一个文档基础路径常量，方便维护 */}
  {(() => {
    const BASE_URL = "/docs/NeoEdge NG45XX Series/Application Guide/";
    
    const examples = [
      { 
        title: "LLM Chatbot", 
        image: require("/img/Overview/NG45xx/application/OpenWebUI.png").default, 
        description: "本指南介绍如何使用 Ollama（轻量推理引擎）在 NVIDIA Jetson Orin 设备上本地部署 DeepSeek-R1 大语言模型，实现离线 AI 交互，安装配置简单高效。", 
        path: "Deepseek-r1"
      },
      { 
        title: "Pose Estimation", 
        image: require("/img/Overview/NG45xx/application/Pose.png").default, 
        description: "本文介绍如何在 Jetson Orin 平台（Nano / NX / AGX）上使用 MediaPipe 运行实时姿态估计（Pose Estimation），在支持的情况下启用 GPU 加速。", 
        path: "mediapipe"
      },
      { 
        title: "YoLo Object Detection", 
        image: require("/img/Overview/NG45xx/application/ObjectDetection.png").default, 
        description: "本教程将指导您如何在 NVIDIA Jetson Orin 平台上部署 YOLOv8 模型，并利用 TensorRT 进行推理加速。通过此过程，您将能够在 Jetson Orin 上高效地运行 YOLOv8，实现实时的目标检测。", 
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
