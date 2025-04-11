---
title: Web Interface
description: Guide to using the OpenCoopControl web interface for monitoring and control.
---

# OpenCoopControl Web Interface

The OpenCoopControl system features a responsive web interface that allows you to monitor and control your chicken coop from any device with a web browser. This guide explains all the features and functions of the web interface.

## Accessing the Web Interface

After completing the initial setup, you can access the web interface by:

1. Opening a web browser on any device connected to the same network as your OpenCoopControl device
2. Entering the IP address of your device in the address bar
3. Alternatively, if your network supports mDNS, you can use: `http://opencoopcontrol.local`

## Dashboard Overview

The main dashboard is divided into several sections:

<!-- ![OpenCoopControl Dashboard](/images/dashboard-overview.png) -->

### Status Panel

At the top of the dashboard, you'll find the status panel showing real-time information:

- **Temperature**: Current temperature inside the coop
- **Light Level**: Current light level as a percentage
- **Water Level**: Current water level as a percentage
- **Door Status**: Whether the door is currently open or closed, with timestamp of last change
- **Feeder Status**: Whether the feeder is currently active, with timestamp of last feeding

### Manual Controls

Below the status panel, you'll find manual control buttons:

- **Open Door**: Manually open the coop door
- **Close Door**: Manually close the coop door
- **Activate Feeder**: Manually activate the feeder

Manual controls override any automatic settings. After using manual controls, the system will return to automatic mode after the configured override timeout period.

### Settings Panel

The settings panel allows you to configure the automation settings:

#### Door Control Settings

- **Automatic Door Control**: Toggle switch to enable/disable automated door operation
- **Door Open Time**: Time when the door should automatically open (hour selection, 24-hour format)
- **Door Close Time**: Time when the door should automatically close (hour selection, 24-hour format)
- **Light Threshold**: Light level percentage below which the door will close (if light-based mode is enabled)

#### Feeder Settings

- **Automatic Feeder**: Toggle switch to enable/disable automated feeding
- **Morning Feed Time**: Time for morning feeding (hour selection, 24-hour format)
- **Evening Feed Time**: Time for evening feeding (hour selection, 24-hour format)
- **Feed Duration**: How long to run the feeder motor (in seconds)

After making changes to settings, click the "Save Settings" button at the bottom of the panel to apply them.

## Navigation Menu

The navigation menu provides access to additional features:

### History

The History page displays graphs of sensor readings over time:

- Temperature trends
- Light level patterns
- Door and feeder activity logs

You can select different time periods (24 hours, 7 days, 30 days) to view historical data.

### System

The System page provides:

- **Device Information**: Firmware version, device ID, uptime
- **Network Settings**: WiFi configuration, IP address, signal strength
- **Storage Information**: Free and used space
- **Update**: Firmware update option
- **Backup/Restore**: Configuration backup and restore functionality
- **Factory Reset**: Option to reset all settings to defaults

### Help

The Help page provides:

- Quick reference guide
- Troubleshooting tips
- Link to online documentation
- Contact information for support

## Mobile Responsiveness

The OpenCoopControl web interface is fully responsive and works on:

- Desktop computers
- Tablets
- Smartphones

The layout automatically adjusts to provide the best experience on any screen size.

## Language Selection

You can change the interface language by clicking the language selector in the top right corner of the screen. Currently supported languages:

- English
- Serbian

## Theme Options

The interface supports both light and dark themes. Toggle between themes using the theme switch in the top right corner.

## Live Updates

The dashboard automatically updates every 5 seconds to show current sensor readings and status information. No manual refreshing is required.

## Browser Compatibility

The web interface is compatible with all modern browsers, including:

- Chrome (recommended)
- Firefox
- Safari
- Edge

For the best experience, we recommend using the latest version of Chrome or Firefox.

## Security Considerations

The web interface is accessible to anyone on your local network without authentication. For security:

1. Ensure your WiFi network is secured with a strong password
2. Do not expose the device directly to the internet
3. Consider setting up a VPN if you need remote access from outside your network

## Using the Web Interface Offline

The web interface is designed to work locally even without an internet connection. All functionality remains available when your internet is down.

## Additional Features

### Widget View

Click the "Widget Mode" button to switch to a compact widget view that's perfect for keeping open in a small window on your desktop or embedding in home automation dashboards.

### Export Data

Use the Export button on the History page to download sensor data as CSV files for further analysis in spreadsheet software.

### Firmware Updates

When new firmware is available, a notification will appear in the web interface. You can update directly through the System page.

## Keyboard Shortcuts

The web interface supports several keyboard shortcuts:

- `O` - Open door
- `C` - Close door
- `F` - Activate feeder
- `R` - Refresh status
- `S` - Save settings (when in settings panel)
- `Esc` - Close any open modal dialog

## Next Steps

After familiarizing yourself with the web interface, you may want to:

- [Configure your automation settings](/usage-guide/configuration)
- [Set up integrations with other systems](/advanced/integrations)
- [Customize the hardware for your specific needs](/advanced/customization)
