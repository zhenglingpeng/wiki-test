# Quick Start

## Overview

This chapter provides a quick guide to using the NG4500 series products.

## Hardware-related

- ​**​Hardware Overview​**​: For details, refer to the [Hardware Component Description](NG4500-CB01%20Development%20Board/Hardware%20Guide/Components%20Overview)

- ​**​Device Assembly​**​: For instructions, see the [Hardware Connection Guide](NG4500-CB01%20Development%20Board/Hardware%20Guide/Hardware%20Connection).

## Software-related

- ​**​Environment Setup​**​: For setting up the software development environment, refer to [Development Environment Setup](NG4500-CB01%20Development%20Board/Software%20Guide/Development%20Environment%20Setup).
- ​**​Firmware Flashing​**​: For detailed steps on firmware flashing, see [System Firmware Flashing and Initialization](NG4500-CB01%20Development%20Board/Software%20Guide/System%20Flashing%20and%20Initialization).

## Initial System Startup Configuration

Refer to the above content, complete the hardware connection, power to NG4500, according to the following prompts to complete the system's first initial configuration.

### 1. User Configuration

1. Check `accept license` and continue.

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Licenses.png)

2. Set the language and continue.

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Language.png)

3. Configure the keyboard layout and continue.

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Keyboard.png)

4. Set the timezone (e.g., `Asia/Shanghai`) and continue.

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration_Local.png)

5. Configure 'Your name' and 'password', then continue.

![System Configuration](/img/NG45XX_SOFTWARE/Driver/NG45XX_System_Configuration.jpg)

6. Finally, wait for the system installation to complete and restart automatically.

### 2. System Status & Version Confirmation

- Use the ​**​Jtop​**​ tool to monitor system resources:
  
  ```shell
  # Install Jtop
  sudo apt update
  sudo apt install python3-pip
  sudo pip3 install -U jetson-stats
  
  # Restart the service
  sudo systemctl restart jtop.service
  
  # Run Jtop
  sudo jtop
  ```
  
  This will display real-time resource usage, including CPU, memory, GPU, disk, and fan status.And confirm the current system is installed TensorRT, CUDA version.

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_JTOP.png)

## Model Deployment

The following will introduce how to deploy and run the NanoOWL real - time visual inference model on the AIBOX. Taking NG4511 as an example, an imx219 camera is used.

### Hardware Requirements

| Component     | Requirement                               |
| ------------- | ----------------------------------------- |
| Device        | Jetson Orin（Nano / NX / AGX）              |
| Memory        | ≥ 8GB (Larger models require more memory) |
| Storage Space | ≥ 10GB (Depending on the model size)      |
| GPU           | NVIDIA GPU supporting CUDA                |

### Software Environment

- ​​**​JetPack Version​**​：
  - JetPack 5 (L4T r35.x)
  - JetPack 6 (L4T r36.x) (Default version of the system)

### Environment Preparation

1. Hardware connection: Connect the IMX219 camera (Note: The metal contacts should face upwards).
   
   ![](/img/NG45XX_SOFTWARE/NG45XX_IMX219.png)

2. Install dependencies

```shell
sudo apt update
sudo apt-get install -y docker.io
sudo apt-get install -y nvidia-container-toolkit
sudo apt-get install nvidia-jetpack
```

2. Install jetson - containers

```shell
# Get the source code
git clone https://github.com/dusty-nv/jetson-containers

# Install dependencies
bash jetson-containers/install.sh
```

3. Start the deployment and automatically pull/build the nanoowl container. (Note: After obtaining the container, the container will be started)

```shell
cd jetson-containers/
jetson-containers run --workdir /opt/nanoowl $(autotag nanoowl)
```

This command will automatically detect your hardware configuration and pull or build the appropriate container image.

### Running Example

1. Check the camera device

```shell
ls /dev/video*
```

2. Run the nanoowl container and complete the following configurations
   
   - Start the docker and enter the test case path
   
   ```shell
   cd jetson-containers/
   jetson-containers run --workdir /opt/nanoowl $(autotag nanoowl)
   
   # Enter the test case path
   cd /opt/nanoowl/examples/tree_demo
   ```
   
   - Install dependencies
   
   ```shell
   apt update
   apt-get install vim
   pip install aiohttp
   ```
   
   - Modify the `/opt/nanoowl/examples/tree_demo` file
   
   ```shell
   # Comment out the following line of code
   camera = cv2.VideoCapture(CAMERA_DEVICE)
   
   # Replace it with the following content
   gst_pipeline = (
       "nvarguscamerasrc ! "
       "video/x-raw(memory:NVMM), width=(int)1280, height=(int)720, format=(string)NV12, framerate=(fraction)30/1 ! "
       "nvvidconv ! "
       "video/x-raw, format=(string)BGRx ! "
       "videoconvert ! "
       "video/x-raw, format=(string)BGR ! "
       "appsink"
   )
   camera = cv2.VideoCapture(gst_pipeline, cv2.CAP_GSTREAMER)
   ```

3. Start the terminal and run the test case
   
   ```shell
   python3 tree_demo.py --camera 0 --resolution 1920x1080 ../../data/owl_image_encoder_patch32.engine
   ```

4. Results
   
   - Open the browser and enter the IP address of the current NG4511 device, such as `http://<ip address>:7860`.
   - Enter any content you want to recognize, such as
     - [a face [a nose, an eye, a mouth]]
     - [a table [a keyboard, a pen, a mouse]]

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_Quickstart_NanoOWL.png)
