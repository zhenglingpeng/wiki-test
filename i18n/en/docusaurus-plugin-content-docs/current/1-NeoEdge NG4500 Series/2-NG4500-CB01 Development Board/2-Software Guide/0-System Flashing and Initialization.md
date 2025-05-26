# System  Flashing

This chapter aims to introduce the flashing methods for the NG45XX series of products, mainly providing the operation steps for flashing image packages. Taking NG4511 as an example, the flashing process is detailed below.

## Preparation Work

- An Ubuntu computer (recommended: 20.04/22.04)
- A Jetson device (e.g., NG4511)
- A Micro USB cable

#### PC Ubuntu Environment Setup

     Before flashing, you need to pre-install the following software packages. Use the command below:

```shell
sudo apt update
sudo apt install -y build-essential git wget curl python3 python3-pip \
  python3-venv python3-distutils python3-setuptools python3-pexpect \
  python3-serial libusb-1.0-0-dev pkg-config device-tree-compiler \
  unzip bzip2 zstd
```

## Hardware Preparation

​**​Before flashing the software, the following hardware operations need to be completed.​**​

1. Connect the Micro USB cable from the Micro USB port of the JESTON to the USB TypeA port of the Linux host PC.
2. After the connection is completed, press and hold the `force recovery` button and power on the Jetson device.

![](/img/NG45XX_SOFTWARE/NG45XX_Recovery_SW1.png)

3. Then, use the `lsusb` command to check whether the device is in recovery mode. You will see an NVidia Corp device with ID 0955:623. ​**​(Note: If the NVidia Corp device does not appear, it means that the recovery mode has not been entered correctly. Please check the recovery button and the USB cable.)​**

![NG45XX_flash_lsusb](/img/NG45XX_flash_lsusb.jpg)

## Flashing the Image Package

1. Download and extract the AIBOX flashing package

The links are as follows:

| Device Model - Version Type | Image Package Link (with JetPack)                                                                                                                                                                                                                                                                                                                                                                                                                                        | Image Package Link (without JetPack)                                                                                                                                                                                                                                                                                                                                                                                                     | Hardware Model       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| NG4510                      | image：[aibox-NG4510-36.4.3-super-jetpack-V1.1.tgz](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4510-super_42936/aibox-NG4510-36.4.3-super-jetpack-V1.1.tgz)<br/>md5sum：[md5sum-aibox-NG4511-36.4.3-super-jetpack-V1.1.txt](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4511-super_42937/md5sum-aibox-NG4511-36.4.3-super-jetpack-V1.1.txt) | image：[aibox-NG4510-36.4.3-super-V1.1.tgz](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4510-super_43202/aibox-NG4510-36.4.3-super-V1.1.tgz)<br/>md5sum：[md5sum-aibox-NG4510-36.4.3-super-V1.1.txt](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4510-super_43202/md5sum-aibox-NG4510-36.4.3-super-V1.1.txt) | Jetson Orin nano 4GB |
| NG4511                      | image：[aibox-NG4511-36.4.3-super-jetpack-V1.1.tgz](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4511-super_42937/aibox-NG4511-36.4.3-super-jetpack-V1.1.tgz)<br/>md5sum：[md5sum-aibox-NG4511-36.4.3-super-jetpack-V1.1.txt](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4511-super_42937/md5sum-aibox-NG4511-36.4.3-super-jetpack-V1.1.txt) | image:[aibox-NG4511-36.4.3-super-V1.1.tgz](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4511-super_43203/aibox-NG4511-36.4.3-super-V1.1.tgz)<br/>md5sum:[md5sum-aibox-NG4511-36.4.3-super-V1.1.txt](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4511-super_43203/md5sum-aibox-NG4511-36.4.3-super-V1.1.txt) | Jetson Orin nano 8GB |
| NG4520                      | image:[aibox-NG4520-36.4.3-super-jetpack-V1.1.tgz](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4520-super_42938/aibox-NG4520-36.4.3-super-jetpack-V1.1.tgz)<br/>md5sum:[md5sum-aibox-NG4520-36.4.3-super-jetpack-V1.1.txt](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4520-super_42938/md5sum-aibox-NG4520-36.4.3-super-jetpack-V1.1.txt) | image:[aibox-NG4520-36.4.3-super-V1.1.tgz](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4520-super_43204/aibox-NG4520-36.4.3-super-V1.1.tgz)<br/>md5sum:[md5sum-aibox-NG4520-36.4.3-super-V1.1.txt](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4520-super_43204/md5sum-aibox-NG4520-36.4.3-super-V1.1.txt) | Jetson Orin nx 8GB   |
| NG4521                      | image:[aibox-NG4521-36.4.3-super-jetpack-V1.1.tgz](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4521-super_42939/aibox-NG4521-36.4.3-super-jetpack-V1.1.tgz)<br/>md5sum:[md5sum-aibox-NG4521-36.4.3-super-jetpack-V1.1.txt](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4521-super_42939/md5sum-aibox-NG4521-36.4.3-super-jetpack-V1.1.txt) | image:[aibox-NG4521-36.4.3-super-V1.1.tgz](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4521-super_43205/aibox-NG4521-36.4.3-super-V1.1.tgz)<br/>md5sum:[md5sum-aibox-NG4521-36.4.3-super-V1.1.txt](https://resource-cam-think.oss-cn-hongkong.aliyuncs.com/download/firmware/aibox/NG45XX/36.4.3/v1.1/aibox-NG4521-super_43205/md5sum-aibox-NG4521-36.4.3-super-V1.1.txt) | Jetson Orin nx 16GB  |

2. Extract it to the Ubuntu computer

```shell
sudo tar -zxvf aibox-NG4511-36.4.3-base-jetpack-V1.0.tgz -C ./
```

3. Flash the device

The flashing command is as follows:

```shell
cd aibox-NG4511-36.4.3-base-jetpack-V1.0
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --network usb0 --flash-only --showlogs
```

    4. After the flashing process is complete, if the log shows `Flash is successful`, it means the flashing was successful. Set SW1 DIP switch 1 to OFF, then reboot the device.

**Note: Methods to confirm the device hardware version​**

**A. When the system can be started and entered normally​**​

- Use the following command to return the device model information:

```shell
cat /proc/device-tree/model

# Sample output
NVIDIA Jetson Orin Nano Engineering Reference Developer Kit Super
```

**B. When the system cannot be started and accessed​** 

- Check the device label or the model on the packaging box for confirmation.

- Check the 15 - digit number combination below the QR code on the back of the module (e.g., `900 - 13767 - 0030 - 000`). The specific correspondences are as follows:
  
  - ​**​`3767` → Orin - related devices​**​ (such as AGX Orin, Orin NX, Orin Nano)
  - ​**​`0030` → Jetson Nano (8GB RAM)​**

| SKU  | Device Type                            | Device Name                      |
| ---- | -------------------------------------- | -------------------------------- |
| 3767 | NVIDIA Jetson Orin NX and Nano modules | Jetson Orin NX and Nano modules  |
| 3701 | NVIDIA Jetson AGX Orin module          | Jetson AGX Orin module           |
| 3768 | Jetson Orin Nano carrier board         | Jetson Orin Nano carrier board   |
| 3737 | Jetson AGX Orin carrier board          | Jetson AGX Orin carrier board    |
| 0000 | Jetson AGX Orin module                 | Jetson AGX Orin                  |
| 0004 | Jetson AGX Orin module                 | Jetson AGX Orin 32GB (32 GB RAM) |
| 0005 | Jetson AGX Orin module                 | Jetson AGX Orin 64GB (64 GB RAM) |
| 0000 | Jetson Orin NX and Nano modules        | Jetson Orin NX 16GB (16 GB RAM)  |
| 0001 | Jetson Orin NX and Nano modules        | Jetson Orin NX 8GB (8 GB RAM)    |
| 0003 | Jetson Orin NX and Nano modules        | Jetson Orin Nano 8GB (8 GB RAM)  |
| 0005 | Jetson Orin NX and Nano modules        | Jetson Orin Nano 8GB (8 GB RAM)  |
| 0004 | Jetson Orin NX and Nano modules        | Jetson Orin Nano 4GB (4 GB RAM)  |

## NVIDIA Official Flashing Methods

- ​**​SDK Manager flashing method​**​:  [Install Ethernet Switch with SDK Manager — SDK Manager](https://docs.nvidia.com/sdk-manager/install-with-sdkm-switch/index.html)
- ​**​Script flashing method​**​:  [Quick Start — NVIDIA Jetson Linux Developer Guide 1 documentation](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/SD/FlashingSupport.html)
