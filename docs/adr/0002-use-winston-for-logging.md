# ADR 0002: Use winston for logging

## Status
Accepted

## Context
The SDK needs a flexible and configurable logging system that can output to multiple destinations (console, file, etc.) and support different log levels.

## Decision
We will use `winston` as the primary logging library.

## Consequences
- `winston` supports multiple transports (console, file).
- It allows for easy configuration of log levels and formats.
- It is a standard logging library in the Node.js ecosystem.
