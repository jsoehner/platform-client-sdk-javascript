# ADR 0004: Governance Ring and RAD Scoring

## Status
Accepted

## Context
The project requires a robust framework for managing technical debt and security risks. We need a way to prioritize these issues based on their risk-adjusted magnitude rather than just their raw size.

## Decision
We will implement the "Governance Ring" model, which includes:
- **Core**: TRA (Technical Risk Assessment) & Tech Debt Management.
- **Shell**: NIRA (Network Infrastructure Risk Assessment) & Strategic Guardrails.
- **Sensors**: Continuous Assurance (CV&V, Posture Monitoring, Risk Analytics).

We will use the RAD (Risk-Adjusted Debt) formula to score and triage issues:
**RAD = (D * P * I * C) + (G + V)**

Variables:
- **D**: Magnitude (1-5)
- **P**: Probability (1-5)
- **I**: Impact (1-5)
- **C**: Controls (0.5-1.0)
- **G**: Compliance Gap (0-2)
- **V**: V&V Evidence Gap (0-2)

Triage Thresholds:
- **Critical**: 40+
- **Strategic**: 15-39
- **Minor**: <15

## Consequences
- Provides a consistent, risk-based approach to prioritizing technical debt and security issues.
- Enables better communication with stakeholders regarding why certain items are prioritized.
- Integrates security risk directly into the technical debt management process.
