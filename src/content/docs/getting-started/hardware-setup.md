---
title: Hardware Setup
description: Complete guide to setting up the hardware components for your OpenCoopControl system.
---

# Hardware Setup for OpenCoopControl

This guide covers the hardware components needed for your OpenCoopControl system and how to properly connect everything together.

## Required Components

To build a complete OpenCoopControl system, you'll need the following components:

### Core Components

- ESP32 Development Board (ESP32-WROOM-32 recommended)
- Micro USB cable for programming and power
- 5V power supply (2A or higher recommended)
- Breadboard or PCB for prototyping/final assembly
- Jumper wires

### Actuators

- Servo motor for door control (MG996R or similar, high-torque)
- DC motor with gearbox for feeder (12V, with L298N driver)
- Optional: Relay module for controlling additional devices

### Sensors

- DHT22 or DS18B20 temperature sensor
- Photoresistor (LDR) for light level sensing
- Water level sensor (float switch or capacitive)
- Optional: Rain sensor

### User Interface

- Push buttons for manual controls
- Status LEDs

### Mechanical Components

- Mounting hardware (screws, standoffs, enclosure)
- Door mechanism (hinges, tracks, depending on coop design)
- Feeder mechanism (tube, hopper, auger)

## Wiring Diagram

Connect your components according to the following pin assignments:

| Component          | ESP32 Pin | Description                 |
| ------------------ | --------- | --------------------------- |
| Temperature Sensor | GPIO 32   | Analog input                |
| Light Sensor       | GPIO 33   | Analog input                |
| Door Servo         | GPIO 13   | PWM output                  |
| Feeder Motor       | GPIO 12   | Digital output (via driver) |
| Water Level Sensor | GPIO 34   | Analog input                |
| Manual Door Button | GPIO 14   | Digital input (pull-up)     |
| Status LED         | GPIO 2    | Digital output (built-in)   |

## Detailed Connection Instructions

### ESP32 Setup

1. Mount your ESP32 on the breadboard or PCB
2. Connect the 5V power supply to the 5V and GND pins
3. Make sure you can access the USB port for programming

### Door Control

1. Connect the servo motor:

   - Red wire to 5V
   - Black/Brown wire to GND
   - Yellow/Orange/White wire to GPIO 13

2. Mount the servo to your coop door mechanism. The servo should be positioned to:

   - Provide enough torque to open/close the door
   - Move through the correct range of motion (typically 90 degrees)
   - Be protected from the elements

3. Connect the manual override button:
   - One terminal to GPIO 14
   - Other terminal to GND
   - Enable internal pull-up in the code

### Feeder System

1. Connect the DC motor driver (L298N):

   - Driver VCC to 5V
   - Driver GND to GND
   - Driver IN1 to GPIO 12
   - Driver IN2 to GND (or to another GPIO for bidirectional control)
   - Motor power supply to driver motor power input

2. Mount the motor to your feeder mechanism, which might be:
   - An auger system for dispensing feed
   - A rotating disk with an opening
   - A trap door mechanism

### Sensors

1. Temperature sensor (DHT22 example):

   - VCC to 3.3V
   - GND to GND
   - Data to GPIO 32
   - 10K resistor between VCC and Data

2. Light sensor (photoresistor):

   - Connect one leg to 3.3V
   - Connect other leg to GPIO 33 and to GND through a 10K resistor (voltage divider)

3. Water level sensor:
   - Power pin to 3.3V
   - GND to GND
   - Signal to GPIO 34

## Enclosure and Weather Protection

Since this system will likely be installed in an outdoor environment, it's important to:

1. House the electronics in a waterproof enclosure (IP65 or better)
2. Use waterproof connectors for any external connections
3. Include ventilation to prevent condensation, but make sure it's positioned to avoid water ingress
4. Mount the enclosure where it won't be directly exposed to rain or excessive heat

## Power Considerations

1. **Main Power**: The system can be powered via:

   - USB power bank for temporary installations
   - 5V power adapter for permanent installations
   - Solar panel with charge controller and battery for off-grid setups

2. **Backup Power**: Consider adding a battery backup system to ensure operation during power outages.

3. **Power Saving**: The ESP32 can be configured for deep sleep to extend battery life in battery-powered installations.

## Testing the Hardware

Before mounting the system on your chicken coop:

1. Test each component individually to ensure proper wiring and function
2. Test the system as a whole using the test mode in the firmware
3. Verify that manual controls work as expected
4. Check that sensors provide reasonable readings
5. Ensure actuators (door servo, feeder motor) move freely and have sufficient power

## Next Steps

Once your hardware is properly set up, proceed to:

1. [Install the firmware](../installation) on your ESP32
2. Configure your system via the web interface
3. Test all automated functions in a controlled environment before deploying

For troubleshooting hardware issues, refer to our [Troubleshooting Guide](/usage-guide/troubleshooting).

## Custom Modifications

The OpenCoopControl system is designed to be modular and adaptable. You can:

- Add additional sensors (humidity, ammonia, motion sensors)
- Extend with additional outputs (lights, heat lamps, ventilation fans)
- Modify the door or feeder mechanism to suit your specific coop design

Just make sure to update the pin configurations in the firmware to match your hardware modifications.
