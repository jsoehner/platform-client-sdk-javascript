# ADR 0001: Use axios for HTTP requests

## Status
Accepted

## Context
The SDK needs a robust and well-maintained HTTP client to handle requests to the Genesys Cloud Platform API.

## Decision
We will use `axios` as the primary HTTP client for the SDK.

## Consequences
- `axios` provides a consistent API for making requests.
- It handles JSON parsing automatically.
- It has good support for request/response interceptors.
- It is widely used and well-maintained.
