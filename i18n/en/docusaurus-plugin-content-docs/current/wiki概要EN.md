# 概要(EN)

CamThink Brand Vision

---

# 1. NEOEDGE

---

## 1.1 NG45XX

### 1.1.1 Overview

- **Product Introduction**
  - Differences among NG45XX models, Jetson module versions, carrier board types, and accessory details.
- **Target Applications**
  - Various edge computing scenarios, including industrial inspection, drone control, and autonomous driving.
- **Target Users**
  - Edge computing developers, AI researchers, and robotics developers.
- **Technical Support and Community Links**
  - Official support, developer community, and technical documentation links.

### 1.1.2 Quick Start

- **Getting Started**
  - Hardware installation steps (module, carrier board, accessory connections).
  - Basic software setup (flashing the system, driver installation).
  - Initial boot test.
- **Video Tutorials and Resource Links**

---

### 1.1.3 Hardware Guide

#### 1.1.3.1 Components Overview

- **Jetson Module Specifications and Features**
  - Processing power, memory, storage, and core parameters.
- **Custom Carrier Board Features and Interface Description**
  - GPIO
  - I2C/SPI/UART
  - Camera Interface (CSI)
  - Display Interface (HDMI)
  - USB Interface
  - Power Management
- **Accessories and Their Uses**
  - Camera modules
  - Sensor modules
  - Expansion modules
  - Mounts and enclosures

#### 1.1.3.2 Hardware Connection

- Module installation methods.
- Accessory installation considerations.
- Peripheral connections and cable routing.
- Common hardware troubleshooting.

#### 1.1.3.3 Schematics and PCB Design Documents

- **Carrier Board Schematic Explanation**
- **PCB Design Overview**
- **Hardware Design Guidelines**
  - Power supply design and signal integrity recommendations.

---

### 1.1.4 Software Guide

#### 1.1.4.1 System Flashing and Initialization

- **Installing and Using Flashing Tools**
  - Using SDK Manager.
  - Manual flashing steps (command-line method).
- **Initial System Configuration**
  - User setup.
  - Network configuration.
  - SSH connection setup.

#### 1.1.4.2 Driver Installation and Updates

- **Official Driver Support**
- **Custom Driver Compilation and Installation**
  - Camera drivers:
    - IMX415/IMX678
  - I/O interface drivers:
    - GPIO
    - I2C/SPI/CAN/USB/UART
  - Communication module drivers:
    - Wi-Fi
    - 4G/5G
  - CODEC, TPM2.0, PowerSwitch drivers.
- **Firmware Update Methods**
  - OTA updates.

#### 1.1.4.3 Development Environment Setup

- Local development environment setup.
- Remote development and debugging.
- Docker support.
- Remote desktop configuration.

#### 1.1.4.4 Software Frameworks and Tools

- **Jetson Official Development Tools**
  - JetPack SDK
  - TensorRT
  - DeepStream
  - CUDA/CuDNN
- **Custom Software Tools and Scripts**
  - VMS
  - SDK

---

### 1.1.5 Application Guide

#### 1.1.5.1 Application Software Development

- **Sensor Data Acquisition and Processing**
  - Image capture and processing (OpenCV/GStreamer).
  - Data storage and network transmission.
- **Multimedia Application Development**
  - Video processing.
  - Optimized display output.
- **AI Model Deployment and Optimization**
  - Model conversion and inference.
  - Performance tuning (INT8/FP16 acceleration).

#### 1.1.5.2 Hardware Interface Development

- GPIO programming and control.
- Communication protocol development (I2C/SPI/UART).
- Camera driver customization.

#### 1.1.5.3 Edge Computing Application Examples

- **Object Detection and Recognition**
  - Example 1.
- **Vision Model Examples**
  - Example 1.
- **Third-Party Inference Platform Compatibility**
  - roboflow
  - EdgeImpulse
- **NEOEYES**

---

### 1.1.6 Debugging and Optimization

#### 1.1.6.1 Hardware Debugging

- **Interface Signal Debugging**
  - Using oscilloscopes and logic analyzers.
- **Hardware Issue Troubleshooting**

#### 1.1.6.2 Software Debugging

- **System Log Analysis**
- **Performance Monitoring Tools**
  - Using tools like TegraStats.
- **Common Error Solutions**

#### 1.1.6.3 Performance Optimization

- Algorithm acceleration (TensorRT, CUDA optimization).
- Power and thermal management.
- Network and data transfer optimization.

---

### 1.1.7 FAQ and Support

#### 1.1.7.1 FAQ

- Hardware issues.
- Software issues.
- Accessory-related questions.

#### 1.1.7.2 Technical Support

- Official support contact details.
- Community support links.
- Best practices for submitting issues.

---

### 1.1.8 Documentation and Resource Downloads

#### 1.1.8.1 User Manuals

- Module user manual.
- Carrier board user manual.

#### 1.1.8.2 Technical Resources

- Data sheets.
- Interface protocol documentation.

#### 1.1.8.3 Example Code and Projects

- Example code download.
- Recommended open-source projects.

---

# 2. NEOEYES

---

## 2.1 NE100

### 2.1.1 Overview

- **Product Introduction**
  - NE100 is based on the ESP32 controller, supporting Wi-Fi and Bluetooth communication.
- **Target Applications**
  - Smart homes, environmental monitoring, and wearable device development.
- **Target Users**
  - IoT developers, students, and electronics enthusiasts.
- **Technical Support and Community Links**
  - ESP32 official resources and community links.

---

### 2.1.2 Quick Start

- **Hardware Setup**
  - Connect the module to the development board and attach sensors or displays.
- **Software Configuration and Testing**
  - Install ESP-IDF or Arduino IDE.
  - Flash firmware.
  - Initial boot test.

---

### 2.1.3 Hardware Guide

- **Hardware Specifications**
  - ESP32 module and development board interface layout.
- **Accessory Installation and Features**
  - Supported sensors, cameras, and communication expansion modules.

---

### 2.1.4 Software Guide

- **Flashing and Environment Setup**
  - Use `esptool.py` or Arduino IDE to flash firmware.
- **Driver Installation and Updates**
  - OTA upgrades and compatible toolchain setup.

---

### 2.1.5 Application Guide

- **Data Collection, Communication Modules, and Cloud Integration**

- **Example 1**

- **Example 2**

- **Example 3**

---

### 2.1.6 Debugging and Optimization

- **Hardware Debugging**

- **Software Debugging**

- **Performance Optimization**

---

### 2.1.7 FAQ and Support

- **FAQ**

---

### 2.1.8 Documentation and Resource Downloads

- **User Manuals and Technical Documentation**
  - ESP32 datasheets and module documentation.
- **Example Code**
  - IoT development code samples.

---

## 2.2 NE200

### 2.2.1 Overview

- **Product Introduction**
  - NE200 is based on the ST microcontroller platform (e.g., STM32 series).
  - Features extensive peripheral interfaces (GPIO, I2C, SPI, UART, CAN, ADC/DAC).
  - Offers efficient low-power modes, suitable for embedded applications.
  - Supports various expansion modules: sensors, communication modules, display modules, etc.
- **Target Applications**
  - Industrial automation.
  - Smart device control.
  - Low-power embedded systems.
- **Target Users**
  - Industrial control product developers.
  - Embedded system developers.
  - Educators and researchers.
- **Technical Support and Community Links**
  - Official support documents (STM32Cube, HAL, LL libraries).
  - Developer communities (ST forums, GitHub resourc

---

### 2.2.2 Quick Start

- **Hardware Setup**
  - Connect the NE200 module to the development board.
  - Attach sensors, communication modules, or display modules as needed.
  - Power via USB or external power supply.
- **Software Configuration and Testing**
  - Download and install STM32CubeIDE or Keil MDK development tools.
  - Import the provided template project.
  - Compile and flash example programs (e.g., LED blinking).
- **Initial Test**
  - Use a serial debugging tool to view startup logs.
  - Verify basic functionalities (e.g., GPIO control, communication tests).

---

### 2.2.3 Hardware Guide

#### 2.2.3.1 Hardware Components

- **ST Microcontroller Features**
  - Processor architecture (e.g., ARM Cortex-M series).
  - Flash and RAM sizes.
  - Supported low-power modes and operating frequencies.
- **Functional Modules and Interfaces**
  - General GPIO pin descriptions.
  - Communication interfaces (I2C, SPI, UART, CAN, USB).
  - Analog signal processing (ADC, DAC).
- **Expansion Accessories**
  - Sensor modules (e.g., temperature, humidity, pressure, accelerometer).
  - Display modules (e.g., OLED, TFT).
  - Motor driver modules.
- **Mounts and Enclosures**

#### 2.2.3.2 Hardware Connection Guide

- **Module Installation**
  - Insert NE200 into a compatible carrier board or connect peripherals using cables.
- **Peripheral Connections**
  - Follow the user manual to connect communication modules, sensors, or other peripherals.
- **Key Considerations**
  - Ensure voltage and pin level compatibility.
  - Use appropriate wiring and shielding to prevent signal interference.

#### 2.2.3.3 Schematics and Design Documents

- **Hardware Schematics**
  - Full schematics for the NE200 module and development board.
- **PCB Design Guidelines**
  - Critical design considerations (e.g., power filtering, signal routing).
- **Reference Design Files**
  - Provide standard reference designs for user customization.

---

### 2.2.4 Software Guide

#### 2.2.4.1 System Initialization and Development Environment

- **Development Tools Installation**
  - Download and install STM32CubeIDE, STM32CubeMX, or other tools (e.g., Keil, IAR).
- **Firmware Initialization and Configuration**
  - Use STM32CubeMX to generate project code.
  - Configure the clock tree, peripheral initialization (e.g., UART, I2C).
- **Flashing and Debugging**
  - Flash firmware using ST-LINK or JTAG tools and debug.

#### 2.2.4.2 Driver Support and Updates

- **Official Driver Support**
  - Use STM32 HAL or LL libraries for development.
  - Drivers for peripherals (I2C, SPI, UART, ADC, etc.).
- **Custom Driver Development**
  - Develop custom drivers based on user requirements (e.g., sensors, communication modules).

#### 2.2.4.3 AI Model Deployment and Inference

- TensorFlow Lite for Microcontrollers (TFLM).
- Edge Impulse.
- ST Neural Network Library (ST NN).
- uTensor.
- X-CUBE-AI.

---

### 2.2.5 Application Guide

#### 2.2.5.1 Application Development

- **Sensor Data Collection and Processing**
  - Read temperature and humidity sensor data.
  - Analog signal acquisition and filtering (ADC/DSP).
- **Communication and Protocol Implementation**
  - I2C/SPI protocol implementation and multi-device communication.
  - UART communication and Modbus protocol implementation.
- **Low-Power Optimization**
  - Implement sleep modes and wake-up mechanisms.
  - Power consumption monitoring and tuning.

#### 2.2.5.2 Hardware Interface Development

- GPIO control logic and PWM output.
- Using CAN interface for industrial device communication.
- Expansion module development via SPI/I2C interfaces.

#### 2.2.5.3 Real-World Application Cases

- **Industrial Control**
  - Remote monitoring and control of industrial equipment using NE200.
- **Environmental Monitoring**
  - Real-time monitoring of temperature, humidity, and pressure data, with LoRa or MQTT cloud upload.
- **Smart Devices**
  - Develop intelligent controllers (e.g., lights, locks, fans).
  - Voice assistants.
- **Object Detection and Recognition**

---

### 2.2.6 Debugging and Optimization

#### 2.2.6.1 Hardware Debugging

- **Interface Debugging**
  - Use a logic analyzer to check SPI/I2C data transmission.
- **Common Issue Troubleshooting**
  - Check power supply and pin level mismatches.

#### 2.2.6.2 Software Debugging

- **Debugging Tools**
  - Use STM32CubeMonitor to track system parameters.
  - Serial logs for issue analysis.

#### 2.2.6.3 Performance Optimization

- Optimize code efficiency (e.g., using interrupts and DMA).
- Implement efficient power management and peripheral control.

---

### 2.2.7 FAQ and Support

#### 2.2.7.1 Frequently Asked Questions

- **Hardware Issues**
  - Module does not power on, incorrect power interface connection.
- **Software Issues**
  - Firmware cannot be flashed, debugger cannot connect.

#### 2.2.7.2 Technical Support

- **Official Support**
  - ST official technical documents and resource repository.
- **Community Support**
  - ST forums and third-party open-source communities.

---

### 2.2.8 Documentation and Resource Downloads

#### 2.2.8.1 User Manuals

- NE200 module and development board user manuals.

#### 2.2.8.2 Technical Documents

- STM32 datasheets and reference manuals.
- Communication protocol and interface documentation.

#### 2.2.8.3 Example Code and Projects

- **Example Projects**
  - GPIO control (LED, buttons).
  - UART communication and data transfer.
- **Open-Source Projects**
  - GitHub links for user reference.

---

## 2.3 NE300
