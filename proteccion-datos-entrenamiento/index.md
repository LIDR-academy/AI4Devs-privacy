# Protección de Datos Entrenamiento en Inteligencia Artificial

## 🛡️ ¿Cómo protege la IA los datos de entrenamiento?

| Mecanismo de Protección            | Descripción corta                                                                 |
|----------------------------------|-----------------------------------------------------------------------------------|
| **Análisis y filtrado de datos**  | Se eliminan datos sensibles o personales antes del entrenamiento.                |
| **Anonimización**                 | Se eliminan o transforman identificadores personales para evitar reidentificación.|
| **Differential Privacy**          | Se añade "ruido" a los datos o resultados para proteger la privacidad individual. |
| **Access Control**                | Se limita el acceso a los datasets sensibles a personal autorizado.              |
| **Data Encryption**               | Los datos se cifran durante el almacenamiento y la transmisión.                 |
| **Federated Learning**           | El modelo se entrena localmente en dispositivos sin enviar datos al servidor.    |
| **Auditoría y trazabilidad**     | Se registra el uso de los datos para detectar accesos indebidos.                 |

## 📊 Ejemplos por técnica

| Técnica               | Ejemplo                                                      |
|----------------------|--------------------------------------------------------------|
| Anonimización         | Nombre "Juan Pérez" → "Usuario123"                           |
| Differential Privacy | Frecuencia de enfermedades con ruido estadístico añadido     |
| Federated Learning   | Teclado móvil aprende sin subir texto al servidor            |
| Cifrado               | Dataset cifrado con AES-256 en almacenamiento cloud         |
| Acceso restringido    | Solo investigadores con autorización acceden a datos clínicos|

## 🧠 ¿Cómo evitar que la IA memorice datos sensibles?

| Técnica                        | Descripción corta                                                                 |
|-------------------------------|-----------------------------------------------------------------------------------|
| **Regularización**            | Penaliza la complejidad del modelo para evitar sobreajuste y memorización.       |
| **Limitar tamaño del batch**  | Entrenar con lotes pequeños reduce la posibilidad de memorizar ejemplos exactos. |
| **Early Stopping**            | Detiene el entrenamiento antes de que el modelo memorice datos.                  |
| **Differential Privacy**      | Controla cuánto puede aprender el modelo de cada ejemplo individual.              |
| **Dataset Sanitization**      | Revisión manual o automática para eliminar datos sensibles antes de entrenar.     |
| **Reducción de overfitting**  | Técnicas como dropout, data augmentation, etc., para mejorar la generalización.  |

## 🧪 Ejemplos prácticos

| Técnica               | Ejemplo                                                                 |
|----------------------|-------------------------------------------------------------------------|
| Regularización        | Añadir L2 al loss: `loss += λ * ||weights||²`                           |
| Early Stopping        | Detener entrenamiento si no mejora la validación en 5 épocas seguidas   |
| Differential Privacy | Entrenar con `dp-SGD` (gradient descent con privacidad diferencial)     |
| Dataset Sanitization | Eliminar emails, teléfonos o textos confidenciales antes de entrenar     |
| Dropout               | Desactivar aleatoriamente neuronas durante el entrenamiento (p=0.5)     |

## ⚠️ Casos reales de filtración o memorización de datos

| Caso                                 | Descripción                                                                                       | Año  |
|--------------------------------------|---------------------------------------------------------------------------------------------------|------|
| **GPT-2 / GPT-3 (OpenAI)**           | Algunos modelos generaban fragmentos textuales con datos personales como números de teléfono.     | 2020 |
| **Codenames leak (GitHub Copilot)**  | Copilot generaba fragmentos de código con claves API o contraseñas extraídas del set de entrenamiento. | 2021 |
| **Stable Diffusion**                 | Algunos modelos de texto a imagen podían reproducir rostros reales de personas de los datasets.   | 2022 |
| **Imagenet Faces**                   | Dataset contenía imágenes de personas sin consentimiento; usarse en modelos generaba problemas legales. | 2019 |
| **Memorization in Language Models**  | Estudio de Google y Stanford demostró que modelos LLM pueden memorizar y reproducir datos de entrenamiento al pie de la letra. | 2021 |

## 🔐 ¿Cómo protege ChatGPT los *prompts*?

| Mecanismo                         | Descripción breve                                                                  |
|----------------------------------|-------------------------------------------------------------------------------------|
| **Cifrado en tránsito (TLS)**    | Los prompts se transmiten cifrados desde tu dispositivo hasta los servidores.      |
| **Acceso controlado**            | Solo personal autorizado puede acceder a datos internos, bajo estrictas políticas. |
| **Almacenamiento seguro**        | Los datos se almacenan en sistemas protegidos con cifrado y control de acceso.     |
| **Reducción de retención**       | En algunos modos, los datos no se guardan o se eliminan tras cierto tiempo.        |
| **No entrenamiento con tus datos (por defecto)** | ChatGPT no entrena con tus datos a menos que des consentimiento explícito.        |
| **Auditoría y cumplimiento**     | Se aplican controles para cumplir con normas como GDPR o ISO 27001.                |

### 🧾 Ejemplo: ¿Se guardan tus prompts?

| Caso de uso              | ¿Se guarda el prompt?         | ¿Se usa para entrenamiento? |
|--------------------------|-------------------------------|------------------------------|
| Usuario no autenticado   | Temporalmente, para funcionamiento | No                          |
| Usuario autenticado, sin consentimiento | Solo para mejorar la experiencia | No                    |
| Usuario autenticado, con consentimiento | Sí, con anonimización y para mejorar el modelo | Sí         |
