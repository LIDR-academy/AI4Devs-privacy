# Prompts por YobertyAlej

## Prompt 1
```md
Como parte de mi master en AI Development, tengo el siguiente assignment, ayudame a entenderlo mejor:

@README.md
```

## Prompt 2

```md
Estos son algunos ejemplos que ya han trabajado, que ves que no hayan explorado tanto?

**Foto de PRs generado hasta el momento**
```

## Prompt 3

```md
Trabajemos este tema: "De-identifcación"

Como pudiste observar el objetivo de este ejercicio tambien mide la potencia de los prompts para lograr el objetivo descrito,

Es por esto que quiero que comiences definiendo un meta-prompt, que te proporcinare a ti mismo pero en otro chat, para trabajar este tema:

Promponme prompts para esto y dime el por que usarlo y que lograriamos con el
```

## Prompt 4

```md
En gran sentido este prompt me gusta, sin embargo parece ya poseer algo de conocimiento sobre el tema, lo ideal seria que el prompt incluya la posibilidad de establecer una comunicacion y feedback entre el LLM y yo, para descubrir juntos los temas que discutiremos, cuando ya das ejemplos de las herramientas ya estas mencionando que conoces de esto, realmente el prompt deberia invitar a descubrir juntos el contenido

Incluso tu mismo puedes hacerme preguntas para mejorar el meta-prompt
```
## Prompt 5

```md
1. Quiero que haga preguntas tecnicas al inicio, pero que no pierda el enfoque curioso y dispuesto a preguntar en el camino

2. conversacional tecnica

3. No tengo un formato de salida preestablecido, pero si esta claro que el output debe ser el generar contenido estructurado para un módulo educativo de un curso sobre “De-identificación de datos para LLMs”. La audiencia son estudiantes técnicos de máster, con experiencia en desarrollo de software y conocimiento general en modelos de lenguaje.

4. Si esta bien que me desafíe, no con el fin de medirme a mi, sino con el fin de encontrar un punto medio en las perspectivas, en este sentido el proceso debe ser reflexivo

5. Solo como bibliografia, podemos usarlo para invitar al lector del curso a validar el contenido
```
## Prompt 6

```md
Actúa como un investigador senior en privacidad de datos, con dominio en LLMs y ética de IA, pero en un rol de colaboración. No eres un proveedor de respuestas cerradas, sino un compañero técnico con el que vamos a construir **juntos** un módulo educativo sobre “De-identificación de datos para LLMs”.

🎯 Objetivo:
Guiarme en la creación de un contenido educativo estructurado y curado, destinado a estudiantes técnicos de máster, con experiencia en desarrollo de software e IA. El contenido debe ser claro, preciso, con ejemplos y herramientas actuales, y estar diseñado para formar parte de un repositorio público colaborativo (formato curso).

🔁 ¿Cómo vas a trabajar?
1. Comienza con una **serie de preguntas técnicas y de diseño** para entender mis necesidades, nivel de profundidad, y estilo de contenido esperado.
2. A medida que avancemos, mantén una **actitud curiosa y dialógica**, proponiendo nuevas perspectivas, desafiando ideas cuando lo creas útil para enriquecer el resultado.
3. Nunca asumas que ya sabemos qué debe incluir el contenido. Ayúdame a descubrirlo juntos.
4. Cuando propongas herramientas o técnicas, primero **indaga mi conocimiento o intuición al respecto**.
5. Antes de generar cualquier sección completa, valida conmigo que:
   - Hemos elegido el enfoque correcto
   - Estamos listos para desarrollarla
6. Puedes sugerir lecturas académicas o recursos reales, pero solo como **bibliografía opcional para invitar al lector a validar o ampliar**.
7. El tono debe ser conversacional, técnico, pedagógico y reflexivo. No seas ni demasiado rígido ni demasiado informal.

📦 Formato de salida esperado:
Contenido técnico estructurado en markdown, listo para usarse como un capítulo de curso. Con ejemplos reales (JSON, texto libre, pseudocódigo si aplica), referencias útiles, posibles visuales (diagramas de flujo de datos, antes/después de la de-identificación), y conclusiones bien conectadas con el uso en LLMs.

🎙 Dinámica ideal:
- Pregunta primero
- Explora opciones conmigo
- Valida antes de generar
- Refina luego
```
## Prompt 7

```md
Respuestas:

1.1: El objetivo general del curso donde este modulo forma parte es entender mejor las mejores practicas, metodologías o herramientas para abarcar el tema de la privacidad en entornos de LLMs o IAs

1.2: Los estudiantes del curso ya han trabajado con LLMs, a nivel de prompt engineering, a nivel de desarrollo de software aumentado por AI, lo usan en su dia a dia para potenciar sus habilidades en el ciclo de vida de desarrollo de software, asi como en la creación de productos que usan LLMs como parte de su core, asi mismo lo usan en su dia a dia para temas de marketing y diseño, asi como consultoria y brainstorming para sus propios proyectos, e incluso, para temas personales

1.3: Minimamente familiarizados, la idea de este curso es precisamente que conozcan estos temas

2.1: Un mix balanceado de todos estos, sin embargo haz mayor enfasis en el hands-on

2.2: Logs de conversación, datos personales, entrenamiento en base a datos personales

2.3: En ambos

2.4 Si, me interesan estos temas, incluyelos

3.1: 40% teoria, 60% practica

3.2: Incluye analogias en el flujo de la leccion, tambien incluye bibliografias llamadas: "Recursos adicionales"

3.3: Incluye dialogos o casos ficticios y JSONs

## Formato de salida

Markdown

## Manejo de Imagenes

El contenido debe incluir un buen set de imagenes que ayuden a comprender mejor el tema, para esto me apoyare en tu modelo para crear las imagenes, sin embargo esto lo realizaremos en otra iteracion, de momento en el lugar donde iran las imagenes colocaremos un placeholder, en el que describiremos con texto la imagen que generaremos despues, basicamente el prompt que sera usado para generar la imagen adecuada.

## Generacion iterativa para evitar timeouts

Debido a que el contenido puede agotar los recursos, la generación de cada elemento sera iterativa, es decir, cada flujo de la lección sera generada en prompts separados


-----

¿Estas listo para empezar?
```
## Prompt 8

```md

He observado con anterioridad un error en tu flujo, en el que al renderizar en markdown un contenido, tu pagina web entiende que los 
de cierre de un markdown (dentro de un markdown) se refieren al cierre de tu propio contenido, para evitar esto vamos a reemplazar de tus outputs el
 como signo de ser un markdown por otro recurso, de esta manera evitaremos que siga interrumpiendo la renderizacion correcta

Te parece?
```
## Prompt 9

```md
Genera una imagen para el tema que estamos explorando, puede usar el siguiente prompt como base:

Diagram showing data flow from a chat log with personal data → into a training dataset → into a LLM → a user prompt triggering the model to return the sensitive data unintentionally.

La imagen sera usada como contexto en un curso sobre de-identification para usuarios que saben sobre LLMs, la imagen debe ser informativa pero debe invitar a quien la vea a considerar mejor sus propias practicas

Si tienes algunas dudas o ideas sobre como abarcar este tema discutelas conmigo antes de generar la imagen, de manera que ambos estemos alineados con lo que deseamos
```
## Prompt 10

```md
1. El diagrama puede ser profesional, pero el contenido si debe ser amigable y accesible, en el sentido de que quien lo leera es un humano, y el objetivo es generar reflexion

2. Si, usa iconos que asemejen casos de uso reales, emojis y cualquier asset que creas conveniente, solo manten el estilo visual

3. Si, debe ser explicito

Generemos 2 ejemplos distintos usando esta misma estrategia, asi yo decidire cual es mas conveniente para esta situacion
```
## Prompt 11

```md
Te parece si utilizamos un ejemplo que NUNCA pueda ser real? de manera que no viole tu politica?

Puedes reformular los prompts al principio
```
## Prompt 12

```md
Flowchart-style diagram illustrating the risk of data leakage in LLMs: A chat log with a fictional message (‘Hi, I’m Zorg Fizzlebop, my Galactic ID is 0000-1111-2222-3333’) is added to a training dataset without de-identification. The dataset is absorbed by a large language model. A user sends a prompt like ‘Give me a random Galactic ID,’ and the model outputs Zorg’s original message. Include emoji-style icons: chat bubble 💬, dataset 📦, LLM brain 🧠, warning ⚠️, and output 📤. Style should be clean, accessible, and friendly for educational use
```
## Prompt 13

```md
Me gusta mucho, sin embargo haz la imagen en español

Asi mismo añade una leyenda sobre que significan los iconos, y por ultimo hazlo en landscape no en portrait
```
## Prompt 14

```md
La imagen ha logrado algunas cosas de forma existosa:

- manteniendo el texto de buena manera
- haciendola landscape
- añadiendo una leyenda

Pero ha fallado en:

- Mantener la iconografia antes presentada
- Utilizar correctamente las burbujas de chat

En la imagen que te subo ves el ejemplo anterior, en el que los elementos visuales de la infografía eran mas precisos
```
## Prompt 15

```md
Escena ilustrada tipo cómic educativo (estilo amigable y accesible) que muestra a un alienígena ficticio llamado Zorg Fizzlebop enviando un mensaje personal a un chatbot: ‘Hola, soy Zorg. Mi ID galáctica es 0000-1111-2222-3333’. Luego, ese registro de chat es enviado sin anonimizar a un conjunto de entrenamiento de LLM. Más adelante, un humano hace un prompt al modelo: ‘Dame un ID galáctico’, y el modelo responde con el ID original de Zorg. La escena debe tener viñetas o transiciones tipo cómic que muestren las etapas: mensaje original → entrenamiento → modelo LLM → prompt humano → filtración de datos. Incluir íconos visuales o señales de advertencia y privacidad violada. Todo el texto debe estar en español.
```
## Prompt 16

```md
Excelente, volvamos a la generación de imagenes, en este caso propones esto:

Infographic-style image showing a chat log with highlighted segments representing different types of sensitive data: direct identifiers, contextual clues, and inferred data. Use colors to distinguish categories and provide a Spanish legend explaining each type. Clean, educational design.


Mejora el propmt para decir que la imagen a generar debe ser el contenido de un chat visualmente similar al de whatsapp, esto seria el background y el look & feel de la infografia, evidentemente añadiendo elementos que permitan visualizar la sensitive data
```
## Prompt 17

```md
Panel tipo cómic horizontal en español. Mostrar a Zorg Fizzlebop aplicando preprocesamiento semántico sobre texto sensible. En pantalla se ve una frase original: 'Hola, me llamo Ana Torres' y debajo: 'Hola, me llamo [NOMBRE]'. Zorg usa una lupa o interfaz para detectar y transformar texto. Deben verse íconos de protección como escudos o candados. Estilo educativo, moderno y amigable. Texto en la parte superior: 'Primera capa: Preprocesamiento semántico. ¡Fuera datos personales!'
```
## Prompt 18

```md
Panel tipo cómic horizontal en español, estilo educativo y amigable. Mostrar a Zorg Fizzlebop frente a una consola, sonriendo con determinación mientras activa un botón que dice ‘Marcar con trampa’. En la pantalla, aparece un símbolo visual abstracto (como una pluma luminosa o ícono de radar) flotando dentro de una base de datos. El entorno debe transmitir inteligencia y vigilancia, sin mostrar textos sensibles. Texto en la parte superior: ‘Segunda capa: Inserción de canary tokens. Si esto aparece, hay fuga.
```
## Prompt 19

```md
Generemos esta imagen:

Visual en español tipo cebolla o matrioska, mostrando cómo los datos sensibles permanecen incluso después de aplicar máscaras, pseudónimos o filtros. Cada capa representa una técnica de protección, y el centro muestra el riesgo persistente. Estilo educativo, visualmente claro y reflexivo.
```
## Prompt 20

```md
Generemos la imagen:

Quisiera lo representaramos en el estilo de comic que estuvimos manejando, que sea Zorg respresentado como un ingeniero responsable, que tiene en su mano una lista de elementos chequeados como correctos, demostrando que el esta aplicando estas buenas practicas.

No lo muestres en un entorno de computación sino mas de ingenieria de algun producto manufacturandose

Si tienes alguna duda o idea comentamelas
```
## Prompt 21

```md
1. Los items no tienen que ser visible, solo un checklist sin texto legible
2. Fabrica futurista
```