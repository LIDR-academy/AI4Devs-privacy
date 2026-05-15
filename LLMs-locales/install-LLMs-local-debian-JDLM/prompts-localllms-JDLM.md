# José David Lacruz - LLMs Locales y Privacidad

## 1. Prompt de Investigación Principal

**Prompt:**

> "Actúa como un experto en ciberseguridad. Describe el proceso para instalar Ollama en Debian 12 y cómo asegurar que la telemetría esté desactivada para mantener la privacidad total del código fuente."

**Justificación:**
El uso de un rol de experto en ciberseguridad permitió obtener una respuesta que fue más allá del simple comando de instalación. Forzó a la IA a considerar el **Hardening** del servicio, resultando en la configuración de archivos de *override* para `systemd` y la restricción del host a `127.0.0.1`. Esto es vital para asegurar que el modelo no sea accesible desde redes externas sin autorización.

---

## 2. Prompt de Refinamiento y Selección de Modelos

**Prompt:**

> "¿Cuál es el último modelo de la familia Qwen disponible para programación en 2026 y cómo se instala para optimizar el uso de CPU en un sistema con 16GB de RAM?"

**Proceso de Refinamiento:**
Durante la investigación, se detectó que el nombre de los modelos en el registro de Ollama puede variar. Este prompt se utilizó para identificar la versión más equilibrada (**7B**) que permite realizar tareas de arquitectura compleja (como la validación de alérgenos en el proyecto LTI) sin desbordar la memoria física del servidor Debian, que carece de GPU dedicada.

---

## 3. Conclusiones sobre el uso de la IA

Durante este ejercicio, se aplicó un espíritu crítico en los siguientes puntos:

* **Validación de Errores:** Cuando el comando `systemctl edit` falló en la terminal real de Debian, se solicitó a la IA un método alternativo manual (`mkdir` y `nano`), demostrando que la documentación automatizada a veces requiere ajustes manuales en distribuciones estrictas como Debian.
* **Verificación de Red:** Se ignoró la asunción de la IA de que el servicio estaría "listo" y se procedió a verificar con `ss` y `curl`. Esto permitió descubrir que el proceso no había iniciado correctamente, llevando a una depuración técnica profunda.
* **Soberanía de Datos:** Se confirmó que, mediante la configuración correcta de variables de entorno, es posible utilizar modelos de vanguardia (Qwen 3 Coder) manteniendo la propiedad intelectual del código fuente de forma 100% privada y local.

---

## 4. Referencias Bibliográficas

* Ollama Community. (2026). *Advanced configuration and environment variables*.
* Alibaba Cloud. (2026). *Qwen 3 Coder technical report and benchmarks*.
* Debian Project. (2024). *Systemd Service Hardening Guidelines*.
