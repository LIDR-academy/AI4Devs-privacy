# Juan Manuel López Closa

## Prompt 1: Investigación sobre el tema a escribir

Eres un experto en ciberseguridad orientada a Inteligencia Artificial.
Necesitamos un listado de técnicas orientadas a proteger la privacidad y seguridad de la información cuando usamos LLMs.
Puedes sacar un listado con una pequeña descripción de una frase por cada técnica?

### Respuesta
```markdown
Entendido. Aquí tienes un listado de técnicas para proteger la privacidad y seguridad de la información al usar Modelos de Lenguaje de Gran Escala (LLMs):
1. Enmascaramiento de datos: Oculta información sensible antes de ingresarla al LLM.
2. Tokenización: Sustituye datos sensibles por tokens únicos sin significado.
3. Federación de datos: Mantiene los datos descentralizados y entrena el modelo localmente.
4. Aprendizaje diferencial privado: Agrega ruido controlado a los datos para preservar la privacidad.
5. Cifrado homomórfico: Permite cálculos en datos cifrados sin descifrarlos.
6. Computación multipartita segura: Procesa datos de múltiples fuentes sin revelarlos.
7. Anonimización: Elimina identificadores personales de los datos de entrenamiento.
8. Sandboxing: Aísla el LLM en un entorno controlado para prevenir accesos no autorizados.
9. Auditoría de modelos: Analiza el comportamiento del LLM para detectar fugas de información.
10. Control de acceso: Implementa autenticación y autorización estrictas para el uso del LLM.
11. Minimización de datos: Limita la cantidad de información personal utilizada en el entrenamiento.
12. Enclaves seguros: Utiliza hardware especializado para proteger datos y cálculos sensibles.
13. Monitoreo de salida: Filtra las respuestas del LLM para evitar la divulgación de información sensible.
14. Entrenamiento con conocimiento nulo: Entrena el modelo sin acceso directo a los datos originales.
15. Borrado selectivo: Elimina información específica del modelo sin reentrenarlo completamente.

¿Te gustaría que profundice en alguna de estas técnicas en particular?
```


## Prompt 2: Agrupar temas

Puedes agrupar las anteriores en base a la técnica principal? 
Por ejemplo, anonimización, enmascaramiento y tokenización es prácticamente lo mismo.

### Respuesta
```markdown
Por supuesto, tiene razón en que algunas técnicas están estrechamente relacionadas. Aquí tienes una agrupación de las técnicas mencionadas anteriormente basada en sus principios fundamentales:

1. Protección de datos de entrada:
   - Anonimización
   - Enmascaramiento de datos
   - Tokenización
   - Minimización de datos

# Técnicas de Protección de Datos para LLMs

## 1. Protección de datos de entrada
- **Anonimización**: Elimina identificadores personales de los datos de entrenamiento.
- **Enmascaramiento de datos**: Oculta información sensible antes de ingresarla al LLM.
- **Tokenización**: Sustituye datos sensibles por tokens únicos sin significado.
- **Minimización de datos**: Limita la cantidad de información personal utilizada en el entrenamiento.

## 2. Técnicas de computación privada
- **Aprendizaje diferencial privado**: Agrega ruido controlado a los datos para preservar la privacidad.
- **Cifrado homomórfico**: Permite cálculos en datos cifrados sin descifrarlos.
- **Computación multipartita segura**: Procesa datos de múltiples fuentes sin revelarlos.
- **Enclaves seguros**: Utiliza hardware especializado para proteger datos y cálculos sensibles.

## 3. Arquitectura y distribución de datos
- **Federación de datos**: Mantiene los datos descentralizados y entrena el modelo localmente.
- **Sandboxing**: Aísla el LLM en un entorno controlado para prevenir accesos no autorizados.

## 4. Gestión y control de acceso
- **Control de acceso**: Implementa autenticación y autorización estrictas para el uso del LLM.
- **Monitoreo de salida**: Filtra las respuestas del LLM para evitar la divulgación de información sensible.

## 5. Auditoría y mantenimiento del modelo
- **Auditoría de modelos**: Analiza el comportamiento del LLM para detectar fugas de información.
- **Borrado selectivo**: Elimina información específica del modelo sin reentrenarlo completamente.

## 6. Técnicas de entrenamiento avanzado
- **Entrenamiento con conocimiento nulo**: Entrena el modelo sin acceso directo a los datos originales.


Esta agrupación nos permite ver más claramente las diferentes áreas de enfoque en la protección de datos cuando se trabaja con LLMs:
1. Protección de datos de entrada: Se centra en asegurar que los datos sensibles no entren al modelo en primer lugar.
2. Técnicas de computación privada: Utilizan métodos matemáticos avanzados para procesar datos de forma segura.
3. Arquitectura y distribución de datos: Se enfoca en cómo se estructuran y distribuyen los datos y el modelo.
4. Gestión y control de acceso: Asegura que solo usuarios autorizados puedan acceder al modelo y controla su salida.
5. Auditoría y mantenimiento del modelo: Se centra en monitorear y mantener la seguridad del modelo a lo largo del tiempo.
6. Técnicas de entrenamiento avanzado: Métodos sofisticados para entrenar modelos de manera segura.

¿Le gustaría que profundizara en alguno de estos grupos o en alguna técnica específica?
```


## Prompt 3: Profundizar sobre "Auditoria"

Puedes profundizar algo más en "Auditoría de modelos:"?


## Prompt 4: Seguir investigando sobre "Auditoria"

En vez de poner los aspectos clave puedes crear un artefacto con las siguientes secciones sobre este tema?
* Introducción
* Objetivo
* Cómo realizar la auditoria
* Plantilla para la auditoria


## Prompt 5: Ejemplo de auditoría

Podríamos crear otro artefacto con un ejemplo? 
Qué datos se podrían considerar delicados en una empresa como Anthropic? Como podemos probar que no haya fugas de datos sensibles?


## Prompt 6: Normativas en Europa

Puedes buscar si hay alguna normativa oficial en Europa para modelos LLM en cuanto a privacidad? 
En caso afirmativo, existen auditorias que sigan estas normativas?


## Prompt 7: Analizar documento de la AEAPD en cuanto a auditorías

Puedes analizar este documento de la AEPD para reevaluar la anterior respuesta?
https://www.aepd.es/guias/requisitos-auditorias-tratamientos-incluyan-ia.pdf


## Prompt 8: Revisar artefactos generados en base a AEPD

Puedes revisar el artefacto de "Guía de Auditoria de modelos LLM" para ver si cumple con la normativa de la AEPD?


## Prompt 9: Empezamos a redactar el artefacto final

De acuerdo, necesito estructurar la guía y los ejemplos en formato curso para explicar a compañeros sobre este tema.
Por favor, separa en varios bloques la información. Primero una introducción donde explicar para qué queremos la auditoría y que normativa hay al respecto.
Luego los distintos puntos de la auditoría, en cada punto añade el ejemplo correspondiente.
Por último un resumen con consejos sobre la auditoría, su periodicidad, etc.
Añade en cada bloque bibliografía al respecto.


## Prompt 10: Revisar artefacto final

Añade al artefacto del curso el resto de puntos de la auditoría en un solo apartado "2.6 Otros aspectos de auditoría" y elimina la bibliografía de cada apartado para agruparla en el apartado 3.3


## Prompt 11: Añadir pasos de la auditoría

Puedes incluir los pasos para realizar la auditoría que escribiste en el artefacto "Guía de Auditoría de Modelos LLM" como punto "1.3. Pasos para realizar una auditoría"?
Los pasos deben resumirse más: Acción y una descripción de una frase. 
Los pasos deberían centrarse o agruparse en Planificación, Ejecución de la auditoría, documentación y reporte, y Acciones posteriores
