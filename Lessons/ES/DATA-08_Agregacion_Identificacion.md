# MÓDULO DE APRENDIZAJE INSTITUCIONAL

## DATA-08: Explicar Frontera Agregación vs. Identificación

---

## SECCIÓN 0 — METADATOS

| Campo | Valor |
|-------|-------|
| **Card_ID** | DATA-08 |
| **Layer** | Data |
| **Role_Scope** | All |
| **Critical** | Sí |
| **Dependencies** | DATA-02 |
| **Version** | v1.0-content |
| **Fuente** | So69_AITANNA_CARDS_Repository_FULL_v1.0.xlsx |

---

## SECCIÓN 1 — PROPÓSITO ESTRATÉGICO

### Español (Primario)

Este módulo crítico establece la distinción fundamental entre agregación e identificación, que es el principio central de privacidad del sistema So69/AITANNA. La comprensión profunda de esta frontera es esencial para todas las decisiones relacionadas con el sistema, desde comunicación con clientes hasta diseño de features. Esta distinción define qué hace el sistema y qué no puede hacer.

### English (Controlled Translation)

This critical module establishes the fundamental distinction between aggregation and identification, which is the central privacy principle of the So69/AITANNA system. Deep understanding of this frontier is essential for all system-related decisions, from customer communication to feature design. This distinction defines what the system can and cannot do.

---

## SECCIÓN 2 — VINCULACIÓN FUNDACIONAL

### Módulo(es) del Bootcamp de Referencia

Este módulo es fundamental para:

- **Día 1 del Bootcamp**: Agregación vs. identificación
- **CORE-02**: OBI y sus límites
- **COMP-01**: Privacidad por Diseño

---

## SECCIÓN 3 — EXPLICACIÓN NUCLEAR

### 3.1 Definición del Concepto

**Español:**

Agregación significa combinar datos de múltiples eventos o personas para generar estadísticas sobre grupos, sin identificar individuos específicos. Identificación significa vincular datos a una persona específica. La frontera entre ambos es crítica: agregación = insights sobre patrones; identificación = información sobre personas. So69/AITANNA trabaja exclusivamente en el lado de agregación. El sistema puede decir "450 visitantes estuvo en la Zona A" pero NO puede decir "Juan Pérez estuvo en la Zona A".

**English Translation:**

Aggregation means combining data from multiple events or people to generate statistics about groups, without identifying specific individuals. Identification means linking data to a specific person. The boundary between both is critical: aggregation = insights about patterns; identification = information about persons. So69/AITANNA works exclusively on the aggregation side. The system can say "450 visitors were in Zone A" but CANNOT say "Juan Pérez was in Zone A".

### 3.2 Límites Claros

| Agregación (Permitido) | Identificación (No Permitido) |
|------------------------|------------------------------|
| "450 visitantes" | "Juan Pérez vino" |
| "23% de recurrence" | "Pedro es recurrente" |
| "Zona A tiene alto tráfico" | "María estuvo en Zona A" |
| "Patrón de hora pico" | "Carlos llegó a las 3pm" |

---

## SECCIÓN 4 — ESCENARIO EJECUTIVO

### Situación de Presión

Un cliente propone: "Queremos que el sistema envíe un cupón a los clientes que visitaron más de 5 veces este mes." Esto requiere identificación.

### Ejemplo de Respuesta Incorrecta

"Claro, podemos configurar eso. El sistema puede identificar clientes frecuentes y enviarles ofertas."

**Por qué esta respuesta falla:**

Esta respuesta confunde agregación con identificación y promete capacidades que el sistema no tiene.

### Modelo de Respuesta Correcto

"Esa funcionalidad requeriría un sistema diferente. Nuestro sistema puede decirle que 'el 15% de los visitantes vienen más de 5 veces al mes' como métrica agregada, pero no puede identificar a esas personas específicas ni enviarles mensajes individualizados.

Para hacer lo que usted describe, necesitaría: un sistema de identificación (APP, registro), consentimiento de los clientes, y la infraestructura de comunicación correspondiente. No es una extensión de nuestro sistema, es un sistema diferente."

---

## SECCIÓN 5 — PATRONES DE FALLO

### Patrón 1: La Tentación de Identificación

**Descripción:** Proponer usar datos agregados para identificar individuos.

**Riesgo:** Cruzar la frontera prohibida.

### Patrón 2: Comunicación Inexacta

**Descripción:** Usar lenguaje que implica identificación.

**Riesgo:** Crear expectativas incorrectas.

### Patrón 3: Diseño de Features Inadecuado

**Descripción:** Diseñar features que requieren identificación.

**Riesgo:** Sistema que no puede cumplir lo diseñado.

---

## SECCIÓN 6 — EJERCICIO PRÁCTICO

### Ejercicio: Clasificación de Capabilidades

**Duración:** 30 minutos

**Instrucciones:**

Clasifique cada solicitud como agregación (posible) o identificación (no posible):

1. "¿Cuántas personas visitaron la zona de entrada?"
2. "¿Qué clientes vinieron ayer?"
3. "¿Cuál es el porcentaje de visitantes recurrentes?"
4. "¿Podemos enviar un mensaje a los visitantes frecuentes?"
5. "¿Qué zonas tienen más tráfico los domingos?"

---

## SECCIÓN 7 — RÚBRICA DE EVALUACIÓN

### Dimensiones de Evaluación

| Dimensión | Peso |
|-----------|------|
| Precisión Conceptual | 40% |
| Disciplina del Lenguaje | 30% |
| Aplicación Práctica | 30% |

### Condición Crítica

Como tarjeta CRÍTICA, DATA-08 requiere mínimo 90% en Precisión Conceptual para aprobar. No se permite ninguna confusión entre agregación e identificación.

---

## SECCIÓN 8 — RUTA DE REFUERZO

| Tipo de Falla | Card_ID de Refuerzo |
|---------------|---------------------|
| **Conceptual** | COMP-01 |
| **Lenguaje** | LANG-02 |

---

## SECCIÓN 9 — LMS MARKDOWN

```markdown
# DATA-08: Frontera Agregación vs. Identificación

## Objetivo
Dominar la distinción fundamental de privacidad.

## Contenido
- Definición de agregación
- Definición de identificación
- Límites del sistema
- Casos prácticos
```

---

## SECCIÓN 10 — ESQUEMA DE DIAPOSITIVAS

### Diapositiva 1: Título
**DATA-08: Frontera Agregación vs. Identificación**

### Diapositiva 2: Framing
El principio central de So69/AITANNA

### Diapositiva 3: Concepto
¿Qué es agregación? ¿Qué es identificación?

### Diapositiva 4: Escenario
"¿Pueden identificar clientes frecuentes?"

### Diapositiva 5: Ejercicio
Clasificar capacidades

### Diapositiva 6: Evaluación
Rúbrica crítica

---

*Fin del Módulo DATA-08*
