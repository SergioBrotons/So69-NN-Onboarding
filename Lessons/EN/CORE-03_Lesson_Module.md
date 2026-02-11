# CORE-03: Dark Data Strategic Understanding

## Section 0 — Metadata

| Field | Value |
|-------|-------|
| **Card_ID** | CORE-03 |
| **Layer** | Identity |
| **Role_Scope** | All |
| **Critical** | No |
| **Dependencies** | CORE-02 |
| **Version** | v1.0-content |
| **Estimated Duration** | 40 minutes |
| **Difficulty Level** | Intermediate |
| **Source Reference** | So69_NN_CARDS_Repository_FULL_v1.0.xlsx |

---

## Section 1 — Strategic Purpose

### Why This Card Exists

CORE-03 establishes strategic understanding of Dark Data—the data that organizations collect but do not actively use for analysis, decision-making, or operational improvement. This card exists because Dark Data represents both a significant institutional asset and a significant institutional risk. Organizations that do not understand Dark Data cannot fully leverage their information assets, while those that ignore its risks may face compliance and security issues.

This card mitigates the risk of unconscious data accumulation without strategic purpose. Organizations generate vast amounts of data that sit unused, creating storage costs, security exposure, and compliance obligations without corresponding value. Understanding Dark Data strategically enables organizations to make informed decisions about what to keep, what to analyze, and what to discard.

---

## Section 2 — Foundational Linkage

This card builds upon CORE-02 (Offline Business Intelligence) which established the foundation for understanding how institutional data creates value. Dark Data extends this understanding to data that is not currently generating value.

---

## Section 3 — Core Explanation

### 3.1 Concept Definition

**Dark Data** refers to data assets that organizations collect but do not actively use for analytical, operational, or strategic purposes. This data exists in databases, file systems, and data lakes but is not incorporated into active reporting, analysis, or decision-making workflows.

The phenomenon occurs across all organizational data collection activities: sensor data that is captured but never analyzed, log files that are retained but never reviewed, customer interaction data that is stored but never queried, and experimental data that is collected but never processed.

### 3.2 Structural Logic

Dark Data connects to institutional value through the following pathway:

```
Data Collection → Active Use → Value Generation
Data Collection → Dark Data → Cost/Risk Generation
```

Organizations must understand both paths to optimize their data strategy. The goal is not elimination of Dark Data but strategic management—understanding what Dark Data exists, whether it could create value, and whether the costs and risks of retaining it are justified.

---

## Section 4 — Executive Scenario

### Scenario A: Routine Operation

**Situation**: The IT department reports that data storage costs have increased 40% over two years. Investigation reveals that most new storage capacity is consumed by sensor data from retail location monitoring systems—foot traffic counters, environmental sensors, and security cameras. This data is collected continuously but never analyzed.

**Decision**: How should the organization respond to this Dark Data cost growth?

---

## Section 5 — Failure Patterns

1. **Ignoring Dark Data** - Treating all data as equally valuable regardless of actual use
2. **Deleting Everything** - Eliminating Dark Data without assessment of potential value
3. **Never Reviewing** - Continuously accumulating data without periodic value assessment

---

## Section 6 — Practical Exercise

**Duration**: 30 minutes

**Task**: Conduct a Dark Data inventory of one data domain you know. Identify what data exists, whether it is actively used, and what the retention rationale is.

---

## Section 7 — Assessment Rubric

| Dimension | Novice | Competent | Expert |
|----------|--------|----------|--------|
| Conceptual Accuracy | Cannot define Dark Data | Defines correctly but misses strategic implications | Articulates full strategic dimension |
| Language Discipline | Uses terms loosely | Uses correctly | Maintains precise terminology |
| Compliance Awareness | Ignores compliance | Recognizes basic requirements | Connects to regulatory implications |
| Practical Application | Cannot complete exercise | Completes adequately | Creates actionable assessment |
| Strategic Maturity | Treats as technical issue | Recognizes strategic dimension | Connects to institutional strategy |

**Passing Threshold**: 9/15 points minimum

---

## Section 8 — Reinforcement Path

- Conceptual gaps → CORE-02
- Language gaps → LANG-01
- Strategic gaps → SIM-08

---

## Section 9 — Advanced Extension

**Ethical Grey Zone**: Dark Data may contain unexpected value—insights that could benefit the organization but have never been discovered. There is ethical tension between the cost savings of deletion and the potential value of retention.

---

## Section 10 — LMS Markdown Export

```json
{
  "card_id": "CORE-03",
  "title": "Explain Dark Data strategically",
  "layer": "Identity",
  "role_scope": "All",
  "critical": false,
  "version": "v1.0-content",
  "estimated_duration": "40 minutes"
}
```

---

## Section 11 — Slide Outline

1. Title: CORE-03 Dark Data Strategic Understanding
2. Strategic framing: Value vs. Cost/Risk
3. Concept definition with examples
4. Executive scenario walkthrough
5. Practical exercise instructions
6. Assessment criteria
