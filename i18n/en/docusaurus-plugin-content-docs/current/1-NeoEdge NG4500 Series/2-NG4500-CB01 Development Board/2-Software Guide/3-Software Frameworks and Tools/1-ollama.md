# Ollama  

---  

This guide explains how to install, update, configure, and uninstall **Ollama** on NVIDIA **Jetson Orin** devices. Ollama supports running large language model (LLM) inference locally with CUDA acceleration and is optimized for Jetson hardware.  

---  

## 1. Overview  

- Fast local inference  
- CUDA acceleration support  
- Model version management  
- Simple command-line tool with optional WebUI  

This document covers:  

- Installation via script or Docker  
- Running models  
- Version updates  
- Optional remote access configuration  
- Complete uninstallation methods  

![overview](/img/NG45XX_ollama_overview.png)  

---  

## 2. System Requirements  

### Hardware Requirements  

| Component | Minimum Requirement               |  
| --------- | --------------------------------- |  
| Device    | Jetson Orin Nano / NX / AGX       |  
| RAM       | ≥ 8GB for small/medium models     |  
| Storage   | ≥ 10GB for models and cache       |  

### Software Requirements  

- Ubuntu 20.04 or 22.04 (JetPack-based)  
- JetPack 5.1.1+ (pre-installed with CUDA, cuDNN, TensorRT)  
- Python 3.8+ (optional)  
- Docker (optional, for containerized mode)  

---  

## 3. Installing Ollama  

### Method A: Script Installation (Recommended)  

Run the official installation script:  

```bash  
curl -fsSL https://ollama.com/install.sh | sh  
```  

- Installs CLI binary and background service  
- CUDA support is enabled by default on Jetson  

### Method B: Docker-Based Installation (Optional)  

```bash  
sudo docker run --runtime nvidia --rm --network=host \  
  -v ~/ollama:/ollama \  
  -e OLLAMA_MODELS=/ollama \  
  dustynv/ollama:r36.4.0  
```  

> 🧩 Maintained by the Jetson community (dustynv) and optimized for JetPack environments  

---  

## 4. Basic Usage  

### Common Commands  

```bash  
ollama serve         # Start Ollama background service  
ollama run           # Run a model  
ollama pull          # Pull a model from the repository  
ollama list          # List installed models  
ollama show          # Show model information  
ollama rm            # Remove a model  
ollama help          # View command help  
```  

### Check Version  

```bash  
ollama -v  
# Example: ollama version 0.5.7  
```  

### Start Service (if not auto-started)  

```bash  
ollama serve &  
```  

---  

## 5. Optional: Enable Remote Access  

To allow external devices to access the Ollama service:  

1. Edit the systemd service file:  
   
   ```bash  
   sudo nano /etc/systemd/system/ollama.service  
   ```  

2. Add the following under the `[Service]` section:  
   
   ```ini  
   Environment="OLLAMA_HOST=0.0.0.0"  
   Environment="OLLAMA_ORIGINS=*"  
   ```  

3. Reload and restart the service:  
   
   ```bash  
   sudo systemctl daemon-reload  
   sudo systemctl restart ollama  
   ```  

---  

## 6. Running Models  

Use the `ollama run` command to start model inference:  

```bash  
ollama run deepseek-r1:7b  
```  

- More models available at: [https://ollama.com/search](https://ollama.com/search)  
- First run downloads the model; subsequent runs use local cache  

---  

## 7. Updating Ollama  

Update to the latest version:  

```bash  
curl -fsSL https://ollama.com/install.sh | sh  
```  

### Optional: Install a Specific Version  

Specify the version to install:  

```bash  
curl -fsSL https://ollama.com/install.sh | OLLAMA_VERSION=0.1.32 sh  
```  

---  

## 8. Uninstalling Ollama  

### Remove Service  

```bash  
sudo systemctl stop ollama  
sudo systemctl disable ollama  
sudo rm /etc/systemd/system/ollama.service  
```  

### Delete Executable  

```bash  
sudo rm $(which ollama)  
```  

(Ollama is typically installed in `/usr/local/bin`, `/usr/bin`, or `/bin`)  

### Delete Model Files and User Account  

```bash  
sudo rm -r /usr/share/ollama  
sudo userdel ollama  
sudo groupdel ollama  
```  

---  

## 9. Troubleshooting  

| Issue                     | Solution                                  |  
| ------------------------- | ----------------------------------------- |  
| Port 11434 unresponsive   | Restart `ollama serve` or reload systemd  |  
| Installation failed       | Ensure curl is installed and connected; retry with `sudo` |  
| Unable to uninstall       | Use `which ollama` to locate and delete   |  
| Out of Memory (OOM)       | Try smaller models (e.g., `1.5b`, `7b`) or add swap space |  

---  

## 10. Appendix  

### Path Reference  

| Purpose                | Path                                   |  
| ---------------------- | -------------------------------------- |  
| Ollama executable      | `/usr/local/bin/ollama`               |  
| Model cache            | `~/ollama/` or `/usr/share/ollama`     |  
| Service configuration  | `/etc/systemd/system/ollama.service`  |  

### References  

- [Ollama Official Website](https://ollama.com/)  
- [GitHub Repository](https://github.com/ollama/ollama)  
- [Jetson Community Forum](https://forums.developer.nvidia.com/)