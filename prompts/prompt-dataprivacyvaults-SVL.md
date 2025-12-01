# Sergio Valdueza - Funcionamiento de los Privacy Vault y, en particular, de Skyflow.

## 00 - Metaprompt inicial

Como experto en Prompt engineering genera el prompt ideal para pedirle a un LLM que investigue y describa como funcionan las últimas soluciones comerciales y de ingeniería que están emergiendo rápidamente para afrontar uno de los principales problemas de uso de LLMs en entornos sensibles: la fuga de datos personales. Y en concreto, que investigue como funciona Skyflow, el cual ofrece un “LLM Privacy Vault” que tokeniza o enmascara datos sensibles antes de que lleguen al modelo, asegurando que el entrenamiento o las inferencias no filtren PII.

## 01 - Prompt de solicitud del informe

Eres un/a investigador/a especializado/a en seguridad de datos, privacidad diferencial, y uso responsable de modelos de lenguaje (LLMs). Tu tarea: producir un informe técnico riguroso, actualizado (últimos 2-3 años), que investigue y describa cómo funcionan las soluciones comerciales y de ingeniería que están emergiendo rápidamente para prevenir fugas de datos personales (PII) cuando se usan LLMs en entornos sensibles (empresas, salud, finanzas, administración pública, etc.).

En particular, enfócate en el caso de Skyflow (LLM Privacy Vault). Investiga cómo Skyflow tokeniza o enmascara datos sensibles antes de enviarlos al modelo, cómo interactúa con el pipeline de inferencia o entrenamiento, qué mecanismos de enmascaramiento/tokenización usa, qué tipo de datos considera sensibles, si soporta datos estructurados (por ejemplo, bases de datos), datos no estructurados (texto libre), cómo se reinserta la información real tras inferencia (si aplica), y cómo garantizan que no haya fuga de PII ni reidentificación.

El informe debe contener al menos las siguientes secciones:

1. Panorama general: resumen de por qué la fuga de PII es un problema crítico en entornos sensibles cuando se usan LLMs; riesgos asociados (cumplimiento legal, reputacional, seguridad, bias, etc.).

2. Principales enfoques en soluciones recientes: mención y breve descripción de 3–6 soluciones comerciales o de ingeniería (además de Skyflow) que buscan mitigar estos riesgos — por ejemplo, enmascaramiento/tokenización, “data vaults”, pipelines de pre‑procesado, uso de embeddings seguros, separación de contexto sensible/no sensible, sandboxing, fine‑tuning seguro, etc.

3. Caso detallado: Skyflow — explicación técnica de su arquitectura, cómo funcionan sus “vaults”, cómo se integran con el flujo de datos (input → enmascarado → inferencia → post‑processing), qué estándares o protocolos usan, limitaciones conocidas, ventajas e inconvenientes, escenarios de uso ideales.

4. Análisis crítico: evaluación de la efectividad real de estos enfoques — riesgos residuales (por ejemplo, context leakage, reidentificación, side‑channels), qué no solucionan, posibles vulnerabilidades.

5. Recomendaciones prácticas / Buenas prácticas: en función del análisis, qué medidas deberíamos adoptar (o exigir) si vamos a usar LLMs en un entorno con PII; cuándo tiene sentido un “privacy vault” vs otras opciones; cómo auditar/controlar esos sistemas.

Al final, provee una bibliografía / lista de fuentes — artículos, documentación oficial, whitepapers, posts técnicos, etc. — con hipervínculos cuando estén disponibles, para que cualquier persona pueda verificar o profundizar.

Estructura la respuesta en formato de informe, con títulos, subtítulos, viñetas cuando convenga, claridad técnica pero sin jerga innecesaria. Si hay incertidumbres (falta de información pública, áreas grises, supuestos), indícalas explícitamente.

## 02 - Prompt de refinamiento para hacer el informe más ligero y "digerible"

Haz el informe mucho más resumido, y con un lenguaje mucho más informal, explicando como funciona todo de forma amena y par aun público menos técnico.

## 03 - Prompt para incluir hipervínculos y generar el archivo en formato .md

Añade en el apartado de leer más los hipervínculos donde consultar dichos datos, verificando que no estén rotos, y guarda todo el informe un archivo llamado skyflow-SVL.md

## 04 - Metaprompt para poder genera la Infografía

Como experto en generación de imágenes con el modelo Nano Banana Pro, genera un prompt para realizar una infografía que explique el funcionamiento de Skyflow como Data Privacy Vault, basado en un informe entregado en formato .md

## 05 - Prompt para generar la Infografía con Nano Banana Pro

Crea una infografía profesional y clara que explique el funcionamiento de Skyflow como Data Privacy Vault. Basada en la información de un informe técnico en formato .md, la infografía debe incluir:

Título principal: "Skyflow: Data Privacy Vault para LLMs"

Secciones visuales:

Panorama general: riesgo de fuga de datos personales (PII) al usar LLMs.

Arquitectura de Skyflow: entrada de datos → tokenización/enmascarado → inferencia → salida segura.

Tipos de datos sensibles soportados (estructurados y no estructurados).

Beneficios principales y limitaciones.

Estilo visual: limpio, profesional, corporativo, con colores suaves, iconografía intuitiva (candados, bases de datos, nubes de datos, LLM), diagramas de flujo claros y flechas indicando el flujo de datos.

Textos y etiquetas: breves, concisos, fáciles de leer; evita jerga excesiva.

Formato final: apto para presentaciones o publicación digital, con jerarquía visual clara entre títulos, subtítulos y elementos gráficos.

Haz que la infografía sea visualmente atractiva y comprensible para un público técnico no necesariamente experto en seguridad de datos.