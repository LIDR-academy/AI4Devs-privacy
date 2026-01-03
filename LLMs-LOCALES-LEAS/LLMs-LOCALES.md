## 1. ¿Qué entendemos por “LLMs locales”?

Cuando hablamos de **LLMs locales** nos referimos a modelos cuyas *weights* puedes descargar y ejecutar en tu propia infraestructura (on-premise, nube privada o incluso una sola workstation), sin depender de una API SaaS externa.
En la práctica esto suele significar usar modelos “open weights” como Llama 3, Gemma, Mixtral, Qwen, DeepSeek, etc., desplegados con frameworks tipo **Ollama, llama.cpp, vLLM, TGI, LMDeploy, GKE, etc.** ([llamaindex.ai][1])

---

## 2. Principales retos al implementar LLMs locales

### a) Infraestructura y rendimiento

* Necesidad de **GPUs** o hardware especializado (VRAM, ancho de banda de memoria, NVLink).
* 7B parámetros suele requerir ~8 GB de RAM/VRAM; 13B ~16 GB; modelos de 30B+ requieren 1+ GPU potente o varias GPUs en paralelo. ([Medium][2])
* Gestionar **escalabilidad** (concurrencia, batching, cache de KV, sharding) exige stack tipo vLLM/TGI/LMDeploy.

### b) Complejidad operativa (LLMOps)

* Monitorizar **latencia, throughput, uso de GPU y calidad de respuestas**.
* Ciclo de vida: descarga, cuantización, fine-tuning, evaluación, rollback, compatibilidad de formatos (GGUF, Safetensors, etc.).
* Integración en pipelines CI/CD y observabilidad.

### c) Seguridad y privacidad

* Endurecer el entorno: aislamiento de red, control de acceso, cifrado, logging seguro.
* Riesgos específicos en algunos modelos (p.ej., preocupaciones gubernamentales respecto a modelos chinos como DeepSeek por posibles obligaciones legales de compartir datos). ([Tom's Hardware][3])

### d) Licencias y cumplimiento

* Muchas familias (Llama, Gemma, Mistral, Qwen, DeepSeek…) son **open-weights**, no 100 % “open source” en sentido estricto: licencias con restricciones de uso, benchmarks y redistribución. ([Le Monde.fr][4])
* Requiere revisión legal para:

  * usos comerciales,
  * volúmenes de usuarios,
  * sectores regulados.

### e) Talento y curva de aprendizaje

* Necesitas perfilar roles **MLOps/LLMOps** que sepan:

  * cuantizar,
  * afinar (LoRA/QLoRA, SFT, RAG),
  * evaluar modelos,
  * asegurar el stack.

---

## 3. Beneficios de LLMs locales

### a) Control de datos y cumplimiento

* Los datos **no salen** de tu perímetro; facilita cumplimiento con GDPR, LFPDPPP, NDA con clientes, etc.
* Tienes control total del **logging** y la retención de datos.

### b) Personalización profunda

* Fine-tuning, RAG, adapters específicos a tu dominio:

  * vocabulario de negocio,
  * código interno,
  * documentación propia.
* Puedes ajustar el modelo a tu **cultura de seguridad** (políticas de respuesta, filtros, red-teaming).

### c) Costos variables y previsibles

* A partir de cierto volumen, **pagar GPUs puede ser más barato** que llamadas masivas a APIs propietarias.
* Puedes usar modelos **small/medium** (3B–14B) muy eficientes como Phi-3, Gemma o Qwen para reducir costes. ([azure.microsoft.com][5])

### d) Mitigar vendor lock-in

* Puedes cambiar de modelo (Llama → Mixtral → Qwen → DeepSeek) sin cambiar el patrón de arquitectura.
* Evitas dependencia de la política comercial de un único proveedor.

### e) Latencia y resiliencia

* Menor latencia al estar “cerca” de tus apps.
* Sigues operando aunque una API externa caiga o cambie límites.

---

## 4. Costos: cómo se componen

### a) Infraestructura (CAPEX / OPEX)

* **Workstation / servidor**: 1 GPU moderna (p.ej. 24–48 GB) suele ser suficiente para modelos de 7–14B cómodamente; 70B o MoE grandes requieren varias GPUs o clúster.
* Alternativa: **nube con GPU on-demand** (AWS, GCP, Azure, OVH, etc.) para evitar CAPEX pero con OPEX elevado si hay tráfico constante.

### b) Operación y equipo

* Horas de perfiles:

  * DevOps/MLOps para despliegue,
  * ingenieros de IA para tuning y evaluación,
  * seguridad para hardening y cumplimiento.

### c) Desarrollo y tuning

* Costos de:

  * preparar datasets internos,
  * etiquetado/curación,
  * ejecutar entrenamientos (incluso sólo LoRA),
  * bancos de pruebas (benchmarks + evals propios).

En general, para una **empresa de software mediana**, el coste inicial serio no suele ser el *modelo* (que es gratuito/open-weights), sino **infra + equipo + procesos**.

---

## 5. Estado actual del desarrollo y nivel de adopción

### Estado del desarrollo

* El ecosistema de open models es **muy dinámico**: listas recientes de “mejores LLMs open source” incluyen DeepSeek V3, Llama 3.x, Qwen 2.5, Mistral Large/Mixtral, Falcon 2, Yi-34B, Phi-3, Gemma 2/3, OpenChat, etc. ([Medium][6])
* Plataformas como **Hugging Face, Ollama, llama.cpp, vLLM, LMDeploy** y guías oficiales de GCP/Azure para desplegar modelos abiertos en GKE/AKS están ya relativamente maduras. ([Google Codelabs][7])

### Nivel de adopción

Tendencias generales:

* **Empresas grandes** de software / cloud / telco: despliegues locales y en nubes privadas para:

  * copilots internos,
  * análisis de documentos,
  * asistentes de desarrollo.
* **SaaS B2B y consultoras**: uso mix API propietaria + LLM local para:

  * manejar datos sensibles/locales,
  * reducir coste por token,
  * diferenciar producto.
* **Comunidad developer** y startups técnicas: ecosistema muy activo de “local LLM” y “local-first AI”.

No hay una cifra única de adopción, pero la combinación de:

* proliferación de modelos open-weights,
* tooling maduro,
* preocupación por privacidad y coste,

está empujando fuerte a los LLMs locales, sobre todo en **empresas de desarrollo de software**.

---

## 6. Principales familias de LLMs locales (visión rápida)

1. **Llama 3 (Meta)** – 8B y 70B, muy competitivo en benchmarks frente a otros open models, descarga disponible para despliegue local. ([ai.meta.com][8])
2. **Gemma 2 / Gemma 3 (Google)** – modelos ligeros, pensados para correr en un GPU o incluso dispositivos modestos, con buena integración en ecosistema Google; licencia con restricciones. ([Google Cloud Documentation][9])
3. **Mistral / Mixtral (Mistral AI)** – Mistral 7B y Mixtral 8x7B/8x22B (Mixture-of-Experts) muy eficientes y fuertes en código y multitarea. ([mistral.ai][10])
4. **DeepSeek V3 / R1 (DeepSeek)** – fuertes en *reasoning* y código, con gran foco en despliegue local (soportado por Llama.cpp, LMDeploy, etc.), pero con debates de seguridad y sesgos políticos. ([GitHub][11])
5. **Qwen 2.5 (Alibaba)** – familia amplia (0.5B–72B, incluyendo VL), muy fuerte en chino y tareas de visión; diseñado para ser descargable y ejecutable localmente. ([Hugging Face][12])
6. **Phi-3 (Microsoft)** – “small language models” de 3–14B diseñados para ser muy capaces y baratos en producción, con foco en eficiencia. ([azure.microsoft.com][13])
7. **Falcon 2 11B (TII)** – modelo 11B multilingüe y totalmente open-source, licencia muy permisiva, pensada para uso productivo y multilingüe. ([falconllm.tii.ae][14])
8. **Yi-34B (01.AI)** – modelo 34B muy fuerte en inglés y chino, con contexto largo hasta ~200k tokens y buen rendimiento general. ([Hugging Face][15])
9. **Gemma 2 27B** – (ya incluida en Gemma family arriba) muy orientada a despliegues seguros y alineados, aunque con licencia más restrictiva. ([Medium][6])
10. **OpenChat 3.5** – fine-tune ligero y muy útil como modelo de chat general para prototipos, basado en arquitecturas LLaMA-like. ([Medium][6])

---

## 7. Tabla comparativa (10 modelos recomendados para despliegue local)

> Nota: los valores de “Coste”, “Nivel de adopción” y “Retos/Beneficios” son **cualitativos y relativos** entre estos modelos, pensados para una empresa de software típica con 1–8 GPUs.

| Modelo / Familia                                         | Retos principales (local)                                                                                                                                                              | Beneficios clave                                                                                                                                | Coste relativo de despliegue*                                        | Estado actual de desarrollo                                                                         | Nivel de adopción aproximado                                                                      |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Llama 3 (8B / 70B)** ([ai.meta.com][8])                | 70B exige varias GPUs o GPU grande; licencia no es plenamente “open source”; fuerte escrutinio legal de uso comercial masivo.                                                          | Ecosistema enorme (tools, fine-tunes, tutorials); rendimiento top en benchmarks; buen equilibrio general para asistentes, coding, RAG.          | **Medio-Alto** (barato con 8B, caro con 70B a gran escala)           | Muy activo, con soporte en múltiples plataformas (Hugging Face, Ollama, nubes).                     | **Muy alto** en empresas y comunidad.                                                             |
| **Gemma 2/3 (2B–27B)** ([Google Cloud Documentation][9]) | Licencia con restricciones; ecosistema algo más cerrado que Llama/Mistral; algunas variantes aún jóvenes.                                                                              | Diseñados para correr en una sola GPU; buenas herramientas oficiales; buen rendimiento en un solo acelerador y versiones multimodales.          | **Bajo-Medio** (especialmente los tamaños pequeños)                  | Familia en rápida evolución, con fuerte empuje de Google.                                           | **Alto** entre devs que usan ecosistema Google y en proyectos “single GPU”.                       |
| **Mistral 7B / Mixtral 8x7B / 8x22B** ([mistral.ai][10]) | MoE complica despliegue (routing, memoria, libs especializadas); licencias open-weights; documentación algo fragmentada entre releases.                                                | Gran eficiencia (calidad GPT-4-like en algunas tareas con coste menor); muy buenos para código y multi-idioma; excelente relación calidad/VRAM. | **Medio** (buena eficiencia, pero MoE grande requiere buenas GPUs)   | Muy activo; nuevas variantes “Large 2” en producción y soporte en varias plataformas. ([Medium][6]) | **Alto** en comunidad técnica y startups IA.                                                      |
| **DeepSeek V3 / R1** ([GitHub][11])                      | Riesgos políticos y regulatorios (alertas de autoridades sobre posible acceso gubernamental si se usan servicios conectados); sesgos/censura incrustados; documentación a veces opaca. | Rendimiento muy alto en reasoning y código; opciones de despliegue local bien soportadas (llama.cpp, LMDeploy, etc.); coste por token muy bajo. | **Medio** (modelos grandes pero con buenas opciones de cuantización) | Muy activo y en expansión (V3, R1, distillations).                                                  | **Creciendo muy rápido**, especialmente en ingeniería/código; con reservas en entornos sensibles. |
| **Qwen 2.5 (0.5–72B)** ([Hugging Face][12])              | Documentación y tooling más orientados a ecosistema chino; licencias a revisar con cuidado; tamaños grandes (72B) demandan mucha GPU.                                                  | Muy fuerte en chino y tareas multimodales (VL); gama enorme de tamaños; soporte explícito para ejecución local vía Hugging Face/Ollama.         | **De bajo a alto** según tamaño (0.5–7B muy baratos, 32–72B caros).  | Activo, con versiones 2.5 recientes y variantes VL avanzadas.                                       | **Medio-Alto**, alto en Asia y proyectos que necesitan chino + visión.                            |
| **Phi-3 (Mini/Small/Medium)** ([azure.microsoft.com][5]) | Principal reto es contexto algo menor en algunas variantes; ecosistema comunitario algo más pequeño que Llama/Mistral; atado al stack Microsoft para algunas features avanzadas.       | SLMs muy eficientes (3B–14B) con rendimiento superior a modelos más grandes; ideales para edge, on-prem pequeño y microservicios IA.            | **Bajo** (gran ventaja en coste/infraestructura).                    | Estable y en crecimiento, con foco en producción empresarial.                                       | **Medio**, pero creciendo en empresas que buscan eficiencia extrema.                              |
| **Falcon 2 11B** ([falconllm.tii.ae][14])                | 11B requiere GPU con suficiente VRAM; no tiene tanta “moda” como Llama/Mistral, por lo que hay menos fine-tunes listos; tooling algo menos mainstream.                                 | Licencia muy abierta y permisiva; buen rendimiento multilingüe; VLM disponible (texto+imagen).                                                  | **Medio** (11B es manejable en una buena GPU).                       | Activo, con tech report reciente y soporte en AWS TGI y otras plataformas.                          | **Medio**, más usado en proyectos que priorizan licencias permisivas.                             |
| **Yi-34B** ([Hugging Face][15])                          | 34B implica coste alto de hardware (multi-GPU o GPU muy grande); tuning e inferencia más complejos; “overkill” para muchos casos cotidianos.                                           | Rendimiento top en inglés y chino; contexto muy largo (~200k); muy adecuado para análisis de documentos extensos y tareas complejas.            | **Alto** (modelo grande, exige infra sólida).                        | Estable, con finetunes de chat/populares y alta posición en leaderboards open.                      | **Medio**, sobre todo en escenarios que necesitan contexto masivo.                                |
| **Gemma 2 27B** ([Medium][6])                            | Demanda de GPU relevante; licencia más restrictiva que Llama/Mistral; menos comunidad de fine-tunes que Llama.                                                                         | Buen equilibrio rendimiento/tamaño; integración estrecha con ecosistema Google; enfoque explícito en seguridad y alineación.                    | **Medio-Alto**                                                       | Activo, con soporte oficial en Vertex y tooling asociado.                                           | **Medio**, atractivo para empresas ya en GCP.                                                     |
| **OpenChat 3.5 (7B aprox.)** ([Medium][6])               | Modelo de comunidad; menos documentación corporativa; rendimiento inferior a las últimas generaciones (Llama 3, DeepSeek, etc.) en tareas muy complejas.                               | Muy ligero, fácil de correr en una sola GPU o incluso CPU cuantizada; ideal para prototipos, bots internos y casos no críticos.                 | **Muy bajo**                                                         | Desarrollo más pausado, pero estable; sigue siendo referencia en “chat ligero”.                     | **Medio** en comunidad open-source y proyectos pequeños/medianos.                                 |

* **Coste relativo de despliegue** considera principalmente hardware y complejidad operativa, no entrenamiento desde cero.



