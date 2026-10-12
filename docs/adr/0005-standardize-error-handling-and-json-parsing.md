# ADR 0005: Standardize Error Handling and JSON Parsing

## Status
Accepted

## Context
To improve the reliability and debuggability of the SDK, we need a consistent approach to error handling and data parsing. Currently, some parts of the SDK might return error strings instead of proper `Error` objects, which loses stack trace information. Additionally, direct calls to `JSON.parse` on data from `localStorage` can lead to application crashes if the data is malformed.

## Decision
We will implement the following standards:
1. **Standardized Error Handling**: All API service files must throw `Error` objects instead of strings. This ensures that stack traces are preserved and can be properly caught and handled by the consuming application.
2. **Robust JSON Parsing**: Implement `try-catch` blocks around `JSON.parse` calls when retrieving data from `localStorage`, specifically within `ApiClient.js`.
3. **Strict Equality Checks**: Use strict equality (`===`) instead of loose equality (`==`) for all critical logic checks to prevent unexpected type coercion.

## Consequences
- Improved debuggability by preserving stack traces.
- Increased SDK stability by preventing crashes from malformed `localStorage` data.
- Reduction in subtle bugs caused by loose equality.
- Requires a refactoring of existing service files to ensure compliance.
