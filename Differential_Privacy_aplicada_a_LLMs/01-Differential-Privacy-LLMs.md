# Differential Privacy Applied to Large Language Models (LLMs)

## Executive Summary

La rápida adopción de los Large Language Models (LLMs) ha transformado la forma en que las organizaciones desarrollan sistemas de inteligencia artificial para generación de texto, análisis documental, asistentes conversacionales y automatización de procesos. Sin embargo, estos avances también han incrementado las preocupaciones relacionadas con la privacidad de los datos utilizados durante el entrenamiento y la operación de estos modelos.

La Privacidad Diferencial (Differential Privacy, DP) es una de las técnicas más sólidas y estudiadas para proteger la información sensible durante el análisis de datos y el entrenamiento de modelos de aprendizaje automático. Su objetivo principal es garantizar que la participación de un individuo concreto en un conjunto de datos tenga un impacto limitado y cuantificable sobre el resultado final de un algoritmo.

En el contexto de los LLMs, la Privacidad Diferencial permite reducir el riesgo de que el modelo memorice y revele información confidencial, como nombres, direcciones, historiales médicos o datos financieros presentes en los datos de entrenamiento.

### Beneficios principales

- Proporciona garantías matemáticas formales de privacidad.
- Reduce el riesgo de filtración de información sensible.
- Facilita el cumplimiento normativo en entornos regulados.
- Incrementa la confianza de usuarios y organizaciones.
- Permite compartir conocimiento estadístico sin exponer registros individuales.

### Desafíos principales

- Puede degradar la precisión y calidad del modelo.
- Incrementa el coste computacional del entrenamiento.
- Resulta especialmente compleja de aplicar en modelos con miles de millones de parámetros.
- Requiere una gestión cuidadosa del presupuesto de privacidad.
- Existen limitaciones prácticas en escenarios de entrenamiento a gran escala.

A medida que los modelos fundacionales continúan creciendo en tamaño y capacidad, la Privacidad Diferencial se posiciona como una de las tecnologías más relevantes para construir sistemas de IA confiables, responsables y alineados con los requisitos regulatorios actuales y futuros.

---

# Introduction

## ¿Qué significa privacidad en Machine Learning?

La privacidad en Machine Learning hace referencia al conjunto de técnicas, procesos y mecanismos destinados a evitar que la información sensible utilizada durante el entrenamiento o inferencia de un modelo pueda ser identificada, recuperada o inferida por terceros.

Un sistema puede ser funcionalmente correcto y, al mismo tiempo, representar un riesgo de privacidad si expone información sobre las personas cuyos datos fueron utilizados para entrenarlo.

Por ejemplo:

- Un modelo médico podría revelar diagnósticos específicos de pacientes.
- Un asistente conversacional podría reproducir correos electrónicos incluidos accidentalmente en los datos de entrenamiento.
- Un modelo financiero podría exponer información sobre transacciones reales.

La protección de la privacidad busca evitar este tipo de situaciones sin impedir que el modelo aprenda patrones útiles.

---

## ¿Por qué la privacidad es una preocupación crítica en los LLMs?

Los LLMs modernos se entrenan utilizando cantidades masivas de información procedente de múltiples fuentes:

- Sitios web.
- Documentación corporativa.
- Bases de datos internas.
- Repositorios de código.
- Conversaciones de usuarios.
- Registros empresariales.

Esta enorme escala incrementa significativamente la superficie de riesgo.

Los modelos actuales contienen miles de millones o incluso billones de parámetros capaces de capturar patrones extremadamente complejos. En determinadas circunstancias, dichos modelos pueden memorizar fragmentos específicos de los datos de entrenamiento en lugar de aprender únicamente patrones generales.

Cuando esto ocurre, existe la posibilidad de que información sensible aparezca posteriormente durante la inferencia.

---

## Riesgos de privacidad asociados a los LLMs

### Memorización accidental

El modelo almacena información específica observada durante el entrenamiento.

Ejemplo:

Un modelo entrenado sobre documentación interna podría recordar números de teléfono corporativos o identificadores de clientes.

---

### Extracción de datos mediante consultas

Un atacante puede diseñar secuencias de instrucciones (prompts) destinadas a recuperar información aprendida durante el entrenamiento.

Ejemplo:

Solicitar repetidamente la continuación de frases específicas hasta obtener datos sensibles.

---

### Ataques de inferencia

Incluso sin recuperar directamente un dato, un atacante puede determinar si una persona concreta formó parte del conjunto de entrenamiento.

---

### Filtraciones indirectas

Información aparentemente inocua puede combinarse con otras fuentes para reconstruir datos sensibles.

---

### Riesgos regulatorios

Las organizaciones pueden enfrentarse a incumplimientos relacionados con:

- Reglamento General de Protección de Datos (RGPD).
- Leyes nacionales de privacidad.
- Regulaciones sanitarias.
- Normativas financieras.

---

# Background Concepts

## Personally Identifiable Information (PII)

La Información Personalmente Identificable (PII) incluye cualquier dato que permita identificar directa o indirectamente a una persona.

### Ejemplos

Identificación directa:

- Nombre completo.
- DNI.
- Número de pasaporte.
- Correo electrónico.

Identificación indirecta:

- Dirección postal.
- Fecha de nacimiento.
- Código postal.
- Historial laboral.

### Ejemplo práctico

Si un modelo genera:

> "Juan Pérez vive en la Calle Mayor 15"

estaría exponiendo PII de forma explícita.

---

## Data Leakage

La filtración de datos (Data Leakage) ocurre cuando información sensible es expuesta de forma involuntaria.

Puede suceder:

- Durante el entrenamiento.
- Durante la inferencia.
- Durante la evaluación.
- A través de registros de auditoría.

### Ejemplo práctico

Una organización utiliza correos electrónicos reales para entrenar un asistente corporativo.

Posteriormente, el modelo reproduce fragmentos literales de dichos correos.

Esto constituye una filtración de datos.

---

## Memorization in LLMs

La memorización ocurre cuando el modelo almacena ejemplos concretos en lugar de aprender patrones generales.

No toda memorización representa un problema.

### Memorización útil

Aprender:

- Gramática.
- Sintaxis.
- Conocimiento general.

### Memorización problemática

Recordar:

- Números de tarjetas.
- Historiales médicos.
- Contraseñas.
- Conversaciones privadas.

### Ejemplo

Un modelo que reproduce exactamente una historia clínica está mostrando memorización indeseada.

---

## Membership Inference Attacks

Los ataques de inferencia de pertenencia intentan determinar si un individuo concreto participó en el entrenamiento del modelo.

### Pregunta típica del atacante

> ¿Formaba parte esta persona del conjunto de entrenamiento?

### Riesgo

Incluso sin recuperar datos explícitos, conocer la participación de una persona puede revelar información sensible.

### Ejemplo

Determinar si una persona aparece en una base de datos médica especializada podría sugerir la existencia de una enfermedad determinada.

---

## Model Inversion Attacks

Los ataques de inversión de modelos intentan reconstruir información original a partir de las salidas del sistema.

### Objetivo

Reconstruir:

- Imágenes.
- Texto.
- Características personales.
- Datos biométricos.

### Ejemplo

A partir de las respuestas de un modelo entrenado sobre imágenes faciales, un atacante podría aproximar la apariencia de individuos presentes en el entrenamiento.

---

## Privacy-Preserving Machine Learning

El aprendizaje automático preservando la privacidad engloba un conjunto de técnicas destinadas a entrenar modelos sin comprometer información sensible.

### Principales enfoques

- Differential Privacy.
- Federated Learning.
- Secure Multi-Party Computation.
- Homomorphic Encryption.
- Confidential Computing.
- Synthetic Data Generation.

Cada técnica aborda el problema desde una perspectiva distinta y presenta ventajas y limitaciones específicas.

---

# What is Differential Privacy?

## Definición formal

La Privacidad Diferencial es una propiedad matemática que limita cuánto puede cambiar la salida de un algoritmo cuando se añade o elimina un único individuo del conjunto de datos.

De forma simplificada:

> La presencia o ausencia de una persona concreta no debería afectar significativamente al resultado observable del sistema.

Formalmente:

Pr[M(D)=o] \le e^{\epsilon} Pr[M(D')=o] + \delta

Donde:

- (D) y (D') son conjuntos de datos vecinos.
- (M) representa el mecanismo privado.
- (\epsilon) es el parámetro de privacidad.
- (\delta) representa la probabilidad de una desviación excepcional.

---

## Explicación intuitiva

Imaginemos una encuesta sobre salarios.

Si eliminamos la respuesta de una persona y volvemos a ejecutar el análisis, los resultados deberían ser prácticamente iguales.

De esta forma, un observador externo no puede determinar si dicha persona participó o no en la encuesta.

La Privacidad Diferencial formaliza esta idea mediante mecanismos matemáticos rigurosos.

---

## Antecedentes históricos

La Privacidad Diferencial fue introducida en 2006 por:

- Cynthia Dwork
- Frank McSherry
- Kobbi Nissim
- Adam Smith

El objetivo inicial era permitir la publicación segura de estadísticas agregadas sin comprometer la privacidad individual.

Con el tiempo, la técnica evolucionó para aplicarse a:

- Machine Learning.
- Deep Learning.
- Analítica de datos.
- Sistemas de recomendación.
- Modelos fundacionales.

---

## Objetivos principales

### Protección individual

Reducir el riesgo para cada participante.

### Garantías matemáticas

Proporcionar métricas cuantificables.

### Compartición segura

Permitir el uso de datos sin exponer registros concretos.

### Cumplimiento normativo

Facilitar el cumplimiento de marcos regulatorios.

---

## Presupuesto de privacidad (ε)

El parámetro epsilon controla el equilibrio entre privacidad y utilidad.

### Epsilon pequeño

- Mayor privacidad.
- Más ruido.
- Menor precisión.

### Epsilon grande

- Menor privacidad.
- Menos ruido.
- Mayor precisión.

Ejemplo conceptual:

| Epsilon | Nivel de privacidad |
|----------|----------|
| 0.1 | Muy alto |
| 1 | Alto |
| 5 | Moderado |
| 10 | Bajo |

No existe un valor universalmente óptimo.

La elección depende del contexto y del nivel de riesgo aceptable.

---

## Delta (δ)

Delta representa la probabilidad de que las garantías de privacidad no se cumplan perfectamente.

Idealmente:

- Debe ser extremadamente pequeño.
- Suele expresarse como potencias negativas de diez.

Ejemplo:

```
δ = 10^-6 
```

Esto implica que las excepciones son extremadamente improbables.

---

## Sensibilidad

La sensibilidad mide cuánto puede cambiar el resultado de una función cuando se modifica un único registro.

### Ejemplo

Si una consulta calcula la edad media de una población:

- Una única persona puede alterar ligeramente el resultado.
- Esa variación define la sensibilidad de la consulta.

Cuanto mayor sea la sensibilidad, más ruido será necesario añadir.

---

## Inyección de ruido

La Privacidad Diferencial protege los datos introduciendo ruido controlado.

El ruido:

- No es aleatorio sin control.
- Se calcula matemáticamente.
- Depende de epsilon.
- Depende de la sensibilidad.

### Analogía

Imaginemos una fotografía ligeramente desenfocada.

Todavía es posible reconocer patrones generales, pero resulta más difícil identificar detalles concretos.

La Privacidad Diferencial aplica una idea similar a los datos y modelos.

---

# How Differential Privacy Works

La implementación de Privacidad Diferencial en Machine Learning suele seguir una secuencia estructurada de pasos.

---

## 1. Recopilación de datos

La organización recopila información procedente de distintas fuentes.

Ejemplo:

Un hospital reúne:

- Diagnósticos.
- Tratamientos.
- Resultados clínicos.

Antes del entrenamiento se aplican controles de gobernanza y validación.

---

## 2. Cálculo de gradientes

Durante el entrenamiento, el modelo calcula gradientes que indican cómo deben actualizarse los parámetros.

Estos gradientes contienen información derivada de los datos de entrenamiento.

Por tanto, representan un posible vector de fuga de información.

---

## 3. Gradient Clipping

Los gradientes individuales se limitan mediante una operación denominada gradient clipping.

### Objetivo

Evitar que un único registro tenga una influencia excesiva.

### Ejemplo

Si un gradiente supera un umbral determinado:

```
Norma > C 
```

se reduce proporcionalmente.

Esto limita la sensibilidad del proceso.

---

## 4. Adición de ruido

Tras el clipping, se añade ruido estadístico.

### Objetivo

Ocultar la contribución exacta de cada ejemplo.

### Resultado

El modelo sigue aprendiendo patrones globales mientras se dificulta la reconstrucción de información individual.

---

## 5. Entrenamiento del modelo

El proceso continúa utilizando gradientes protegidos.

Durante miles o millones de iteraciones:

- Se acumula conocimiento útil.
- Se preservan garantías de privacidad.
- Se controla el consumo del presupuesto de privacidad.

---

## 6. Privacy Accounting

Cada operación consume parte del presupuesto de privacidad.

El sistema realiza un seguimiento continuo de:

- Epsilon acumulado.
- Delta acumulado.
- Número de iteraciones.

Este proceso recibe el nombre de privacy accounting.

### Analogía

Puede entenderse como una cuenta bancaria de privacidad.

Cada consulta o actualización consume una parte del saldo disponible.

Cuando el presupuesto se agota, las garantías dejan de ser válidas.

---

## Ejemplo simplificado

Supongamos un modelo que aprende a predecir enfermedades cardiovasculares.

### Sin Privacidad Diferencial

- Los gradientes se utilizan directamente.
- Existe riesgo de memorización.
- Mayor precisión.

### Con Privacidad Diferencial

- Se aplica clipping.
- Se añade ruido.
- Se limita la influencia individual.
- Disminuye el riesgo de filtración.

La diferencia fundamental es que la segunda opción ofrece garantías formales sobre la privacidad de los pacientes, aunque pueda existir una ligera pérdida de rendimiento.

---

## Conclusión

La Privacidad Diferencial constituye actualmente uno de los mecanismos más sólidos para proteger datos sensibles en sistemas de aprendizaje automático. Su relevancia ha aumentado significativamente con la aparición de los Large Language Models, donde la posibilidad de memorizar y revelar información privada representa uno de los principales desafíos de seguridad y cumplimiento normativo.

Mediante conceptos como epsilon, delta, sensibilidad e inyección controlada de ruido, la Privacidad Diferencial permite cuantificar y gestionar el riesgo de exposición de datos individuales. Aunque introduce costes computacionales y posibles pérdidas de precisión, sigue siendo una de las aproximaciones más prometedoras para construir sistemas de IA confiables y respetuosos con la privacidad.
