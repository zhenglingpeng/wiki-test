# Pose Estimation
---

## 1. Overview

This document explains how to use **MediaPipe Python API** for real-time **pose estimation** on **Jetson Orin** platforms (Nano/NX/AGX) with GPU acceleration (if supported).

Pose estimation is widely used in gesture recognition, fitness tracking, HCI, etc.

![mediapipe-series-solutions](/img/mediapipe-series-solutions.gif)

---

## 2. System Requirements

### Hardware

- Jetson Orin series (Nano, NX, AGX)  
- USB/CSI camera (optional but recommended)

### Software

- **OS**: Ubuntu 20.04/22.04 LTS (JetPack-based)  
- **JetPack**: Official image (includes CUDA, cuDNN, TensorRT)  
- **Python**: Recommended 3.8+  
- **MediaPipe (Python)**: Via pip  
- **Dependencies**: OpenCV, FFmpeg, GStreamer (for camera/video)  

---

## 3. Environment Setup

### Step 1: Update System and Install Dependencies

```bash
sudo apt update && sudo apt upgrade
sudo apt install -y \
    python3-dev python3-pip python3-opencv \
    libopencv-dev \
    libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev \
    libavcodec-dev libavformat-dev libswscale-dev
```

### Step 2: Install Python Packages

```bash
python3 -m pip install --upgrade pip
pip3 install mediapipe opencv-python
```

For Jetson GPU acceleration, ensure TensorRT/CUDA are enabled and max performance:

```bash
sudo nvpmodel -m 0
sudo jetson_clocks
```

---

## 4. Run Pose Estimation

![pose](/img/mediapipe_pose_0.png)

```python
import cv2
import mediapipe as mp

mp_pose = mp.solutions.pose
pose = mp_pose.Pose()

cap = cv2.VideoCapture(0)
while True:
    ret, frame = cap.read()
    if not ret:
        break
    image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = pose.process(image)

    if results.pose_landmarks:
        mp.solutions.drawing_utils.draw_landmarks(
            frame, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)
    
    cv2.imshow("Pose Estimation", frame)
    if cv2.waitKey(5) & 0xFF == 27:
        break
cap.release()
cv2.destroyAllWindows()
```
![mediapipe_pose_1](/img/mediapipe_pose_1.png)

---

## 5. Hand Tracking

![hand](/img/mediapipe_hand_0.png)

```python
import cv2
import mediapipe as mp
import time

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(min_detection_confidence=0.5, min_tracking_confidence=0.5)
mp_drawing = mp.solutions.drawing_utils

cap = cv2.VideoCapture(0)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        continue
    image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(image)
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            mp_drawing.draw_landmarks(image, hand_landmarks, mp_hands.HAND_CONNECTIONS)

    cv2.imshow("Hand Tracking", image)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```
![hand](/img/mediapipe_hand_1.png)

---

## 6. Performance and Optimization

| Mode        | FPS (AGX Orin) | GPU Usage | Accelerated |
|-------------|----------------|-----------|-------------|
| Default CPU | ~5-10 FPS      | Low       | ❌          |
| JetPack GPU | ~25-40 FPS     | Medium    | ✅          |

### Optimization Tips

- Enable `jetson_clocks` and set `nvpmodel` to max performance  
- Use OpenCV multithreading for frame capture  
- Reduce image resolution (e.g., 640x480)  

---

## 7. Troubleshooting

| Issue            | Solution                          |
|------------------|-----------------------------------|
| Import errors    | Ensure `mediapipe` is installed   |
| Camera not opening| Test with `cv2.VideoCapture(0)`   |
| Low FPS          | Enable GPU, reduce resolution     |
| No display       | Use `export DISPLAY=:0` for SSH   |

---

## 8. Appendix

### References
 
- [MediaPipe GitHub](https://github.com/google/mediapipe)
- [MediaPipe Samples](https://github.com/google-ai-edge/mediapipe-samples)