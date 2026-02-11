# COMP-04: Aplicar Principio de Minimización de Datos

---

# SECCIÓN 0 — METADATOS

| Campo | Valor |
|-------|-------|
| **Card_ID** | COMP-04 |
| **Capa/Layer** | Compliance |
| **Rol Aplicable/Applicable Role** | All |
| **Crítica (Sí/No)/Critical (Yes/No)** | No |
| **Dependencias/Dependencies** | COMP-01 |
| **Versión/Version** | v1.0-content |
| **Fecha de Actualización/Last Updated** | 2026-02-12 |
| **Autor/Owner** | MiniMax Agent |

---

# SECCIÓN 1 — PROPÓSITO ESTRATÉGICO

## 1.1 ¿Por qué existe esta tarjeta?

Esta tarjeta existe porque el principio de minimización de datos es uno de los pilares del GDPR. Procesar solo los datos necesarios reduce el riesgo legal, los costos de almacenamiento, y la complejidad de gestión.

This card exists because the principle of data minimization is one of the GDPR pillars. Processing only necessary data reduces legal risk, storage costs, and management complexity.

## 1.2 ¿Qué riesgo mitiga?

Mitiga el riesgo de procesar datos excesivos que no son necesarios para el propósito, creando exposición legal innecesaria. También mitiga el riesgo de costos crecientes de almacenamiento sin valor corresponding.

It mitigates the risk of processing excessive data that is not necessary for the purpose, creating unnecessary legal exposure. It also mitigates the risk of increasing storage costs without corresponding value.

---

# SECCIÓN 2 — VÍNCULO FUNDACIONAL

## 2.1 Conceptos previos necesarios

- **COMP-01: Privacidad por Diseño** — Arquitectura de protección

---

# SECCIÓN 3 — EXPLICACIÓN CENTRAL

## 3.1 Definición del Concepto

**Español:**

El Principio de Minimización de Datos establece que solo se deben recopilar los datos personales necesarios para el propósito específico del procesamiento. Esto incluye:

1. **Adecuación:** Los datos recopilados deben ser apropiados para el propósito
2. **Necesidad:** Cada dato debe ser necesario, no simplemente útil
3. **Limitación:** No recopilar datos "por si acaso"

**Aplicación práctica:**

1. **Evaluar cada campo de datos:** ¿Es necesario para el propósito?
2. **Evitar campos opcionales innecesarios:** Si no se usa, no recopilarlos
3. **Revisar periódicamente:** ¿Todavía necesitamos todos los datos?
4. **Eliminar datos innecesarios:** No guardar lo que no se usa

**English:**

The Data Minimization Principle establishes that only personal data necessary for the specific processing purpose should be collected. This includes:

1. **Adequacy:** Collected data must be appropriate for the purpose
2. **Necessity:** Each datum must be necessary, not simply useful
3. **Limitation:** Don't collect data "just in case"

**Practical application:**

1. **Evaluate each data field:** Is it necessary for the purpose?
2. **Avoid unnecessary optional fields:** If not used, don't collect
3. **Review periodically:** Do we still need all the data?
4. **Delete unnecessary data:** Don't keep what isn't used

---

# SECCIÓN 4 — ESCENARIO EJECUTIVO

## Situación

El equipo de Producto propone agregar campos adicionales al formulario de registro de clientes: fecha de nacimiento, género, código postal. "Nunca sabes cuándo podrían ser útiles," dice el Product Manager.

## Tensión

La tensión surge porque la propuesta viola el principio de minimización. Agregar campos "por si acaso" crea datos excesivos sin propósito inmediato.

## Respuesta correcta

La respuesta correcta evalúa necesidad:

1. "¿Qué propósito específico justifica cada campo?"
2. "¿El usuario tiene expectativa razonable de proporcionar esos datos?"
3. "¿Cómo se usarán estos datos para mejorar su experiencia?"
4. "Si no podemos demostrar necesidad, no deberíamos recopilarlos"

---

# SECCIÓN 5 — PATRONES DE FALLO

## Patrón 1: Recopilar por si acaso

**Error:** Agregar campos "por si acaso" son útiles.

**Risk:** Datos innecesarios que crean exposición.

## Patrón 2: No revisar datos existentes

**Error:** Guardar datos históricos sin evaluar si todavía son necesarios.

**Risk:** Acumulación de datos obsoletos.

---

# SECCIÓN 6 — EJERCICIO PRÁCTICO

## Descripción

**Tiempo:** 30 minutos

**Tipo:** Auditoría de datos

**Deliverable:** Revisar un formulario existente y proponer eliminación de campos innecesarios.

---

# SECCIÓN 7 — RÚBRICA DE EVALUACIÓN

| Dimensión | Nivel 1 | Nivel 2 | Nivel 3 | Nivel 4 |
|-----------|---------|---------|---------|---------|
| **Conciencia de Compliance** | No entiende el principio | Entiende lo básico | Aplica correctamente | Implementa proceso |

---

# SECCIÓN 8 — RUTA DE REFUERZO

**Necesidad de aplicación → COMP-06:** Explicar separación de finalidades.

---

# SECCIÓN 10 — EXPORTACIÓN LMS MARKDOWN

```markdown
# COMP-04: Minimización de Datos

## Metadatos
- **Card ID:** COMP-04
- **Capa:** Compliance
- **Crítica:** No
- **Dependencias:** COMP-01
```

---

# SECCIÓN 11 — ESQUEMA DE DIAPOSITIVAS

1. **Título:** COMP-04: Minimización de Datos
2. **Marco:** Por qué el principio importa
3. **Definición y aplicación**
4. **Evaluación de campos**
5. **Escenario:** Formulario de registro
6. **Ejercicio:** Auditoría de datos
