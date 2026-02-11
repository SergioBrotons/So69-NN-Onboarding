# MÓDULO DE APRENDIZAJE INSTITUCIONAL

## COMP-04: Aplicar Principio de Minimización de Datos

---

## SECCIÓN 0 — METADATOS

| Campo | Valor |
|-------|-------|
| **Card_ID** | COMP-04 |
| **Layer** | Compliance |
| **Role_Scope** | All |
| **Critical** | No |
| **Dependencies** | COMP-01 |
| **Version** | v1.0-content |
| **Fuente** | So69_AITANNA_CARDS_Repository_FULL_v1.0.xlsx |

---

## SECCIÓN 1 — PROPÓSITO ESTRATÉGICO

### Español (Primario)

Este módulo explica cómo el principio de minimización de datos se implementa en So69/AITANNA, asegurando que el sistema solo capture y procese la información estrictamente necesaria para su función. La minimización de datos es un principio fundamental de privacy by design que reduce riesgos y simplify compliance.

### English (Controlled Translation)

This module explains how the data minimization principle is implemented in So69/AITANNA, ensuring the system only captures and processes information strictly necessary for its function. Data minimization is a fundamental privacy by design principle that reduces risks and simplifies compliance.

---

## SECCIÓN 2 — VINCULACIÓN FUNDACIONAL

### Módulo(es) del Bootcamp de Referencia

Este módulo aplica:

- **COMP-01**: Privacy by Design

---

## SECCIÓN 3 — EXPLICACIÓN NUCLEAR

### 3.1 Definición del Concepto

**Español:**

Minimización de datos significa que el sistema está diseñado para capturar solo la información mínima necesaria para cumplir su propósito. En So69/AITANNA: no se capturan imágenes, solo métricas; no se almacenan datos personales; no se transmite información fuera del premises; los datos se procesan y agregan inmediatamente. Este diseño reduce el riesgo inherente porque menos datos significa menos exposición potencial.

**English Translation:**

Data minimization means the system is designed to capture only the minimum information necessary to fulfill its purpose. In So69/AITANNA: images are not captured, only metrics; personal data is not stored; information is not transmitted outside premises; data is processed and aggregated immediately. This design reduces inherent risk because less data means less potential exposure.

### 3.2 Implementación

| Tipo de Dato | Minimización Aplicada |
|--------------|---------------------|
| Imágenes de video | No se capturan, solo metadata |
| Identificadores | No se almacenan |
| Datos de ubicación | Solo zona, no posición precisa |
| Datos temporales | Solo necesario para métricas |

---

## SECCIÓN 4 — ESCENARIO EJECUTIVO

### Situación de Presión

Un cliente pregunta: "¿Por qué no pueden capturar más datos para tener más insights?" Necesita entender por qué la limitación es una característica, no una falla.

### Respuesta Correcta

"Capturar más datos incrementaría el riesgo y la complejidad de compliance sin proporcionalmente aumentar el valor. Nuestro sistema está diseñado para proporcionar los insights más valiosos con la mínima cantidad de datos. Esto no es una limitación técnica sino una decisión de diseño intencional que beneficia tanto la privacidad como el cumplimiento."

---

## SECCIÓN 5 — EJERCICIO PRÁCTICO

### Ejercicio: Evaluar Minimización

**Duración:** 20 minutos

**Instrucciones:**

Evalúe si cada propuesta cumple con el principio de minimización:

1. "Agreguemos reconocimiento facial para identificar clientes."
2. "Capturemos la duración exacta de cada visita."
3. "Guardemos los datos por más tiempo para análisis histórico."
4. "Comparemos datos entre diferentes tiendas."

---

## SECCIÓN 6 — RÚBRICA DE EVALUACIÓN

| Dimensión | Peso |
|-----------|------|
| Conciencia de Cumplimiento | 40% |
| Precisión Conceptual | 35% |
| Aplicación Práctica | 25% |

---

## SECCIÓN 7 — LMS MARKDOWN

```markdown
# COMP-04: Minimización de Datos

## Objetivo
Comprender y aplicar el principio de minimización.

## Contenido
- Qué es minimización
- Implementación en So69/AITANNA
- Ejercicios
```

---

## SECCIÓN 8 — ESQUEMA DE DIAPOSITIVAS

- Diapositiva 1: Título
- Diapositiva 2: Concepto
- Diapositiva 3: Implementación
- Diapositiva 4: Escenario
- Diapositiva 5: Ejercicio
- Diapositiva 6: Evaluación

---

*Fin del Módulo COMP-04*
