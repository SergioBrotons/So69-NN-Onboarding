# PROD-07: Model Drift Detection

## Section 0 — Metadata

| Field | Value |
|-------|-------|
| **Card_ID** | PROD-07 |
| **Layer** | Product |
| **Role_Scope** | Product |
| **Critical** | No |
| **Dependencies** | DATA-01 |
| **Version** | v1.0-content |
| **Estimated Duration** | 45 minutes |
| **Difficulty Level** | Intermediate |
| **Source Reference** | So69_NN_CARDS_Repository_FULL_v1.0.xlsx |

---

## Section 1 — Strategic Purpose

PROD-07 ensures product personnel can detect model drift risk—identifying when machine learning models degrade in accuracy over time.

---

## Section 2 — Foundational Linkage

Builds on DATA-01 signal-to-KPI pipeline.

---

## Section 3 — Core Explanation

### Concept Definition

Model drift occurs when: data patterns change (data drift), or model assumptions失效 (concept drift). Detection requires: monitoring prediction accuracy, comparing distributions, tracking feedback signals, and establishing retraining triggers.

---

## Section 4 — Executive Scenario

**Scenario**: Model accuracy drops from 90% to 75% over 6 months. Root cause: customer behavior changed; model wasn't retrained. Solution: monitoring + retraining process.

---

## Section 5 — Failure Patterns

1. No monitoring
2. Ignoring drift signals
3. Missing retraining process

---

## Section 6 — Practical Exercise

**Task**: Design drift detection approach for one model.

---

## Section 7 — Assessment Rubric

| Dimension | Novice | Competent | Expert |
|-----------|--------|-----------|--------|
| Detection | None | Established | Comprehensive |

**Passing**: 9/15 points
