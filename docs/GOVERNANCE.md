# Governance Policy

## Governance Ring Model
The project follows the Governance Ring model for managing technical debt and security risks.

### Core
- **TRA (Technical Risk Assessment)**: Assessing the technical risks of the current architecture and identifying areas for improvement.
- **Tech Debt Management**: Systematically identifying, prioritizing, and resolving technical debt.

### Shell
- **NIRA (Network Infrastructure Risk Assessment)**: Assessing the risks associated with network infrastructure and security.
- **Strategic Guardrails**: Establishing high-level policies and guidelines for project development and operation.

### Sensors
- **Continuous Assurance (CV&V)**: Continuous verification and validation of security and performance requirements.
- **Posture Monitoring**: Real-time monitoring of the project's security and operational posture.
- **Risk Analytics**: Using data-driven insights to identify and mitigate risks.

## Risk-Adjusted Debt (RAD) Scoring
We use the RAD formula to prioritize issues based on their risk-adjusted magnitude:

**RAD = (D * P * I * C) + (G + V)**

Where:
- **D**: Magnitude (1-5)
- **P**: Probability (1-5)
- **I**: Impact (1-5)
- **C**: Controls (0.5-1.0)
- **G**: Compliance Gap (0-2)
- **V**: V&V Evidence Gap (0-2)

### Triage Thresholds
- **Critical**: 40+
- **Strategic**: 15-39
- **Minor**: <15

For more details, see the ADRs in the `docs/adr/` directory.
