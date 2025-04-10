# example-PIR

### 简介

本示例介绍如何使用PIR作为触发源唤醒设备。

PIR模组相关连接与相关信息参考：[Hardware Connection](.././Hardware%20Guide/Hardware%20Connection)

代码的获取和编译参考：[Development Environment Setup](./../Software%20Guide/Development%20Environment%20Setup)

应用场景：适用于运动物体的实时抓拍。

示例固件如下，升级方法参考：[Development Environment Setup](./../Software%20Guide/Development%20Environment%20Setup)

### 测试

待设备启动配置进入休眠后，触发PIR确认能否唤醒（指示灯会亮）。同时确认是否有正常抓拍与推图。

抓拍和推图详细步骤可参考：[Quick Start](./../Quick%20Start)

### 软件实现（开发者）

1. 软件打开PIR功能。将main/pir.h中PIR_ENABLE设置为1。

2. 点击"menuconfig"，将log等级修改为Error，并保存。
   
   修改原因是pir配置时对时序有要求，串口打印会影响配置。
   
   ![NE101_example_4.png](./../../../assets/NE101_example_4.png)

3. 修改pir使用的io。在main/pir.h中。
   
   PIR_INTDOUT_IO必须在RTC IO内才能使用唤醒功能。[GPIO &RTC GPIO - ESP32-S3](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32s3/api-reference/peripherals/gpio.html?highlight=rtc%20io)
   
   PIR_SERIAL_IO外部不能有上拉。
   
   ![NE101_example_6.png](./../../../assets/NE101_example_6.png)

4. 修改PIR相关的灵敏度，按照需求配置。
   
   ![NE101_example_5.png](./../../../assets/NE101_example_5.png)

5. 修改完成后执行编译烧录。

### 注意事项

- PIR频繁触发会更耗电，如果是电池供电需要注意。

- ESP32的idf 5.1.1版本存在一个已知BUG：进入deep sleep的同时触发唤醒会导致系统崩溃。升级idf 5.1.6及后续版本可以解决。

- PIR容易受到外部电磁干扰，建议根据实际应用环境调整灵敏度参数中的PULSE_C。
