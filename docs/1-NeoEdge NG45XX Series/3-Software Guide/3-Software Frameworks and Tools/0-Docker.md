

# Docker

---

本指南将完整演示如何在 **NVIDIA Jetson Orin** 系列设备上安装并配置 **Docker 和 NVIDIA Container Runtime**。这是运行基于 GPU 加速的容器（如 Ollama、n8n、ROS 等 AI 推理应用）的关键步骤。

---

## 1. 概览

- 安装 Docker CE 支持容器化应用
- 配置 NVIDIA 运行时以启用 GPU 加速
- 设置非 `sudo` 模式运行 Docker
- 配置持久默认运行时为 NVIDIA

本指南涵盖：

- Docker 安装
- NVIDIA 运行时配置
- 运行时测试
- 常见问题排查

【图片】*图示：Docker + NVIDIA 运行时集成概览*

---

## 2. 系统要求

| 组件         | 要求                               |
| ---------- | -------------------------------- |
| Jetson 硬件  | Orin Nano / NX / AGX             |
| 操作系统       | Ubuntu 20.04 或 22.04（基于 JetPack） |
| Docker 版本  | 建议 Docker CE ≥ 20.10             |
| NVIDIA 运行时 | `nvidia-container-toolkit`       |
| CUDA 驱动    | 已包含在 JetPack（需 JetPack ≥ 5.1.1）  |

---

## 3. 安装 Docker CE

从 Ubuntu 官方源安装 Docker：

```bash
sudo apt-get update
sudo apt-get install -y docker.io
```

> ⚠️ 如需安装最新版本，也可以使用 Docker 官方 APT 源。

检查 Docker 是否安装成功：

```bash
docker --version
# 示例输出：Docker version 20.10.17, build 100c701
```

---

## 4. 非 `sudo` 模式运行 Docker（可选）

若希望以普通用户身份运行 Docker 命令：

```bash
sudo groupadd docker         # 创建 docker 用户组（若已存在可跳过）
sudo usermod -aG docker $USER
sudo systemctl restart docker
```

> 🔁 重启系统或重新登录使变更生效：

```bash
newgrp docker
```

---

## 5. 安装 NVIDIA 容器运行时

安装容器运行时以便容器访问 Jetson GPU：

```bash
sudo apt-get install -y nvidia-container-toolkit
```

【图片】*图示：Jetson 上安装完成的 NVIDIA 容器工具包*

---

## 6. 配置 NVIDIA Docker 运行时

### A. 注册 NVIDIA 为 Docker 运行时

运行以下配置命令：

```bash
sudo nvidia-ctk runtime configure --runtime=docker
```

确保 NVIDIA 被注册为有效容器运行时。

---

### B. 设置 NVIDIA 为默认运行时

编辑 Docker 守护进程配置文件：

```bash
sudo nano /etc/docker/daemon.json
```

粘贴或确认以下 JSON 内容存在：

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

保存并退出编辑器。

---

### C. 重启 Docker 服务

应用配置更改：

```bash
sudo systemctl restart docker
```

验证 Docker 是否启用了 NVIDIA 运行时：

```bash
docker info | grep -i runtime
```

输出示例应包含：

```
Default Runtime: nvidia
Runtimes: nvidia runc
```

---

## 7. 测试容器中 GPU 访问

运行官方 CUDA 容器测试 GPU 可用性：

```bash
docker run --rm --runtime=nvidia nvcr.io/nvidia/l4t-base:r35.4.1 nvidia-smi
```

期望输出：

- 显示 CUDA 版本与 Jetson GPU 信息
- 确认容器已成功访问 GPU

【图片】*图示：容器中执行 `nvidia-smi` 的输出*

---

## 8. 使用技巧与故障排查

| 问题               | 解决方法                                |
| ---------------- | ----------------------------------- |
| 找不到 `nvidia-smi` | Jetson 使用 `tegrastats` 替代           |
| 容器中无 GPU         | 确保默认运行时设置为 `nvidia`                 |
| 权限错误             | 检查用户是否加入了 `docker` 用户组              |
| 容器崩溃             | 查看日志：`journalctl -u docker.service` |

---

## 9. 附录

### 关键文件路径

| 文件                                  | 用途              |
| ----------------------------------- | --------------- |
| `/etc/docker/daemon.json`           | Docker 运行时配置    |
| `/usr/bin/nvidia-container-runtime` | NVIDIA 运行时二进制路径 |
| `~/.docker/config.json`             | Docker 用户配置（可选） |

### 参考链接

- [Jetson Docker Runtime 官方文档](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
- [NVIDIA 开发者论坛](https://forums.developer.nvidia.com/)
- [JetPack SDK 下载](https://developer.nvidia.com/embedded/jetpack)


