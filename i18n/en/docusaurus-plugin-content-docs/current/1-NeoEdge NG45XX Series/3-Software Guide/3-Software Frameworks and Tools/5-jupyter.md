---

# JupyterLab  
---

**JupyterLab** is a next-generation web-based interactive development environment supporting Python, data visualization and AI application development, ideal for Jetson platforms.

![overview](/img/jupyter_overview.png)

---

## 1. Overview

- Interactive execution of Python/C++/CUDA code  
- Markdown text and visualization support  
- Multi-tab interface with terminal, text editing and graphics  
- ARM64 compatible for Jetson platforms  
- Remote browser access  

Guide covers:
- pip-based installation  
- Configuration and remote access setup  
- Auto-start service setup  
- Uninstallation and troubleshooting  

---

## 2. System Requirements

### Hardware

| Component | Minimum Requirement |
|-----------|---------------------|
| Device    | Jetson Orin Nano/NX/AGX |
| RAM       | ≥4GB (8GB recommended) |
| Storage   | ≥1GB free space |

### Software

- JetPack 5.x (Ubuntu 20.04/22.04 based)  
- Python 3.8+  
- pip/venv tools  
- Optional: conda/virtualenv  

---

## 3. Installing JupyterLab

### Method A: pip Installation (Recommended)

```bash
sudo apt update

# Install jupyterlab
pip install --upgrade pip
pip install jupyterlab

# Verify installation
jupyter-lab --version  # Should show version number
```

✅ pip installation is most flexible and compatible with Jetson systems.

---

## 4. Launching and Access

### Start JupyterLab

```bash
jupyter-lab --ip=0.0.0.0 --port=8888 --no-browser
```

Default output includes access link with token.

### Browser Access:

```
http://<Jetson-IP>:8888/lab
```

![jupyter_lab](/img/jupyter_lab.png)

---

## 5. Create Configuration (Optional)

Auto-generate config:

```bash
jupyter lab --generate-config
```

Edit config:

```bash
nano ~/.jupyter/jupyter_lab_config.py
```

Recommended settings:

```python
c.ServerApp.ip = '0.0.0.0'          # Allow remote access
c.ServerApp.port = 8888             # Port setting
c.ServerApp.open_browser = False    # Disable auto browser launch
c.ServerApp.root_dir = '/home/your_username/notebooks'  # Custom path
```

---

## 6. Auto-start Service (Optional)

Create systemd service file:

```bash
sudo nano /etc/systemd/system/jupyter.service
```

Content:

```ini
[Unit]
Description=JupyterLab

[Service]
Type=simple
User=your_username
ExecStart=/home/your_username/.local/bin/jupyter-lab --config=/home/your_username/.jupyter/jupyter_lab_config.py
WorkingDirectory=/home/your_username
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Enable service:

```bash
sudo systemctl daemon-reexec
sudo systemctl enable jupyter
sudo systemctl start jupyter
```

---

## 7. Common Commands

| Action       | Command |
|--------------|---------|
| Start service| `sudo systemctl start jupyter` |
| Stop service | `sudo systemctl stop jupyter` |
| Check status | `systemctl status jupyter` |
| View logs    | `journalctl -u jupyter -f` |

---

## 8. Troubleshooting

| Issue                | Solution |
|----------------------|----------|
| Can't access page    | Check if port 8888 is open |
| Lost/unknown token   | Use `jupyter lab list` |
| Can't save files     | Check notebook directory permissions |
| Page loading issues  | Clear browser cache or restart service |

---

## 9. Appendix

### Default Paths

| Purpose        | Path |
|----------------|------|
| Notebook dir   | `/home/jetson/notebooks` |
| Config file    | `~/.jupyter/jupyter_lab_config.py` |
| Web UI address | `http://<Jetson-IP>:8888/lab` |

### Resources

- [JupyterLab Docs](https://jupyterlab.readthedocs.io/)
- [Jetson Forum](https://forums.developer.nvidia.com/)
- [Jupyter GitHub](https://github.com/jupyterlab/jupyterlab)