
# Wi-Fi HaLow Module

## 产品特性
### 文字说明
此模组基于FGH100M进行设计，FGH100M是IEEE 802.11ah 标准的远距离、低功耗 Wi-Fi HaLow 模块，支持 Sub-1 GHz 频段通信，适用于物联网（IoT）和智能设备场景。适配于NExxx 系列主板。

### 主要特性
|      |WiFi Halow Module        |                            |
| ---- | ------------------------ | -------------------------- |
| 1    | Module                   | Quectel FGH100M            |
| 2    | WiFi Protocol            | IEEE 802.11 ah             |
| 3    | Operating Modes          | AP/STA                     |
| 4    | Operation Frequencey     | Sub-1 G: 850–950 MHz       |
| 5    | Channel Width            | 1 MHz, 2 MHz, 4 MHz, 8 MHz |
| 7    | Antenna                  | PCB Antenna                |
| 8    | Communication Interfaces | SPI                        |
| 9    | Power Supply             | DC 4-6V                    |
| 10   | Operation Temperature    | -20℃ ~ +60℃                |
| 11   | Storage Temperature      | -40℃ ~ +85℃                |
| 12   | Dimensions               | 60 x 60 mm                 |
| 12   | Certifications           | CE/FCC                     |

## 接口说明(J1)

模组通过J1接口，与主板通过SPI进行通讯连接。接口的定义如下：

| PIN# | Pin Name  | Functions          | Pin Type | Pull Up/Down |
| ---- | --------- | ------------------ | -------- | ------------ |
| 1    | WIFI_BUSY | SDIO Clock Signal  | GPIO     | N/A          |
| 2    | WIFI_RST  | Reset Module       | IN       | Pull-Up      |
| 3    | WIFI_PWR  | High=ON;Low=OFF    | IN       | N/A          |
| 4    | WIFI_WAKE | Wake up Module     | IN       | N/A          |
| 5    | SPI_CS    | SPI_CS             | SPI      | Pull-Up      |
| 6    | INT       | INT                | GPIO     | Pull-Up      |
| 7    | NC        |                    |          |              |
| 8    | SPI_MISO  | SPI_MISO           | SPI      | Pull-Up      |
| 9    | GND       | GND                | POWER    |              |
| 10   | GND       | GND                | POWER    |              |
| 11   | SPI_CLK   | SPI Clock          | SPI      | Pull-Up      |
| 12   | SPI_MOSI  | SPI_MOSI           | SPI      | Pull-Up      |
| 13   | NC        |                    |          |              |
| 14   | 3V3       | 3.3 V power supply | POWER    |              |
| 15   | NC        |                    |          |              |
| 16   | 3V3       | 3.3 V power supply | POWER    |              |



## 使用说明
### 


## 规格尺寸

60x60 mm
