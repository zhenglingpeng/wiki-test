# CAT1

## 技术概述

**LTE Cat 1**是3GPP定义的物联网专用通信标准，具有以下特点：
- 最大下行速率10Mbps，上行速率5Mbps
- 支持移动性和VoLTE语音功能
- 低功耗设计，适合电池供电设备
- 网络覆盖广泛，可直接接入现有4G网络

### 典型应用场景
- 户外无WiFi/网关环境的数据传输
- 移动设备监控
- 远程数据采集系统
- 智能城市基础设施

## 开发准备

### 硬件配置
- 标准开发主板（ESP32-S3核心板）
- LTE Cat 1通信模组
- SIM卡（支持4G网络）

![Cat1模组连接示意图](/img/Overview/NE101/cat1PCBA.png)

完整硬件连接指南：[硬件连接说明](.././Hardware%20Guide/Hardware%20Connection)

### 软件资源
1. **预编译固件**：
   - 获取Cat1通信示例固件
   - 烧录方法参考：[开发环境配置指南](./../Software%20Guide/Development%20Environment%20Setup)

2. **源码开发**：
   - 支持本地编译（详见开发指南章节）

## 功能验证流程

1. **硬件连接**
   - 正确安装Cat1模组
   - 插入有效SIM卡
   - 上电启动设备

2. **网络状态检查**
   - 短按功能键进入配置模式
   - 访问Web管理界面（http://192.168.1.1）
   - 查看"蜂窝网络"状态显示
   
   ![网络状态界面1](/img/NE101_example_cat1_1.png)
   ![网络状态界面2](/img/NE101_example_cat1_2.png)

3. **数据传输测试**
   - 配置MQTT服务器参数
   - 执行测试抓拍和图片上传
   - 完整操作指南参考：[快速入门手册](./../Quick%20Start)

## 开发实现指南

### 开发环境要求
- Visual Studio Code最新版
- ESP-IDF v5.1.1工具链
- Cat1示例代码库

### 开发步骤

1. **获取源码**
   ```bash
   mkdir cat1 && cd cat1
   git clone git@github.milesight.com:ne101.git
   ```

2. **工程配置**
   - 使用VS Code打开工程目录

3. **编译烧录**
   - 执行完整编译流程
   - 烧录生成固件到设备
   - 详细参考：[开发环境配置指南](./../Software%20Guide/Development%20Environment%20Setup)


## 注意事项

1. **SIM卡管理**
   - 确保SIM卡已激活4G服务
   - 检查SIM卡接触是否良好

2. **信号强度判断**
   - RSSI > -85dBm：信号优良
   - -85dBm > RSSI > -95dBm：信号一般
   - RSSI < -95dBm：信号较弱

> 技术提示：开发过程中建议使用串口调试工具实时监控AT指令交互，可快速定位通信问题。网络注册过程通常需要30-60秒，请耐心等待。