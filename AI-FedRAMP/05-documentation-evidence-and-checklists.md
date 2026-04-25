# Chapter 5: Documentation, Evidence, and Operational Checklists

## Contents

- [Purpose](#purpose)
- [5.1 Minimum documentation set for an AI feature in a FedRAMP context](#51-minimum-documentation-set-for-an-ai-feature-in-a-fedramp-context)
- [5.2 What reviewers usually want to understand quickly](#52-what-reviewers-usually-want-to-understand-quickly)
- [5.3 Pre-build checklist](#53-pre-build-checklist)
- [5.4 Pre-release checklist](#54-pre-release-checklist)
- [5.5 Post-release checklist](#55-post-release-checklist)
- [5.6 Suggested evidence matrix](#56-suggested-evidence-matrix)
- [5.7 Salesforce implementation checklist](#57-salesforce-implementation-checklist)
- [Chapter summary](#chapter-summary)

## Purpose

This chapter turns the earlier concepts into concrete execution artifacts. It is intended for security, compliance, product, and engineering teams that need a working checklist.

## 5.1 Minimum documentation set for an AI feature in a FedRAMP context

For most implementations, prepare or update the following:

1. Feature description
2. Architecture diagram
3. Data flow diagram
4. Authorization boundary impact statement
5. Updated component and dependency inventory
6. Security requirements and misuse cases
7. Threat model
8. Test plan and test evidence
9. Operational runbook and rollback procedure
10. Updated SSP sections and related control narratives

## 5.2 What reviewers usually want to understand quickly

If a reviewer, security architect, agency stakeholder, or 3PAO asks questions about the AI feature, they usually want fast clarity on six points:

1. What data goes in?
2. Where does the data go?
3. Who can access the feature and its outputs?
4. What safeguards constrain the model?
5. How was the feature tested?
6. How is the feature monitored and shut down if needed?

If your package cannot answer those six questions clearly, it is not ready.

## 5.3 Pre-build checklist

- Define the use case and risk level.
- Define whether the feature is advisory, assistive, or autonomous.
- Classify all input, context, output, and log data.
- Confirm whether any external model or AI service is required.
- Assess boundary impact.
- Define prohibited data uses and retention rules.
- Define human-review requirements.
- Identify required stakeholders: security, compliance, privacy, legal, accessibility, records, product.

## 5.4 Pre-release checklist

- Architecture and data flow diagrams are current.
- SSP updates are drafted or completed.
- Dependencies and providers are approved.
- Prompt and output handling rules are documented.
- Security testing is complete, including abuse and prompt-injection scenarios.
- Logging, alerting, and kill-switches are in place.
- Model and prompt versions are baselined.
- Change approval has been completed at the correct level.

## 5.5 Post-release checklist

- Monitor model behavior and policy violations.
- Review provider-side changes on a defined cadence.
- Track vulnerabilities in AI libraries and supporting components.
- Reassess data handling if product scope changes.
- Maintain evidence of incidents, overrides, exceptions, and remediation.
- Revalidate the feature after major architecture, workflow, or provider changes.

## 5.6 Suggested evidence matrix

| Topic | Example evidence |
| --- | --- |
| Boundary | Updated system and trust boundary diagrams |
| Data handling | Data flow diagrams, retention rules, prompt/output classification |
| Identity and access | Role matrix, access tests, admin workflow approvals |
| Security controls | SSP updates, control narratives, configuration baselines |
| Verification | Test cases, prompt injection results, negative test evidence |
| Operations | Runbooks, monitoring dashboards, rollback procedure, incident playbooks |
| Governance | Change record, approvals, review minutes, risk acceptance if needed |

## 5.7 Salesforce implementation checklist

For a Salesforce AI assistant, a practical checklist would include:

- document which Salesforce objects, fields, and files can be used as model context,
- document whether knowledge articles, case comments, and attachments are included in retrieval,
- restrict generated output visibility by user profile and permission set,
- document whether summaries or drafts are stored back into Salesforce records,
- test whether hidden instructions inside case text can manipulate the model,
- document external AI service dependencies and their retention/training terms,
- define an administrator-controlled feature flag to disable the assistant quickly,
- retain release evidence showing security and compliance approval.

## Chapter summary

- FedRAMP-relevant AI work must produce documentation and evidence, not only implementation.
- Boundary, data flows, safeguards, testing, and monitoring are the core topics every reviewer will examine.
- Checklists help avoid late-stage surprises and should be used before build, before release, and after release.

## Navigation

- Previous: [Chapter 4: AI In-App Features in Existing FedRAMP-Authorized Systems](04-ai-in-app-for-existing-fedramp-systems.md)
- Next: [References](06-references.md)