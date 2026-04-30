# Salma Siqueiros Morales - Inyección de Prompt

---

## Prompt 1: Entender el concepto base

```
Eres un experto en ciberseguridad especializado en LLMs.

Explícame qué es la inyección de prompt (prompt injection) y por qué 
es estructuralmente difícil de resolver en los modelos de lenguaje 
actuales. Incluye:

- Una definición técnica clara
- La razón fundamental por la que los LLMs son vulnerables
- La diferencia entre inyección directa e indirecta
- Por qué no es tan simple como "filtrar palabras clave"

Usa ejemplos concretos y evita lenguaje demasiado genérico.
```

---

## Prompt 2: Casos reales recientes

```
Dame un análisis detallado del caso "Clinejection" de febrero 2026:

- ¿Qué herramienta fue afectada y cuál era su función?
- ¿Cómo funcionó la cadena de ataque paso a paso?
- ¿Cuántos usuarios fueron afectados y durante cuánto tiempo?
- ¿Qué falló a nivel de diseño, no solo a nivel técnico?
- ¿Qué lecciones concretas deja para developers que usan agentes de IA?

Quiero que el análisis sea técnico pero comprensible para un developer 
senior que no es especialista en seguridad.
```

---

## Prompt 3: Impacto regulatorio

```
¿Cómo se relaciona la vulnerabilidad de prompt injection con el GDPR 
y el EU AI Act?

Específicamente:
- ¿En qué categoría de riesgo del EU AI Act caería un sistema vulnerable 
  a prompt injection si maneja datos personales?
- ¿Qué obligaciones del GDPR se podrían violar si un atacante exfiltra 
  datos personales mediante esta técnica?
- ¿Existe algún framework de cumplimiento que incluya prompt injection 
  explícitamente?

Dame ejemplos concretos, no respuestas genéricas.
```

---

## Prompt 4: Buenas prácticas para developers

```
Como developer que construye una aplicación que integra un LLM mediante 
API (por ejemplo, usando Claude o GPT-4), ¿qué medidas concretas debo 
implementar para reducir el riesgo de inyección de prompt?

Quiero:
- Prácticas ordenadas de mayor a menor impacto
- Ejemplos de código Python o pseudocódigo donde aplique
- Qué no hacer (antipatrones comunes)
- Cómo aplicar el principio de mínimo privilegio a agentes de IA

Contexto: mi aplicación permite a usuarios subir documentos que el LLM 
analiza y sobre los que puede ejecutar acciones automatizadas.
```

---

## Prompt 5: Verificación de alucinaciones

```
He encontrado las siguientes afirmaciones sobre prompt injection. 
Por favor, verifica cuáles son precisas, cuáles están exageradas y 
cuáles son incorrectas, citando fuentes confiables donde puedas:

1. "La inyección de prompt tiene tasas de éxito de hasta el 84% en sistemas sin protección"
2. "OWASP la clasifica como la vulnerabilidad #1 en aplicaciones LLM desde 2025"
3. "Es imposible de resolver porque los LLMs no pueden distinguir instrucciones de datos"
4. "El caso Clinejection afectó a 40,000 desarrolladores en 2026"
5. "Usar prompt engineering defensivo reduce la tasa de éxito a menos del 15%"

Sé preciso: indica si la fuente es sólida, si el número está aproximado, 
o si hay matices importantes que el dato original omite.
```
