# Chatbot

---

This guide walks through deploying the **DeepSeek-R1** large language model locally on **NVIDIA Jetson Orin** devices using **Ollama**—a lightweight inference engine—enabling offline AI interaction with minimal setup.

---

## 1. Overview

Large Language Models (LLMs) like DeepSeek-R1 are becoming essential for smart edge applications. Running them directly on Jetson Orin allows for:

- **Offline interaction**  
- **Low-latency response**  
- **Enhanced data privacy**

This guide covers:

- Environment setup  
- Ollama installation  
- Running DeepSeek-R1  
- Optional web interface with Open WebUI  

【image】*Fig: Web-based chatbot UI using Open WebUI (placeholder)*

---

## 2. Environment Setup

### Hardware Requirements

| Component | Requirement                      |
| --------- | -------------------------------- |
| Device    | Jetson Orin (Nano / NX / AGX)    |
| RAM       | ≥ 8GB (more for larger models)   |
| Storage   | ≥ 10GB (depending on model size) |
| GPU       | NVIDIA GPU with CUDA support     |

### Software Requirements

- Ubuntu 20.04 / 22.04 (JetPack 5.1.1+ recommended)
- NVIDIA CUDA Toolkit & drivers (preinstalled with JetPack)
- Docker (optional, for containerized setup)

> ⚙️ Use `jetson_clocks` and check `nvpmodel` to enable max performance mode before running inference.

---

## 3. Installing Ollama (Inference Engine)

### Option A: Native Script Installation

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

- Installs Ollama service and CLI.
- Automatically handles dependencies and background service setup.

### Option B: Docker-based Deployment

```bash
sudo docker run --runtime nvidia --rm --network=host \
  -v ~/ollama:/ollama \
  -e OLLAMA_MODELS=/ollama \
  dustynv/ollama:r36.4.0
```

> 🧩 Docker version is maintained by NVIDIA community (dustynv) and optimized for Jetson platforms.

### Verifying Ollama

```bash
ss -tuln | grep 11434
```

Expected output:

```
LISTEN 0 128 127.0.0.1:11434 ...
```

If port `11434` is listening, the Ollama service is active.

---

## 4. Running DeepSeek-R1 Model

### Model Launch

To run the 1.5B parameter version:

```bash
ollama run deepseek-r1:1.5b
```

- Ollama will download the model (if not already cached).
- Prompt-based interaction starts in terminal.

> 💡 Replace `1.5b` with `8b`, `14b`, etc., based on your hardware's capacity.

### Model Version Comparison

| Version | RAM Required | Comments                    |
| ------- | ------------ | --------------------------- |
| 1.5B    | ~6–8 GB      | Suitable for Orin Nano/NX   |
| 8B+     | ≥ 16 GB      | Needs AGX Orin              |
| 70B     | 🚫           | Not feasible on Jetson edge |

---

## 5. Optional: Web UI (Open WebUI)

Open WebUI provides a browser-based interface for interacting with Ollama models.

### Installing Open WebUI (via Docker)

```bash
sudo docker run -d --network=host \
  -v ${HOME}/open-webui:/app/backend/data \
  -e OLLAMA_BASE_URL=http://127.0.0.1:11434 \
  --name open-webui \
  --restart always \
  ghcr.io/open-webui/open-webui:main
```

### Accessing the UI

Open your browser and go to:

```text
http://localhost:3000/
```

- Interact with the DeepSeek-R1 model in a rich web environment.
- Monitor prompt history and responses visually.

---

## 6. Performance Tips

| Optimization Area | Recommendation                                              |
| ----------------- | ----------------------------------------------------------- |
| RAM Usage         | Use smaller models (1.5B) or enable swap                    |
| Jetson Power Mode | Enable `MAXN` performance with `nvpmodel` & `jetson_clocks` |
| Disk Caching      | Ensure model cache directory (`~/ollama`) has space         |
| Monitoring        | Use `htop`, `tegrastats` to check runtime load              |

> 📉 Model loading may take ~30s–1 min on first run. Cached models load faster.

---

## 7. Troubleshooting

| Issue                      | Resolution                                            |
| -------------------------- | ----------------------------------------------------- |
| Port 11434 not listening   | Restart Ollama or check Docker container status       |
| Model fails to load        | Insufficient memory; try smaller version (e.g., 1.5B) |
| Web UI not accessible      | Check if Docker is running and mapped to host network |
| "Ollama command not found" | Re-run installation script or add it to `$PATH`       |

---

## 8. Appendix

### Folder Structure Example

```bash
~/ollama/                # Model cache directory
~/open-webui/            # WebUI persistent storage
```

### References & Resources

- [DeepSeek-R1 Models](https://huggingface.co/deepseek-ai)
- [Ollama Documentation](https://ollama.com/)
- [Open WebUI GitHub](https://github.com/open-webui/open-webui)
- [Jetson Forum (NVIDIA)](https://forums.developer.nvidia.com/)
