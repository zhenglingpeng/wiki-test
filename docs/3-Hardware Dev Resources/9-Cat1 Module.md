#  Cat-1模块

## 1. 产品特性
本模组基于EG912U系列开发，适配于NExxx系列AI-Camera。

EG912U系列专为M2M和IoT应用设计的LTE Cat 1模块，支持无缝网络切换与丰富接口，核心特性包括：

### EG912U系列模块参数说明

| &emsp;&emsp; | **EG912U-GL** | **EG912U-EAL** |
|:---:|:---:|:---:|
| **网络覆盖** |全球频段（B1/2/3/4/5/7/8/12/13/17/18/19/20/25/26/28/66 LTE-FDD + B34/38/39/40/41 LTE-TDD） | 欧洲/亚太/拉丁美洲（B1/2/3/4/5/7/8/20/28/66 LTE-FDD + B38/40/41 LTE-TDD） |
| **数据速率** | LTE-FDD: 10Mbps（DL）/5Mbps（UL）LTE-TDD: 8.96Mbps（DL）/3.1Mbps（UL） | 同左 |
| **可选功能** | GNSS（GPS/GLONASS/BDS/Galileo/QZSS）蓝牙4.2Wi-Fi Scan | 无 |
| **接口** | 3x UART, USB 2.0, PCM/I2S音频, 2x ADC, SPI/I2C/LCM/摄像头/SD卡（QuecOpen®） | 同左 |
| **天线** | 主天线 + GNSS/Wi-Fi天线（可选） | 仅主天线 |

---

## Cat-1 模组规格参数

|      | Cat-1 Module             |                                                              |
|:----:|:------------------------:|:------------------------------------------------------------:|
| 1    | Module                   | Quectel EG912UGL                                             |
| 2    | LTE-FDD                  | B1/ 2/ 3/ 4/ 5/ 7/ 8/ 12/ 13/ 17/ 18/ 19/ 20/ 25/ 26/ 28/ 66 |
| 3    | LTE-TDD                  | B34/ 38/ 39/ 40/ 41                                          |
| 4    | GSM                      | B2/ 3/ 5/ 8                                                  |
| 5    | Antenna                  | PCB Antenna                                                  |
| 6    | Communication Interfaces | UART                                                         |
| 7    | Power Supply             | DC 4-6V                                                      |
| 8    | Operation Temperature    | -20℃ ~ +60℃                                                  |
| 9    | Storage Temperature      | -40℃ ~ +85℃                                                  |
| 10   | Dimensions               | 60 x 60 mm                                                   |
| 11   | Certifications           | CE                                                           |

## 接口说明(J1)

模组通过J1接口，与主板通过UART进行通讯连接。接口的定义如下：

| PIN# | Pin Name | Functions          | Pin Type | Pull Up/Down |
| :---:| :------: | :----------------: | :------: | :-----------:|
| 1    | UART_TXD | UART Transmit      | OUT      | N/A          |
| 2    | NC       |                    |          |              |
| 3    | CAT1_PWR | High=ON;Low=OFF    | IN       | N/A          |
| 4    | NC       |                    |          |              |
| 5    | NC       |                    |          |              |
| 6    | NC       |                    |          |              |
| 7    | UART_RXD | UART Receive       | IN       | N/A          |
| 8    | NC       |                    |          |              |
| 9    | GND      | GND                | POWER    |              |
| 10   | GND      | GND                | POWER    |              |
| 11   | NC       |                    |          |              |
| 12   | NC       |                    |          |              |
| 13   | VCC_IN   | Power Supply       |          |              |
| 14   | 3V3      | 3.3 V power supply | POWER    |              |
| 15   | VCC_IN   | Power Supply       | POWER    |              |
| 16   | 3V3      | 3.3 V power supply | POWER    |              |



## 使用说明

### 
---

## 规格尺寸

60*60mm