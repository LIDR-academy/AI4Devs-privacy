# Chapter 1: Foundations, Terms, and Acronyms

## Contents

- [Purpose](#purpose)
- [1.1 What FedRAMP is](#11-what-fedramp-is)
- [1.2 What AI means in this context](#12-what-ai-means-in-this-context)
- [1.3 Why AI changes the security and compliance conversation](#13-why-ai-changes-the-security-and-compliance-conversation)
- [1.4 Key terms](#14-key-terms)
- [1.5 Foundational principles for AI in regulated environments](#15-foundational-principles-for-ai-in-regulated-environments)
- [Salesforce example](#salesforce-example)
- [Chapter summary](#chapter-summary)

## Purpose

Before discussing FedRAMP controls or AI implementation patterns, teams need a common vocabulary. Most mistakes in regulated AI programs start with unclear scope: teams say "we added AI" when what they really changed was a model provider, a retrieval layer, a prompt orchestration service, or a human-review workflow.

## 1.1 What FedRAMP is

FedRAMP, the Federal Risk and Authorization Management Program, is the U.S. government program that standardizes security assessment, authorization, and continuous monitoring for cloud products and services used by federal agencies.

In practical terms, FedRAMP means:

- A cloud service provider must document how the system works.
- The provider must implement required security controls.
- The provider must produce evidence that those controls work.
- The provider must maintain that evidence over time through continuous monitoring.

For AI-enabled systems, the important point is that AI is not outside this model. AI components become part of the architecture, the data flows, the control narrative, and the evidence package.

## 1.2 What AI means in this context

In this guide, "AI" includes several distinct capabilities:

- Predictive models that classify, rank, score, or detect patterns.
- Generative AI systems that produce text, code, images, or summaries.
- Retrieval-augmented systems that combine models with enterprise data.
- AI copilots embedded inside business workflows.
- Safety, moderation, or policy models used to filter inputs and outputs.

These are materially different from a compliance perspective because they change risk in different ways. A classifier may mostly affect integrity and fairness, while a generative assistant may also affect confidentiality, hallucination risk, prompt abuse, and output governance.

## 1.3 Why AI changes the security and compliance conversation

Traditional SaaS applications usually operate on deterministic logic. AI-enabled applications add probabilistic behavior, data-dependent outputs, model supply chain risk, and governance obligations around training data, prompts, model updates, and monitoring.

That creates additional questions such as:

- What data is sent to the model?
- Is the model inside the authorization boundary or accessed as an external dependency?
- Can prompts or outputs contain controlled, sensitive, or regulated data?
- Does the model provider retain data, use it for training, or route it outside approved environments?
- How do we validate the behavior of a non-deterministic component?
- How do we detect unsafe drift, hallucinations, or policy-violating outputs?

## 1.4 Key terms

### AI system

A set of components that uses AI capabilities to influence or generate outputs, decisions, recommendations, or automations.

### Authorization boundary

The set of components, services, data flows, and trust relationships included in the FedRAMP-assessed system. This is one of the most important concepts in this guide because adding an AI provider, vector database, inference endpoint, or moderation service can change the boundary analysis.

### Significant change

A change that materially affects the security posture, architecture, control implementation, interconnections, or risk of the authorized system. AI features often raise this question because they may introduce new external services, new data flows, or new privileged processes.

### Continuous monitoring

The ongoing activity required to keep an authorization credible after initial assessment. This includes vulnerability management, control updates, incident reporting, assessment activities, and documentation maintenance.

### Prompt

The instruction or input provided to a model. In regulated systems, prompts are not just product text. They can contain customer data, operational logic, sensitive instructions, and security-relevant context.

### Retrieval-Augmented Generation (RAG)

An architecture pattern where a model is given retrieved enterprise content at runtime to improve relevance. RAG is especially relevant to FedRAMP because it changes data flows, indexing, access control, and output provenance.

### Model drift

A degradation or shift in model behavior over time due to changing data, environments, or dependencies.

### 3PAO

Third Party Assessment Organization. A 3PAO performs independent assessment work in the FedRAMP process.

### SSP

System Security Plan. The core FedRAMP document describing the system, the boundary, the controls, and how those controls are implemented.

### SAP / SAR / POA&M

- SAP: Security Assessment Plan
- SAR: Security Assessment Report
- POA&M: Plan of Action and Milestones

These documents matter for AI because new AI capabilities can require new test cases, updated findings, and remediation tracking.

## 1.5 Foundational principles for AI in regulated environments

The following principles should be assumed from day one:

- Treat AI as part of the system, not as a feature floating outside governance.
- Treat prompts, context, and outputs as governed data flows.
- Treat model providers and AI platforms as part of supply-chain and boundary analysis.
- Treat model updates as change events that may require security review.
- Treat evaluation, safety testing, and abuse testing as part of verification, not optional product experiments.

## Salesforce example

Assume a Salesforce-based case management application used by a federal customer adds an AI assistant that summarizes citizen support cases for agents.

At a basic level, the team has not merely added a new button. It has potentially:

- introduced a new inference service,
- created a new path for case content to leave the core application,
- generated new derived data in summaries,
- created a need for output quality controls,
- and changed the system's threat model.

That is the mindset required for the rest of this guide.

## Chapter summary

- FedRAMP is about assessed controls, documented architecture, and continuous monitoring for cloud systems.
- AI capabilities must be analyzed as system components, not treated as informal add-ons.
- The most important foundational ideas are authorization boundary, significant change, governed data flows, and evidence.
- AI adds probabilistic behavior, model supply-chain risk, and new validation requirements.

## Navigation

- Previous: [Guide index](README.md)
- Next: [Chapter 2: FedRAMP Fundamentals for AI Systems](02-fedramp-fundamentals-for-ai-systems.md)