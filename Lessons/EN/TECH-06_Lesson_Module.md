# TECH-06: Staff Exclusion Logic

## Section 0 — Metadata

| Field | Value |
|-------|-------|
| **Card_ID** | TECH-06 |
| **Layer** | Technical |
| **Role_Scope** | Technical |
| **Critical** | No |
| **Dependencies** | TECH-05 |
| **Version** | v1.0-content |
| **Estimated Duration** | 40 minutes |
| **Difficulty Level** | Intermediate |
| **Source Reference** | So69_NN_CARDS_Repository_FULL_v1.0.xlsx |

---

## Section 1 — Strategic Purpose

TECH-06 ensures technical personnel can implement staff exclusion logic—filtering employee devices from visitor analytics.

---

## Section 2 — Foundational Linkage

Builds on TECH-05 noise filtering logic.

---

## Section 3 — Core Explanation

### Concept Definition

Staff exclusion identifies and removes employee devices: known device MAC lists, work hours patterns, location frequency. Methods: whitelist (known devices), behavioral (long duration, repeat patterns), or hybrid.

---

## Section 4 — Executive Scenario

**Scenario**: Customer says counts seem high. Investigation reveals staff counted. Solution: implement exclusion list with HR, add behavioral filtering for repeat all-day visitors.

---

## Section 5 — Failure Patterns

1. No exclusion
2. Incomplete lists
3. Missing maintenance

---

## Section 6 — Practical Exercise

**Task**: Design staff exclusion approach for one deployment.

---

## Section 7 — Assessment Rubric

| Dimension | Novice | Competent | Expert |
|-----------|--------|-----------|--------|
| Completeness | Partial | Complete | Robust |

**Passing**: 9/15 points
