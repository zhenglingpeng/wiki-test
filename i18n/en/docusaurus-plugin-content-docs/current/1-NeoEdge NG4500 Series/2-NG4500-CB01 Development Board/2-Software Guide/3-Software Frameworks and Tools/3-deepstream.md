# DeepStream  

---  

This guide explains how to install and run **NVIDIA DeepStream SDK** on **Jetson Orin** devices. DeepStream supports GPU-accelerated AI video analytics pipelines and is highly optimized for Jetson's CUDA/NvMedia platform.  

---  

## 1. Overview  

- Real-time video analytics SDK provided by NVIDIA  
- Accelerated with TensorRT and CUDA  
- Supports multi-stream AI inference and object tracking  
- Input sources include RTSP, USB, CSI cameras, and local video files  
- Built-in object detection, classification, and tracking capabilities  

This guide covers:  

- Installation methods (.deb package and Docker)  
- Running sample pipelines  
- Integrating custom models  
- Docker usage (including jetson-containers)  
- Common issues and tips  

![overview](/img/NG45XX_deepstream_overview.png)  

---  

## 2. System Requirements  

### Hardware  

| Component | Minimum Requirement               |  
| --------- | --------------------------------- |  
| Device    | Jetson Orin Nano / NX / AGX       |  
| RAM       | ≥ 8GB                             |  
| Storage   | ≥ 10GB                            |  

### Software  

- JetPack 6.1 GA or later (L4T ≥ R36.4)  
- Ubuntu 20.04 / 22.04  
- CUDA, TensorRT, cuDNN (included in JetPack)  
- Docker (optional, for containerized deployment)  

---  

## 3. Installing DeepStream  

### glib Migration  

To migrate to a newer glib version (e.g., 2.76.6), follow these steps:  

Prerequisites: Install the following packages:  
```bash  
sudo pip3 install meson  
sudo pip3 install ninja  
```  

Compilation and installation steps:  
```bash  
git clone https://github.com/GNOME/glib.git  
cd glib  
git checkout <glib-version-branch>  
# e.g., 2.76.6  
meson build --prefix=/usr  
ninja -C build/  
cd build/  
sudo ninja install  
```  

Verify the installed glib version:  
```bash  
pkg-config --modversion glib-2.0  
```  

### Dependency Installation  

```bash  
sudo apt update  
sudo apt install -y \  
  libssl1.1 \  
  libgstreamer1.0-0 \  
  gstreamer1.0-tools \  
  gstreamer1.0-plugins-good \  
  gstreamer1.0-plugins-bad \  
  gstreamer1.0-plugins-ugly \  
  gstreamer1.0-libav \  
  libgstrtspserver-1.0-0 \  
  libjansson4 \  
  libyaml-cpp-dev  
```  

### Install librdkafka  

1. Clone the librdkafka repository from GitHub:  
```bash  
git clone https://github.com/confluentinc/librdkafka.git  
```  

2. Configure and build the library:  
```bash  
cd librdkafka  
git checkout tags/v2.2.0  
./configure --enable-ssl  
make  
sudo make install  
```  

3. Copy the generated libraries to the DeepStream directory:  
```bash  
sudo mkdir -p /opt/nvidia/deepstream/deepstream/lib  
sudo cp /usr/local/lib/librdkafka* /opt/nvidia/deepstream/deepstream/lib  
sudo ldconfig  
```  

### Method 1: Install via SDK Manager  

1. Download and install SDK Manager from the [NVIDIA official website](https://developer.nvidia.com/nvidia-sdk-manager).  

2. Connect the device: Use a USB-C cable to connect the Jetson Orin device to the host computer.  

3. Launch SDK Manager: Run the `sdkmanager` command on the host and log in with your NVIDIA developer account.  

4. Select target hardware and JetPack version: Choose the corresponding Jetson Orin device and appropriate JetPack version in SDK Manager.  

5. Enable DeepStream SDK: Check the DeepStream SDK option under "Additional SDKs."  

6. Begin installation: Follow the prompts to complete the installation.  

---  

### Method 2: Using DeepStream Tar Package  

1. Download DeepStream SDK: Visit the [NVIDIA DeepStream download page](https://catalog.ngc.nvidia.com/orgs/nvidia/resources/deepstream) and download the DeepStream SDK tar package for Jetson (e.g., `deepstream_sdk_v7.1.0_jetson.tbz2`).  

2. Extract and install:  
```bash  
sudo tar -xvf deepstream_sdk_v7.1.0_jetson.tbz2 -C /  
cd /opt/nvidia/deepstream/deepstream-7.1  
sudo ./install.sh  
sudo ldconfig  
```  

---  

### Method 3: Using DeepStream Debian Package  

1. Download DeepStream Debian: Visit the [DeepStream Debian download page](https://catalog.ngc.nvidia.com/orgs/nvidia/resources/deepstream) and download the DeepStream SDK tar package for Jetson (e.g., `deepstream-7.1_7.1.0-1_arm64.deb`).  

2. Install:  
```bash  
sudo apt-get install ./deepstream-7.1_7.1.0-1_arm64.deb  
```  

### Method 4: Using Docker  

1. **Install Docker and NVIDIA Container Toolkit**: Ensure Docker and NVIDIA Container Toolkit are installed.  

2. Pull the DeepStream Docker image:  
```bash  
docker pull nvcr.io/nvidia/deepstream-l4t:6.1-samples  
```  

3. Run the container:  
```bash  
docker run -it --rm --runtime=nvidia \  
  -v /tmp/.X11-unix:/tmp/.X11-unix \  
  -e DISPLAY=$DISPLAY \  
  nvcr.io/nvidia/deepstream-l4t:6.1-samples  
```  

Alternatively, use the community-maintained [jetson-containers](https://github.com/dusty-nv/jetson-containers):  
```bash  
jetson-containers run dusty-nv/deepstream  
```  

---  

### Installation Verification  

Check version information:  
```bash  
deepstream-app --version-all  
```  

Expected output:  
```bash  
deepstream-app version 7.1.0  
DeepStreamSDK 7.1.0  
CUDA Driver Version: 12.6  
CUDA Runtime Version: 12.6  
TensorRT Version: 10.3  
cuDNN Version: 9.0  
libNVWarp360 Version: 2.0.1d3  
```  

---  

## 4. Running Examples  

### Step 1: Run Default Example  

1. Navigate to the configs/deepstream-app directory on the dev kit:  
```bash  
cd /opt/nvidia/deepstream/deepstream-7.1/samples/configs/deepstream-app  
```  

2. Run the reference application:  
```bash  
# deepstream-app -c <path_to_config_file>  
deepstream-app -c source30_1080p_dec_infer-resnet_tiled_display_int8.txt  
```  

This command will pop up a video window displaying real-time detection results:  

![deepstream_app_5x8](/img/deepstream_app_1.png)  

---  

### Step 2: Using USB or CSI Camera  

Modify the input section in the configuration file:  
```ini  
[source0]  
enable=1  
type=1  
camera-width=1280  
camera-height=720  
camera-fps-n=30  
```  

Then run:  
```bash  
deepstream-app -c <your_camera_config>.txt  
```  

> 🎥 USB cameras use `type=1`, while CSI cameras use `nvarguscamerasrc`.  

---  

### Step 3: Using RTSP Stream  

Use the following configuration snippet:  
```ini  
[source0]  
enable=1  
type=4  
uri=rtsp://<your-camera-stream>  
```  

### Step 4: Video Detection  

Navigate to the example folder:  
```bash  
cd /opt/nvidia/deepstream/deepstream-7.1/sources/apps/sample_apps/deepstream-test1  
```  

Compile the source code:  
```bash  
sudo make CUDA_VER=12.6  
```  

Run:  
```bash  
./deepstream-test1-app dstest1_config.yml  
```  

![deepstream_od](/img/deepstream_od.png)  

For more source examples, see `/opt/nvidia/deepstream/deepstream/sources`.  

---  

## 5. Integrating Custom Models  

DeepStream supports integrating custom models via TensorRT or ONNX.  

### Step 1: Model Conversion  

Use `trtexec` or `tao-converter`:  
```bash  
trtexec --onnx=model.onnx --saveEngine=model.engine  
```  

### Step 2: Update Configuration File  

```ini  
[primary-gie]  
enable=1  
model-engine-file=model.engine  
network-type=0  
```  

For more DeepStream TAO examples, visit [https://github.com/NVIDIA-AI-IOT/deepstream_tao_apps](https://github.com/NVIDIA-AI-IOT/deepstream_tao_apps).  

---  

## 6. More Examples  

[deepstream_python_apps](https://github.com/NVIDIA-AI-IOT/deepstream_python_apps/tree/master)  
![deepstream_python](/img/deepstream_python.png)  

## 7. Tips and Troubleshooting  

| Issue                     | Solution                                      |  
| ------------------------- | --------------------------------------------- |  
| No display in Docker      | Mount X11 socket and set `DISPLAY` variable   |  
| Low frame rate            | Use INT8 engine or reduce input resolution    |  
| USB camera not detected   | Check devices with `v4l2-ctl --list-devices`  |  
| GStreamer errors          | Verify plugin installation or reflash JetPack |  
| RTSP latency/dropped frames | Set `drop-frame-interval=0` and `latency=200` |  

---  

## 8. Appendix  

### Key Paths  

| Purpose                  | Path                                                   |  
| ------------------------ | ------------------------------------------------------ |  
| Sample config files      | `/opt/nvidia/deepstream/deepstream/samples/configs/`   |  
| Model engine files       | `/opt/nvidia/deepstream/deepstream/models/`            |  
| Log directory            | `/opt/nvidia/deepstream/logs/`                         |  
| DeepStream CLI tool      | `/usr/bin/deepstream-app`                              |  

### References  

- [DeepStream Official Page](https://developer.nvidia.com/deepstream-sdk)  
- [NGC Container Registry - DeepStream](https://catalog.ngc.nvidia.com/orgs/nvidia/containers/deepstream)  
- [GitHub - dusty-nv/jetson-containers](https://github.com/dusty-nv/jetson-containers)