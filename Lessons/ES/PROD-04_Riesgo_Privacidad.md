# MÓDULO DE APRENDIZAJE INSTITUCIONAL

## PROD-04: Evaluar Riesgo de Privacidad en Funcionalidades

---

## SECCIÓN 0 — METADATOS

| Campo | Valor |
|-------|-------|
| **Card_ID** | PROD-04 |
| **Layer** | Product |
| **Role_Scope** | Product |
| **Critical** | No |
| **Dependencies** | COMP-01 |
| **Version** | v1.0-content |
| **Fuente** | So69_AITANNA_CARDS_Repository_FULL_v1.0.xlsx |

---

## SECCIÓN 1 — PROPÓSITO ESTRATÉGICO

### Español (Primario)

Este módulo desarrolla la capacidad de evaluar riesgos de privacidad en nuevas funcionalidades antes de que se desarrollen, identificando potenciales problemas de compliance y proponiendo mitigaciones.

### English (Controlled Translation)

This module develops the capability to evaluate privacy risks in new functionalities before they are developed, identifying potential compliance issues and proposing mitigations.

---

## SECCIÓN 2 — VINCULACIÓN FUNDACIONAL

### Módulo(es) del Bootcamp de Referencia

Este módulo integra:

- **COMP-01**: Privacidad por Diseño

---

## SECCIÓN 3 — EXPLICACIÓN NUCLEAR

### 3.1 Framework de Evaluación

| Pregunta | Propósito |
|----------|-----------|
| ¿Identifica individuos? | Determina si cruza la frontera |
| ¿Almacena datos personales? | Evalúa riesgo de brecha |
| ¿Comparte con terceros? | Requiere consentimiento |
| ¿Retiene más de lo necesario? | Evalúa minimización |

### 3.2 Ejemplo de Evaluación

| Feature Propuesta | Riesgo | Mitigación |
|-------------------|--------|------------|
| "Guardar historial por 2 años" | Alto - retención innecesaria | Reducir a 90 días |
| "Compartir datos con analytics" | Medio - terceros | Anonimizar primero |
| "Identificar clientes VIP" | Alto - identificación | No implementar |

---

## SECCIÓN 4 — ESCENARIO EJECUTIVO

### Situación de Presión

Un equipo propone: "Guardemos video para poder hacer replay de patrones de tráfico."

### Respuesta Correcto

"Alto riesgo. Guardar video implica: datos personales (imágenes), retención indefinida potencial, riesgo de acceso no autorizado. Preguntas: ¿Realmente necesitamos video? ¿Podemos lograr lo mismo con métricas? Si es necesario, ¿podemos procesar en tiempo real y no guardar?"

---

## SECCIÓN 5 — EJERCICIO PRÁCTICO

### Ejercicio: Evaluar Riesgos

**Duración:** 25 minutos

**Instrucciones:**

Evalúe el riesgo de privacidad de:

1. "Notificaciones push a visitantes frecuentes"
2. "Exportar datos por zona a CSV"
3. "API para que sistemas externos accedan datos"

---

## SECCIÓN 6 — RÚBRICA DE EVALUACIÓN

| Dimensión | Peso |
|-----------|------|
| Conciencia de Cumplimiento | 45% |
| Precisión Conceptual | 30% |
| Aplicación Práctica | 25% |

---

## SECCIÓN 7 — LMS MARKDOWN

```markdown
# PROD-04: Riesgo de Privacidad

## Objetivo
Evaluar privacy risks en features.

## Contenido
- Framework de evaluación
- Ejemplos
- Ejercicios
```

---

## SECCIÓN 8 — ESQUEMA DE DIAPOSITIVAS

- Diapositiva 1: Título
- Diapositiva 2: Framework
- Diapositiva 3: Ejemplos
- Diapositiva 4: Escenario
- Diapositiva 5: Ejercicio
- Diapositiva 6: Evaluación

---

*Fin del Módulo PROD-04*
