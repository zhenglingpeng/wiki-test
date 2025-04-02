- **产品概述**
  
            本产品是一款低功耗无线 电池版本的抓拍相机。基于乐鑫的ESP32-S3模组进行开发，支持2.4G WiFi 和BLE。搭配OV5640 Cameras模组，且可拓展Cat-1或WiFi-Halow通讯方式。适用于无线布署的图片抓拍相关场景。并有灵活安装的支架可选。

- **Main Board Specifications and Features**
  
         主板搭配乐鑫的ESP32-S3-WROOM-1-N16R8模组，Flash 支持16MB, PSRAM支持8MB。支持 IEEE 802.11b/g/n (2.4 GHz Wi-Fi) 和 Bluetooth® 5 (LE)。支持拓展Cat-1或WiFi-Halow无线模组，及拓展其它GPIOs适用于二次开发。标配OV5640 Camera模组，并可选配USB Camera模组（UVC协议）
  
           主板主要特性： 
  
  - <sub>搭配ESP32-S3模组，Xtensa双核@240MHz</sub>
  
  - <sub>Flash 16MB， PSRAM 8MB</sub>
  
  - <sub>支持 IEEE 802.11b/g/n (2.4 GHz Wi-Fi) 和 Bluetooth® 5 (LE)</sub>
  
  - <sub>支持Cat-1或WiFi-Halow无线模组拓展</sub>
  
  - <sub>搭配OV5640 DCMI 接口 Camear模组，并可选USB 镜头模组</sub>
  
  - <sub>支持暖光灯补光，且带光敏传感器 </sub>
  
  - <sub>一键抓拍功能</sub>
  
  - <sub>支持外部Alarm IO 输入</sub>
  
  - <sub>拓展GPIOs,适用于二次开发</sub>
  
  - <sub>支持基于Type-C的调试UART</sub>

- **Camera Module Specifications and Features**
  
     模组搭配OV5640,分辨率为2592*1944，靶面尺寸为1/4。镜头有D-FOV 120和77度两种可选。并可依场景需求提供微距抓拍及正常抓拍两种对焦版本。
  
  <style type='text/css'></style>
  
  |                       | OV5640  Module (60)         |          |
  | --------------------- | --------------------------- | -------- |
  | Items                 | Description                 |          |
  | CMOS Sensor           | OV5640PLCC, 1/4"            |          |
  | Max.Resolution        | 2592*1944                   |          |
  | F.No                  | 2.4                         |          |
  | Focal Length          | 3.97mm                      |          |
  | Focusing distance     | 15cm or 400cm               | Optional |
  | FOV(D)                | 59                          |          |
  | TV-Distortion         | 1%                          |          |
  | FPC Connector         | 38.5*12.5mm 24Pins@0.5mm    |          |
  | Dimensions            | 8.5*8.5*6.5mm (without FPC) |          |
  | Operation Temperature | -10 -- 65                   |          |
  
    选配的USB镜头模组，搭配Smartsens的SC200AI，分辨率为1920*1080， 靶面尺寸为1/2.8“， 镜头接口为M12，可配多种FOV镜头可选。
  
  <style type='text/css'></style>
  
  |                          |                   |               |
  | ------------------------ | ----------------- | ------------- |
  |                          | USB Camera Module |               |
  | Items                    | Description       |               |
  | CMOS Sensor              | SC200AI, 1/2.8"   |               |
  | Max.Resolution           | 1920*1080         |               |
  | F.No                     | TBD               | Optional LENS |
  | Focal Length             | TBD               | Optional LENS |
  | Focusing distance        | TBD               | Optional LENS |
  | FOV(D)                   | TBD               | Optional LENS |
  | TV-Distortion            | TBD               | Optional LENS |
  | Communication Interfaces | USB               |               |
  | Operation Temperature    | -20°-- 60°        |               |
  | Storage Temperature      | -40°-- 85°        |               |
  | Dimensions               | 25mm*23.86mm      |               |
  | Certifications           | /                 |               |

- **Cat-1 Module Features and Interface Description**
  
  采用 Quectel的EG912系列模组，通过UART与主板进行通讯。
  
  <style type='text/css'></style>
  
  |                          |                                                              |     |
  | ------------------------ | ------------------------------------------------------------ | --- |
  | Cat-1 Module             |                                                              |     |
  | Module                   | Quectel EG912UGL                                             |     |
  | LTE-FDD                  | B1/ 2/ 3/ 4/ 5/ 7/ 8/ 12/ 13/ 17/ 18/ 19/ 20/ 25/ 26/ 28/ 66 |     |
  | LTE-TDD                  | B34/ 38/ 39/ 40/ 41                                          |     |
  | GSM                      | B2/ 3/ 5/ 8                                                  |     |
  | Antenna                  | PCB Antenna                                                  |     |
  | Communication Interfaces | UART                                                         |     |
  | Power Supply             | DC 4 -- 6 V                                                  |     |
  | Operation Temperature    | -20°-- 60°                                                   |     |
  | Storage Temperature      | -40°-- 85°                                                   |     |
  | Dimensions               | 60mm*60mm                                                    |     |
  | Certifications           | CE                                                           |     |

- **WiFi Halow Module Features and Interface Description**
  
        采用 Quectel的FGH100M模组，通过SPI接口与主板进行通讯。
      
          <style type='text/css'></style>
  
  |                          |                            |     |
  | ------------------------ | -------------------------- | --- |
  | WiFi Halow Module        |                            |     |
  |                          |                            |     |
  | Module                   | Quectel FGH100M            |     |
  | WiFi Protocol            | IEEE 802.11 ah             |     |
  | Operating Modes          | AP/STA                     |     |
  | Operation Frequencey     | Sub-1 G: 850–950 MHz       |     |
  | Channel Width            | 1 MHz, 2 MHz, 4 MHz, 8 MHz |     |
  | Antenna                  | PCB Antenna                |     |
  | Communication Interfaces | SPI                        |     |
  | Power Supply             | DC 4 -- 6 V                |     |
  | Operation Temperature    | -20°-- 60°                 |     |
  | Storage Temperature      | -40°-- 85°                 |     |
  | Dimensions               | 60mm*60mm                  |     |
  | Certifications           | CE/FCC                     |     |

- **Accessories and Brackets**
  
  - Camera modules
    
    基于UVC协议的USB镜头模组,搭配SC200AI图像传感器
  
  - Sensor modules
    
    可通过DI/DO，及RS485,RS232, GPIO来外接各种传感器，如PIR传感器（具体待补充）
  
  - Expansion modules
    
    - <sub>WiFi Halow 模组</sub>
    
    - <sub>Cat-1 模组</sub>
  
  - Mounts and enclosures
    
    提供灵活安装的支架配件  (待补充)
