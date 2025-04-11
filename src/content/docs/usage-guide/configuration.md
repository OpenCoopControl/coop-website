---
title: Configuration
description: Guide to configuring your OpenCoopControl system for optimal operation.
---

# Configuring OpenCoopControl

This guide covers all the configuration options available in OpenCoopControl and how to adjust them to meet your specific needs.

## Initial Setup

When you first power on your OpenCoopControl device, it will create a WiFi access point named "OpenCoop-[ID]" where [ID] is a unique identifier for your device. To complete the initial setup:

1. Connect to this WiFi network from your phone, tablet, or computer
2. Open a web browser and navigate to http://192.168.4.1
3. Follow the on-screen setup wizard

During the setup, you'll be asked to provide:

- Your home WiFi network credentials
- A name for your coop (e.g., "Backyard Coop")
- Your time zone

Once setup is complete, the device will connect to your WiFi network, and you can access it using the device's IP address on your local network or via mDNS at `opencoopcontrol.local` if your device supports it.

## Main Configuration Settings

All configuration is done through the web interface. Navigate to the Settings section to access the following options:

### Door Control Settings

| Setting                | Description                                                                    | Default   |
| ---------------------- | ------------------------------------------------------------------------------ | --------- |
| Automatic Door Control | Enable/disable automated door operation                                        | Enabled   |
| Door Open Time         | Hour (0-23) when the door should open                                          | 6 (6 AM)  |
| Door Close Time        | Hour (0-23) when the door should close                                         | 21 (9 PM) |
| Light Threshold        | Light level (%) below which the door will close if light-based mode is enabled | 30%       |
| Use Light Sensor       | Use light level instead of time for door operation                             | Disabled  |

#### Door Behavior Notes

- When automatic door control is enabled, the door will open and close at the specified times
- If light sensor mode is enabled, the door will:
  - Open when light level exceeds the threshold AND the time is after Door Open Time
  - Close when light level falls below the threshold OR the time is after Door Close Time
- Manual controls always override automatic operation

### Feeder Settings

| Setting           | Description                                | Default   |
| ----------------- | ------------------------------------------ | --------- |
| Automatic Feeder  | Enable/disable automated feeding           | Enabled   |
| Morning Feed Time | Hour (0-23) for morning feeding            | 6 (6 AM)  |
| Evening Feed Time | Hour (0-23) for evening feeding            | 19 (7 PM) |
| Feed Duration     | How long to run the feeder motor (seconds) | 7 seconds |

### System Settings

| Setting          | Description                            | Default           |
| ---------------- | -------------------------------------- | ----------------- |
| Device Name      | Name of your coop control device       | "My Chicken Coop" |
| Language         | Interface language                     | English           |
| Temperature Unit | Celsius or Fahrenheit                  | Celsius           |
| Update Check     | Enable/disable automatic update checks | Enabled           |

## Advanced Configuration

### Alert Thresholds

| Setting                | Description                           | Default     |
| ---------------------- | ------------------------------------- | ----------- |
| Low Temperature Alert  | Temperature below which to send alert | 5°C (41°F)  |
| High Temperature Alert | Temperature above which to send alert | 35°C (95°F) |
| Low Water Alert        | Water level below which to send alert | 20%         |

### Manual Override Duration

| Setting          | Description                                                  | Default    |
| ---------------- | ------------------------------------------------------------ | ---------- |
| Override Timeout | Minutes after manual operation before returning to auto mode | 60 minutes |

## Network Configuration

If you need to change WiFi settings after initial setup:

1. Press and hold the manual door button for 10 seconds
2. The device will reset to setup mode and create the "OpenCoop-[ID]" access point
3. Follow the initial setup process again

Alternatively, you can directly edit network settings in the web interface under Settings > Network.

## Configuration Files

For advanced users, configuration is stored in JSON files on the device's SPIFFS filesystem:

- `/config.json` - Device configuration and network settings
- `/settings.json` - Operation settings (door times, feeder times, etc.)

**Note:** Direct editing of these files is not recommended and may cause the system to malfunction. Always use the web interface when possible.

## Configuration Backup and Restore

### Creating a Backup

1. Go to Settings > System > Backup
2. Click "Download Backup"
3. Save the .json file to your computer

### Restoring a Backup

1. Go to Settings > System > Restore
2. Click "Choose File" and select your backup .json file
3. Click "Upload and Restore"
4. The device will restart with the restored settings

## Factory Reset

If you need to completely reset your OpenCoopControl to factory settings:

1. Method 1: Press and hold the manual door button for 20 seconds
2. Method 2: Go to Settings > System > Factory Reset

After a factory reset, the device will return to setup mode, and all settings will be lost.

## Multi-Language Support

OpenCoopControl supports multiple languages. To change the interface language:

1. Go to Settings > System > Language
2. Select your preferred language from the dropdown
3. Click "Save Settings"

Currently supported languages:

- English
- Serbian

## Troubleshooting Configuration Issues

If you encounter problems with your configuration:

1. Check that values are within the acceptable ranges
2. Ensure your device is running the latest firmware
3. Try restarting the device after making changes
4. As a last resort, perform a factory reset and reconfigure

For more help with troubleshooting, see the [Troubleshooting Guide](/usage-guide/troubleshooting).
