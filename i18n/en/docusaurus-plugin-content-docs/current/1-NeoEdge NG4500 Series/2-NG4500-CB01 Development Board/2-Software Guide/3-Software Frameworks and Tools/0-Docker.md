# Docker

---

This guide provides a complete demonstration of how to install and configure **Docker and NVIDIA Container Runtime** on **NVIDIA Jetson Orin** series devices. This is a critical step for running GPU-accelerated containers (such as AI inference applications like Ollama, n8n, ROS, etc.).

---

## 1. Overview

- Install Docker CE to support containerized applications  
- Configure NVIDIA runtime to enable GPU acceleration  
- Set up non-`sudo` mode for running Docker  
- Configure NVIDIA as the persistent default runtime  

This guide covers:  

- Docker installation  
- NVIDIA runtime configuration  
- Runtime testing  
- Common issue troubleshooting  

---

## 2. System Requirements  

| Component       | Requirement                               |  
| --------------- | ---------------------------------------- |  
| Jetson Hardware | Orin Nano / NX / AGX                     |  
| OS              | Ubuntu 20.04 or 22.04 (JetPack-based)    |  
| Docker Version  | Recommended Docker CE ≥ 20.10            |  
| NVIDIA Runtime  | `nvidia-container-toolkit`               |  
| CUDA Driver     | Included in JetPack (requires JetPack ≥ 5.1.1) |  

---

## 3. Install Docker CE  

Install Docker from the official Ubuntu repository:  

```bash  
sudo apt-get update  
sudo apt-get install -y docker.io  
```  

> ⚠️ To install the latest version, you can also use Docker's official APT repository.  

Verify Docker installation:  

```bash  
docker --version  
# Example output: Docker version 20.10.17, build 100c701  
```  

---

## 4. Run Docker in Non-`sudo` Mode (Optional)  

To run Docker commands as a regular user:  

```bash  
sudo groupadd docker         # Create docker group (skip if already exists)  
sudo usermod -aG docker $USER  
sudo systemctl restart docker  
```  

> 🔁 Reboot or log out and back in for changes to take effect:  

```bash  
newgrp docker  
```  

---

## 5. Install NVIDIA Container Runtime  

Install the container runtime to allow containers to access Jetson GPU:  

```bash  
sudo apt-get install -y nvidia-container-toolkit  
```  

---

## 6. Configure NVIDIA Docker Runtime  

### A. Register NVIDIA as a Docker Runtime  

Run the configuration command:  

```bash  
sudo nvidia-ctk runtime configure --runtime=docker  
```  

Ensure NVIDIA is registered as a valid container runtime.  

---

### B. Set NVIDIA as the Default Runtime  

Edit the Docker daemon configuration file:  

```bash  
sudo nano /etc/docker/daemon.json  
```  

Paste or confirm the following JSON content exists:  

```json  
{  
  "runtimes": {  
    "nvidia": {  
      "path": "nvidia-container-runtime",  
      "runtimeArgs": []  
    }  
  },  
  "default-runtime": "nvidia"  
}  
```  

Save and exit the editor.  

---

### C. Restart Docker Service  

Apply configuration changes:  

```bash  
sudo systemctl restart docker  
```  

Verify Docker has enabled NVIDIA runtime:  

```bash  
docker info | grep -i runtime  
```  

Example output should include:  

```  
 Runtimes: io.containerd.runc.v2 nvidia runc  
 Default Runtime: nvidia  
```  

---

### D. Login to nvcr.io  

Obtain [NGC_API_KEY](https://org.ngc.nvidia.com/setup)  
- Generate API Key  
![NCG_API_KEY](/img/NGC_API_KEY.png)  
- Generate Personal Key  
![Generate_personal_key](/img/Generate_personal_key.png)  
- Docker login  
  ```shell  
  sudo docker login nvcr.io  
  # Username is fixed: $oauthtoken  
  Username: "$oauthtoken"  
  # Password is the token  
  Password: "YOUR_NGC_API_KEY"  
  ```  

---

## 7. Test GPU Access in Containers  

Run the official CUDA container to test GPU availability:  

```bash  
docker run --rm --runtime=nvidia nvcr.io/nvidia/l4t-base:r36.2.0 nvidia-smi  
```  

Expected output:  

- Displays CUDA version and Jetson GPU information  
- Confirms the container has successfully accessed the GPU  

![docker_nvidia-smi](/img/docker_nvidia-smi.png)  

**You can also use the community-maintained [jetson-containers](https://github.com/dusty-nv/jetson-containers) to quickly set up your development environment (recommended)**  

|||  
|---|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|  
| **ML** | [`pytorch`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/pytorch) [`tensorflow`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/tensorflow) [`jax`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/jax) [`onnxruntime`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/onnxruntime) [`deepstream`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/cv/deepstream) [`holoscan`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/cv/holoscan) [`CTranslate2`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/ctranslate2) [`JupyterLab`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/code/jupyterlab)                                                                                                                                                                                                                                                                               |
| **LLM** | [`SGLang`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/sglang) [`vLLM`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/vllm) [`MLC`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/mlc) [`AWQ`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/awq) [`transformers`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/transformers) [`text-generation-webui`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/text-generation-webui) [`ollama`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/ollama) [`llama.cpp`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/llama_cpp) [`llama-factory`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/llama-factory) [`exllama`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/exllama) [`AutoGPTQ`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/local_llm) [`FlashAttention`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/attention/flash-attention) [`DeepSpeed`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/deepspeed) [`bitsandbytes`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/bitsandbytes) [`xformers`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/attention/xformers) |
| **VLM** | [`llava`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vlm/llava) [`llama-vision`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vlm/llama-vision) [`VILA`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vlm/vila) [`LITA`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vlm/lita) [`NanoLLM`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/llm/nano_llm) [`ShapeLLM`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vlm/shape-llm) [`Prismatic`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vlm/prismatic) [`xtuner`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vlm/xtuner)                                                                                                                                                                                                                                                                                                                |
| **VIT** | [`NanoOWL`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vit/nanoowl) [`NanoSAM`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vit/nanosam) [`Segment Anything (SAM)`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vit/sam) [`Track Anything (TAM)`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vit/tam) [`clip_trt`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vit/clip_trt)                                                                                                                                                                                                                                                                                                                                                                                                |
| **RAG** | [`llama-index`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/rag/llama-index) [`langchain`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/rag/langchain) [`jetson-copilot`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/rag/jetson-copilot) [`NanoDB`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vectordb/nanodb) [`FAISS`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vectordb/faiss) [`RAFT`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/rapids/raft)                                                                                                                                                                                                                                                                                                                                                      |
| **L4T** | [`l4t-pytorch`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/l4t/l4t-pytorch) [`l4t-tensorflow`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/l4t/l4t-tensorflow) [`l4t-ml`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/l4t/l4t-ml) [`l4t-diffusion`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/l4t/l4t-diffusion) [`l4t-text-generation`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/l4t/l4t-text-generation)                                                                                                                                                                                                                                                                                                                                                              |
| **CUDA** | [`cupy`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/numeric/cupy) [`cuda-python`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/cuda/cuda-python) [`pycuda`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/cuda/pycuda) [`cv-cuda`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/cv/cv-cuda) [`opencv:cuda`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/cv/opencv) [`numba`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/numeric/numba)                                                                                                                                                                                                                                                                                                                                          |
| **Robotics** | [`Cosmos`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/diffusion/cosmos) [`Genesis`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/sim/genesis) [`ROS`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/ros) [`LeRobot`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot) [`OpenVLA`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vla/openvla) [`3D Diffusion Policy`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/diffusion/3d_diffusion_policy) [`Crossformer`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/vla/crossformer) [`MimicGen`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/sim/mimicgen) [`OpenDroneMap`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/opendronemap) [`ZED`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/hardware/zed)                                                                                                                                                                                         |
| **Graphics** | [`stable-diffusion-webui`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/diffusion/stable-diffusion-webui) [`comfyui`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/diffusion/comfyui) [`nerfstudio`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/nerf/nerfstudio) [`meshlab`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/nerf/meshlab) [`pixsfm`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/nerf/pixsfm) [`gsplat`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/nerf/gsplat)                                                                                                                                                                                                                                                                                                                                    |
| **Mamba** | [`mamba`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/mamba/mamba) [`mambavision`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/mamba/mambavision) [`cobra`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/mamba/cobra) [`dimba`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/mamba/dimba) [`videomambasuite`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/ml/mamba/videomambasuite)                                                                                                                                                                                                                                                                                                                                                                                                |
| **Speech** | [`whisper`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/speech/whisper) [`whisper_trt`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/speech/whisper_trt) [`piper`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/speech/piper-tts) [`riva`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/speech/riva-client) [`audiocraft`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/speech/audiocraft) [`voicecraft`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/speech/voicecraft) [`xtts`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/speech/xtts)                                                                                                                                                                                                                                                                                                              |
| **Home/IoT** | [`homeassistant-core`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/smart-home/homeassistant-core) [`wyoming-whisper`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/smart-home/wyoming/wyoming-whisper) [`wyoming-openwakeword`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/smart-home/wyoming/openwakeword) [`wyoming-piper`](https://github.com/dusty-nv/jetson-containers/tree/master/packages/smart-home/wyoming/piper)                                                                                                                                                                                                                                                                                                                                         |  

---

## 8. Tips and Troubleshooting  

| Issue                  | Solution                                |  
| ---------------------- | --------------------------------------- |  
| `nvidia-smi` not found | Jetson uses `tegrastats` as an alternative |  
| No GPU in container    | Ensure default runtime is set to `nvidia` |  
| Permission denied      | Check if user is in the `docker` group   |  
| Container crashes      | Check logs: `journalctl -u docker.service` |  

---

## 9. Appendix  

### Key File Paths  

| File                                  | Purpose              |  
| ------------------------------------- | ------------------- |  
| `/etc/docker/daemon.json`             | Docker runtime config |  
| `/usr/bin/nvidia-container-runtime`   | NVIDIA runtime binary path |  
| `~/.docker/config.json`               | Docker user config (optional) |  

### Reference Links  

- [Jetson Docker Runtime Official Docs](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)  
- [NVIDIA Developer Forum](https://forums.developer.nvidia.com/)  
- [JetPack SDK Download](https://developer.nvidia.com/embedded/jetpack)