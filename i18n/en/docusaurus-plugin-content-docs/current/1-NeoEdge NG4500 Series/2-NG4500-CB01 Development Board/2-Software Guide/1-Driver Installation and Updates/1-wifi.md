# WIFI

This document describes the installation and usage instructions for WiFi drivers, using rtl8821 as an example.

## Methods

There are two approaches for installation and usage:

1. Direct installation within the system
2. Compiling from source code and then flashing

## In-System Installation

Execute the following commands to automatically install the driver after entering the system:

```
$ sudo apt update
$ sudo apt install rtl8821ce-dkms
```

After completion, execute modprobe:

```
$ sudo modprobe rtl8821ce
```

Check relevant logs using dmesg to confirm successful driver loading:

```
[   10.805932] rtl8821ce 0001:01:00.0: Adding to iommu group 3
[   10.806901] rtl8821ce 0001:01:00.0: enabling device (0000 -> 0003)
[   11.077841] Bluetooth: hci0: RTL: loading rtl_bt/rtl8821c_fw.bin
[   11.079036] Bluetooth: hci0: RTL: loading rtl_bt/rtl8821c_config.bin
[   11.320620] rtl8821ce 0001:01:00.0 wlP1p1s0: renamed from wlan0
```

## Source Code Compilation

### Code Acquisition

Source code can be obtained from GitHub or provided by the WiFi manufacturer.

The rtl8821 GitHub repository is available at: [GitHub - tomaspinho/rtl8821ce](https://github.com/tomaspinho/rtl8821ce)

### Compilation

Place the source code in the project directory under Linux_for_Tegra/source/nvidia-oot/drivers corresponding to the driver path, for example:

Linux_for_Tegra/source/nvidia-oot/drivers/net/wireless/realtek

Modify the Makefile to include rtl8821ce in the compilation:

```
obj-m += rtl8821ce/
```

Modify the driver's Makefile according to actual requirements. The diff for modifying the Makefile in the rtl8821ce directory is as follows:

```
diff --git a/Makefile b/Makefile
index 5b5dc9a..01b1e24 100755
--- a/Makefile
+++ b/Makefile
@@ -15,6 +15,8 @@ EXTRA_CFLAGS += -Wno-unused-parameter
 EXTRA_CFLAGS += -Wno-unused-function
 EXTRA_CFLAGS += -Wno-unused
 #EXTRA_CFLAGS += -Wno-uninitialized
+EXTRA_CFLAGS += -Wno-missing-prototypes
+EXTRA_CFLAGS += -Wno-error=misleading-indentation

 GCC_VER_49 := $(shell echo `$(CC) -dumpversion | cut -f1-2 -d.` \>= 4.9 | bc )
 ifeq ($(GCC_VER_49),1)
@@ -29,6 +31,7 @@ else
     export TopDIR ?= $(srctree)/$(src)
 endif

+TopDIR = $(srctree.nvidia-oot)/drivers/net/wireless/realtek/rtl8821ce
 EXTRA_CFLAGS += -I$(TopDIR)/include

 EXTRA_LDFLAGS += --strip-debug
@@ -113,7 +116,8 @@ CONFIG_RTW_SDIO_PM_KEEP_POWER = y
 ###################### MP HW TX MODE FOR VHT #######################
 CONFIG_MP_VHT_HW_TX_MODE = n
 ###################### Platform Related #######################
-CONFIG_PLATFORM_I386_PC = y
+CONFIG_PLATFORM_TEGRA = y
+CONFIG_PLATFORM_I386_PC = n
 CONFIG_PLATFORM_ANDROID_X86 = n
 CONFIG_PLATFORM_ANDROID_INTEL_X86 = n
 CONFIG_PLATFORM_JB_X86 = n
@@ -1212,6 +1216,15 @@ endif

 EXTRA_CFLAGS += -DDM_ODM_SUPPORT_TYPE=0x04

+ifeq ($(CONFIG_PLATFORM_TEGRA), y)
+ARCH = arm
+KVER := $(shell uname -r)
+KSRC := /lib/modules/$(KVER)/build
+EXTRA_CFLAGS += -DCONFIG_LITTLE_ENDIAN
+EXTRA_CFLAGS += -DCONFIG_IOCTL_CFG80211 -DRTW_USE_CFG80211_STA_EVENT
+EXTRA_CFLAGS += -Wno-error=date-time
+MODULE_NAME = rtl8821ce
+endif
 ifeq ($(CONFIG_PLATFORM_I386_PC), y)
 EXTRA_CFLAGS += -DCONFIG_LITTLE_ENDIAN
 EXTRA_CFLAGS += -DCONFIG_IOCTL_CFG80211 -DRTW_USE_CFG80211_STA_EVENT
@@ -2232,7 +2245,7 @@ ifeq ($(CONFIG_RTL8723B), y)
 $(MODULE_NAME)-$(CONFIG_MP_INCLUDED)+= core/rtw_bt_mp.o
 endif

-obj-$(CONFIG_RTL8821CE) := $(MODULE_NAME).o
+obj-m := $(MODULE_NAME).o

 else
```

After modification, execute the kernel compilation command or compile the module separately and install it to the rootfs, then proceed with flashing. Refer to previous relevant documents for compilation and flashing instructions.

## Usage and Verification

After system startup, execute modprobe:

```
$ sudo modprobe rtl8821ce
```

Use the lspci command to view devices on the PCI bus:

```
0001:01:00.0 Network controller: Realtek Semiconductor Co., Ltd. RTL8821CE 802.11ac PCIe Wireless Network Adapter
```

The dmesg command shows successful device addition:

```
$ sudo dmesg | grep rtl
[    9.785137] rtl8821ce 0001:01:00.0: Adding to iommu group 3
[    9.785307] rtl8821ce 0001:01:00.0: enabling device (0000 -> 0003)
[   10.010615] Bluetooth: hci0: RTL: loading rtl_bt/rtl8821c_fw.bin
[   10.011780] Bluetooth: hci0: RTL: loading rtl_bt/rtl8821c_config.bin
[   10.441574] rtl8821ce 0001:01:00.0 wlP1p1s0: renamed from wlan0
```

Connect to WiFi:

![RTL8821_wifi_connection1.png](/img/RTL8821_wifi_connection1.png)

Check network devices using ifconfig:

```
wlP1p1s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.204.218  netmask 255.255.255.0  broadcast 192.168.204.255
        inet6 fe80::aba:6776:77ec:4831  prefixlen 64  scopeid 0x20<link>
        inet6 2409:8934:20d4:908:f2b8:fd54:f19a:a11a  prefixlen 64  scopeid 0x0<global>
        inet6 2409:8934:20d4:908:5de2:d217:83e0:d943  prefixlen 64  scopeid 0x0<global>
        ether a4:e8:8d:0f:e4:ce  txqueuelen 1000  (Ethernet)
        RX packets 2060  bytes 2644294 (2.6 MB)
        RX errors 0  dropped 48  overruns 0  frame 0
        TX packets 1656  bytes 195010 (195.0 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0ons 0
```

Test network connection using ping:

```
$ ping -I wlP1p1s0 www.baidu.com
PING www.baidu.com(2409:8c20:6:1d55:0:ff:b09c:7d77 (2409:8c20:6:1d55:0:ff:b09c:7d77)) from 2409:8934:20d4:908:5de2:d217:83e0:d943 wlP1p1s0: 56 data bytes
64 bytes from 2409:8c20:6:1d55:0:ff:b09c:7d77 (2409:8c20:6:1d55:0:ff:b09c:7d77): icmp_seq=1 ttl=48 time=88.7 ms
64 bytes from 2409:8c20:6:1d55:0:ff:b09c:7d77 (2409:8c20:6:1d55:0:ff:b09c:7d77): icmp_seq=2 ttl=48 time=50.8 ms
64 bytes from 2409:8c20:6:1d55:0:ff:b09c:7d77 (2409:8c20:6:1d55:0:ff:b09c:7d77): icmp_seq=3 ttl=48 time=80.5 ms
64 bytes from 2409:8c20:6:1d55:0:ff:b09c:7d77 (2409:8c20:6:1d55:0:ff:b09c:7d77): icmp_seq=4 ttl=48 time=86.1 ms
```
