- **Jetson Module Specifications and Features**
  
          本产品支持的核心模组包括Orin Nano/NX, 及对应的Super版本。但不支持AGX Orin系列。Jetson Orin 系列模组因配置不同，性能存在差异。
  
  <sub>Note: Super版本只在Jatpack6.1+才支持</sub>
  
  ![Orin_Parameters_Comparation](../../../assets/Orin_Parameters_Comparation.png)
  
      模组的主要差异，如下几点：  

  - <sub>Cores数量差异，及主频差异带来的性能差别</sub>
  - <sub>CPU/GPU主频差异对性能的影响</sub>
  - <sub>DRAM大小及带宽性能对数据处理能力的影响</sub>
  - <sub>DLA/PVA功能模块有无及数量的影响</sub>
  - <sub>供电要求（如Orin Nano只支持5V供电），及对应功耗和散热的差异</sub>

- **Custom Carrier Board Features and Interface Description**
  
     本产品的载板，基于原官方Carrier Board基础上进行拓展和优化。
  
    Main features：
  
  - <sub>100M/1000M 双网口</sub>
  
  - <sub>TypeA*4 USB3.1+; Type-C *1  USB3.2</sub>
  
  - <sub>M.2 Key M  *2 for storage, Key B for Cellular, Key E for Wifi/BLE</sub>
  
  - <sub>HDMI*1</sub>
  
  - <sub>Audio Input/Output </sub>
  
  - <sub>DI *4  DO *4 with isolation, RS232 *1, RS485 *1, 5V output</sub>
  
  - <sub>DC-Jack 12-36 V input; </sub>
  
  - <sub>RTC Backup Battery </sub>
  
  - <sub>Camera Input Interfaces *2 （MIPI）</sub>
  
  - <sub>14Pins FFC可拓展IO接口</sub>
    
      ![NG45XX_Product_View](../../../assets/NG45XX_Product_View.png)   

- **Accessories and Their Uses**
  
  - Camera modules
    
    兼容树莓派镜头模组，并提供 “Camera Module V2” 和 "HQ Camera"可选
    
    - <sub>Camera Module V2: IMX219 4K resolution with fixed Lens</sub>
    - <sub>HQ Camera:                   IMX477 12Mp resolution with CS-Mount Lens</sub>
  
  - Sensor modules
    
    - <sub>可通过DI/DO，及RS485,RS232, GPIO来外接各种传感器</sub>
  
  - Expansion modules
    
    - <sub>4G 模组</sub>
    
    - <sub>5G 模组</sub>
    
    - <sub>WiFi/BT 模组</sub>
    
    - <sub>WiFi Halow模组</sub>
  
  - Mounts and enclosures
    
    整机无风扇设计，并提供灵活安装的支架配件
