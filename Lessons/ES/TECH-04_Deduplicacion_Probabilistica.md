# MÓDULO DE APRENDIZAJE INSTITUCIONAL

## TECH-04: Entender Deduplicación Probabilística

---

## SECCIÓN 0 — METADATOS

| Campo | Valor |
|-------|-------|
| **Card_ID** | TECH-04 |
| **Layer** | Technical |
| **Role_Scope** | Technical |
| **Critical** | No |
| **Dependencies** | DATA-02 |
| **Version** | v1.0-content |
| **Fuente** | So69_AITANNA_CARDS_Repository_FULL_v1.0.xlsx |

---

## SECCIÓN 1 — PROPÓSITO ESTRATÉGICO

### Español (Primario)

Este módulo explica cómo el sistema utiliza algoritmos probabilísticos para estimar si múltiples detecciones corresponden a la misma persona, sin almacenar identidades reales.

### English (Controlled Translation)

This module explains how the system uses probabilistic algorithms to estimate whether multiple detections correspond to the same person, without storing actual identities.

---

## SECCIÓN 2 — VINCULACIÓN FUNDACIONAL

### Módulo(es) del Bootcamp de Referencia

Este módulo aplica:

- **DATA-02**: Visitante único

---

## SECCIÓN 3 — EXPLICACIÓN NUCLEAR

### 3.1 Deduplicación Probabilística

El sistema no "sabe" si es la misma persona; calcula la probabilidad de que lo sea basándose en:

- Patrones temporales (hora similar)
- Patrones espaciales (zona similar)
- Frecuencia (intervalos consistentes)

### 3.2 Características

- No almacena identidades
- Proporciona estimaciones, no certezas
- El resultado es "probablemente la misma persona" o "probablemente diferente"

---

## SECCIÓN 4 — ESCENARIO EJECUTIVO

### Situación de Presión

Un cliente pregunta: "¿Cómo saben que es la misma persona?"

### Respuesta Correcto

"El sistema usa deduplicación probabilística: analiza patrones para estimar la probabilidad de que sea la misma persona. Por ejemplo, si alguien está en la zona de entrada a las 10am y luego en la zona de最深 a las 10:15, el sistema estima que probablemente es la misma persona. No almacenamos identidades ni garantizamos certeza."

---

## SECCIÓN 5 — EJERCICIO PRÁCTICO

### Ejercicio: Entender Probabilidad

**Duración:** 20 minutos

**Instrucciones:**

Explique por qué estos casos son difíciles:

1. Dos personas que entran juntas
2. Una persona que sale y vuelve rápidamente
3. Alta tráfico con movimiento caótico

---

## SECCIÓN 6 — RÚBRICA DE EVALUACIÓN

| Dimensión | Peso |
|-----------|------|
| Precisión Conceptual | 45% |
| Disciplina del Lenguaje | 30% |
| Aplicación Práctica | 25% |

---

## SECCIÓN 7 — LMS MARKDOWN

```markdown
# TECH-04: Deduplicación Probabilística

## Objetivo
Comprender la estimación de visitantes únicos.

## Contenido
- Algoritmos probabilísticos
- Limitaciones
- Ejercicios
```

---

## SECCIÓN 8 — ESQUEMA DE DIAPOSITIVAS

- Diapositiva 1: Título
- Diapositiva 2: Concepto
- Diapositiva 3: Características
- Diapositiva 4: Escenario
- Diapositiva 5: Ejercicio
- Diapositiva 6: Evaluación

---

*Fin del Módulo TECH-04*
