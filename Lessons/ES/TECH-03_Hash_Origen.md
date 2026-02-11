# MÓDULO DE APRENDIZAJE INSTITUCIONAL

## TECH-03: Explicar Proceso de Hash en Origen

---

## SECCIÓN 0 — METADATOS

| Campo | Valor |
|-------|-------|
| **Card_ID** | TECH-03 |
| **Layer** | Technical |
| **Role_Scope** | Technical |
| **Critical** | No |
| **Dependencies** | COMP-01 |
| **Version** | v1.0-content |
| **Fuente** | So69_AITANNA_CARDS_Repository_FULL_v1.0.xlsx |

---

## SECCIÓN 1 — PROPÓSITO ESTRATÉGICO

### Español (Primario)

Este módulo explica el proceso de hashing que se aplica a los identificadores de dispositivos en el punto de captura (origen), asegurando que nunca se almacenen identificadores sin procesar y protegiendo la privacidad.

### English (Controlled Translation)

This module explains the hashing process applied to device identifiers at the point of capture (origin), ensuring that unprocessed identifiers are never stored and protecting privacy.

---

## SECCIÓN 2 — VINCULACIÓN FUNDACIONAL

### Módulo(es) del Bootcamp de Referencia

Este módulo aplica:

- **COMP-01**: Privacidad por Diseño

---

## SECCIÓN 3 — EXPLICACIÓN NUCLEAR

### 3.1 Proceso de Hash

| Paso | Descripción |
|------|-------------|
| Captura | Dispositivo emite señal con MAC |
| Hash en origen | MAC se convierte a valor hash inmediatamente |
| Almacenamiento | Solo el hash se guarda, nunca el MAC original |
| Procesamiento | Los hashes se usan para análisis agregados |

### 3.2 Beneficios de Privacidad

- No es posible revertir el hash al MAC original
- No hay manera de identificar dispositivos específicos
- El proceso es automático y no requiere intervención humana

---

## SECCIÓN 4 — ESCENARIO EJECUTIVO

### Situación de Presión

Un auditor pregunta: "¿Cómo puedo estar seguro de que no almacenan identificadores de dispositivos?"

### Respuesta Correcto

"El sistema implementa hash en origen: en el momento en que se captura la señal del dispositivo, el MAC se transforma en un hash antes de cualquier almacenamiento. No existe ningún punto en el sistema donde el MAC original se guarde. Podemos mostrar la arquitectura que demuestra esto."

---

## SECCIÓN 5 — EJERCICIO PRÁCTICO

### Ejercicio: Explicar Hash

**Duración:** 20 minutos

**Instrucciones:**

Explique el proceso de hash en origen a:

1. Cliente preocupado por privacidad
2. Auditor técnico
3. Equipo de compliance

---

## SECCIÓN 6 — RÚBRICA DE EVALUACIÓN

| Dimensión | Peso |
|-----------|------|
| Precisión Conceptual | 40% |
| Conciencia de Cumplimiento | 35% |
| Aplicación Práctica | 25% |

---

## SECCIÓN 7 — LMS MARKDOWN

```markdown
# TECH-03: Hash en Origen

## Objetivo
Entender la protección de privacidad técnica.

## Contenido
- Proceso de hash
- Beneficios
- Ejercicios
```

---

## SECCIÓN 8 — ESQUEMA DE DIAPOSITIVAS

- Diapositiva 1: Título
- Diapositiva 2: Proceso
- Diapositiva 3: Beneficios
- Diapositiva 4: Escenario
- Diapositiva 5: Ejercicio
- Diapositiva 6: Evaluación

---

*Fin del Módulo TECH-03*
