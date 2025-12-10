# Privacidad Diferencial (Differential Privacy) en LLMs

## Breve descripción

La **privacidad diferencial** es un marco matemático robusto que garantiza que los resultados de un análisis de datos no revelen información sobre ningún individuo específico en el conjunto de datos. En el contexto de los Modelos de Lenguaje Grandes (LLMs), se convierte en una técnica fundamental para entrenar modelos con datos sensibles sin comprometer la privacidad de los usuarios.

## Descripción detallada

La privacidad diferencial fue introducida por Cynthia Dwork, Frank McSherry, Kobbi Nissim y Adam Smith en 2006 en su trabajo fundamental "Calibrating Noise to Sensitivity in Private Data Analysis". El concepto central es simple pero poderoso: **un algoritmo es privacidad-diferencialmente privado si la inclusión o exclusión de un único individuo del conjunto de datos no afecta significativamente los resultados del análisis**.

### Definición formal

Un algoritmo $\mathcal{M}$ satisface $(\epsilon, \delta)$-privacidad diferencial si para cualesquiera dos conjuntos de datos $D$ y $D'$ que difieren en un solo individuo, y para cualquier conjunto de resultados $S$:

$$P[\mathcal{M}(D) \in S] \leq e^{\epsilon} \cdot P[\mathcal{M}(D') \in S] + \delta$$

Donde:
- **$\epsilon$ (epsilon)**: parámetro de privacidad (más pequeño = más privacidad)
- **$\delta$ (delta)**: probabilidad de falla (generalmente muy pequeña, $\delta \approx 0$)

### Principios fundamentales

1. **Composición**: La privacidad se degrada al combinar múltiples consultas privadas
2. **Post-procesamiento**: Los resultados privados pueden procesarse sin pérdida de privacidad
3. **Agrupamiento**: Consultas a grupos más grandes proporcionan mejor privacidad

## 5 riesgos que resuelve

1. **Ataques de inferencia de pertenencia**: Impide que un atacante determine si un individuo específico está en los datos de entrenamiento
2. **Fuga de datos de entrenamiento**: Evita que el modelo memorice y revele información específica de usuarios
3. **Reconstrucción de datos**: Previene la reconstrucción de registros individuales a partir del modelo
4. **Cumplimiento normativo**: Facilita el cumplimiento con GDPR, HIPAA, CCPA mediante garantías matemáticas
5. **Confianza del usuario**: Proporciona pruebas verificables de protección de privacidad

## Implementación en LLMs

### 1. DP-SGD (Differential Private Stochastic Gradient Descent)

El método más común para implementar privacidad diferencial en el entrenamiento de LLMs:

```python
import torch
from torch.utils.data import DataLoader
from opacus import PrivacyEngine
from transformers import GPT2LMHeadModel, GPT2Tokenizer
from datasets import load_dataset

# Configuración inicial
model = GPT2LMHeadModel.from_pretrained('gpt2')
tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
tokenizer.pad_token = tokenizer.eos_token  # Necesario para padding
optimizer = torch.optim.AdamW(model.parameters(), lr=5e-5)

# Datos de entrenamiento (ejemplo)
# train_dataset = load_dataset("json", data_files="training_data.json")["train"]
# train_loader = DataLoader(train_dataset, batch_size=8, shuffle=True)
# Nota: Descomentar las líneas anteriores con datos reales

# Configurar privacidad diferencial
# Nota: Esto requiere train_loader definido anteriormente
# privacy_engine = PrivacyEngine()
# model, optimizer, train_loader = privacy_engine.make_private_with_epsilon(
#     module=model,
#     optimizer=optimizer,
#     data_loader=train_loader,
#     epochs=3,
#     target_epsilon=3.0,  # Parámetro de privacidad
#     target_delta=1e-5,   # Probabilidad de falla
#     max_grad_norm=1.0,   # Clipping de gradiente
# )

# Entrenamiento con privacidad
# for epoch in range(3):
#     for batch in train_loader:
#         optimizer.zero_grad()
#         
#         # Tokenizar inputs
#         inputs = tokenizer(batch["text"], return_tensors="pt", padding=True, truncation=True)
#         outputs = model(**inputs, labels=inputs["input_ids"])
#         loss = outputs.loss
#         
#         loss.backward()
#         optimizer.step()
#         
#     print(f"Epoch {epoch+1}, Loss: {loss.item()}")

# Ejemplo más simple con datos dummy:
import torch.nn as nn
from torch.utils.data import TensorDataset, DataLoader

# Datos dummy para demostración
dummy_inputs = torch.randn(100, 10)  # 100 ejemplos, 10 features
dummy_labels = torch.randint(0, 2, (100,))  # Clasificación binaria
dummy_dataset = TensorDataset(dummy_inputs, dummy_labels)
dummy_loader = DataLoader(dummy_dataset, batch_size=8, shuffle=True)

# Modelo simple
simple_model = nn.Sequential(
    nn.Linear(10, 5),
    nn.ReLU(),
    nn.Linear(5, 2)
)

# Configuración con datos dummy
privacy_engine = PrivacyEngine()
simple_model, optimizer, dummy_loader = privacy_engine.make_private_with_epsilon(
    module=simple_model,
    optimizer=torch.optim.Adam(simple_model.parameters(), lr=0.01),
    data_loader=dummy_loader,
    epochs=5,
    target_epsilon=3.0,
    target_delta=1e-5,
    max_grad_norm=1.0,
)

print("Configuración de privacidad diferencial exitosa")
```

### 2. Mechanisms en inferencia

Además del entrenamiento, se puede aplicar privacidad diferencial en las respuestas:

```python
import numpy as np

def private_response(original_response, epsilon, sensitivity=1.0):
    """Aplica mecanismo de Laplace para privacidad diferencial"""
    scale = sensitivity / epsilon
    noise = np.random.laplace(0, scale)
    return original_response + noise

# Ejemplo con probabilidades de palabras
def private_word_distribution(probabilities, epsilon):
    """Hace privadas las distribuciones de probabilidad de palabras"""
    # Normalizar y añadir ruido
    noisy_probs = probabilities + np.random.laplace(0, 1/epsilon, len(probabilities))
    # Asegurar no negativos y renormalizar
    noisy_probs = np.maximum(noisy_probs, 0)
    return noisy_probs / np.sum(noisy_probs)
```

## Casos de uso en LLMs

### 1. Chatbot de salud mental

**Contexto**: Un terapeuta virtual que se entrena con conversaciones confidenciales de pacientes.

**Implementación DP**:
```python
# Datos de entrenamiento sensibles (simulado)
mental_health_conversations = [
    "Paciente: Me siento ansioso\nTerapeuta: Hablemos sobre lo que causa tu ansiedad",
    # ... más conversaciones de ejemplo
]

# Para un caso real, usarías:
# from opacus import PrivacyEngine
# from transformers import AutoModelForCausalLM

# Entrenamiento con DP
# dp_model = train_with_differential_privacy(
#     base_model="distilgpt2",  # Modelo más pequeño y manejable
#     training_data=mental_health_data,
#     epsilon=8.0,  # Privacidad moderada
#     max_grad_norm=0.5
# )

# El modelo aprende patrones generales sin memorizar casos específicos
```

**Resultado**: El modelo puede ayudar a pacientes generando respuestas empáticas sin revelar información de casos reales.

### 2. Asistente legal corporativo

**Contexto**: Un LLM que se entrena con documentos legales confidenciales de clientes.

**Configuración DP**:
```python
import tensorflow as tf
from tensorflow_privacy.privacy.optimizers import dp_optimizer

# Configuración para alta privacidad
optimizer = dp_optimizer.DPAdamGaussianOptimizer(
    l2_norm_clip=1.0,
    noise_multiplier=1.5,  # Más ruido = más privacidad
    learning_rate=0.001
)

# Métricas de privacidad (ejemplo con valores)
n_training_samples = 10000  # Ejemplo: 10,000 documentos legales
batch_size = 32
noise_multiplier = 1.5
epochs = 20

# epsilon, delta = compute_dp_sgd_privacy(
#     n=n_training_samples,
#     batch_size=batch_size,
#     noise_multiplier=noise_multiplier,
#     epochs=epochs,
#     delta=1e-5
# )
# Resultado esperado: epsilon ≈ 2.0-5.0 para estos parámetros
```

### 3. Generación de texto creativo personalizado

**Contexto**: Entrenar un modelo con escritos personales de usuarios sin comprometer su privacidad.

## Métricas y trade-offs

### Evaluación de privacidad

```python
def evaluate_privacy_leakage(model, test_queries, target_data):
    """Evalúa si el modelo filtra información específica"""
    leakage_score = 0
    for query in test_queries:
        response = model.generate(query)
        if contains_private_info(response, target_data):
            leakage_score += 1
    return leakage_score / len(test_queries)

def evaluate_model_utility(model, test_set):
    """Evalúa la utilidad del modelo"""
    accuracy = 0
    for example in test_set:
        prediction = model.predict(example.input)
        if prediction == example.expected_output:
            accuracy += 1
    return accuracy / len(test_set)
```

### Trade-offs típicos

| Epsilon (ε) | Nivel de Privacidad | Impacto en Rendimiento | Caso de Uso |
|-------------|-------------------|----------------------|-------------|
| 0.1 - 1.0 | Muy Alta | Pérdida significativa | Datos médicos sensibles |
| 1.0 - 5.0 | Alta | Pérdida moderada | Datos personales estándar |
| 5.0 - 10.0 | Moderada | Pérdida mínima | Datos no sensibles |
| 10.0+ | Baja | Sin impacto | Datos públicos |

## Herramientas y librerías

### TensorFlow Privacy
```bash
pip install tensorflow-privacy
```

**Ventajas**:
- Integración nativa con TensorFlow/Keras
- Implementaciones optimizadas de DP-SGD
- Herramientas de análisis de privacidad

### Opacus (PyTorch)
```bash
pip install opacus
```

**Ventajas**:
- Integración con PyTorch
- Soporte para modelos transformers
- Métricas de privacidad en tiempo real

### Microsoft Differential Privacy
```bash
pip install smartnoise-synthesizer
```

**Características**:
- API simple para principiantes
- Soporte para múltiples mecanismos
- Integración con Azure ML

## Casos reales de implementación

### 1. Google - RAPPOR
**Técnica**: Privacidad diferencial en análisis de uso de Chrome
**Resultado**: Análisis de comportamiento sin identificar usuarios individuales

### 2. Apple - Differential Privacy
**Aplicación**: Análisis de uso de iOS y mejoras de predictive text
**Técnica**: Local DP antes de enviar datos a servidores

### 3. Microsoft - SmartNoise
**Proyecto**: Framework open-source para DP
**Uso**: Investigaciones sobre COVID-19 con datos médicos protegidos

## Guía de implementación paso a paso

### Paso 1: Análisis de requisitos
1. Identificar nivel de sensibilidad de datos
2. Determinar epsilon objetivo
3. Evaluar impacto en rendimiento aceptable

### Paso 2: Preparación de datos
```python
def prepare_private_dataset(raw_data, epsilon_target):
    """Prepara datos con privacidad diferencial"""
    # Limpiar y normalizar datos
    clean_data = preprocess(raw_data)
    
    # Aplicar técnicas de DP si es necesario
    if epsilon_target < 5.0:
        clean_data = apply_data_sanitization(clean_data)
    
    return clean_data
```

### Paso 3: Configuración del entrenamiento
```python
def setup_private_training(model, train_data, epsilon_target):
    """Configura entrenamiento con privacidad diferencial"""
    
    # Calcular hiperparámetros
    noise_multiplier = calculate_noise_multiplier(
        epsilon=epsilon_target,
        sample_rate=len(train_data) / batch_size,
        epochs=num_epochs
    )
    
    # Configurar optimizador privado
    private_optimizer = DPAdamGaussianOptimizer(
        l2_norm_clip=1.0,
        noise_multiplier=noise_multiplier,
        learning_rate=learning_rate
    )
    
    return private_optimizer
```

### Paso 4: Monitoreo y evaluación
```python
def monitor_privacy_budget(model, epsilon_spent, epsilon_limit):
    """Monitorea el presupuesto de privacidad"""
    if epsilon_spent > epsilon_limit:
        logging.warning("Presupuesto de privacidad agotado")
        return False
    return True
```

## Best Practices

### ✅ Recomendaciones

1. **Comenzar con epsilon conservador** (1.0 - 5.0)
2. **Documentar todas las decisiones de privacidad**
3. **Realizar auditorías de privacidad regularmente**
4. **Combinar con otras técnicas de privacidad**
5. **Mantener actualizadas las librerías DP**

### ❌ Errores comunes

1. **Asumir privacidad sin análisis matemático**
2. **Olvidar la composición de privacidad**
3. **Ignorar el impacto en utilidad del modelo**
4. **No validar experimentalmente la privacidad**
5. **Usar parámetros sin justificación**

## Métricas de evaluación

### 1. Membership Inference Attack Score
```python
def membership_inference_attack(model, target_record, shadow_models):
    """Evalúa vulnerabilidad a ataques de inferencia"""
    # Implementar ataque de inferencia
    attack_score = compute_attack_probability(model, target_record)
    return attack_score  # Menor = mejor
```

### 2. Privacy Budget Tracking
```python
class PrivacyBudgetTracker:
    def __init__(self, initial_epsilon):
        self.epsilon_spent = 0
        self.initial_epsilon = initial_epsilon
    
    def spend_epsilon(self, amount):
        if self.epsilon_spent + amount > self.initial_epsilon:
            raise ValueError("Presupuesto de privacidad excedido")
        self.epsilon_spent += amount
    
    def remaining_budget(self):
        return self.initial_epsilon - self.epsilon_spent
```

## Conclusión

La privacidad diferencial ofrece un marco matemático sólido y verificable para proteger la privacidad en el entrenamiento y uso de LLMs. Aunque implica trade-offs con la utilidad del modelo, las garantías que proporciona son especialmente valiosas en aplicaciones sensibles como salud, finanzas y datos personales.

La técnica está madura y cuenta con el respaldo de empresas líderes en tecnología, lo que la convierte en una opción viable y recomendada para proyectos que requieren protección robusta de la privacidad.

## Bibliografía y Referencias

### Artículos fundamentales
- Dwork, C., McSherry, F., Nissim, K., & Smith, A. (2006). "Calibrating Noise to Sensitivity in Private Data Analysis". *Proceedings of TCC*.

- Abadi, M., et al. (2016). "Deep Learning with Differential Privacy". *Proceedings of CCS*.

- Li, N., Lyu, M., & Su, D. (2020). "Privacy-preserving Machine Learning: A Survey". *IEEE Transactions on Knowledge and Data Engineering*.

### Implementaciones y herramientas
- **TensorFlow Privacy**: https://github.com/tensorflow/privacy
- **Opacus**: https://github.com/pytorch/opacus
- **SmartNoise**: https://github.com/opendp/smartnoise-core

### Casos de estudio y recursos
- **Apple Differential Privacy**: https://www.apple.com/privacy/docs/Differential_Privacy_Overview.pdf
- **Google RAPPOR**: https://github.com/google/rappor  
- **Microsoft Differential Privacy**: https://www.microsoft.com/en-us/research/blog/differential-privacy-for-everyone/
- **US Census Bureau**: Implementación en censo 2020
- **Harvard Privacy Tools Project**: https://privacytools.seas.harvard.edu/

---

*Este documento fue desarrollado como parte del curso de Privacidad y Seguridad en IA, siguiendo las mejores prácticas de documentación técnica y seguridad de datos.*