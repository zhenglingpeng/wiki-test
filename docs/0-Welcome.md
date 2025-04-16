# Welcome

## CamThink，让边缘智能更具想象力

**CamThink** 是一个面向开发者提供多种 **开放硬件** 与 **开源软件** 的品牌，致力于构建真实可用的 **AI感知系统**。我们专注于 **视觉**、**听觉**、**环境数据** 等多维感知能力，让 AI 更全面地理解世界。作为 **Milesight（星纵科技）** 的子品牌，**CamThink** 继承了强大的研发能力与全球支持网络，为产品的可靠性与持续创新提供保障。

## 我们提供

- **硬件平台**：提供高性能、可扩展、模块化的边缘 AI 设备
- **开源工具链**：提供驱动、SDK、模型部署框架等一站式支持
- **多模态感知**：提供支持视觉、音频、传感器数据等智能处理的各种应用案例

## 快速入口

{/* 产品卡片容器 */}
<div className="product-card-container">

  {/* NeoEdge NG45XX 系列产品卡片 */}
  <div className="product-card">
    <div className="product-header">
      <img src="/img/Overview/NG45xx/NG45XX.png" alt="NeoEdge NG45XX" className="product-image"/>
      <h3 className="product-title">NeoEdge NG45xx 系列</h3>
    </div>
    <p className="product-description">
      基于NVIDIA Jetson平台的高性能边缘计算设备，适用于复杂AI推理和多模态数据处理场景。
    </p>
    <div className="product-links">
      <a href="/docs/NeoEdge NG45XX Series/Overview" className="link-item">
        <span className="link-icon">📖</span>
        <span>产品概述</span>
      </a>
      <a href="/docs/NeoEdge NG45XX Series/Quick Start" className="link-item">
        <span className="link-icon">🚀</span>
        <span>快速入门</span>
      </a>
      <a href="/docs/NeoEdge NG45XX Series/Hardware Guide/Components Overview" className="link-item">
        <span className="link-icon">🔧</span>
        <span>硬件指南</span>
      </a>
      <a href="/docs/NeoEdge NG45XX Series/Software Guide/Development Environment Setup" className="link-item">
        <span className="link-icon">💻</span>
        <span>软件开发</span>
      </a>
      <a href="/docs/NeoEdge NG45XX Series/Application Guide/Edge Computing Application Examples/template" className="link-item">
        <span className="link-icon">📱</span>
        <span>应用指南</span>
      </a>
    </div>
  </div>

  {/* NeoEyes NE101 系列产品卡片 */}
  <div className="product-card">
    <div className="product-header">
      <img src="/img/Overview/NE101/NE101.png" alt="NeoEyes NE101" className="product-image"/>
      <h3 className="product-title">NeoEyes NE101 智能摄像机</h3>
    </div>
    <p className="product-description">
      轻量级智能摄像设备，支持边缘视觉分析和无线连接，适用于IoT和轻量级AI应用场景。
    </p>
    <div className="product-links">
      <a href="/docs/NeoEyes NE101 Series/Overview" className="link-item">
        <span className="link-icon">📖</span>
        <span>产品概述</span>
      </a>
      <a href="/docs/NeoEyes NE101 Series/Quick Start" className="link-item">
        <span className="link-icon">🚀</span>
        <span>快速入门</span>
      </a>
      <a href="/docs/NeoEyes NE101 Series/Hardware Guide/Components Overview" className="link-item">
        <span className="link-icon">🔧</span>
        <span>硬件指南</span>
      </a>
      <a href="/docs/NeoEyes NE101 Series/Software Guide" className="link-item">
        <span className="link-icon">💻</span>
        <span>软件开发</span>
      </a>
      <a href="/docs/NeoEyes NE101 Series/Application Guide" className="link-item">
        <span className="link-icon">📱</span>
        <span>应用指南</span>
      </a>
    </div>
  </div>

</div>

{/* 产品卡片样式 */}
<style>
{`
  .product-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-bottom: 48px;
  }
  
  .product-card {
    border: 1px solid #eaeaea;
    border-radius: 12px;
    padding: 24px;
    background-color: #ffffff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .product-header {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    gap: 16px;
  }
  
  .product-image {
    width: 90px;
    height: 90px;
    object-fit: contain;
    border-radius: 8px;
    background-color: #f8f9fa;
    padding: 8px;
  }
  
  .product-title {
    margin: 0;
    font-size: 1.5rem;
    color: #333;
    font-weight: 600;
  }
  
  .product-description {
    margin: 0 0 16px 0;
    color: #555;
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .product-links {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .link-item {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    background-color: #f8f9fa;
    border-radius: 6px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.2s ease;
  }
  
  .link-item:hover {
    background-color: #e9ecef;
    color: #0066cc;
  }
  
  .link-icon {
    margin-right: 10px;
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    .product-card-container {
      grid-template-columns: 1fr;
    }
  }
`}
</style>
