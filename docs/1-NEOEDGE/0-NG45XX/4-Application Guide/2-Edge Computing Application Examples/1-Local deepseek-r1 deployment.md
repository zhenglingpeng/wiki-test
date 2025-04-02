# local deepseek-r1 deployment

As large language models (LLMs) become integral to various applications, efficiently running these models on local devices is crucial for developers. This guide provides a comprehensive walkthrough for deploying the DeepSeek-R1 model on NVIDIA Jetson Orin devices, enabling offline inference and interaction.

## 1. Environment Setup

### 1.1 Hardware Requirements

- **Device**: NVIDIA Jetson Orin series (e.g., Jetson Orin Nano, Jetson AGX Orin).
- **Memory**: A minimum of 8GB RAM is recommended.
- **Storage**: Ensure sufficient storage for the model and associated data.

### 1.2 Software Requirements

- **Operating System**: Ubuntu 20.04 or 22.04.
- **NVIDIA JetPack**: Version 5.1.1 or later.
- **NVIDIA Drivers and CUDA Toolkit**: Ensure that the latest NVIDIA drivers and CUDA toolkit are installed.

## 2. Installing Ollama

Ollama is a lightweight inference engine designed to run large language models locally with minimal setup. It simplifies AI model deployment by providing an easy-to-use interface optimized for various hardware configurations, including Jetson devices.

### 2.1 Installation via Script

Open a terminal on your Jetson device and execute:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

This script will automatically download and set up Ollama on your system, enabling seamless local inference for AI applications.

### 2.2 Installation via Docker

Alternatively, if you prefer using Docker, run:

```bash
sudo docker run --runtime nvidia --rm --network=host -v ~/ollama:/ollama -e OLLAMA_MODELS=/ollama dustynv/ollama:r36.4.0
```

This command pulls and runs the Ollama Docker image optimized for Jetson devices.

### 2.3 Verifying Ollama Service

After installation, verify that the Ollama service is running and listening on the default port 11434:

```bash
ss -tuln | grep 11434
```

If the output indicates a process listening on port 11434, the service is operational.

## 3. Deploying the DeepSeek-R1 Model

DeepSeek-R1 offers multiple model versions, with parameter sizes ranging from 1.5 billion to 70 billion. Based on your Jetson Orin's hardware capabilities, select the appropriate model version.

### 3.1 Running the Model

To download and run a specific version of the DeepSeek-R1 model, execute:

```bash
ollama run deepseek-r1:1.5b
```

Replace `1.5b` with the desired model version (e.g., `8b`, `14b`, `32b`, `70b`). The initial run will download the model; subsequent runs will utilize the cached version.

### 3.2 Model Performance Considerations

Running larger models requires more computational resources. For instance, the 70B model may necessitate multiple high-performance GPUs and substantial RAM. Ensure your device meets the hardware requirements for the chosen model version.

## 4. Optional: Installing Open WebUI

For a more user-friendly interaction with the model, consider installing Open WebUI, a browser-based interface.

### 4.1 Installing Open WebUI

Deploy Open WebUI using Docker:

```bash
sudo docker run -d --network=host \
    -v ${HOME}/open-webui:/app/backend/data \
    -e OLLAMA_BASE_URL=http://127.0.0.1:11434 \
    --name open-webui \
    --restart always \
    ghcr.io/open-webui/open-webui:main
```

This command pulls and runs the Open WebUI Docker image, configured to interface with the local Ollama service.

### 4.2 Accessing Open WebUI

Open a browser and navigate to `http://localhost:3000/` to interact with the model through the web interface.

## 5. Additional Considerations

- **Resource Utilization**: Running large models can consume significant memory and processing power. Monitor system resources to ensure optimal performance.
- **Model Selection**: Choose a model version that balances performance with your device's capabilities.
- **Network Requirements**: Downloading models requires an internet connection. Once downloaded, models can run offline.

By following these steps, developers can effectively deploy and run DeepSeek-R1 models on NVIDIA Jetson Orin devices, facilitating efficient local AI inference and interaction. 
