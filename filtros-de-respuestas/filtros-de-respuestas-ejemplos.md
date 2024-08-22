# Ejemplos de uso de Filtros de Respuestas

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
