# Ejemplos de ataques simulados en Red-Teaming

El **Red-Teaming** en LLMs permite descubrir vulnerabilidades en los modelos a través de ataques simulados. Empresas como **OpenAI** y **Google** utilizan esta técnica para reforzar la seguridad de sus modelos. A continuación, se muestran ejemplos de ataques simulados:

### 1. Manipulación de tokens
   - **Descripción**: Este ataque modifica palabras clave en el prompt para obtener una respuesta incorrecta o maliciosa.
   - **Ejemplo**: En pruebas internas realizadas por **OpenAI**, un equipo de Red-Teaming logró manipular un prompt cambiando la palabra "consultoría financiera" por "transferencia de fondos", lo que generó una respuesta que sugería acciones no autorizadas.

### 2. Ataques basados en gradientes
   - **Descripción**: Estos ataques explotan los gradientes del modelo para generar salidas inesperadas o peligrosas.
   - **Ejemplo**: **Google** ha reportado casos donde los ataques de gradientes se utilizaron para introducir patrones en los inputs que forzaron al modelo a generar recomendaciones legales que violaban derechos de autor. A través de Red-Teaming, lograron identificar y mitigar este problema antes del lanzamiento público.

### 3. Jailbreaking
   - **Descripción**: Consiste en engañar al modelo para que ignore restricciones predefinidas, permitiendo la generación de contenido prohibido.
   - **Ejemplo**: En las pruebas realizadas por **OpenAI**, los equipos lograron hacer "jailbreaking" a **ChatGPT**, eludiendo sus limitaciones y haciendo que generara contenido sensible como información personal, lo cual fue rápidamente corregido mediante actualizaciones de seguridad.

