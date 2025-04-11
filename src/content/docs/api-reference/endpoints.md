---
title: API Endpoints
description: Complete reference for all OpenCoopControl API endpoints.
---

This document provides a complete reference for all the API endpoints available in OpenCoopControl. The endpoints allow you to control and monitor your chicken coop programmatically, integrating with other smart farm systems or custom applications.

## Base URL

All API requests should be sent to the IP address of your ESP32 controller. If you're using mDNS, you can also use `http://opencoopcontrol.local`.

Example: `http://192.168.1.100/api/`

## Authentication

Currently, OpenCoopControl offers a simple API with no authentication required for local network access. Future versions may include API keys for enhanced security.

## Response Format

All responses are returned in JSON format.

## Available Endpoints

### Get Current State

Retrieves all current sensor readings and status information.

- **URL**: `/api/state`
- **Method**: `GET`
- **Response Example**:

```json
{
  "temperature": 24.5,
  "lightLevel": 65,
  "waterLevel": 80,
  "doorOpen": true,
  "feederActive": false,
  "lastFeedTime": "14:30:22",
  "doorLastChanged": "06:15:03",
  "deviceId": "OCC1A2B3C4D",
  "coopName": "Backyard Coop"
}
```

### Get Current Settings

Retrieves all current automation settings.

- **URL**: `/api/settings`
- **Method**: `GET`
- **Response Example**:

```json
{
  "doorAutoMode": true,
  "doorOpenHour": 6,
  "doorCloseHour": 21,
  "lightThreshold": 30,
  "feederAutoMode": true,
  "feedHour1": 6,
  "feedHour2": 19,
  "feedAmount": 7
}
```

### Update Settings

Updates automation settings.

- **URL**: `/api/settings`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Request Body Example**:

```json
{
  "doorAutoMode": true,
  "doorOpenHour": 7,
  "doorCloseHour": 20,
  "lightThreshold": 25,
  "feederAutoMode": true,
  "feedHour1": 7,
  "feedHour2": 18,
  "feedAmount": 5
}
```

- **Response**: `"Settings updated"` on success, error message otherwise

### Door Control

Open or close the coop door.

#### Open Door

- **URL**: `/api/door/open`
- **Method**: `POST`
- **Response**: `"Door opened"` on success

#### Close Door

- **URL**: `/api/door/close`
- **Method**: `POST`
- **Response**: `"Door closed"` on success

### Feeder Control

Activate the automatic feeder.

- **URL**: `/api/feeder/activate`
- **Method**: `POST`
- **Query Parameters** (optional):
  - `duration` - Feed duration in seconds (overrides default setting)
- **Examples**:
  - Activate with default duration: `/api/feeder/activate`
  - Activate for 10 seconds: `/api/feeder/activate?duration=10`
- **Response**: `"Feeder activated"` on success

### Version Information

Get firmware version information.

- **URL**: `/api/version`
- **Method**: `GET`
- **Response Example**:

```json
{
  "version": "0.1.10",
  "name": "OpenCoopControl",
  "buildTimestamp": "2025-04-09 14:30:00",
  "author": "OpenCoopControl Team"
}
```

## Error Handling

In case of an error, the API will return an appropriate HTTP status code along with a plain text error message.

Common error statuses:

- `400 Bad Request` - Invalid parameters or JSON
- `404 Not Found` - Endpoint does not exist
- `500 Internal Server Error` - Unexpected error on the server

## Example Usage

Using cURL to get the current state:

```bash
curl http://192.168.1.100/api/state
```

Using cURL to open the door:

```bash
curl -X POST http://192.168.1.100/api/door/open
```

Using cURL to update settings:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"doorAutoMode":true,"doorOpenHour":7,"doorCloseHour":20}' http://192.168.1.100/api/settings
```

## Future Endpoints

Future versions of OpenCoopControl may include additional endpoints for features such as:

- Historical data access
- Multiple feeding schedules
- Camera integration
- Advanced automation rules
