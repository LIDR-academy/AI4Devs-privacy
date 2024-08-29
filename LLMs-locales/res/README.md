# Curso: Instalación y Comparativa de Modelos Locales LLM para Codificación

## Módulo 1: Comparativa de Modelos LLM para Codificación

### Tabla Comparativa

| **Modelo**          | **Parámetros** | **Especialización**                       | **Lenguajes de Programación Soportados** | **Fortalezas**                                                              | **Casos de Uso**                                       |
| ------------------- | -------------- | ----------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------ |
| **Code Llama**      | 7B, 13B, 34B   | Generación de código, completado y Python | Python, JavaScript, otros                | Especializado en Python y tareas de completado de código.                   | Proyectos con foco en Python.                          |
| **GPT-NeoX-20B**    | 20B            | Generación de texto y código              | Multilinguaje                            | Gran comprensión contextual y generación coherente.                         | Investigaciones y proyectos multilingües.              |
| **WizardCoder-15B** | 15B            | Generación de instrucciones de código     | Python, C++, Java, otros                 | Entrenado con el enfoque Evol-Instruct para mejorar precisión.              | Tareas de codificación general.                        |
| **Tabnine**         | N/D            | Completado de código basado en contexto   | Multilinguaje                            | Personalización a código privado y soporte para múltiples lenguajes.        | Empresas con necesidades específicas.                  |
| **Polycoder**       | 2.7B           | Generación de código                      | C, C#, Java, Python                      | Especialmente bueno en C, código abierto y personalizable.                  | Desarrollo de código en C y entornos de investigación. |
| **DeepSeek-Coder**  | 1B - 33B       | Generación y comprensión de código        | Multilinguaje                            | Alto rendimiento en generación de código y ventanas de contexto extendidas. | Codificación a gran escala y proyectos complejos.      |

---

## Módulo 2: Instalación de Modelos Locales LLM en Cursor

### Requisitos Previos

1. **Entorno de desarrollo**: VS Code o entorno similar.
2. **Node.js**: Asegúrate de tener instalado Node.js ([Descargar Node.js](https://nodejs.org/)).
3. **Python**: Recomendable para instalar dependencias adicionales ([Descargar Python](https://www.python.org/downloads/)).
4. **Cursor**: Instala Cursor desde la [página oficial](https://cursor.com/download).

---

### Pasos para Instalar Modelos Locales en Cursor

1. **Descargar e Instalar Cursor**:
   - Descarga Cursor desde su página oficial e instala la aplicación según tu sistema operativo.
2. **Migrar desde VS Code**:

   - Abre Cursor y selecciona `Migrate from VS Code` en la barra de comandos para importar configuraciones y extensiones.

3. **Configurar el Modelo Local**:

   - Descarga un modelo compatible desde Hugging Face o fuentes confiables.
   - Coloca el modelo descargado en un directorio específico (ej. `/models/llm-local/`).
   - Configura Cursor para utilizar este modelo: en las preferencias de Cursor, selecciona "Model Settings" y agrega la ruta del modelo local:

     ```json
     {
       "model": {
         "path": "/models/llm-local/model-name",
         "type": "local"
       }
     }
     ```

4. **Optimizar la Ejecución del Modelo**:

   - Si tienes una GPU, asegúrate de configurarla en Cursor para mejorar el rendimiento.
   - Ajusta la cantidad de memoria asignada al modelo en la configuración:

     ```json
     {
       "execution": {
         "device": "gpu",
         "memory_limit": "16GB"
       }
     }
     ```

5. **Probar y Validar el Modelo**:

   - Abre un nuevo proyecto en Cursor y realiza pruebas para asegurarte de que el modelo funcione correctamente.

6. **Resolución de Problemas**:
   - Revisa los registros de errores en `Help -> View Logs` si encuentras problemas durante la instalación o ejecución.

---

### Conclusión

Siguiendo estos pasos, puedes instalar y configurar modelos LLM locales en Cursor para mejorar tu flujo de trabajo en desarrollo de software y codificación. La comparativa de modelos te permitirá seleccionar la mejor opción según las necesidades de tu proyecto.

---

Este curso ofrece una visión completa de los mejores modelos LLM para codificación y una guía práctica para instalarlos localmente usando Cursor.
