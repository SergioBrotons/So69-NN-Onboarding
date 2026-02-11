# MÓDULO DE APRENDIZAJE INSTITUCIONAL

## TECH-02: Interpretar Limitaciones de RSSI Correctamente

---

## SECCIÓN 0 — METADATOS

| Campo | Valor |
|-------|-------|
| **Card_ID** | TECH-02 |
| **Layer** | Technical |
| **Role_Scope** | Technical |
| **Critical** | No |
| **Dependencies** | TECH-01 |
| **Version** | v1.0-content |
| **Fuente** | So69_AITANNA_CARDS_Repository_FULL_v1.0.xlsx |

---

## SECCIÓN 1 — PROPÓSITO ESTRATÉGICO

### Español (Primario)

Este módulo explica las limitaciones de RSSI (Received Signal Strength Indicator) para la estimación de distancia y ubicación, asegurando que los participantes entiendan qué información puede y no puede derivarse de estas señales.

### English (Controlled Translation)

This module explains the limitations of RSSI (Received Signal Strength Indicator) for distance and location estimation, ensuring participants understand what information can and cannot be derived from these signals.

---

## SECCIÓN 2 — VINCULACIÓN FUNDACIONAL

### Módulo(es) del Bootcamp de Referencia

Este módulo aplica:

- **TECH-01**: Fundamentos de probe requests

---

## SECCIÓN 3 — EXPLICACIÓN NUCLEAR

### 3.1 RSSI Concept

RSSI mide la intensidad de la señal recibida. La idea es que señales más fuertes están más cerca, pero hay muchos factores que afectan esta relación.

### 3.2 Limitaciones

| Factor | Efecto |
|--------|--------|
| Interferencia | Señales reflejadas confunden medición |
| Obstáculos | Paredes, personasattenúan señal |
| Dispositivo | Diferentes dispositivos tienen diferentes transmit power |
| Ambiente | Cambios en el ambiente afectan lectura |

---

## SECCIÓN 4 — ESCENARIO EJECUTIVO

### Situación de Presión

Un cliente quiere saber la ubicación exacta de cada cliente dentro de la tienda.

### Respuesta Correcto

"RSSI no proporciona ubicación precisa. Solo indica presencia y una estimación aproximada de distancia que puede variar significativamente. Para ubicación precisa, necesitaríamos tecnología adicional como triangulation con múltiples sensores, pero incluso así, la precisión sería limitada."

---

## SECCIÓN 5 — EJERCICIO PRÁCTICO

### Ejercicio: Explicar Limitaciones

**Duración:** 20 minutos

**Instrucciones:**

Explique las limitaciones de RSSI para:

1. Detectar si alguien está dentro de 5 metros
2. Rastrear movimiento de una persona
3. Contar personas en una zona específica

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
# TECH-02: Limitaciones de RSSI

## Objetivo
Entender los límites de la tecnología.

## Contenido
- RSSI y sus limitaciones
- Implicaciones
- Ejercicios
```

---

## SECCIÓN 8 — ESQUEMA DE DIAPOSITIVAS

- Diapositiva 1: Título
- Diapositiva 2: Concepto
- Diapositiva 3: Limitaciones
- Diapositiva 4: Escenario
- Diapositiva 5: Ejercicio
- Diapositiva 6: Evaluación

---

*Fin del Módulo TECH-02*
