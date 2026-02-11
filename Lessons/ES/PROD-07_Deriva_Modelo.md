# MÓDULO DE APRENDIZAJE INSTITUCIONAL

## PROD-07: Detectar Riesgo de Deriva de Modelo

---

## SECCIÓN 0 — METADATOS

| Campo | Valor |
|-------|-------|
| **Card_ID** | PROD-07 |
| **Layer** | Product |
| **Role_Scope** | Product |
| **Critical** | No |
| **Dependencies** | DATA-01 |
| **Version** | v1.0-content |
| **Fuente** | So69_AITANNA_CARDS_Repository_FULL_v1.0.xlsx |

---

## SECCIÓN 1 — PROPÓSITO ESTRATÉGICO

### Español (Primario)

Este módulo desarrolla la capacidad de detectar cuando los modelos de machine learning del sistema están experimentando drift (deriva), lo que significa que sus predicciones están becoming menos accurate con el tiempo.

### English (Controlled Translation)

This module develops the capability to detect when the system's machine learning models are experiencing drift, meaning their predictions are becoming less accurate over time.

---

## SECCIÓN 2 — VINCULACIÓN FUNDACIONAL

### Módulo(es) del Bootcamp de Referencia

Este módulo aplica:

- **DATA-01**: Pipeline de datos

---

## SECCIÓN 3 — EXPLICación NUCLEAR

### 3.1 Tipos de Deriva

| Tipo | Descripción |
|------|-------------|
| Data drift | Los datos de entrada cambian |
| Concept drift | La relación entrada-salida cambia |
| Model decay | El modelo se vuelve menos preciso |

### 3.2 Indicadores de Deriva

- Métricas de accuracy caen consistentemente
- Distribución de outputs cambia significativamente
- Validación contra ground truth muestra divergencia

---

## SECCIÓN 4 — ESCENARIO EJECUTIVO

### Situación de Presión

Un cliente reporta: "Los números no tienen sentido lately."

### Respuesta Correcto

"Esto podría indicar drift del modelo. Necesitamos: revisar las métricas de validación, comparar contra datos recientes, y determinar si hay un cambio real en el patrón o si el modelo necesita reentrenamiento. ¿Pueden proporcionarnos datos de los últimos 30 días?"

---

## SECCIÓN 5 — EJERCICIO PRÁCTICO

### Ejercicio: Detectar Deriva

**Duración:** 20 minutos

**Instrucciones:**

Analice estos indicadores y determine si hay drift:

1. Accuracy cayó de 95% a 87% en 3 meses
2. Más eventos de lo normal en zona de entrada
3. Distribución horaria cambió significativamente

---

## SECCIÓN 6 — RÚBRICA DE EVALUACIÓN

| Dimensión | Peso |
|-----------|------|
| Precisión Conceptual | 40% |
| Aplicación Práctica | 40% |
| Madurez Estratégica | 20% |

---

## SECCIÓN 7 — LMS MARKDOWN

```markdown
# PROD-07: Deriva de Modelo

## Objetivo
Detectar cuando modelos necesitan atención.

## Contenido
- Tipos de drift
- Indicadores
- Acciones
```

---

## SECCIÓN 8 — ESQUEMA DE DIAPOSITIVAS

- Diapositiva 1: Título
- Diapositiva 2: Tipos
- Diapositiva 3: Indicadores
- Diapositiva 4: Escenario
- Diapositiva 5: Ejercicio
- Diapositiva 6: Evaluación

---

*Fin del Módulo PROD-07*
