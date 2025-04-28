import DocumentList from '@site/src/components/DocumentList';

# Welcome

Welcome to the **CamThink Wiki Center**!

We're thrilled to have you join our community, the best place to explore and understand edge AI perception technologies. Whether you're a beginner or an experienced developer, you'll find valuable resources and support here.

## CamThink: Redefining Possibilities for Edge Intelligence

**CamThink** is a brand dedicated to providing developers with diverse **open hardware** and **open-source software** solutions. We specialize in building **edge AI perception kits** with real-world applicability, focusing on delivering multidimensional sensing capabilities including vision, audio, and environmental data. Our mission is to enable AI to better understand the world and drive the advancement of edge intelligence technologies. As a sub-brand of Milesight, CamThink inherits its strong R&D capabilities and global support network, ensuring product reliability and continuous innovation.

## Quick Access
To help you get started quickly, here are some essential resource links:
{/* Product card container */}
<div className="product-card-container">

  {/* NeoEdge NG4500 Series product card */}
  <div className="product-card">
    <div className="product-header">
      <img src="/img/Overview/NG45xx/NG45XX.png" alt="NeoEdge NG45XX" className="product-image"/>
      <h3 className="product-title">Edge AI Box NG45xx</h3>
    </div>
    <p className="product-description">
      High-performance edge computing device based on NVIDIA Jetson platform, ideal for complex AI inference and multimodal data processing scenarios.
    </p>
    <div className="product-links">
      <a href="/docs/NeoEdge NG4500 Series/Overview" className="link-item">
        <span className="link-icon">📖</span>
        <span>Product Overview</span>
      </a>
      <a href="/docs/NeoEdge NG4500 Series/Quick Start" className="link-item">
        <span className="link-icon">🚀</span>
        <span>Quick Start</span>
      </a>
      <a href="/docs/NeoEdge NG4500 Series/NG4500-CB01 Development Board/Dev Guide" className="link-item">
        <span className="link-icon">🔧</span>
        <span>Development Guide</span>
      </a>
      <a href="/docs/NeoEdge NG4500 Series/Application Guide/Deepseek-r1" className="link-item">
        <span className="link-icon">📱</span>
        <span>Application Guide</span>
      </a>
    </div>
  </div>

  {/* NeoEyes NE101 Series product card */}
  <div className="product-card">
    <div className="product-header">
      <img src="/img/Overview/NE101/NE101.png" alt="NeoEyes NE101" className="product-image"/>
      <h3 className="product-title">NeoEyes NE101 Smart Camera</h3>
    </div>
    <p className="product-description">
      Lightweight intelligent camera supporting edge vision analysis and wireless connectivity, perfect for IoT and lightweight AI applications.
    </p>
    <div className="product-links">
      <a href="/docs/NeoEyes NE101 Series/Overview" className="link-item">
        <span className="link-icon">📖</span>
        <span>Product Overview</span>
      </a>
      <a href="/docs/NeoEyes NE101 Series/Quick Start" className="link-item">
        <span className="link-icon">🚀</span>
        <span>Quick Start</span>
      </a>
      <a href="/docs/NeoEyes NE101 Series/NE100-MB01 Development Board/Dev Guide" className="link-item">
        <span className="link-icon">🔧</span>
        <span>Development Guide</span>
      </a>
      <a href="/docs/NeoEyes NE101 Series/Application Guide/example-uvc" className="link-item">
        <span className="link-icon">📱</span>
        <span>Application Guide</span>
      </a>
    </div>
  </div>

</div>

{/* Product card styling */}
<style>
{`
  .product-card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-bottom: 48px;
  }
  
  .product-card {
    border: 1px solid var(--ifm-border-color);
    border-radius: 12px;
    padding: 24px;
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
    width: 150px;
    height: 150px;
    object-fit: contain;
    border-radius: 8px;
    padding: 8px;
  }
  
  .product-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  .product-description {
    margin: 0 0 16px 0;
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
    border-radius: 6px;
    text-decoration: none;
    transition: background-color 0.2s ease;
  }
  
  .link-item:hover {
    background-color: var(--ifm-hover-overlay);
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

