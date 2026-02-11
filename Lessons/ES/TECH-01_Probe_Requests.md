# MÓDULO DE APRENDIZAJE INSTITUCIONAL

## TECH-01: Entender Fundamentos de Probe Requests

---

## SECCIÓN 0 — METADATOS

| Campo | Valor |
|-------|-------|
| **Card_ID** | TECH-01 |
| **Layer** | Technical |
| **Role_Scope** | Technical |
| **Critical** | No |
| **Dependencies** | DATA-01 |
| **Version** | v1.0-content |
| **Fuente** | So69_AITANNA_CARDS_Repository_FULL_v1.0.xlsx |

---

## SECCIÓN 1 — PROPÓSITO ESTRATÉGICO

### Español (Primario)

Este módulo explica los fundamentos técnicos de los probe requests, que son señales emitidas por dispositivos móviles que pueden ser detectadas por sensores para estimar presencia y tráfico.

### English (Controlled Translation)

This module explains the technical fundamentals of probe requests, which are signals emitted by mobile devices that can be detected by sensors to estimate presence and traffic.

---

## SECCIÓN 2 — VINCULACIÓN FUNDACIONAL

### Módulo(es) del Bootcamp de Referencia

Este módulo aplica:

- **DATA-01**: Captura de señales

---

## SECCIÓN 3 — EXPLICACIÓN NUCLEAR

### 3.1 Concepto

Probe requests son paquetes de datos que dispositivos móviles envían buscando redes WiFi. Contienen identificadores únicos (MAC address) que pueden ser detectados por sensores especializados.

### 3.2 Limitaciones

| Aspecto | Limitación |
|---------|------------|
| Identificación | No es identificación personal |
| Cobertura | Solo dispositivos con WiFi activado |
| Privacidad | MACs son pseudonimizados |

---

## SECCIÓN 4 — ESCENARIO EJECUTIVO

### Situación de Presión

Un técnico pregunta: "¿Por qué el conteo no matchea con la realidad?"

### Respuesta Correcto

"Probe requests tienen limitaciones: no todos los dispositivos los envían, el rango de detección es limitado, y algunos dispositivos spoofean sus MACs. El sistema proporciona estimaciones, no conteos perfectos. Para mejorar precisión,，我们需要增加传感器数量或位置优化."

---

## SECCIÓN 5 — EJERCICIO PRÁCTICO

### Ejercicio: Entender Limitaciones

**Duración:** 20 minutos

**Instrucciones:**

Explique por qué el conteo puede diferir en:

1. Área con muchos visitantes mayores
2. Ubicación con mucha interferencia
3. Hora pico con muchos dispositivos

---

## SECCIÓN 6 — RÚBRICA DE EVALUACIÓN

| Dimensión | Peso |
|-----------|------|
| Precisión Conceptual | 45% |
| Aplicación Práctica | 35% |
| Disciplina del Lenguaje | 20% |

---

## SECCIÓN 7 — LMS MARKDOWN

```markdown
# TECH-01: Fundamentos de Probe Requests

## Objetivo
Comprender la tecnología de detección.

## Contenido
- Concepto
- Limitaciones
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

*Fin del Módulo TECH-01*
