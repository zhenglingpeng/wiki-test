# Development Environment Setup

本文档旨在介绍开发者搭建 ESP32-S3 基于IDF5.1.1开发的软件环境。

ESP官方参考文档:[ESP-IDF Programming Guide release-v5.1 documentation](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32s3/get-started/index.html)

## IDE安装

IDE有以下两种方式，本文档主要介绍使用VSCode相关内容。

- [Eclipse Plugin](https://github.com/espressif/idf-eclipse-plugin/blob/master/README.md)

- [VSCode Extension](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md)

## 命令行编译

参考：[Standard Setup of Toolchain for Windows - ESP32-S3 ](https://docs.espressif.com/projects/esp-idf/en/release-v5.1/esp32s3/get-started/windows-setup.html)

## VSCode Extension

可以官方参考文档：[ ESP-IDF Extension for VSCode latest documentation](https://docs.espressif.com/projects/vscode-esp-idf-extension/en/latest/installation.html)

### VScode安装

安装VScode后，添加Espressif IDF扩展

![NE101_Setup_idf1.png](/img/NE101_Setup_idf1.png)

### 安装ESP-IDF

使用ctrl+shiift+p调出命令行输入Configure ESP-IDF extension即可完成进入ESP-IDD配置界面。

![NE101_Setup_idf2.png](/img/NE101_Setup_idf2.png)

有3种选择可供选择

![NE101_Setup_idf3.png](/img/NE101_Setup_idf3.png)

**EXPRESS**（首选）
官方提示这是最快的选项。选择ESP-IDF版本(5.1.1)和python版本创建ESP-IDF python虚拟环境。ESP-IDF Tools将安装在以下位置：X：\Espressif。

**ADVANCED** 可配置选项。选择ESP-DF版本和python版本以创建ESP-IDF python虚拟环境选择ESP-DF工具安装目录或手动输入每个现有ESP-IDF工具路径。

**USE EXISTING SETUP** 第三个是自动识别路径给出以及安装的环境。

事实上第一种方法是安装取决github下载速度。
第二种方法与第三种方法区别在于第三种是自动识别离线安装的环境，第二种是适合多个idf版本共存时配置的情况

选择**EXPRESS**，指定5.1.1版本，安装。

![NE101_Setup_idf4.png](/img/NE101_Setup_idf4.png)

![NE101_Setup_idf5.png](/img/NE101_Setup_idf5.png)

配置安装完成的标志如下：

![NE101_Setup_idf6.png](/img/NE101_Setup_idf6.png)

### 使用VSCode编译烧录

- 拉取代码，具体工程可以在github上获取。
  
  ```
  $git clone git@github.milesight.com:ne101.git
  ```

- 使用vscode，选择"打开文件夹.."打开项目文件。
  
  ![NE101_CodeList.png](/img/NE101_CodeList.png)
  
  ![NE101_CodeList1.png](/img/NE101_CodeList1.png)

- 选择相应的COM口，芯片选择esp32s3。

- 点击"menuconfig"修改配置（可选）。

- 点击"build"执行编译。

- 点击"flash"执行烧录操作，等待烧录成功设备重启。
  
  ![NE101_Setup_idf7.png](/img/NE101_Setup_idf7.png)
  
  ![NE101_flash_vscode.png](/img/NE101_flash_vscode.png)
