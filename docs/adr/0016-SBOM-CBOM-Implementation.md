---
name: SBOM & CBOM Implementation
status: accepted
date: 2026-10-11
deciders: jsoehner
tags: security, compliance, supply-chain
---

## Context
To ensure security compliance and maintain visibility into the cryptographic footprint of the application, we need a standardized way to generate and audit Software Bill of Materials (SBOM) and Cryptographic Bill of Materials (CBOM).

## Decision
We will implement an automated pipeline for generating SBOM and CBOM artifacts using `anchore/sbom-action` and `cbomkit/cbomkit-action` within our GitHub Actions workflows.

## Rationale
- **Visibility**: SBOMs provide a full inventory of dependencies, making it easier to identify vulnerable packages.
- **Crypto Auditing**: CBOMs specifically target cryptographic primitives, which is critical for assessing Post-Quantum Cryptography (PQC) readiness.
- **Automation**: Automated generation ensures that artifacts are always in sync with the deployed code.

## Consequences
- **CI/CD**: Adds a few steps to the GitHub Actions workflow.
- **Storage**: Requires storage for generated artifacts.
- **Maintenance**: Requires periodic review of the cryptographic audit reports.

## Alternatives
- SPDX was considered but CycloneDX was chosen for better modern software support.
