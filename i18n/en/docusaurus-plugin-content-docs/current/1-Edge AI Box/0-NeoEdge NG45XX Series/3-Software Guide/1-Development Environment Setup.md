本章介绍Jetson Orin NX的开发环境搭建，包括本地开发环境搭建、远程开发与调试、Docker环境支持和远程桌面等内容。

## 本地开发环境搭建

## 源码环境搭建

获取源码，根据README配置

```shell
git clone git@gitlab.milesight.com:ai-developer/aibox/l4t.git
```

## 远程桌面

### RDP远程桌面访问

- 启动JETSON终端，安装如下内容：

```shell
sudo apt update
sudo apt-get install tightvncserver xrdp 
sudo systemctl enable xrdp  
sudo systemctl start xrdp
```

- 然后windows下启动 “远程桌面连接”，输入JETSON的ip地址

    ![Remote_Desktop_IP](/img/Remote_Desktop_IP.png)

- 点击“连接”，输入账号密码
  
  ![Remote_Desktop_Login](/img/Remote_Desktop_Login.png)

- 如下图，则为说明进入成功
  ![Remote_Desktop](/img/Remote_Desktop.png)

## AIBOX开发环境搭建

### Software Support

NVIDIA Jetson production modules and developer kits are all supported by the same **[NVIDIA software stack](https://developer.nvidia.com/embedded/develop/software)**, enabling you to develop once and deploy everywhere. **[JetPack SDK](https://developer.nvidia.com/embedded/jetpack)** includes the latest [Jetson Linux Driver Package (L4T)](https://elinux.org/Jetson/L4T "Jetson/L4T") with Linux operating system and CUDA-X accelerated libraries and APIs for AI Edge application development. It also includes samples, documentation, and developer tools for both host computer and developer kit, and supports higher level SDKs such as DeepStream for streaming video analytics and Isaac for robotics.

### JetPack INSTALL

Jetpack mainly includes system images, libraries, APIs, developer tools, examples, and some documentation.  The SDK includes TensorRT, cuDNN, CUDA, Multimedia API, Computer Vision, and Developer Tools.

```shell
sudo apt update
sudo apt install nvidia-jetpack
```

### JetPack Components

- [NVIDIA Jetson Linux (L4T)](https://elinux.org/Jetson/L4T "Jetson/L4T")
- [CUDA Toolkit](https://developer.nvidia.com/cuda-toolkit)
- [cuDNN](https://developer.nvidia.com/cudnn)
- [TensorRT](https://developer.nvidia.com/tensorrt)
- [VisionWorks](https://developer.nvidia.com/embedded/visionworks)
- [DeepStream](https://developer.nvidia.com/deepstream-sdk)
- OpenCV
- OpenGL
- Vulkan
- V4L2 extensions
- GStreamer extensions
- [L4T Multimedia API](https://docs.nvidia.com/jetson/l4t-multimedia/index.html)
- [NVIDIA Nsight Systems](https://developer.nvidia.com/nsight-systems)
- [NVIDIA Nsight Graphics](https://developer.nvidia.com/nsight-graphics)
- [NVIDIA Nsight Compute](https://developer.nvidia.com/nsight-compute)

See [docs.nvidia.com/jetson](https://docs.nvidia.com/jetson/) for online documentation about JetPack.  
See [developer.nvidia.com/jetpack](https://developer.nvidia.com/jetpack) to download the latest JetPack.
