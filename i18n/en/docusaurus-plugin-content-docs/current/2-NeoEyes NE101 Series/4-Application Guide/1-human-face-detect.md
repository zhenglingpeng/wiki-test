# Human Face Detection

## Overview

This example implements human face detection based on deep learning, providing developers with an extensible foundational framework for developing various face recognition-related applications.

The project is developed using the [ESP-DL](https://github.com/espressif/esp-dl) deep learning library, which offers powerful deep learning interfaces for ESP-WHO, enabling rich AIoT application scenarios when combined with various peripherals.

## Preparation

### Hardware Requirements

- Development board supporting camera modules (recommended ESP32-S3 series)

### Software Preparation

#### 1. Precompiled Firmware

You can directly download the latest precompiled firmware for a quick experience:
- [human_face_detect.bin](https://github.com/camthink-ai/esp-who/blob/master/bin/human_face_detect.bin)

#### 2. Source Code Development Environment

For further development, prepare the following environment:
- **Development Tool**: Visual Studio Code (version 1.99.2 or higher)
- **Development Framework**: ESP-IDF plugin (version 5.4.0 or higher)
- **Example Code**: [camthink-ai/esp-who](https://github.com/camthink-ai/esp-who)

> **Important Note**: Ensure to complete the environment setup according to the [Development Environment Configuration Guide](./../Software%20Guide/Development%20Environment%20Setup).

## Function Verification

### Precompiled Firmware Testing Process

#### 1. Device Connection

Use a Type-C data cable to connect the development board to your PC.

![NE101 Main Board Interface Diagram](/img/NE101_Main_Board2.png)

#### 2. Firmware Flashing

Refer to the detailed flashing guide:
- [System Flashing and Initialization](./../Software%20Guide/System%20Flashing%20and%20Initialization)

#### 3. Serial Output Parsing

The device will output face detection results via serial port (baud rate: 115200):

Example output:
```
WhoDetect: 0, bbox: [0.826712, 47, 40, 169, 195], left_eye: [80, 105], left_mouth: [90, 151], nose: [101, 125], right_eye: [123, 99], right_mouth: [126, 146]
```

**Data Field Explanation**:
- **bbox**: Face bounding box information
  - Format: [confidence, top-left x-coordinate, top-left y-coordinate, width, height]
- **left_eye**: Left eye coordinates (x, y)
- **right_eye**: Right eye coordinates (x, y)
- **nose**: Nose coordinates (x, y)
- **left_mouth**: Left mouth corner coordinates (x, y)
- **right_mouth**: Right mouth corner coordinates (x, y)

#### 4. Function Verification

1. Aim the camera at a face or a face photo.
2. Observe the face feature point data output by the serial port.
3. Try moving the camera to verify dynamic detection effects.

![Static Face Detection Diagram](/img/NE101_example_human_detect_1.png)

![Dynamic Face Detection Effect Diagram](/img/NE101_example_human_detect.gif)

### Source Code Development Verification Process

#### 1. Obtain the Source Code

```bash
git clone https://github.com/camthink-ai/esp-who
```

#### 2. Project Configuration

1. Open the project in VS Code: `examples/human_face_detect`
   
   ![Project Directory Structure](/img/NE101_human_face_detect_dir.png)

2. Set the target chip to ESP32-S3.

   ![Chip Selection Interface](/img/NE101_idf_IC.png)

#### 3. Compilation and Flashing

1. Compile the project.

   ![Compilation Interface](/img/NE101_idf_build.png)

2. Flash the firmware.

   ![Flashing Interface](/img/NE101_idf_flash.png)

#### 4. Function Verification

The verification method is the same as for the precompiled firmware, refer to the previous steps.

## Reference Resources

1. ESP-DL Model Quantization Documentation:
   - [GitHub - espressif/esp-dl](https://github.com/espressif/esp-dl?tab=readme-ov-file)

2. Official Example Repository:
   - [GitHub - espressif/esp-who](https://github.com/espressif/esp-who/tree/master)