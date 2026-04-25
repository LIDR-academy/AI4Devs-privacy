# AI and FedRAMP

This section is a practical guide for designing, building, and operating AI-enabled applications in environments that must satisfy FedRAMP expectations.

It is organized from fundamentals to implementation details:

- [Chapter 1: Foundations, Terms, and Acronyms](01-foundations-terms-and-acronyms.md)
- [Chapter 2: FedRAMP Fundamentals for AI Systems](02-fedramp-fundamentals-for-ai-systems.md)
- [Chapter 3: AI Across the Secure SDLC](03-ai-across-the-secure-sdlc.md)
- [Chapter 4: AI In-App Features in Existing FedRAMP-Authorized Systems](04-ai-in-app-for-existing-fedramp-systems.md)
- [Chapter 5: Documentation, Evidence, and Operational Checklists](05-documentation-evidence-and-checklists.md)
- [References](06-references.md)

## How to use this guide

Read the chapters in order if you are new to FedRAMP and AI.

If you already work on a regulated SaaS product, start with Chapter 4 and Chapter 5. Those two chapters focus on the practical question that usually matters most: what changes when an already authorized application introduces AI features.

## Core message

FedRAMP does not create a separate, standalone "AI certification." In practice, AI capabilities must be analyzed as part of the system's architecture, authorization boundary, control implementation, change management, testing evidence, and ongoing monitoring.

If an AI feature changes the data flows, dependencies, trust relationships, or threat profile of a system, the feature can affect the system's authorization posture and may require updated documentation, security testing, and significant-change handling.

## Audience

- Product owners defining AI-enabled federal features
- Security architects and ISSOs preparing approval packages
- Engineers implementing AI in regulated SaaS products
- GRC and compliance teams maintaining FedRAMP packages
- 3PAOs and reviewers who need traceable security evidence

## Recommended reading path

1. Start with Chapter 1 to align on terminology.
2. Use Chapter 2 to understand the FedRAMP control and boundary model.
3. Use Chapter 3 to build AI controls into each SDLC phase.
4. Use Chapter 4 when introducing AI into an already authorized system.
5. Use Chapter 5 as an execution checklist for documentation and evidence.