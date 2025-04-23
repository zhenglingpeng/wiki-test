# Docker

---

This guide provides a complete walkthrough for installing and configuring **Docker with NVIDIA Container Runtime** on NVIDIA **Jetson Orin** devices. This environment is essential for running GPU-accelerated containers such as AI inference apps (e.g., Ollama, n8n, ROS, etc.).

---

## 1. Overview

- Install Docker CE for containerized app support  
- Configure NVIDIA runtime for GPU acceleration  
- Enable Docker without using `sudo`  
- Setup persistent default runtime  

This guide covers:

- Docker installation  
- NVIDIA runtime configuration  
- Runtime testing  
- Troubleshooting common container runtime issues  

【image】*Fig: Docker + NVIDIA runtime setup overview diagram*

---

## 2. System Requirements

| Component       | Requirement                                           |
| --------------- | ----------------------------------------------------- |
| Jetson Hardware | Orin Nano / NX / AGX                                  |
| OS              | Ubuntu 20.04 or 22.04 (JetPack-based)                 |
| Docker Version  | Docker CE (≥ 20.10 recommended)                       |
| NVIDIA Runtime  | `nvidia-container-toolkit`                            |
| CUDA Drivers    | Included in JetPack (ensure JetPack 5.1.1+ installed) |

---

## 3. Installing Docker CE

Update and install Docker from official Ubuntu repositories:

```bash
sudo apt-get update
sudo apt-get install -y docker.io
```

> ⚠️ You can also install the latest Docker version from Docker's official APT repo if needed.

Check Docker version:

```bash
docker --version
# Example: Docker version 20.10.17, build 100c701
```

---

## 4. Running Docker Without `sudo` (Optional)

To run Docker commands as a non-root user:

```bash
sudo groupadd docker         # Creates docker group (skip if exists)
sudo usermod -aG docker $USER
sudo systemctl restart docker
```

> 🔁 Reboot or re-login for group changes to take effect:

```bash
newgrp docker
```

---

## 5. Installing NVIDIA Container Runtime

Install the runtime that allows containers to access Jetson’s GPU:

```bash
sudo apt-get install -y nvidia-container-toolkit
```

【image】*Fig: NVIDIA Container Toolkit installed on Jetson*

---

## 6. Configuring NVIDIA Docker Runtime

### A. Add NVIDIA as a Docker Runtime

Run the official configuration command:

```bash
sudo nvidia-ctk runtime configure --runtime=docker
```

This ensures NVIDIA is registered as a valid container runtime.

---

### B. Set NVIDIA as the Default Runtime

Edit Docker's daemon configuration:

```bash
sudo nano /etc/docker/daemon.json
```

Paste or ensure the following JSON config is present:

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

Save and close the file.

---

### C. Restart Docker

Apply the runtime changes by restarting Docker:

```bash
sudo systemctl restart docker
```

Verify Docker is using the NVIDIA runtime:

```bash
docker info | grep -i runtime
```

Output should show:

```
Default Runtime: nvidia
Runtimes: nvidia runc
```

---

## 7. Testing GPU Access in Container

Use the NVIDIA sample CUDA container:

```bash
docker run --rm --runtime=nvidia nvcr.io/nvidia/l4t-base:r35.4.1 nvidia-smi
```

Expected output:

- Shows CUDA version and Jetson GPU info
- Confirms container has access to the GPU

【image】*Fig: Output from running nvidia-smi in Docker container on Jetson*

---

## 8. Tips & Troubleshooting

| Issue                  | Solution                                          |
| ---------------------- | ------------------------------------------------- |
| `nvidia-smi` not found | Jetson uses `tegrastats`, not `nvidia-smi`        |
| No GPU in container    | Make sure default runtime is set to `nvidia`      |
| Permission errors      | Ensure user is in the `docker` group              |
| Container crashes      | Check Docker logs: `journalctl -u docker.service` |

---

## 9. Appendix

### Key File Paths

| File                                | Purpose                     |
| ----------------------------------- | --------------------------- |
| `/etc/docker/daemon.json`           | Docker runtime config       |
| `/usr/bin/nvidia-container-runtime` | Runtime binary path         |
| `~/.docker/config.json`             | Optional Docker user config |

### References

- [Jetson Docker Runtime Docs](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
- [NVIDIA Developer Forum](https://forums.developer.nvidia.com/)
- [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)
