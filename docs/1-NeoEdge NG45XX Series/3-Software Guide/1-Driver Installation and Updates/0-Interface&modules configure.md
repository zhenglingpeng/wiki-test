# Interface

本文档主要介绍GPIO/I2C/SPI/CAN/USB/UART等接口的驱动控制方法。 

## GPIO

GPIO资源信息：[Jetson Orin NX Series and Jetson Orin Nano Series Pinmux](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

- 通过 gpioinfo 指令找到对应的line

![](/img/NG45XX_SOFTWARE/Driver/NG45XX_GPIO.png)

- 通过gpioset控制GPIO

```shell
# To set GPIO12 to HIGH
sudo gpioset --mode=wait gpiochip0 144=1
# To set GPIO12 to LOW
sudo gpioset --mode=wait gpiochip0 144=0 
```

## UART

| Usage on Orin nano/NX | UART Instance | Base Address | Ball Name | Bus Name | DTS status | DTS alias |
| --------------------- | ------------- | ------------ | --------- | -------- | ---------- | --------- |
| Debug                 | UARTC         | 0x0c280000   | UART2     | ttyTCU0  | OK         | serial0   |
| RS485                 | UARTA         | 0x03100000   | UART1     | ttyTHS1  | OK         | serial1   |
| RS232                 | UARTB         | 0x03110000   | UART0     | ttyTHS3  | OK         | serial3   |

- Debug
  
  - 硬件连接，连接Debug线到PC
  
  - 打开串口工具，配置波特率：115200，数据位：8，停止位：1，奇偶校验：无，流控制：无

- RS232
  
  - 硬件连接，如下图
    
    - 使用接头1，连接PC
    - 使用接头2，连接Jetson的RS232的`TX\RX`
  
  ![](/img/NG45XX_SOFTWARE/Driver/NG45XX_RS232.png)

- RS485
  
  - 安装依赖库
  
  ```shell
  sudo apt-get update
  sudo apt-get install gpiod libgpiod-dev
  ```
  
  - 编译
  
  ```shell
  gcc -o rs485_test rs485_test.c -lgpiod
  ```
  
  - 运行
  
  ```shell
  sudo ./rs485_test [TTY_DIR] [DE_CHIP] [DE_LINE]
  # 运行
  sudo ./rs485_test /dev/ttyTHS1 /dev/gpiochip0 112
  ```
  
  - 测试
    启动程序，在终端输入`send`切换到发送模式，然后输入要发送的数据，并按回车键，程序会将数据发送到串口；输入`recv` 切换到接收模式，程序会切换到接收模式，并接收打印提示信息；输入`quit` 并按回车键。
  - 代码

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <errno.h>
#include <unistd.h>
#include <fcntl.h>
#include <termios.h>
#include <gpiod.h>
#include <linux/serial.h>

#define BUFFER_SIZE 256
#define RS485_CONSUMER "RS485_program"

struct gpiod_chip *chip;
struct gpiod_line *rts_line;

void setup_gpio(char *gpio_chip, int gpio_line)
{
    int ret;

    chip = gpiod_chip_open(gpio_chip);
    if (!chip) {
        fprintf(stderr, "gpiod_chip_open");
        exit(EXIT_FAILURE);
    }

    rts_line = gpiod_chip_get_line(chip, gpio_line);
    if (!rts_line) {
        fprintf(stderr, "Failed to get GPIO line %d\n", gpio_line);
        gpiod_chip_close(chip);
        exit(EXIT_FAILURE);
    }

    ret = gpiod_line_request_output(rts_line, RS485_CONSUMER, 0);
    if (ret < 0) {
        fprintf(stderr, "Failed to request GPIO line as output: %s\n", strerror(-ret));
        gpiod_chip_close(chip);
        exit(EXIT_FAILURE);
    }
}

void set_rts_high() {
    gpiod_line_set_value(rts_line, 1);
    int value = gpiod_line_get_value(rts_line);
    printf("RTS set to HIGH, actual value: %d\n", value);
}

void set_rts_low() {
    gpiod_line_set_value(rts_line, 0);
    int value = gpiod_line_get_value(rts_line);
    printf("RTS set to LOW, actual value: %d\n", value);
}

int main(int argc, char* argv[]) {
    int tty_fd;
    char *tty_name;
    struct termios tty;
    char buffer[BUFFER_SIZE];
    ssize_t n;
    int ready;
    fd_set readfds;
    int rts_line_num;
    char *gpio_chip;
    int mode = 0;

    if (argc < 4) {
        printf("Usage: %s /dev/ttyTHS1 GPIO_CHIP(/dev/gpiochip*) RTS_LINE\n", argv[0]);
        return 1;
    }

    tty_name = argv[1];
    gpio_chip = argv[2];
    rts_line_num = atoi(argv[3]);

    setup_gpio(gpio_chip, rts_line_num);

    tty_fd = open(tty_name, O_RDWR | O_NOCTTY | O_NDELAY);
    if (tty_fd < 0) {
        perror("Unable to open serial port");
        return 1;
    }

    tcgetattr(tty_fd, &tty);
    cfmakeraw(&tty);
    cfsetispeed(&tty, B9600);
    cfsetospeed(&tty, B9600);
    tcsetattr(tty_fd, TCSANOW, &tty);

    printf("Serial port %s opened successfully, fd: %d\n", tty_name, tty_fd);

    while (1) {
        FD_ZERO(&readfds);
        FD_SET(tty_fd, &readfds);
        FD_SET(STDIN_FILENO, &readfds);

        ready = select(tty_fd + 1, &readfds, NULL, NULL, NULL);
        if (ready == -1) {
            perror("select");
            break;
        }

        if (FD_ISSET(tty_fd, &readfds)) {
            set_rts_low();
            n = read(tty_fd, buffer, BUFFER_SIZE - 1);
            if (n > 0) {
                buffer[n] = '\0';
                printf("Received: %s\n", buffer);
            }
        }

        if (FD_ISSET(STDIN_FILENO, &readfds)) {
            if (fgets(buffer, BUFFER_SIZE, stdin) != NULL) {
                buffer[strcspn(buffer, "\n")] = '\0';

                if (strcmp(buffer, "send") == 0) {
                    mode = 1;
                    printf("Switched to SEND mode\n");
                    continue;
                } else if (strcmp(buffer, "recv") == 0) {
                    mode = 0;
                    printf("Switched to RECEIVE mode\n");
                    continue;
                } else if (strcmp(buffer, "quit") == 0) {
                    break;
                }

                if (mode == 1) {
                    set_rts_high();
                    usleep(10000);
                    write(tty_fd, buffer, strlen(buffer));
                    tcdrain(tty_fd);
                    set_rts_low();
                } else {
                    printf("Invalid command in RECEIVE mode\n");
                }
            }
        }
    }

    close(tty_fd);
    gpiod_line_release(rts_line);
    gpiod_chip_close(chip);

    return 0;
}
```

## SPI

- 硬件连接，短接`MOSI`和`MISO`

- 测试方法，参考如下：

```shell
# 获取spi源码
git clone https://github.com/rm-hull/spidev-test
cd spidev-test/
gcc spidev_test.c -o spidev_test

# 测试
./spidev_test -v -D /dev/spidev0.0 -p "Test"
```

## CAN

- 硬件连接，两台设备互联D+和D- 

- 安装`can-utils`工具

```shell
sudo apt update
sudo apt-get install can-utils
```

- 测试方法，参考如下：

```shell
# 查询 can0 的状态和配置信息
ip link show can0

# 配置的 can 接口，波特率设置为 100kbps
sudo ip link set can0 up type can bitrate 100000

# 一台设备监听
candump can0

# 另一台设备，通过 can0 接口发送一条信息
cansend can0 123#11.22.33.44
```

## RTC

- 修改RTC时间

```shell
sudo hwclock --set --date="2000-01-01 12:00:00"
```

- 查询RTC时间

```shell
sudo hwclock -r
```

- 同步时间

```shell
# 系统时间 → RTC
sudo hwclock --systohc

# RTC → 系统时间
sudo hwclock --hctosys
```

- 查询系统时间

```shell
date
```

- 网络时钟同步

```shell
# 如无法设置RTC，需要确认是否打开了NTP服务
# 禁用NTP服务
sudo systemctl stop systemd-timesyncd.service
sudo timedatectl set-ntp false
```

## Camera

- 启动和配置摄像头模块的方法，以`imx219`为例

```shell
# 列出当前支持的硬件模块
sudo python /opt/nvidia/jetson-io/config-by-hardware.py -l
#输出如下：
Header 1 [default]: Jetson 40pin Header
  Available hardware modules:
  1. Adafruit SPH0645LM4H
  2. Adafruit UDA1334A
  3. FE-PI Audio V1 and Z V2
  4. ReSpeaker 4 Mic Array
  5. ReSpeaker 4 Mic Linear Array
Header 2: Jetson 24pin CSI Connector
  Available hardware modules:
  1. Camera IMX219 Dual
  2. Camera IMX219 Dual CamThink
  3. Camera IMX219-A
  4. Camera IMX219-A and IMX477-C
  5. Camera IMX219-C
  6. Camera IMX477 Dual
  7. Camera IMX477 Dual 4 lane
  8. Camera IMX477-A
  9. Camera IMX477-A and IMX219-C
  10. Camera IMX477-C
Header 3: Jetson M.2 Key E Slot
  No hardware configurations found!

# 选择并配置 IMX219 Dual CamThink 摄像头模块。 
# -n 选择Header编号，Camera IMX219 Dual CamThink 是dtbo的overlay-name
sudo python /opt/nvidia/jetson-io/config-by-hardware.py -n 2='Camera IMX219 Dual CamThink'
```

- 重启系统使配置生效
