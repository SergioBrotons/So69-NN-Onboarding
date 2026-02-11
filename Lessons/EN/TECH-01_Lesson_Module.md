# TECH-01: Probe Request Fundamentals

## Section 0 — Metadata

| Field | Value |
|-------|-------|
| **Card_ID** | TECH-01 |
| **Layer** | Technical |
| **Role_Scope** | Technical |
| **Critical** | No |
| **Dependencies** | DATA-01 |
| **Version** | v1.0-content |
| **Estimated Duration** | 50 minutes |
| **Difficulty Level** | Intermediate |
| **Source Reference** | So69_NN_CARDS_Repository_FULL_v1.0.xlsx |

---

## Section 1 — Strategic Purpose

TECH-01 ensures technical personnel understand probe request fundamentals—the basis for WiFi-based detection in retail analytics.

---

## Section 2 — Foundational Linkage

Builds on DATA-01 signal-to-KPI pipeline.

---

## Section 3 — Core Explanation

### Concept Definition

Probe requests are WiFi frames devices send searching for networks. Detection captures: device MAC address (often randomized), signal strength (RSSI), timestamp, and associated network. These enable visitor detection without connected association.

---

## Section 4 — Executive Scenario

**Scenario**: Explaining to non-technical stakeholders how we detect visitors: phones constantly broadcast probe requests looking for WiFi; our sensors detect these; we count unique MACs as visitors.

---

## Section 5 — Failure Patterns

1. Confusing probe with connection
2. Ignoring MAC randomization
3. Missing privacy implications

---

## Section 6 — Practical Exercise

**Task**: Document probe request detection methodology for one deployment.

---

## Section 7 — Assessment Rubric

| Dimension | Novice | Competent | Expert |
|-----------|--------|-----------|--------|
| Understanding | Partial | Complete | Applied |

**Passing**: 9/15 points

---

## Section 8 — Reinforcement

TECH-02 for RSSI limitations
