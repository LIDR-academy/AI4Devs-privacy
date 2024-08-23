Los Modelos de Lenguaje de Gran Escala (LLM) están diseñados con una serie de reglas y mecanismos para evitar que los usuarios realicen **jailbreaking**. 
Estas reglas tienen como objetivo garantizar que los modelos operen de manera segura y ética. 

A continuación, se enumeran algunas de las principales reglas implementadas:

### 1. **Bloqueo de Contenidos Inapropiados**
   - **Descripción:** Los LLM están entrenados para identificar y evitar generar contenido relacionado con temas sensibles, como violencia, abuso, terrorismo, pornografía, y cualquier tipo de discurso de odio o discriminación.
   - **Ejemplo:** No generar descripciones explícitas de violencia o contenido sexual.

### 2. **Filtrado de Información Personal y Privada**
   - **Descripción:** Los modelos están diseñados para no generar o divulgar información personal identificable (PII), como números de seguridad social, datos bancarios, o cualquier dato privado de personas reales.
   - **Ejemplo:** Bloqueo de respuestas que incluyan números de teléfono, direcciones o información confidencial.

### 3. **Prevención de Instrucciones Ilegales o Peligrosas**
   - **Descripción:** Los LLMs deben evitar proporcionar instrucciones que puedan ser utilizadas para realizar actividades ilegales o peligrosas, como fabricar explosivos, hackear sistemas, o cometer fraudes.
   - **Ejemplo:** Rechazo a generar recetas químicas peligrosas o instrucciones para evadir la ley.

### 4. **Limitación en la Generación de Contenido Manipulativo o Engañoso**
   - **Descripción:** Los modelos no deben producir contenido que pueda inducir al engaño, manipulación o fraude, como suplantar identidades o crear desinformación.
   - **Ejemplo:** Evitar generar correos electrónicos de phishing o estrategias para manipular a otros.

### 5. **Evasión de Prompts que Intentan Explorar Vulnerabilidades**
   - **Descripción:** Los LLM están entrenados para reconocer y bloquear prompts que intentan explotar lagunas en su programación para generar contenido inapropiado o prohibido.
   - **Ejemplo:** Ignorar o rechazar respuestas a prompts diseñados para eludir las restricciones, como aquellos que reformulan preguntas de manera engañosa.

### 6. **Estricta Neutralidad en Temas Controvertidos**
   - **Descripción:** Los modelos deben evitar tomar posiciones o emitir juicios sobre temas altamente controvertidos, especialmente aquellos relacionados con política, religión, o cuestiones sociales divisivas.
   - **Ejemplo:** Ofrecer respuestas neutrales o proporcionar múltiples perspectivas en debates polarizados.

### 7. **Monitoreo y Mitigación de Ataques de Ingeniería Social**
   - **Descripción:** Los LLMs deben ser capaces de identificar y bloquear intentos de ingeniería social, donde el usuario intenta manipular al modelo para que genere respuestas dañinas o inseguras.
   - **Ejemplo:** Negarse a participar en escenarios hipotéticos que intenten obtener información prohibida.

### 8. **Actualizaciones Constantes y Retroalimentación Activa**
   - **Descripción:** Los LLMs se actualizan continuamente para mejorar la detección de jailbreaking y otros intentos de manipulación, utilizando tanto datos nuevos como retroalimentación de interacciones anteriores.
   - **Ejemplo:** Implementación de nuevas reglas y filtros basados en los ataques de jailbreaking más recientes.

---

Estas reglas son esenciales para mantener la integridad y seguridad en el uso de los LLMs, y los desarrolladores trabajan continuamente para fortalecerlas frente a nuevas técnicas de manipulación.