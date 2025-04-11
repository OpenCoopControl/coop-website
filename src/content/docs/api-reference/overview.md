---
title: API Overview
description: Overview of the OpenCoopControl API architecture and usage patterns.
---

The OpenCoopControl system provides a RESTful API that allows you to monitor and control your chicken coop remotely. This overview explains the basics of how the API works, authentication, and general principles to follow when integrating with it.

## API Architecture

OpenCoopControl's API follows REST principles:

- Uses standard HTTP methods (`GET`, `POST`)
- Returns JSON-formatted responses
- Uses predictable, resource-oriented URLs
- Is stateless (no client session data stored on the server)

The API is served directly from the ESP32 controller, making it available on your local network without requiring internet connectivity or cloud services.

## Base URL

All API requests are made to endpoints on your ESP32 device. The base URL will be the IP address of your OpenCoopControl device on your network.

Example: `http://192.168.1.100/api/`

If you've enabled mDNS during setup, you can also use: `http://opencoopcontrol.local/api/`

## Authentication

The current version of OpenCoopControl assumes operation on a secure local network and doesn't implement authentication. This keeps the API simple and accessible for local automation projects and integrations.

> **Note:** If your OpenCoopControl device is exposed to the internet, we strongly recommend placing it behind a secure proxy or VPN for security.

## API Versioning

The current API is considered v1 and is unversioned in the URL path. Future major changes to the API may include version numbers in the endpoints.

## Request Format

For `GET` requests, parameters should be included as query parameters in the URL.

For `POST` requests that include data, use JSON format with the appropriate `Content-Type: application/json` header.

## Response Format

All API responses are in JSON format. Successful responses typically include the requested data or a confirmation message.

Error responses include a text message explaining what went wrong.

## Error Handling

The API uses standard HTTP status codes to indicate success or failure:

- `200 OK` - The request was successful
- `400 Bad Request` - The request was malformed or contained invalid parameters
- `404 Not Found` - The requested resource or endpoint doesn't exist
- `500 Internal Server Error` - An unexpected error occurred on the server

Error responses are returned as plain text with a description of the problem.

## Rate Limiting

The ESP32 hardware has limited processing power. While there are no explicit rate limits implemented, excessive requests in short periods may affect performance or cause the device to become unresponsive.

For automation scenarios, we recommend keeping request frequency to no more than one per second.

## API Categories

The OpenCoopControl API endpoints fall into several categories:

1. **Status Endpoints** - For getting current sensor readings and system state
2. **Control Endpoints** - For triggering actions like door opening/closing and feeding
3. **Settings Endpoints** - For configuring automation rules and system behavior
4. **System Endpoints** - For device information and technical details

## Common Use Cases

### Monitoring

The state endpoint (`/api/state`) provides comprehensive status information in a single request, making it ideal for dashboard applications or monitoring systems.

### Integration with Home Automation

OpenCoopControl works well with home automation systems like Home Assistant, Node-RED, or custom scripts. You can create automations that:

- Send notifications when temperature falls below a threshold
- Log data to external databases
- Create backup automation rules based on time or weather conditions

### Mobile Applications

The API is designed to be easily consumed by mobile applications. The endpoints return lightweight JSON that's easy to parse and display in a mobile interface.

## Next Steps

For detailed information about specific endpoints and their parameters, please see the [API Endpoints Reference](./endpoints).

For code examples in various programming languages, refer to our [API Examples](https://github.com/OpenCoopControl/api-examples) repository.
