# Welcome

## CamThink, Empowering Edge Intelligence with Imagination

**CamThink** is a brand that provides developers with various **open hardware** and **open source software**, dedicated to building practical **AI perception systems**. We focus on multi-dimensional perception capabilities including **vision**, **audio**, and **environmental data**, enabling AI to understand the world more comprehensively. As a sub-brand of **Milesight**, **CamThink** inherits strong R&D capabilities and global support networks, ensuring product reliability and continuous innovation.

## What We Offer

- **Hardware Platform**: High-performance, scalable, and modular edge AI devices
- **Open Source Toolchain**: One-stop support including drivers, SDKs, and model deployment frameworks
- **Multi-modal Perception**: Various application cases supporting intelligent processing of visual, audio, and sensor data

## Quick Access

{/* Product Card Container */}
<div className="product-card-container">

  {/* NeoEdge NG45XX Series Product Card */}
  <div className="product-card">
    <div className="product-header">
      <img src="/img/Overview/NG45xx/NG45XX.png" alt="NeoEdge NG45XX" className="product-image"/>
      <h3 className="product-title">NeoEdge NG45xx Series</h3>
    </div>
    <p className="product-description">
      High-performance edge computing device based on NVIDIA Jetson platform, suitable for complex AI inference and multi-modal data processing scenarios.
    </p>
    <div className="product-links">
      <a href="/docs/NeoEdge NG45XX Series/Overview" className="link-item">
        <span className="link-icon">📖</span>
        <span>Overview</span>
      </a>
      <a href="/docs/NeoEdge NG45XX Series/Quick Start" className="link-item">
        <span className="link-icon">🚀</span>
        <span>Quick Start</span>
      </a>
      <a href="/docs/NeoEdge NG45XX Series/Hardware Guide/Components Overview" className="link-item">
        <span className="link-icon">🔧</span>
        <span>Hardware Guide</span>
      </a>
      <a href="/docs/NeoEdge NG45XX Series/Software Guide/Development Environment Setup" className="link-item">
        <span className="link-icon">💻</span>
        <span>Software Development</span>
      </a>
      <a href="/docs/NeoEdge NG45XX Series/Application Guide/Edge Computing Application Examples/template" className="link-item">
        <span className="link-icon">📱</span>
        <span>Application Guide</span>
      </a>
    </div>
  </div>

  {/* NeoEyes NE101 Series Product Card */}
  <div className="product-card">
    <div className="product-header">
      <img src="/img/Overview/NE101/NE101.png" alt="NeoEyes NE101" className="product-image"/>
      <h3 className="product-title">NeoEyes NE101 Smart Camera</h3>
    </div>
    <p className="product-description">
      Lightweight smart camera device supporting edge vision analysis and wireless connectivity, suitable for IoT and lightweight AI application scenarios.
    </p>
    <div className="product-links">
      <a href="/docs/NeoEyes NE101 Series/Overview" className="link-item">
        <span className="link-icon">📖</span>
        <span>Overview</span>
      </a>
      <a href="/docs/NeoEyes NE101 Series/Quick Start" className="link-item">
        <span className="link-icon">🚀</span>
        <span>Quick Start</span>
      </a>
      <a href="/docs/NeoEyes NE101 Series/Hardware Guide/Components Overview" className="link-item">
        <span className="link-icon">🔧</span>
        <span>Hardware Guide</span>
      </a>
      <a href="/docs/NeoEyes NE101 Series/Software Guide" className="link-item">
        <span className="link-icon">💻</span>
        <span>Software Development</span>
      </a>
      <a href="/docs/NeoEyes NE101 Series/Application Guide" className="link-item">
        <span className="link-icon">📱</span>
        <span>Application Guide</span>
      </a>
    </div>
  </div>

</div>

{/* Product Card Styles */}
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
