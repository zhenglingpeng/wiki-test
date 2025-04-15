# System  Flashing

   本章主要介绍NG45XX系列产品的烧录方式，**CMD烧录** 和 **SDK Manager烧录**。

## 准备工作

- 编程环境：ubuntu20.04（需要预留100GB以上的空间去下载镜像资源）

- Jetson设备、Micro USB 线缆

**软件烧录前，需要完成下述硬件操作。**

- 将 Micro USB 线从 JESTON 的 Micro USB 端口连接到 Linux 主机 PC 的 USB TypeA 端口。

- 连接完成后，长按`force recovery` 按键，并给Jetson设备上电

![](/img/NG45XX_SOFTWARE/NG45XX_Recovery.png)

- 然后通过指令`lsusb`检查设备是否处于recovery模式，你会看到带有 ID 0955:623 的 NVidia Corp 设备。**（注：如果没有出现NVidia Corp 设备，说明未正确进入recovery模式，请检查recovery按键和usb线缆。）**

![NG45XX_flash_lsusb](/img/NG45XX_flash_lsusb.jpg)

## CMD烧录

- 下载&解压AIBOX 烧录包，链接：（下载对应JETSON设备的镜像包）

```
# mfi_aibox-orin-nano-NG45XX-super-8g-36.4.3-V1.0.tar.gz替换为实际烧录包
sudo tar -zxvf mfi_aibox-orin-nano-NG45XX-super-8g-36.4.3-V1.0.tar.gz -C ./
```

- 执行烧录命令

```
# flash image
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --network usb0 --flash-only --showlogs
```

## SDK Manager烧录

- 下载 [SDK Manager](https://developer.nvidia.com/sdk-manager) deb包，将deb拷贝到用户的目录下

- 启动终端后，运行下面的指令去安装SDK Manager
  
  ```shell
  sudo dpkg -i sdkmanager_2.2.0-12021_amd64.deb  # deb版本替换为您下载的版本
  ```

- 完成SDK Manager的安装后，启动终端运行sdkmanager , 点击 “LOGIN”，登录到您的 NVIDIA 帐户，浏览器弹出链接，并输入您的注册电子邮件和密码登录。
  
  ![sdk_manager_login](/img/sdk_manager_login.png)

- 成功登入后，进入“STEP 01”参考按照下述配置选择
  
  - 从“**Product Category**”面板中，选择Jetson
  
  - 从“**System Configuration**”面板中，选择当前连接的设备型号。（默认USB线缆连接后，进入recovery mode时，默认会自动显示当前的硬件设备，如未显示，请点击刷新）
    
    ![sdk_manager_step1](/img/sdk_manager_step1.png)
  
  - 从“**SDK VERSION**”面板中，选择所需JetPack SDK版本，点击右下角 (...)可以查看更多版本选择。
    
    ![sdk_manager_jetpack_version](/img/sdk_manager_jetpack_version.png)
  
  - 完成选择后，点击“**Continue**”进入下一步

- Step2， 选择所需组件和接受许可证
  
  - 在该步骤可以查看到将要安装的组件。（如第一次验证，可以取消选择Jetson相关的组件，仅保留Jetson的镜像即可）
  
  - 检查屏幕底部的下载和安装选项路径，接着检查组件并接受许可证。
    
    ![sdk_manager_step2](/img/sdk_manager_step2.png)
  
  - 选择“**Continue**”继续下一步

- Step3，安装
  
  - 点击“INSTALL”后，SDK Manager 会提示您输入 root 密码
    
    ![sdk_manager_root](/img/sdk_manager_root.png)
  
  - SDK Manager软件会显示下载和安装的进度
    
    ![sdk_manager-download](/img/sdk_manager-download.png)
  
  - 当下载完烧录镜像后，会跳出来以下页面，可以填入JESTON预设账户密码，以及选择“**NVMe**”
    
    ![sdk_manager_preconfig](/img/sdk_manager_preconfig.png)

- Step 04， 完成烧录
  
  - 烧录完成如下图，点击 ”**FINISH**“ 完成烧录，重启JESTON即使用。
  
  ![sdk_manager_finish](/img/sdk_manager_finish.png)

## 参考

[NVIDIA - Flashing Support](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/SD/FlashingSupport.html)
