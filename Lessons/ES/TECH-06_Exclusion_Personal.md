# MÓDULO DE APRENDIZAJE INSTITUCIONAL

## TECH-06: Implementar Lógica de Exclusión de Personal

---

## SECCIÓN 0 — METADATOS

| Campo | Valor |
|-------|-------|
| **Card_ID** | TECH-06 |
| **Layer** | Technical |
| **Role_Scope** | Technical |
| **Critical** | No |
| **Dependencies** | TECH-05 |
| **Version** | v1.0-content |
| **Fuente** | So69_AITANNA_CARDS_Repository_FULL_v1.0.xlsx |

---

## SECCIÓN 1 — PROPÓSITO ESTRATÉGICO

### Español (Primario)

Este módulo explica cómo implementar la lógica que excluye las señales del personal de la tienda de los conteos de visitantes, asegurando que las métricas reflejen solo el comportamiento de clientes.

### English (Controlled Translation)

This module explains how to implement logic that excludes store personnel signals from visitor counts, ensuring metrics reflect only customer behavior.

---

## SECCIÓN 2 — VINCULACIÓN FUNDACIONAL

### Módulo(es) del Bootcamp de Referencia

Este módulo aplica:

- **COMP-01**: Minimización de datos

---

## SECCIÓN 3 — EXPLICACIÓN NUCLEAR

### 3.1 Necesidad de Exclusión

El personal de la tienda genera señales que no debencontarse como visitantes. Sin exclusión, los conteos estarían inflados.

### 3.2 Métodos de Exclusión

| Método | Descripción |
|--------|-------------|
| Lista blanca | MACs conocidos del personal |
| Geofencing | Exclusión por zona de personal |
| Horario | Exclusión en horarios de trabajo |
| Combinado | Múltiples métodos |

---

## SECCIÓN 4 — ESCENARIO EJECUTIVO

### Situación de Presión

El cliente dice: "Los números son muy altos. Creo que el personal está siendocontado."

### Respuesta Correcto

"Es probable. Podemos implementar exclusión de personal: identificar los dispositivos del personal y excluirlos de los conteos. Necesitamos que nos proporcione una lista de dispositivos del personal o las ubicaciones donde trabajan."

---

## SECCIÓN 5 — EJERCICIO PRÁCTICO

### Ejercicio: Diseñar Exclusión

**Duración:** 20 minutos

**Instrucciones:**

Diseñe un sistema de exclusión para:

1. Tienda pequeña con 5 empleados
2. Centro comercial con personal de seguridad
3. Supermercado con personal variable

---

## SECCIÓN 6 — RÚBRICA DE EVALUACIÓN

| Dimensión | Peso |
|-----------|------|
| Aplicación Práctica | 45% |
| Precisión Conceptual | 30% |
| Madurez Estratégica | 25% |

---

## SECCIÓN 7 — LMS MARKDOWN

```markdown
# TECH-06: Exclusión de Personal

## Objetivo
Implementar filtrado de personal.

## Contenido
- Necesidad
- Métodos
- Ejercicios
```

---

## SECCIÓN 8 — ESQUEMA DE DIAPOSITIVAS

- Diapositiva 1: Título
- Diapositiva 2: Necesidad
- Diapositiva 3: Métodos
- Diapositiva 4: Escenario
- Diapositiva 5: Ejercicio
- Diapositiva 6: Evaluación

---

*Fin del Módulo TECH-06*
