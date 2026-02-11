# TECH-04: Probabilistic Deduplication

## Section 0 — Metadata

| Field | Value |
|-------|-------|
| **Card_ID** | TECH-04 |
| **Layer** | Technical |
| **Role_Scope** | Technical |
| **Critical** | No |
| **Dependencies** | DATA-02 |
| **Version** | v1.0-content |
| **Estimated Duration** | 45 minutes |
| **Difficulty Level** | Intermediate |
| **Source Reference** | So69_NN_CARDS_Repository_FULL_v1.0.xlsx |

---

## Section 1 — Strategic Purpose

TECH-04 ensures technical personnel can understand probabilistic deduplication—how systems determine if detected devices are the same visitor.

---

## Section 2 — Foundational Linkage

Builds on DATA-02 unique visitor definition.

---

## Section 3 — Core Explanation

### Concept Definition

Probabilistic deduplication uses signals: MAC address, signal patterns, detection timing to estimate probability of same device. Unlike deterministic (exact match), probabilistic provides confidence levels. Privacy-preserving but introduces uncertainty.

---

## Section 4 — Executive Scenario

**Scenario**: Customer questions accuracy. Explaining: we use multiple signals to estimate visitor counts—95% confidence level means 5% uncertainty, which we report.

---

## Section 5 — Failure Patterns

1. Presenting probabilistic as exact
2. Ignoring confidence intervals
3. Missing privacy benefits

---

## Section 6 — Practical Exercise

**Task**: Document deduplication methodology for one deployment.

---

## Section 7 — Assessment Rubric

| Dimension | Novice | Competent | Expert |
|-----------|--------|-----------|--------|
| Precision | Exaggerated | Accurate | Nuanced |

**Passing**: 9/15 points
