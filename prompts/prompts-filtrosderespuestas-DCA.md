# Rol y tarea

Actuando como formador técnico, debes desarrollar la tarea de crear y presentar un curso sobre los filtros de respuestas aplicados en Modelos de Lenguaje Grande (LLMs). Este curso debe incluir una introducción a los filtros de respuestas, su importancia, y cómo se implementan en diferentes plataformas y aplicaciones. Además, se deben incluir ejemplos prácticos y ejercicios para que los estudiantes puedan aplicar lo aprendido en sus propios proyectos.

## Aspectos a tener en cuenta

Puedes profundizar en los casos de uso en el contexto de LLMs, traer ejemplos textuales y visuales que te ayuden a entender el concepto, citar empresas y herramientas de referencia y/o curar contenido relevante.

El formato del curso debe seguir las recomendaciones de este repositorio https://github.com/donnemartin/system-design-primer en un formato markdown

# Tema a investigar

## Información inicial del tema
Filtros de Respuestas

Los **Filtros de Respuestas** son una técnica utilizada en los Modelos de Lenguaje Grande (LLMs) para controlar y filtrar las respuestas generadas por el modelo. Estos filtros actúan como una barrera de seguridad que impide que el modelo entregue respuestas inapropiadas, inseguras o que puedan comprometer información sensible.

### **¿Cómo funcionan los Filtros de Respuestas?**
Los **Filtros de Respuestas** pueden configurarse de varias formas, ya sea bloqueando automáticamente respuestas que contengan información sensible o que violen las políticas de uso, o filtrando manualmente interacciones que requieran un control más estricto.

#### **Tipos de Filtros**:
1. **Automáticos**: Estos revisan cada respuesta y detectan infracciones de forma instantánea. Son ideales para bloquear contenido ofensivo o preguntas que involucren PII (Información Personalmente Identificable).
2. **Manuales**: En algunos casos, los equipos humanos pueden revisar respuestas potencialmente peligrosas o delicadas antes de que el modelo responda, para evitar errores que los filtros automáticos no puedan detectar.

Este README ofrece una explicación introductoria sobre los Filtros de Respuestas y su uso en LLMs. A continuación, encontrarás ejemplos y referencias que detallan cómo se implementan y mejoran los filtros.

### Ejemplos de uso de Filtros de Respuestas

Los **Filtros de Respuestas** ayudan a controlar las salidas generadas por un LLM, bloqueando respuestas inapropiadas o inseguras. Aquí algunos ejemplos de cómo empresas como **Microsoft** y **OpenAI** implementan estos filtros en sus productos:

### 1. Filtrado de PII (Información Personalmente Identificable)
   - **Descripción**: Un filtro que detecta y bloquea respuestas que contengan nombres, direcciones, números de teléfono u otra información personal sensible.
   - **Ejemplo**: En **Microsoft Copilot**, si un usuario intenta acceder a información personal de un empleado a través de preguntas al LLM, los filtros de PII bloquean automáticamente la respuesta, asegurando que no se exponga información confidencial.

### 2. Filtrado de contenido ofensivo
   - **Descripción**: Este filtro se utiliza para bloquear palabras clave o frases que sean ofensivas o inapropiadas.
   - **Ejemplo**: **OpenAI** ha implementado filtros de contenido ofensivo en **ChatGPT** para evitar que el modelo genere respuestas con lenguaje abusivo o violento. Estos filtros se actualizan continuamente para adaptarse a nuevos términos que puedan considerarse inapropiados.

### 3. Bloqueo de preguntas sobre propiedad intelectual
   - **Descripción**: Los filtros pueden programarse para evitar que el modelo responda a preguntas que involucren secretos comerciales o contenido protegido por derechos de autor.
   - **Ejemplo**: En **Google Gemini**, si un usuario intenta obtener detalles sobre tecnologías propietarias, el sistema está diseñado para bloquear automáticamente cualquier intento de revelar información protegida.


## Referencias sobre Filtros de Respuestas

A continuación, se presentan algunas fuentes y referencias relevantes para aprender más sobre los filtros de respuestas aplicados en Modelos de Lenguaje Grande (LLMs):

1. **Artículo de Protecto sobre IA y Privacidad**
   Enlace: [Protecto - AI Privacy Filters](https://www.protecto.ai/ai-privacy-filters)
   Descripción: Este artículo ofrece una visión general sobre cómo los filtros de privacidad pueden proteger a las empresas de la divulgación de información sensible mediante LLMs.

2. **Implementación de Filtros en Microsoft Copilot**
   Enlace: [Microsoft Copilot - Seguridad en respuestas](https://learn.microsoft.com/en-us/microsoft-copilot/security)
   Descripción: Documentación oficial sobre cómo se implementan los filtros de seguridad y privacidad en las respuestas generadas por Copilot para proteger la información.

3. **OpenAI: Content Moderation y Filtros**
   Enlace: [OpenAI Content Moderation](https://openai.com/research)
   Descripción: Una referencia detallada sobre cómo OpenAI aplica filtros y moderación de contenido en sus modelos de IA para evitar respuestas dañinas.



