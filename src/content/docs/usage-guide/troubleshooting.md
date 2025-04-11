---
title: Troubleshooting
description: Solutions for common issues with OpenCoopControl hardware and software.
---

# Troubleshooting OpenCoopControl

This guide helps you identify and resolve common issues you might encounter with your OpenCoopControl system.

## Common Issues

### Connectivity Problems

| Issue                             | Possible Causes                    | Solutions                                                                 |
| --------------------------------- | ---------------------------------- | ------------------------------------------------------------------------- |
| Cannot connect to setup WiFi      | Device not powered properly        | Check power supply and connections                                        |
|                                   | Too far from device                | Move closer to the device during setup                                    |
|                                   | Setup mode timed out               | Press and hold the door button for 10 seconds to restart setup mode       |
| Device won't connect to home WiFi | Incorrect WiFi credentials         | Verify WiFi password and try setup again                                  |
|                                   | WiFi signal too weak               | Move device closer to router or add a WiFi extender                       |
|                                   | Incompatible WiFi (5GHz vs 2.4GHz) | Ensure you're connecting to a 2.4GHz network (ESP32 doesn't support 5GHz) |
| Cannot access web interface       | Wrong IP address                   | Check your router's connected devices list for the correct IP             |
|                                   | Device offline                     | Restart the device and check network connections                          |
|                                   | Browser cache issue                | Clear browser cache or try a different browser                            |

### Door Control Issues

| Issue                           | Possible Causes                      | Solutions                                                         |
| ------------------------------- | ------------------------------------ | ----------------------------------------------------------------- |
| Door won't open/close           | Servo not powered                    | Check power connections to the servo                              |
|                                 | Mechanical obstruction               | Inspect door track for obstructions                               |
|                                 | Servo not properly connected         | Verify wiring on GPIO 13                                          |
|                                 | Servo stall due to excessive load    | Ensure door is properly balanced and not too heavy for the servo  |
| Door opens/closes at wrong time | Incorrect time setting               | Check and adjust time zone and door open/close times              |
|                                 | System clock drifted                 | Restart device to sync time                                       |
|                                 | Light sensor mode active but covered | Clean light sensor or adjust positioning                          |
| Door stuck half-open            | Voltage drop during operation        | Ensure power supply can handle peak current demands               |
|                                 | Mechanical binding                   | Check if door moves freely when disconnected from servo           |
|                                 | Servo damaged                        | Replace servo if it makes unusual noises or doesn't hold position |

### Feeder Issues

| Issue                      | Possible Causes                 | Solutions                                               |
| -------------------------- | ------------------------------- | ------------------------------------------------------- |
| Feeder doesn't activate    | Motor not powered               | Check connections to GPIO 12 and motor driver           |
|                            | Motor driver fault              | Verify driver LED indicators and wiring                 |
|                            | Feed hopper empty or jammed     | Check feed levels and clear any blockages               |
| Feeder runs too long/short | Incorrect duration setting      | Adjust feed duration in settings                        |
|                            | Feed mechanism binding          | Check for mechanical issues in the feed delivery system |
| Feeder activates randomly  | Triggered by noise on input pin | Add a capacitor across the control pin to reduce noise  |
|                            | Software issue                  | Update to latest firmware version                       |

### Sensor Issues

| Issue                     | Possible Causes             | Solutions                                  |
| ------------------------- | --------------------------- | ------------------------------------------ |
| Inaccurate temperature    | Sensor placed in direct sun | Relocate sensor to shaded area             |
|                           | Poor sensor connection      | Check wiring to GPIO 32                    |
|                           | Need calibration            | Apply offset correction in settings        |
| Light sensor not working  | Covered or dirty sensor     | Clean and ensure proper placement          |
|                           | Incorrect wiring            | Verify connections to GPIO 33              |
|                           | Component failure           | Test with multimeter and replace if needed |
| Water level sensor issues | Sensor fouled               | Clean probe contacts                       |
|                           | Incorrect calibration       | Recalibrate using known water levels       |

## System Status LED Indicators

The built-in LED on the ESP32 provides status information:

| LED Pattern              | Meaning              |
| ------------------------ | -------------------- |
| Solid ON                 | Device in setup mode |
| Single blink at startup  | Normal operation     |
| Rapid blinking           | Connecting to WiFi   |
| Three blinks repeating   | Error state          |
| Short-long-short pattern | Update in progress   |

## Software Issues

### Web Interface Not Loading

1. Check that you're using the correct IP address
2. Try accessing the device using mDNS: http://opencoopcontrol.local
3. Clear your browser cache or try a different browser
4. Restart the device by cycling power

### Settings Not Saving

1. Check for full storage with System > Storage Info
2. Try a restart after saving
3. As a last resort, reset to factory defaults and reconfigure

### Firmware Update Issues

| Issue                            | Solutions                                                     |
| -------------------------------- | ------------------------------------------------------------- |
| Update fails to start            | Check internet connectivity                                   |
|                                  | Ensure device has at least 30% free storage                   |
| Update starts but fails          | Try manual update using the firmware.bin file                 |
|                                  | Perform full flash with latest release                        |
| Device unresponsive after update | Wait 5 minutes for first boot to complete                     |
|                                  | If still unresponsive, perform full flash with recovery image |

## Hardware Troubleshooting

### Power Issues

1. **Insufficient power supply**: Ensure your power supply can provide at least 2A at 5V
2. **Voltage drops during operation**: Add a large capacitor (1000μF) near the ESP32 power pins
3. **Intermittent resets**: Check for loose connections and adequate power supply

### Motor and Servo Troubleshooting

1. **Testing servos**: Use the manual test function in Settings > System > Hardware Test
2. **Motor doesn't run**: Check for 5V at the motor driver VCC pin
3. **Servo jitters**: Ensure separate power supply for servos or add large capacitor

### Connectivity Hardware Issues

1. **Poor WiFi reception**: Add an external antenna or WiFi extender
2. **Interference**: Move away from metal objects and other electronic devices

## Recovering from Major Failures

### Complete Reflashing Procedure

If your device becomes completely unresponsive, you can restore it using the full flashing procedure:

1. Download the latest release files from [GitHub](https://github.com/OpenCoopControl/coop-controller/releases)
2. Follow the [Installation Guide](../installation) for a complete reinstallation

### Recovery Mode

To enter recovery mode:

1. Disconnect power
2. Hold the BOOT button on the ESP32
3. Reconnect power while holding BOOT
4. Release BOOT after 5 seconds
5. Device should appear as a serial port for flashing

## Getting Additional Help

If you're still experiencing issues after trying these troubleshooting steps:

1. Check our [GitHub Issues](https://github.com/OpenCoopControl/coop-controller/issues) for similar problems
2. Join our [community forum](https://opencoopcontrol.org/forum) for assistance
3. Open a new issue with detailed information about your problem:
   - Firmware version
   - Hardware configuration
   - Exact steps to reproduce the issue
   - Any error messages displayed
   - Photos/videos of the issue if relevant

## Preventative Maintenance

To avoid issues, perform these maintenance tasks regularly:

1. Check and clean sensors monthly
2. Inspect door mechanism for smooth operation
3. Test manual override controls
4. Check feed delivery system for blockages
5. Update firmware when new versions are released
6. Back up your configuration after significant changes
