# Differential Privacy Applied to Large Language Models (LLMs)

# Parte 2 — Differential Privacy in LLM Training and Inference

---

# Differential Privacy in LLM Training

## Introducción

Los Large Language Models (LLMs) modernos se entrenan utilizando volúmenes masivos de datos procedentes de fuentes heterogéneas:

- Sitios web públicos.
- Repositorios de código.
- Documentación empresarial.
- Bases de conocimiento.
- Conversaciones de usuarios.
- Datos sintéticos.
- Datos privados de organizaciones.

Aunque este enfoque permite construir modelos altamente competentes, también incrementa significativamente los riesgos relacionados con la privacidad.

Diversos estudios han demostrado que los modelos de lenguaje pueden memorizar fragmentos específicos de los datos de entrenamiento y reproducirlos posteriormente bajo determinadas condiciones. Este fenómeno resulta especialmente preocupante cuando los datos contienen información sensible o regulada.

La Privacidad Diferencial surge como uno de los mecanismos más sólidos para mitigar este problema durante el proceso de entrenamiento.

---

# ¿Por qué los LLMs presentan riesgos especiales de privacidad?

Los modelos fundacionales poseen características que amplifican los riesgos tradicionales del aprendizaje automático.

## Escala de datos

Los modelos actuales pueden entrenarse utilizando billones de tokens.

Cuanto mayor sea el volumen de datos:

- Mayor es la probabilidad de incluir información sensible.
- Más difícil resulta auditar los conjuntos de entrenamiento.
- Más compleja es la eliminación posterior de datos concretos.

---

## Sobreparametrización

Los LLMs modernos contienen desde miles de millones hasta cientos de miles de millones de parámetros.

Esta capacidad permite:

- Generalizar conocimiento.
- Aprender relaciones complejas.
- Memorizar ejemplos específicos.

La frontera entre generalización y memorización continúa siendo un área activa de investigación.

---

## Acceso abierto mediante lenguaje natural

A diferencia de sistemas tradicionales, un LLM puede ser interrogado mediante lenguaje natural.

Esto facilita la exploración automática por parte de atacantes.

Ejemplo:

```
Completa el siguiente correo electrónico:  Estimado cliente Juan García, Su número de cuenta es...
```

Múltiples consultas cuidadosamente diseñadas pueden aumentar las probabilidades de recuperar información memorizada.

---

## Persistencia del conocimiento

Una vez entrenado un modelo fundacional, eliminar información específica resulta extremadamente complejo.

Este problema se conoce frecuentemente como:

- Machine Unlearning.
- Selective Forgetting.
- Model Editing.

La investigación en estas áreas todavía se encuentra en desarrollo.

---

# Integración de Differential Privacy en el Pipeline de Entrenamiento

## Pipeline tradicional

Un proceso convencional de entrenamiento suele incluir:

```
Datos
   ↓
Tokenización
   ↓
Batching
   ↓
Forward Pass
   ↓
Cálculo de pérdida
   ↓
Backpropagation
   ↓
Actualización de pesos
```

En este flujo, los gradientes pueden revelar información relacionada con ejemplos individuales.

---

## Pipeline con Differential Privacy

La versión privada introduce mecanismos adicionales:

```
Datos
   ↓
Tokenización
   ↓
Batching
   ↓
Forward Pass
   ↓
Cálculo de pérdida
   ↓
Gradientes individuales
   ↓
Gradient Clipping
   ↓
Adición de ruido
   ↓
Privacy Accounting
   ↓
Actualización de pesos
```

El objetivo consiste en impedir que los gradientes reflejen con precisión la contribución de ejemplos concretos.

---

# Differentially Private Stochastic Gradient Descent (DP-SGD)

## Definición

DP-SGD es la técnica más utilizada para entrenar modelos neuronales bajo garantías de Privacidad Diferencial.

Fue introducida por:

- Martin Abadi
- Andy Chu
- Ian Goodfellow
- H. Brendan McMahan
- Ilya Mironov
- Kunal Talwar
- Li Zhang

en el trabajo:

"Deep Learning with Differential Privacy" (2016).

Actualmente continúa siendo la base de la mayoría de implementaciones prácticas.

---

# Funcionamiento de DP-SGD

DP-SGD modifica el algoritmo clásico SGD mediante tres mecanismos fundamentales:

1. Gradientes por ejemplo.
2. Gradient clipping.
3. Adición de ruido.

---

## Paso 1: Cálculo de gradientes individuales

En SGD tradicional:

```
Batch → Gradiente agregado 
```

En DP-SGD:

```
Ejemplo 1 → Gradiente
Ejemplo 2 → Gradiente
Ejemplo 3 → Gradiente
...
``` 

Cada muestra genera inicialmente su propio gradiente.

Esto permite controlar la influencia individual.

---

## Paso 2: Gradient Clipping

Cada gradiente se limita a una norma máxima predefinida.

Conceptualmente:

```
Si ||g|| > C 
entonces g ← g * C / ||g|| 
```

Donde:

- g = gradiente individual.
- C = umbral máximo.

---

### ¿Por qué es necesario?

Sin clipping:

Un único ejemplo podría generar una actualización enorme.

Con clipping:

La contribución individual queda acotada.

Esto permite calcular la sensibilidad del mecanismo.

---

## Paso 3: Adición de ruido

Tras el clipping:

Se agrega ruido gaussiano al gradiente agregado.

Conceptualmente:

```
Gradiente privado = Gradiente agregado + ruido 
```

El ruido suele seguir una distribución normal.

---

### Efecto del ruido

A medida que aumenta el ruido:

- Aumenta la privacidad.
- Disminuye la precisión.

A medida que disminuye el ruido:

- Aumenta la utilidad.
- Disminuye la privacidad.

Este equilibrio constituye uno de los principales desafíos del área.

---

# Privacy Accounting

## ¿Por qué es necesario?

Cada iteración consume parte del presupuesto de privacidad.

Por tanto:

```
Privacidad total ≠ Privacidad de una sola iteración 
```

Es necesario calcular la pérdida acumulada.

---

## Técnicas modernas

Las implementaciones actuales suelen utilizar:

### Moments Accountant

Introducido en el trabajo original de DP-SGD.

Reduce el sobrecoste asociado a la composición de mecanismos privados.

---

### Rényi Differential Privacy (RDP)

Actualmente es uno de los enfoques más utilizados.

Ventajas:

- Mejor precisión matemática.
- Composición más eficiente.
- Escalabilidad superior.

---

### Gaussian Differential Privacy (GDP)

Propuesta más reciente orientada a simplificar ciertos análisis teóricos.

Su adopción industrial todavía es limitada.

---

# Impacto de Differential Privacy en los LLMs

## Efectos positivos

### Reducción de memorización

Los estudios muestran que DP-SGD reduce significativamente la capacidad del modelo para recordar ejemplos específicos.

---

### Resistencia a ataques de privacidad

Se observa una disminución de la efectividad de:

- Membership Inference Attacks.
- Data Extraction Attacks.
- Training Data Reconstruction Attacks.

---

### Garantías cuantificables

A diferencia de técnicas heurísticas:

DP proporciona métricas matemáticas explícitas.

---

# Costes y trade-offs

## Reducción de precisión

Es uno de los efectos más conocidos.

Especialmente visible cuando:

- Los conjuntos de datos son pequeños.
- El presupuesto de privacidad es muy estricto.
- El modelo es extremadamente grande.

---

## Mayor tiempo de entrenamiento

DP-SGD requiere:

- Gradientes individuales.
- Clipping.
- Cálculos adicionales.

Esto incrementa el coste computacional.

---

## Mayor consumo de memoria

La necesidad de gestionar gradientes por ejemplo puede multiplicar los requisitos de memoria.

Este problema es especialmente relevante en modelos fundacionales.

---

# Differential Privacy en Foundation Models

## Un nuevo desafío

Las técnicas originales de DP fueron diseñadas para modelos mucho más pequeños.

Los Foundation Models actuales presentan:

- Miles de millones de parámetros.
- Billones de tokens.
- Infraestructuras distribuidas.

Esto genera problemas inéditos.

---

## Escalabilidad

Aplicar DP-SGD directamente sobre modelos gigantes resulta extremadamente costoso.

Problemas principales:

- Consumo de memoria.
- Coste energético.
- Tiempo de entrenamiento.
- Complejidad de sincronización distribuida.

---

## Degradación de calidad

La degradación suele afectar especialmente a:

- Razonamiento complejo.
- Generación de código.
- Comprensión contextual.
- Capacidades emergentes.

Por este motivo muchas organizaciones exploran enfoques híbridos.

---

# Estrategias Modernas para Foundation Models

## Fine-Tuning privado

En lugar de entrenar todo el modelo:

Se protege únicamente el ajuste fino.

Ventajas:

- Coste mucho menor.
- Mejor equilibrio utilidad-privacidad.

Ejemplo:

```
Foundation Model
        ↓
Private Fine-Tuning
        ↓
Modelo empresarial 
```

---

## LoRA + Differential Privacy

Low-Rank Adaptation (LoRA) permite entrenar únicamente un pequeño subconjunto de parámetros.

Combinado con DP:

- Reduce memoria.
- Reduce coste.
- Mejora escalabilidad.

Esta línea de investigación ha ganado relevancia desde 2023.

---

## Parameter-Efficient Fine-Tuning (PEFT)

Las técnicas PEFT son actualmente uno de los enfoques más prometedores para incorporar privacidad en modelos fundacionales.

Permiten:

- Menor coste computacional.
- Menor degradación de rendimiento.
- Entrenamiento privado más viable.

---

# Investigación Reciente en LLM Privacy

## Extracción de datos de entrenamiento

Diversos trabajos han demostrado que los LLMs pueden revelar ejemplos concretos bajo determinadas circunstancias.

Hallazgos relevantes:

- Los datos duplicados presentan mayor riesgo.
- Los ejemplos raros son más susceptibles a memorización.
- Los modelos más grandes no siempre son más seguros.

---

## Machine Unlearning

Busca eliminar conocimiento específico sin reentrenar completamente el modelo.

Problemas abiertos:

- Garantías insuficientes.
- Coste elevado.
- Dificultad de validación.

Actualmente sigue siendo un área activa de investigación.

---

## Privacy Auditing

Se están desarrollando herramientas para medir:

- Memorización.
- Riesgo de extracción.
- Riesgo de inferencia.

Todavía no existe un estándar universalmente aceptado.

---

# Differential Privacy During Inference

# ¿Puede aplicarse Differential Privacy durante la inferencia?

Sí, aunque de forma diferente al entrenamiento.

Durante la inferencia el problema principal ya no es proteger el conjunto de entrenamiento.

Ahora el objetivo suele ser proteger:

- Prompts.
- Datos corporativos.
- Consultas de usuarios.
- Contexto recuperado por RAG.

---

# Privacidad de Prompts

## Riesgos

Los prompts pueden contener:

- Historiales médicos.
- Contratos.
- Información financiera.
- Datos personales.

Si estos prompts se almacenan o utilizan para reentrenamiento pueden generar riesgos adicionales.

---

## Medidas habituales

### Anonimización

Eliminación de identificadores.

### Enmascaramiento

Sustitución de datos sensibles.

Ejemplo:

```
Juan Pérez 
```

↓

```
[CLIENTE]
```

### Differential Privacy local

El usuario añade ruido antes de enviar los datos.

Este enfoque se denomina:

Local Differential Privacy (LDP).

---

# Differential Privacy en Sistemas RAG

## Introducción

Retrieval-Augmented Generation (RAG) combina:

- Recuperación de documentos.
- Generación mediante LLM.

Pipeline simplificado:
```
Pregunta
 ↓
Retriever
 ↓
Documentos
 ↓
LLM
 ↓
Respuesta 
```

---

# Riesgos específicos de RAG

Los documentos recuperados pueden contener:

- PII.
- Información corporativa.
- Propiedad intelectual.
- Datos regulados.

---

# Aplicación de DP en RAG

## Protección del índice vectorial

La construcción del índice puede realizarse utilizando mecanismos privados.

---

## Protección de consultas

Las búsquedas pueden incorporar ruido.

Objetivo:

Ocultar las verdaderas intenciones del usuario.

---

## Protección de resultados

Los documentos recuperados pueden ser filtrados antes de ser enviados al LLM.

---

# Casos Empresariales

## Sector sanitario

Pregunta:

```
¿Cuál fue la evolución clínica de este paciente? 
```

Riesgo:

Exposición de historiales médicos.

Solución:

- RAG privado.
- DP en entrenamiento.
- Filtrado de respuestas.

---

## Sector financiero

Pregunta:

```
Muéstrame operaciones similares
```

Riesgo:

Exposición de transacciones.

Solución:

- Fine-Tuning privado.
- Índices protegidos.
- Auditoría continua.

---

## Administraciones públicas

Riesgo:

Acceso a expedientes ciudadanos.

Medidas:

- Differential Privacy.
- Controles de acceso.
- Confidential Computing.

---

# Differential Privacy en Entornos Empresariales

Actualmente la tendencia dominante consiste en combinar múltiples capas de protección:

```
Differential Privacy
     +
RAG Seguro
     +
Anonimización
     +
Confidential Computing
     +
Gobernanza de Datos 
```

La Privacidad Diferencial rara vez se utiliza de forma aislada.

En sistemas empresariales modernos suele formar parte de una arquitectura de defensa en profundidad.

---

# Conclusiones

La aplicación de Privacidad Diferencial al entrenamiento de LLMs representa una de las áreas más activas de investigación en seguridad y privacidad de la inteligencia artificial. Técnicas como DP-SGD proporcionan garantías matemáticas sólidas frente a ataques de extracción e inferencia, aunque introducen costes computacionales significativos y pueden afectar al rendimiento del modelo.

En modelos fundacionales, los principales retos actuales se centran en la escalabilidad, la preservación de la calidad y la integración con técnicas de ajuste eficiente como LoRA y PEFT. Durante la inferencia, la atención se desplaza hacia la protección de prompts, consultas empresariales y sistemas RAG, donde la Privacidad Diferencial puede complementar otras tecnologías de protección de datos.

La evidencia científica disponible sugiere que la Privacidad Diferencial seguirá siendo uno de los pilares fundamentales para el desarrollo de sistemas de IA confiables, especialmente en sectores altamente regulados como salud, finanzas y administración pública. Sin embargo, la investigación continúa evolucionando y todavía existen importantes desafíos abiertos relacionados con modelos multimodales, agentes autónomos y sistemas fundacionales de próxima generación.