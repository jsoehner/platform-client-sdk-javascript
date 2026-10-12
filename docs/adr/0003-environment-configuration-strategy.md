# ADR 0003: Environment Configuration Strategy

## Status
Accepted

## Context
Users of the SDK need a way to configure global settings such as the host URL, logging level, and authentication behavior.

## Decision
We will provide a `Configuration` class that can be initialized with default values and overridden by a configuration file (INI or JSON) or by manual setter methods.

## Consequences
- Users can easily customize the SDK's behavior.
- Configuration can be persisted in a file for consistency across runs.
- The `Configuration` class will handle environment-specific URLs based on the host provided.
