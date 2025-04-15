# Development Environment Setup

## 文档概述

本指南详细介绍如何在Windows系统下搭建ESP32-S3的开发环境，基于乐鑫官方ESP-IDF v5.1.1框架。提供两种主流开发方式：VSCode扩展安装和命令行工具链配置。

官方参考文档：[ESP-IDF v5.1 编程指南](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32s3/get-started/index.html)

## 开发工具选择

提供两种IDE安装方案，本指南重点介绍VSCode方案：

1. [Eclipse插件方案](https://github.com/espressif/idf-eclipse-plugin/blob/master/README.md)
2. [VSCode扩展方案](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md)（推荐）

## 命令行开发方式

参考文档：[Windows平台工具链标准配置指南](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32s3/get-started/windows-setup.html)

## VSCode开发环境配置

### 开发环境安装

1. **安装VSCode**
   - 从官网下载安装最新版Visual Studio Code
   - 在扩展市场搜索安装"Espressif IDF"扩展

   ![VSCode扩展安装示意图](/img/NE101_Setup_idf1.png)

2. **配置ESP-IDF环境**
   - 使用快捷键`Ctrl+Shift+P`调出命令面板
   - 输入并选择"Configure ESP-IDF extension"

   ![命令面板操作示意图](/img/NE101_Setup_idf2.png)

### 安装模式选择

系统提供三种安装方式：

![安装模式选择界面](/img/NE101_Setup_idf3.png)

1. **快速安装(EXPRESS)**（推荐）
   - 自动下载指定版本ESP-IDF（选择v5.1.1）
   - 创建Python虚拟环境
   - 默认安装路径：`X:\Espressif`
   - 注意：依赖GitHub下载速度

2. **高级安装(ADVANCED)**
   - 自定义ESP-IDF版本和Python环境
   - 支持多版本共存配置
   - 可指定工具链安装目录

3. **使用现有环境(USE EXISTING SETUP)**
   - 自动识别已安装的开发环境
   - 适合已有配置的用户

选择**快速安装**，指定v5.1.1版本开始安装：

![版本选择界面](/img/NE101_Setup_idf4.png)
![安装过程示意图](/img/NE101_Setup_idf5.png)

安装成功标志：

![安装完成界面](/img/NE101_Setup_idf6.png)

## 项目开发流程

### 获取项目代码

```bash
git clone git@github.milesight.com:ne101.git
```

### 编译与烧录

1. **打开项目**
   - 在VSCode中选择"打开文件夹"
   - 导航至项目目录

   ![项目目录结构](/img/NE101_CodeList.png)
   ![项目文件浏览](/img/NE101_CodeList1.png)

2. **设备配置**
   - 选择正确的COM端口
   - 芯片类型选择"esp32s3"

3. **编译与烧录**
   - 可选：运行"menuconfig"修改配置
   - 点击"build"进行项目编译
   - 点击"flash"烧录固件

   ![编译操作界面](/img/NE101_Setup_idf7.png)
   ![烧录过程示意图](/img/NE101_flash_vscode.png)

## 环境验证

成功烧录后，设备将自动重启。可通过串口监视器查看启动日志，确认固件正常运行。

> 提示：首次使用时建议运行示例程序验证环境配置。如遇网络问题导致组件下载失败，可配置国内镜像源加速下载。