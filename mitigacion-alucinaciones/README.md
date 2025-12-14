# Mitigación de Alucinaciones en LLMs

## Introducción

Las **alucinaciones** son uno de los problemas más críticos en el uso de modelos de lenguaje grandes (LLMs). Ocurren cuando el modelo genera información que parece plausible pero es **factualmente incorrecta, inventada o no fundamentada** en datos reales.

### Estadísticas actuales (2024)

Según estudios recientes, las tasas de alucinación en modelos públicos varían entre **3% y 16%** dependiendo del modelo y la tarea. Esto representa un riesgo significativo en aplicaciones críticas.

| Modelo | Tasa de Alucinación Aproximada |
|--------|-------------------------------|
| GPT-4 Turbo | ~3-5% |
| Claude 3.5 | ~3-4% |
| Llama 3.1 | ~8-12% |
| Modelos Open Source menores | ~10-16% |

*Fuente: [Comprehensive Survey of Hallucination Mitigation Techniques (2024)](https://arxiv.org/abs/2401.01313)*

---

## Tipos de Alucinaciones

### 1. Alucinaciones Factuales
El modelo genera hechos incorrectos presentados como verdaderos.

```
Usuario: "¿Quién escribió Don Quijote?"
LLM (alucinación): "Don Quijote fue escrito por Gabriel García Márquez en 1605"
Correcto: Miguel de Cervantes
```

### 2. Alucinaciones de Fuentes
El modelo cita fuentes que no existen o atribuye información incorrectamente.

```
Usuario: "Dame referencias sobre machine learning"
LLM (alucinación): "Según el paper 'Deep Learning Fundamentals' de Yann LeCun
publicado en Nature en 2019, página 234..."
Problema: El paper no existe o los datos son incorrectos
```

### 3. Alucinaciones Lógicas
Razonamientos que parecen válidos pero contienen errores lógicos.

```
Usuario: "Si todos los pájaros vuelan y los pingüinos son pájaros, ¿vuelan los pingüinos?"
LLM (alucinación): "Sí, los pingüinos vuelan porque son pájaros y todos los pájaros vuelan."
```

### 4. Alucinaciones por Contexto Insuficiente
El modelo "inventa" información cuando no tiene suficiente contexto.

```
Usuario: "¿Cuáles fueron las ventas de mi empresa el Q4 2023?"
LLM (alucinación): "Las ventas del Q4 2023 fueron de $2.3 millones, un incremento del 15%"
Problema: El modelo no tiene acceso a esos datos
```

---

## Técnicas de Mitigación

Las técnicas se dividen en dos categorías principales: **enfoques sin gradiente** (aplicados en inferencia) y **enfoques con gradiente** (modifican el modelo).

### Enfoques Sin Gradiente (Inference-Time)

#### 1. Retrieval-Augmented Generation (RAG)

**Descripción**: Combina el LLM con un sistema de recuperación de información que proporciona contexto factual antes de generar respuestas.

```
┌─────────────────────────────────────────────────────────────┐
│                      ARQUITECTURA RAG                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   [Consulta Usuario] ──► [Embedding] ──► [Vector DB]        │
│                                              │                │
│                                              ▼                │
│                                    [Documentos Relevantes]   │
│                                              │                │
│                                              ▼                │
│   [Consulta + Contexto] ──────────────► [LLM] ──► [Respuesta]│
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Implementación básica**:
```python
from langchain.vectorstores import Chroma
from langchain.embeddings import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

# Crear base de conocimiento
vectorstore = Chroma.from_documents(
    documents=documentos_verificados,
    embedding=OpenAIEmbeddings()
)

# Configurar RAG
qa_chain = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model="gpt-4"),
    chain_type="stuff",
    retriever=vectorstore.as_retriever(
        search_kwargs={"k": 5}  # Top 5 documentos relevantes
    ),
    return_source_documents=True  # Importante: mostrar fuentes
)

# Consulta con RAG
resultado = qa_chain({"query": "¿Cuál es la política de devoluciones?"})
print(f"Respuesta: {resultado['result']}")
print(f"Fuentes: {resultado['source_documents']}")
```

**Beneficios**:
- Fundamenta respuestas en datos verificados
- Permite actualizar conocimiento sin reentrenar
- Facilita auditoría y trazabilidad

**Limitaciones**:
- Calidad depende de la base de conocimiento
- Puede recuperar documentos irrelevantes
- Aumenta latencia y costos

---

#### 2. Chain-of-Thought (CoT) con Verificación

**Descripción**: Forzar al modelo a mostrar su razonamiento paso a paso, permitiendo detectar errores lógicos.

```python
prompt_cot = """
Pregunta: {pregunta}

Instrucciones:
1. Analiza la pregunta paso a paso
2. Para cada afirmación que hagas, indica tu nivel de certeza (alto/medio/bajo)
3. Si no estás seguro de algo, indícalo explícitamente
4. Solo proporciona información de la que estés seguro

Razonamiento:
"""

# Ejemplo de respuesta esperada:
"""
Razonamiento:
1. La pregunta es sobre la fecha de fundación de OpenAI
2. [CERTEZA ALTA] OpenAI fue fundada en 2015
3. [CERTEZA ALTA] Los fundadores incluyen a Sam Altman y Elon Musk
4. [CERTEZA MEDIA] La inversión inicial fue de aproximadamente $1 billón
5. [CERTEZA BAJA] No estoy seguro de la fecha exacta del mes

Respuesta: OpenAI fue fundada en diciembre de 2015. Sin embargo, no tengo
certeza completa sobre algunos detalles específicos de la inversión inicial.
"""
```

---

#### 3. Self-Consistency (Auto-Consistencia)

**Descripción**: Generar múltiples respuestas y seleccionar la más consistente entre ellas.

```python
import openai
from collections import Counter

def generate_with_self_consistency(prompt, num_samples=5, temperature=0.7):
    responses = []

    # Generar múltiples respuestas
    for _ in range(num_samples):
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}],
            temperature=temperature
        )
        responses.append(response.choices[0].message.content)

    # Extraer respuestas clave (simplificado)
    # En producción, usar NLP más sofisticado
    key_answers = [extract_key_answer(r) for r in responses]

    # Seleccionar respuesta más común
    most_common = Counter(key_answers).most_common(1)[0]

    return {
        "answer": most_common[0],
        "confidence": most_common[1] / num_samples,
        "all_responses": responses
    }

# Uso
result = generate_with_self_consistency(
    "¿En qué año se fundó Microsoft?",
    num_samples=5
)
print(f"Respuesta: {result['answer']}")
print(f"Confianza: {result['confidence']*100}%")
```

---

#### 4. Context-Aware Decoding (CAD)

**Descripción**: Integra vectores semánticos de contexto en el proceso de decodificación, útil cuando el conocimiento previo del modelo contradice el contexto proporcionado.

**Escenario**:
```
Contexto: "La reunión fue reprogramada para el 15 de marzo de 2025"
Conocimiento del modelo: No tiene información sobre esta reunión específica

Sin CAD: Podría inventar una fecha basándose en patrones
Con CAD: Prioriza el contexto proporcionado sobre su conocimiento general
```

---

#### 5. Decoding by Contrasting Layers (DoLa)

**Descripción**: Estrategia de decodificación que contrasta las distribuciones de probabilidad entre capas del modelo para reducir alucinaciones sin necesidad de fine-tuning.

**Principio**: Las capas más profundas tienden a tener información más factual, mientras que las capas intermedias pueden introducir "ruido" creativo.

```python
# Pseudocódigo conceptual de DoLa
def dola_decode(model, input_ids, early_layer=16, late_layer=32):
    # Obtener logits de capa temprana
    early_logits = model.get_layer_logits(input_ids, layer=early_layer)

    # Obtener logits de capa tardía
    late_logits = model.get_layer_logits(input_ids, layer=late_layer)

    # Contrastar distribuciones
    # Penalizar tokens donde early y late divergen significativamente
    contrasted_logits = late_logits - alpha * early_logits

    return contrasted_logits
```

---

### Enfoques Con Gradiente (Training-Time)

#### 1. Fine-Tuning con Datos Verificados

**Descripción**: Entrenar el modelo con datasets curados donde cada respuesta está verificada factualmente.

```python
# Ejemplo de dataset de fine-tuning
training_data = [
    {
        "prompt": "¿Cuál es la capital de Francia?",
        "completion": "La capital de Francia es París.",
        "verified": True,
        "source": "Geographic Database v2024"
    },
    {
        "prompt": "¿Quién pintó la Mona Lisa?",
        "completion": "La Mona Lisa fue pintada por Leonardo da Vinci entre 1503 y 1519.",
        "verified": True,
        "source": "Louvre Museum Official Records"
    }
]
```

#### 2. RLHF con Penalización de Alucinaciones

**Descripción**: Reinforcement Learning from Human Feedback donde los evaluadores penalizan específicamente las respuestas alucinadas.

```
Escala de evaluación:
1 - Completamente alucinado (información inventada)
2 - Parcialmente incorrecto (algunos hechos mal)
3 - Mayormente correcto con omisiones
4 - Correcto pero sin fuentes
5 - Correcto y bien fundamentado
```

#### 3. Knowledge Injection

**Descripción**: Inyectar conocimiento estructurado (grafos de conocimiento, bases de datos) directamente en el proceso de entrenamiento.

```
┌─────────────────────────────────────────┐
│         KNOWLEDGE INJECTION             │
├─────────────────────────────────────────┤
│                                         │
│   [Knowledge Graph] ──┐                 │
│                       ▼                 │
│   [Base LLM] ──► [Fusion Layer] ──► [Enhanced LLM]
│                       ▲                 │
│   [Entity Database] ──┘                 │
│                                         │
└─────────────────────────────────────────┘
```

---

## Framework Unificado de Mitigación

La investigación más reciente propone un framework con 4 componentes:

### 1. Output Parser
Extrae afirmaciones verificables de la respuesta del LLM.

### 2. Reference Parser
Extrae información de fuentes de referencia confiables.

### 3. Fact Verifier
Compara afirmaciones con referencias usando:
- **Sentence-level**: Semántica global
- **Entity-level**: Verificación de entidades específicas

### 4. Mitigator
Corrige o reformula respuestas basándose en verificación.

```python
class HallucinationMitigationPipeline:
    def __init__(self, llm, retriever, verifier):
        self.llm = llm
        self.retriever = retriever
        self.verifier = verifier

    def process(self, query):
        # 1. Generar respuesta inicial
        initial_response = self.llm.generate(query)

        # 2. Extraer afirmaciones
        claims = self.extract_claims(initial_response)

        # 3. Recuperar referencias
        references = self.retriever.get_references(query, claims)

        # 4. Verificar cada afirmación
        verification_results = []
        for claim in claims:
            result = self.verifier.verify(claim, references)
            verification_results.append({
                "claim": claim,
                "verified": result.is_verified,
                "confidence": result.confidence,
                "source": result.source
            })

        # 5. Mitigar si es necesario
        if any(not v["verified"] for v in verification_results):
            return self.regenerate_with_corrections(
                query,
                initial_response,
                verification_results
            )

        return {
            "response": initial_response,
            "verification": verification_results,
            "confidence": self.calculate_overall_confidence(verification_results)
        }
```

---

## Estrategias por Dominio

### Dominio Médico/Salud

```python
medical_prompt = """
IMPORTANTE: Eres un asistente médico informativo.

Reglas estrictas:
1. Solo proporciona información de fuentes médicas verificadas
2. Siempre incluye disclaimers sobre consultar profesionales
3. Si no estás seguro, di "No tengo información confiable sobre esto"
4. Nunca diagnostiques ni prescribas
5. Cita guías clínicas cuando sea posible

Pregunta del usuario: {pregunta}

Respuesta (siguiendo las reglas anteriores):
"""
```

### Dominio Legal

```python
legal_prompt = """
CONTEXTO: Asistente de información legal general.

RESTRICCIONES:
- NO proporcionar asesoría legal específica
- Indicar jurisdicción cuando sea relevante
- Citar leyes y artículos específicos solo si estás seguro
- Recomendar consulta con abogado para casos específicos

Si no conoces la respuesta exacta, responde:
"Esta es un área que requiere asesoría legal profesional.
Te recomiendo consultar con un abogado especializado."

Consulta: {consulta}
"""
```

### Dominio Financiero

```python
financial_prompt = """
ROLE: Asistente de información financiera educativa.

OBLIGATORIO:
1. Incluir disclaimer: "Esto no es asesoría financiera"
2. No predecir precios o rendimientos
3. Usar datos históricos verificables
4. Indicar fecha de última actualización de información

PROHIBIDO:
- Recomendar inversiones específicas
- Garantizar rendimientos
- Proporcionar datos de mercado en tiempo real (no tengo acceso)

Pregunta: {pregunta}
"""
```

---

## Métricas de Evaluación

### Métricas Automáticas

| Métrica | Descripción | Uso |
|---------|-------------|-----|
| **FActScore** | Porcentaje de hechos verificables | Biografías, artículos |
| **SelfCheckGPT** | Consistencia entre múltiples generaciones | General |
| **ROUGE-L** | Overlap con texto de referencia | Resúmenes |
| **BERTScore** | Similitud semántica con referencia | General |

### Evaluación Humana

```markdown
## Checklist de Evaluación Manual

Para cada respuesta, verificar:
- [ ] ¿Todas las fechas mencionadas son correctas?
- [ ] ¿Los nombres de personas/lugares son correctos?
- [ ] ¿Las estadísticas citadas son verificables?
- [ ] ¿Las fuentes mencionadas existen?
- [ ] ¿El razonamiento lógico es válido?
- [ ] ¿Se indican apropiadamente las incertidumbres?
```

---

## Herramientas y Librerías

| Herramienta | Propósito | Enlace |
|-------------|-----------|--------|
| **LangChain** | Framework RAG | [langchain.com](https://langchain.com) |
| **LlamaIndex** | Indexación y RAG | [llamaindex.ai](https://llamaindex.ai) |
| **Guardrails AI** | Validación de salidas | [guardrailsai.com](https://guardrailsai.com) |
| **TruLens** | Evaluación de RAG | [trulens.org](https://trulens.org) |
| **Ragas** | Métricas para RAG | [GitHub](https://github.com/explodinggradients/ragas) |

---

## Mejores Prácticas

### 1. Diseño de Prompts Anti-Alucinación

```python
anti_hallucination_prompt = """
Instrucciones importantes:
1. Si no sabes algo con certeza, di "No tengo información confiable sobre esto"
2. Distingue entre hechos verificados y opiniones/especulaciones
3. Indica el nivel de confianza: [ALTA], [MEDIA], [BAJA]
4. No inventes fuentes, fechas, nombres o estadísticas
5. Si citas algo, asegúrate de que sea verificable

Pregunta: {pregunta}

Respuesta (siguiendo las instrucciones):
"""
```

### 2. Arquitectura de Sistema

```
┌────────────────────────────────────────────────────────────────┐
│                   SISTEMA ANTI-ALUCINACIÓN                      │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Input] ──► [Clasificador] ──► [Router]                       │
│                                    │                            │
│              ┌─────────────────────┼─────────────────────┐     │
│              ▼                     ▼                     ▼     │
│        [RAG Path]           [Direct LLM]          [Decline]    │
│              │                     │                     │     │
│              ▼                     ▼                     ▼     │
│        [Retrieval]          [Generate]           ["No sé"]     │
│              │                     │                            │
│              └─────────┬───────────┘                            │
│                        ▼                                        │
│                  [Verificador]                                  │
│                        │                                        │
│              ┌─────────┴─────────┐                              │
│              ▼                   ▼                              │
│         [Aprobado]          [Rechazado]                        │
│              │                   │                              │
│              ▼                   ▼                              │
│         [Output]          [Regenerar/Declinar]                 │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### 3. Logging y Monitoreo

```python
import logging
from datetime import datetime

class HallucinationLogger:
    def __init__(self):
        self.logger = logging.getLogger("hallucination_monitor")

    def log_response(self, query, response, verification_result):
        log_entry = {
            "timestamp": datetime.utcnow().isoformat(),
            "query": query,
            "response_preview": response[:200],
            "verified": verification_result["verified"],
            "confidence": verification_result["confidence"],
            "flagged_claims": verification_result.get("flagged_claims", [])
        }

        if not verification_result["verified"]:
            self.logger.warning(f"Potential hallucination detected: {log_entry}")

        return log_entry
```

---

## Referencias

- [A Comprehensive Survey of Hallucination Mitigation Techniques in LLMs (2024)](https://arxiv.org/abs/2401.01313)
- [A Survey on Hallucination in LLMs: Principles, Taxonomy, Challenges](https://arxiv.org/abs/2311.05232)
- [Analytics Vidhya - Top 7 Strategies to Mitigate Hallucinations](https://www.analyticsvidhya.com/blog/2024/02/hallucinations-in-llms/)
- [Turing - Key Strategies to Minimize LLM Hallucinations](https://www.turing.com/resources/minimize-llm-hallucinations-strategy)
- [Hugging Face - Advanced Techniques to Mitigate LLM Hallucinations](https://huggingface.co/blog/Imama/pr)
- [Tredence - LLM Hallucination Mitigation Techniques Explained](https://www.tredence.com/blog/mitigating-hallucination-in-large-language-models)

---

*Última actualización: Diciembre 2024*
