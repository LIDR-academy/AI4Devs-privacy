
# 🧠 Curso: Protección de Datos en la Era de los Modelos de Lenguaje (LLMs)

## Módulo 1: 🔐 Bóvedas de Privacidad de Datos (Data Privacy Vaults)

---

## 👤 Público objetivo

Este curso está dirigido a:

- 👨‍💻 **Desarrolladores** que integran IA en sus aplicaciones y necesitan cumplir normativas de privacidad.
- 🧑‍💼 **Líderes técnicos** que diseñan arquitecturas con componentes de IA.
- 🔐 **Data Privacy Officers (DPOs)** responsables del cumplimiento normativo en el tratamiento de datos.

---

## 📚 Introducción: ¿Por qué hablar de privacidad con LLMs?

Los Modelos de Lenguaje (LLMs) como ChatGPT, Claude o LLaMA tienen la capacidad de **memorizar, inferir y generar contenido basado en grandes volúmenes de texto**. Cuando estos modelos interactúan con datos personales (PII - Personal Identifiable Information), surgen riesgos:

- **Filtración involuntaria** de datos sensibles.
- **Exposición de información protegida** por normativas como GDPR, HIPAA o CCPA.
- **Persistencia de datos** en logs, bases de entrenamiento o métricas de uso.

---

## 🧩 ¿Qué son las Bóvedas de Privacidad de Datos?

Una Data Privacy Vault es un entorno **seguro, aislado y cifrado** donde se almacenan datos sensibles. Está diseñado para:

- **Separar los datos confidenciales** del resto de la infraestructura.
- **Controlar el acceso granularmente** por usuario, rol o aplicación.
- **Registrar accesos, operaciones y usos** de la información.

Algunos conceptos clave:

| Término | Descripción |
|--------|-------------|
| Tokenización | Sustituir datos reales por identificadores no sensibles (tokens). |
| Cifrado homomórfico | Permite operar sobre datos cifrados sin necesidad de descifrarlos. |
| Pseudonimización | Remplazo de datos personales con identificadores indirectos. |

---

## 🧠 LLMs y datos personales: Riesgos comunes

1. **Memorización de prompts**: modelos que guardan sesiones o datos enviados como entradas.
2. **Respuestas que revelan PII**: si el entrenamiento incluye datos no anonimizados.
3. **Logs y métricas mal gestionadas**: almacenamiento de peticiones y respuestas sin cifrado.
4. **Prompt injection**: modificación maliciosa del input para inducir al modelo a revelar datos.
5. **Fine-tuning inseguro**: entrenar modelos con datasets sensibles no desidentificados.

---

## 🏥 Casos de uso en industrias críticas

### 1. Sector Salud

**Uso:** Chatbots de soporte a pacientes, generación de reportes clínicos.

**Riesgo:** Revelación de nombres, diagnósticos, medicamentos, RUT.

**Solución con bóveda:**
- Almacenar PII en Skyflow.
- El LLM recibe solo tokens.
- Backend recupera los datos reales bajo permisos específicos.

---

### 2. Sector Financiero

**Uso:** IA que explica cargos, historiales de cuenta, estados financieros.

**Riesgo:** Exposición de números de tarjetas, balances, dirección.

**Solución:**
- Tokenización mediante Vaultree.
- El modelo no ve nunca los datos reales.
- Auditoría completa de accesos.

---

### 3. E-commerce y retail

**Uso:** IA recomienda productos personalizados o hace seguimiento de pedidos.

**Riesgo:** Exposición de historial de compras y direcciones de envío.

**Solución:**
- Generación de datos sintéticos (con Tonic.ai) para entrenar modelos.
- Vault con cifrado de direcciones, nombres y mails.

---

## 🛠️ Herramientas líderes

| Herramienta | Características | Uso recomendado |
|------------|------------------|------------------|
| Skyflow | API REST para tokenización, permisos y auditoría. | Backend para apps con IA. |
| Vaultree | Cifrado searchable y operaciones homomórficas. | Análisis cifrado de datos sensibles. |
| Tonic.ai | Generación de datasets sintéticos. | Entrenamiento de modelos sin exponer datos reales. |
| Duality | Computación colaborativa sobre datos cifrados. | ML federado con múltiples actores. |

---

## ⚙️ Ejemplo práctico

### Escenario

Una app bancaria usa un LLM para responder preguntas del cliente.

**Problema:** El cliente escribe: “¿Cuánto gasté en marzo con mi tarjeta terminada en 4567?”

### Implementación con Skyflow

```bash
# Paso 1: Almacenar datos sensibles en la bóveda
POST /data
{
  "cliente_id": "1234",
  "tarjeta": "XXXX-XXXX-XXXX-4567",
  "historial": "Marzo: $421.000"
}

# Paso 2: El LLM recibe solo una entrada segura
Input al LLM:
“El usuario con ID 1234 quiere saber su gasto en marzo”

# Paso 3: El sistema post-procesa con la bóveda
- Se consulta Skyflow con ID 1234
- Se reemplaza la respuesta con el historial real.
```

---

## 🧪 Actividad práctica: Crea tu bóveda simple

### Objetivo

Construir un sistema básico que:
- Reciba datos sensibles y los cifre.
- Use tokens para procesar peticiones.
- Entregue los datos reales solo a usuarios autenticados.

### Stack sugerido

- Node.js o Python
- Base de datos SQLite o PostgreSQL
- Cifrado AES (librerías `crypto` o `pycryptodome`)

---

## 🔒 Mejores prácticas recomendadas

- **Nunca** entrenes un modelo con datos sin anonimizar.
- Aplica **pseudonimización + trazabilidad**.
- Registra y audita cada acceso a la bóveda.
- **Evita logs en texto plano**.
- Implementa **segmentación de roles y permisos**.
- Usa **entornos de prueba sintéticos**.

---

## 📚 Recursos adicionales

- [Skyflow para LLMs](https://skyflow.com/blog/protecting-pii-in-llms)
- [Vaultree: encrypted search](https://www.vaultree.com/)
- [Guía de privacidad en IA - CNIL Francia](https://www.cnil.fr/en/privacy-and-ai)
- [Curso de privacidad computacional - OpenMined](https://courses.openmined.org)

---


---

## 🧪 Módulo adicional: Generación de Datos Sintéticos

### 📌 ¿Qué son los datos sintéticos?

Los datos sintéticos son información artificial generada por algoritmos, simulaciones o modelos entrenados, que replican las propiedades estadísticas de un conjunto de datos real, **sin contener información identificable real**.

Esto permite:

- Entrenar LLMs sin poner en riesgo la privacidad.
- Compartir datasets entre equipos sin incumplir leyes de protección de datos.
- Probar sistemas con estructuras realistas pero sin datos sensibles.

---

### 🧠 ¿Por qué usar datos sintéticos con LLMs?

Cuando se entrenan modelos o se hace fine-tuning, es común necesitar grandes volúmenes de datos. Si estos datos contienen PII (Personal Identifiable Information), se incurre en riesgos legales y éticos.

Los datos sintéticos permiten:

- Simular conversaciones con usuarios sin registrar información real.
- Evaluar respuestas del modelo en casos “parecidos a producción”.
- Compartir datasets entre partners o vendors sin comprometer seguridad.

---

### 🛠️ Herramientas populares

| Herramienta | Características destacadas |
|------------|------------------------------|
| **Tonic.ai** | Generación de datos sintéticos a partir de bases reales con preservación de estadística y relaciones. |
| **Mostly AI** | Datos sintéticos altamente realistas y compatibles con GDPR. |
| **Gretel.ai** | Generación automática de datasets sintéticos para entrenamiento de modelos. |
| **YData** | Plataforma open source con integración directa con pipelines de IA. |

---

### 🔧 Ejemplo práctico: Simulación de dataset bancario

```json
[
  {
    "nombre": "Camila Ríos",
    "rut": "XX.XXX.XXX-X",
    "monto_transaccion": 12500,
    "fecha": "2023-08-21",
    "categoria": "Farmacia"
  },
  {
    "nombre": "Andrés Vargas",
    "rut": "XX.XXX.XXX-X",
    "monto_transaccion": 87000,
    "fecha": "2023-08-22",
    "categoria": "Restaurante"
  }
]
```

Este dataset puede generarse automáticamente con Tonic.ai o Gretel y usarse para pruebas o entrenamiento sin exponer datos reales.

---

### 🧪 Actividad práctica

1. Instala `gretel-synthetics` o accede a una plataforma como Tonic.ai.
2. Sube un CSV con datos reales (en entorno seguro).
3. Aplica filtros de anonimización y entrenamiento de modelo sintético.
4. Exporta el dataset generado.
5. Usa los datos sintéticos para afinar o evaluar un LLM sin riesgos.

---

### 🧯 Consideraciones

- No todos los datos sintéticos son automáticamente seguros: **valida su calidad y similitud**.
- Asegura que no haya posibilidad de “re-identificación”.
- Combina esta técnica con bóvedas o controles de acceso para máxima seguridad.

---


## 📌 Conclusión

Los LLMs nos permiten crear experiencias avanzadas, pero su adopción sin prácticas de privacidad robustas puede poner en riesgo a millones de usuarios. Las bóvedas de privacidad no son solo una solución técnica: son un pilar fundamental para una **IA ética, legal y confiable**.

