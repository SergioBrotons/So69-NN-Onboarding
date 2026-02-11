# MÓDULO DE APRENDIZAJE INSTITUCIONAL

## DATA-06: Explicar Lógica de Recurrencia

---

## SECCIÓN 0 — METADATOS

| Campo | Valor |
|-------|-------|
| **Card_ID** | DATA-06 |
| **Layer** | Data |
| **Role_Scope** | All |
| **Critical** | No |
| **Dependencies** | DATA-02 |
| **Version** | v1.0-content |
| **Fuente** | So69_AITANNA_CARDS_Repository_FULL_v1.0.xlsx |

---

## SECCIÓN 1 — PROPÓSITO ESTRATÉGICO

### Español (Primario)

Este módulo explica cómo el sistema determina si un visitante es "recurrente" o si múltiples eventos de presencia pertenecen a la misma persona. La comprensión de esta lógica es importante para interpretar métricas de recurrencia y para evitar malentendidos sobre qué significa "cliente recurrente" en el contexto del sistema.

### English (Controlled Translation)

This module explains how the system determines whether a visitor is "recurring" or whether multiple presence events belong to the same person. Understanding this logic is important for interpreting recurrence metrics and for avoiding misunderstandings about what "recurring customer" means in the system context.

---

## SECCIÓN 2 — VINCULACIÓN FUNDACIONAL

### Módulo(es) del Bootcamp de Referencia

Este módulo aplica:

- **DATA-02**: Visitante único
- **Pensamiento Probabilístico**: La recurrencia es una estimación, no una certeza

---

## SECCIÓN 3 — EXPLICACIÓN NUCLEAR

### 3.1 Definición del Concepto

**Español:**

La lógica de recurrencia utiliza algoritmos probabilísticos para estimar si múltiples visitas pertenecen a la misma persona. El sistema analiza: patrones temporales (horas similares de visita), patrones espaciales (zonas similaresvisitadas), y frecuencia (intervalos consistentes). La recurrencia NO significa identificación: el sistema estima que "probablemente es la misma persona" basándose en patrones, sin guardar identidad alguna.

**English Translation:**

Recurrence logic uses probabilistic algorithms to estimate whether multiple visits belong to the same person. The system analyzes: temporal patterns (similar visit times), spatial patterns (similar zones visited), and frequency (consistent intervals). Recurrence does NOT mean identification: the system estimates that "it is probably the same person" based on patterns, without storing any identity.

### 3.2 Métricas de Recurrencia

| Métrica | Definición |
|---------|------------|
| Visitantes recurrentes | Estimación de visitantes que regresan |
| Frecuencia promedio | Veces que un visitante recurrente vuelve |
| Tasa de recurrencia | % de visitantes que son recurrentes |

---

## SECCIÓN 4 — ESCENARIO EJECUTIVO

### Situación de Presión

Un cliente pregunta: "¿Pueden identificar a mis mejores clientes que vienen más frecuentemente?" Necesita entender las limitaciones.

### Respuesta Correcto

"Nuestro sistema proporciona métricas agregadas de recurrencia: podemos decirle qué porcentaje de sus visitantes son recurrentes y con qué frecuencia. Pero no podemos identificar individualspecíficos ni darle nombres de clientes frecuentes. Esa capacidad requeriría un sistema diferente con identificación."

---

## SECCIÓN 5 — EJERCICIO PRÁCTICO

### Ejercicio: Interpretar Métricas de Recurrencia

**Duración:** 20 minutos

**Instrucciones:**

Interprete los siguientes datos y proporcione insights:

1. 30% de tasa de recurrencia
2. Frecuencia promedio de 2.5 veces/mes
3. 15% de visitantes vienen más de 4 veces/mes

---

## SECCIÓN 6 — RÚBRICA DE EVALUACIÓN

| Dimensión | Peso |
|-----------|------|
| Precisión Conceptual | 40% |
| Disciplina del Lenguaje | 30% |
| Aplicación Práctica | 30% |

---

## SECCIÓN 7 — LMS MARKDOWN

```markdown
# DATA-06: Lógica de Recurrencia

## Objetivo
Comprender cómo el sistema estima recurrencia.

## Contenido
- Algoritmos probabilísticos
- Interpretación de métricas
- Limitaciones
```

---

## SECCIÓN 8 — ESQUEMA DE DIAPOSITIVAS

- Diapositiva 1: Título
- Diapositiva 2: Concepto
- Diapositiva 3: Cómo funciona
- Diapositiva 4: Escenario
- Diapositiva 5: Ejercicio
- Diapositiva 6: Evaluación

---

*Fin del Módulo DATA-06*
