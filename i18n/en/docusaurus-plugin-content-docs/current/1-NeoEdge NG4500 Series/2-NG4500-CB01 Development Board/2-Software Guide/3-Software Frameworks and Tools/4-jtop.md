Here are the translations of the requested files while maintaining the original markdown format and structure:

---

# jtop
---
## 1. Overview

**jtop** is a Jetson-specific command-line monitoring tool developed by Raffaello Bonghi. Written in Python, it provides an interactive interface similar to `htop`, displaying real-time system status information including CPU, GPU, memory, fan, and power consumption on Jetson devices.

Key features:
- Real-time monitoring of CPU, GPU, memory, fan, and power consumption
- Control NVPModel, power modes, fan speed, `jetson_clocks`, etc.
- Python API support for integration into custom applications
- Docker environment compatibility
- No superuser privileges required to run

---

## 2. System Requirements

| Component        | Requirement                                |
|------------------|-------------------------------------------|
| Jetson Hardware  | Orin Nano / NX / AGX                      |
| OS               | Ubuntu 20.04 or 22.04 (JetPack-based)     |
| JetPack Version  | Recommended JetPack ≥ 5.1.1               |
| Python Version   | Python 3.x                                |
| pip              | Installed                                 |
| Network          | Required for jetson-stats installation    |

---

## 3. Installing jtop

### A. Pre-installation Preparation

Ensure system is updated and pip is installed:

```bash
sudo apt update
sudo apt install python3-pip -y
```

### B. Install jetson-stats (includes jtop)

Install jetson-stats using pip:

```bash
sudo pip3 install -U jetson-stats
```

After installation, reboot or relogin for changes to take effect:

```bash
sudo reboot
```

---

## 4. Running jtop

Launch jtop in terminal:

```bash
jtop
```

![jtop](/img/jtop.gif)

jtop provides multiple pages, switch using arrow keys or Tab:
- **ALL**: All system information
- **GPU**: GPU usage
- **CPU**: CPU usage
- **MEM**: Memory and swap space
- **ENG**: Engine status
- **CTRL**: Control jetson_clocks, nvpmodel, fan, etc.
- **INFO**: System and library information

---

## 5. Advanced Usage

### A. Check jtop Status

For troubleshooting, check and repair jtop status:

```bash
sudo jtop --health
```

### B. Restore Default Configuration

Reset Jetson configuration (including jetson_clocks, fan, nvpmodel, etc.):

```bash
jtop --restore
```

### C. Change Color Theme

Modify jtop color theme:

```bash
jtop --color-filter
```

Or add to `.bashrc`:

```bash
export JTOP_COLOR_FILTER=True
```

---

## 6. Python API Example

jtop provides Python API for integration into custom applications:

```python
from jtop import jtop

with jtop() as jetson:
    if jetson.ok():
        print(jetson.stats)
```

---

## 7. Using jtop in Docker

Run jtop in Docker container:

1. Install jetson-stats on both host and container.
2. Mount `/run/jtop.sock` when running container:

```bash
docker run --rm -it -v /run/jtop.sock:/run/jtop.sock rbonghi/jetson_stats:latest
```

---

## 8. Troubleshooting

| Issue                | Solution                                  |
|----------------------|-------------------------------------------|
| jtop won't start     | Ensure jetson-stats is installed and reboot |
| Permission errors    | Run jtop with `sudo` or check user permissions |
| Can't get GPU info   | Verify NVIDIA drivers are properly installed |
| jtop fails in Docker | Ensure `/run/jtop.sock` is mounted and jetson-stats is installed in container |

---

## 9. References

- Official Docs: [https://rnext.it/jetson_stats](https://rnext.it/jetson_stats)
- GitHub: [https://github.com/rbonghi/jetson_stats](https://github.com/rbonghi/jetson_stats)
- NVIDIA Forum: [https://forums.developer.nvidia.com](https://forums.developer.nvidia.com)