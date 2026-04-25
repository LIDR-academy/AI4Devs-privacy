# Metaprompt
Como un experto en ciberseguridad y en desarrollo de software con IA:

-  describe que es el proceso de anonimización o de-identificación de datos para entrenamiento de LLMs.
- describe del proceso para anonimizar los datos
- genera un diagrama de flujo mermaid con el proceso
- explica escenarios donde es necesario aplicar este proceso
- explica dónde no es tan necesario
- explica la relación con políticas como GDPR , 
- explica un ejemplo
- explica soluciones para implantar este proceso. Explica una solución comercial y cómo hacerlo por ti mismo.
- el resultado debe ser generado en format markdown

# Prompt Utilizado

Actúa como un experto en ciberseguridad, privacidad de datos y desarrollo de software con IA.

Genera una guía en **formato Markdown** sobre la anonimización o de-identificación de datos para el entrenamiento de LLMs.

La guía debe cubrir:

## 1. Definición
Explica qué es la anonimización y la de-identificación de datos en el contexto del entrenamiento, ajuste fino o evaluación de modelos de lenguaje grandes.

Diferencia claramente entre:
- Datos anonimizados
- Datos seudonimizados
- Datos enmascarados
- Datos sintéticos

## 2. Proceso de anonimización
Describe paso a paso un proceso recomendado para anonimizar datos antes de usarlos con LLMs.

Incluye, como mínimo:
- Inventario y clasificación de datos
- Identificación de PII, PHI, secretos, credenciales y datos sensibles
- Evaluación de riesgos de reidentificación
- Selección de técnicas de anonimización
- Aplicación de transformaciones
- Validación de privacidad
- Validación de utilidad del dato
- Auditoría y trazabilidad
- Monitoreo continuo

## 3. Diagrama de flujo
Genera un diagrama de flujo usando sintaxis **Mermaid** que represente el proceso completo de anonimización.

El diagrama debe incluir decisiones como:
- ¿Contiene datos personales o sensibles?
- ¿Es posible eliminar el dato?
- ¿Debe conservarse utilidad analítica?
- ¿Existe riesgo de reidentificación?
- ¿El dataset cumple los criterios de privacidad?

## 4. Escenarios donde es necesario aplicar anonimización
Explica casos concretos donde este proceso es obligatorio o altamente recomendable, por ejemplo:
- Entrenamiento o fine-tuning de LLMs con datos internos
- Logs de aplicaciones
- Tickets de soporte
- Chats con clientes
- Historial médico
- Datos financieros
- Datos de empleados
- Código fuente con secretos o credenciales
- Datasets compartidos con terceros

## 5. Escenarios donde no es tan necesario
Explica situaciones donde la anonimización puede no ser necesaria o puede ser menos crítica, aclarando los riesgos residuales.

Incluye ejemplos como:
- Datos públicos sin información personal
- Datos sintéticos bien generados
- Contenido técnico sin identificadores
- Datasets ya anonimizados y validados
- Procesamiento local sin retención, bajo controles estrictos

## 6. Relación con regulaciones y políticas
Explica la relación entre anonimización/de-identificación y normativas como:
- GDPR / RGPD
- HIPAA
- CCPA / CPRA
- ISO 27001
- SOC 2
- Políticas internas de seguridad y privacidad

Aclara especialmente:
- Diferencia entre anonimización y seudonimización bajo GDPR
- Principio de minimización de datos
- Base legal para procesamiento
- Retención de datos
- Derechos de los titulares
- Transferencias a terceros o proveedores de IA

## 7. Ejemplo práctico
Incluye un ejemplo antes/después con un texto que contenga datos sensibles.

El ejemplo debe mostrar:
- Texto original
- Datos sensibles detectados
- Texto anonimizado
- Técnica aplicada
- Riesgos residuales

## 8. Soluciones para implantar el proceso
Explica dos enfoques:

### A. Solución comercial
Describe una solución comercial típica para anonimización/de-identificación de datos para IA.

Incluye:
- Capacidades esperadas
- Integración con pipelines de datos o MLOps
- Detección automática de PII
- Soporte para cumplimiento normativo
- Auditoría
- Ventajas
- Limitaciones
- Criterios para seleccionar proveedor

No inventes precios ni afirmes certificaciones específicas si no puedes verificarlas.

### B. Solución Develop Yourself / interna
Describe cómo implementar una solución propia.

Incluye:
- Arquitectura recomendada
- Componentes principales
- Herramientas open source o técnicas posibles
- Reglas, expresiones regulares y modelos NER
- Validación humana
- Pruebas de reidentificación
- Registro de auditoría
- Controles de acceso
- Integración con CI/CD, ETL o pipelines de entrenamiento
- Buenas prácticas de seguridad

## 9. Recomendaciones finales
Incluye una lista clara de buenas prácticas para equipos que quieran usar datos internos en LLMs de forma segura.

Requisitos de estilo:
- Escribe en español.
- Usa tono profesional y claro.
- Usa encabezados Markdown.
- Incluye listas y tablas cuando aporten claridad.
- Añade links / referenciaa a elementos clave del contenido generado
- Mantén un enfoque práctico para equipos de ciberseguridad, legal, datos y desarrollo.
- No des asesoría legal definitiva; indica que las decisiones regulatorias deben validarse con el equipo legal o DPO.
- El resultado completo debe estar en Markdown que complemente el contenido de la carpeta de-identificación
