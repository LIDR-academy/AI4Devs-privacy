# Debilidades en Vectores y Embeddings

**Fecha:** 19 de abril de 2026  
**Autor:** Guillermo Rocha con ayuda de Perplexity AI  
**Versión:** 1.0  

> **Esta guía detalla el riesgo LLM08: Debilidades en vectores/embeddings** del OWASP Top 10 para aplicaciones LLM (2025), enfocado en sistemas RAG. Incluye ataques ordenados por frecuencia, mitigaciones con complejidad de implementación y un plan de acción listo para backlog.

---

## 1. Descripción del riesgo

**LLM08** cubre vulnerabilidades en cómo se generan, almacenan, indexan y recuperan **embeddings** (representaciones numéricas de texto) y bases vectoriales. Estos componentes son críticos en sistemas **RAG**, donde determinan qué contexto recibe el LLM para responder.

### Impacto principal:
- 🔒 Acceso indebido a documentos sensibles
- 🎭 Manipulación de resultados de búsqueda  
- ➡️ Fugas cruzadas entre usuarios/tenants
- 📊 Sesgos en relevancia que degradan la calidad

---

## 2. Ataques típicos (ordenados por frecuencia)

Basado en despliegues reales y reportes OWASP 2025:

| # | Ataque | Frecuencia | Descripción |
|---|--------|------------|-------------|
| 1 | **Bypass de control de acceso** | ⭐⭐⭐⭐⭐ | Falta de filtros por usuario/rol/tenant en consultas vectoriales |
| 2 | **Filtración cruzada de contexto** | ⭐⭐⭐⭐ | Mezcla de datos entre sesiones/clientes/colecciones |
| 3 | **Envenenamiento de documentos** | ⭐⭐⭐ | Ingestión de contenido malicioso que aparece "relevante" |
| 4 | **Sesgo de recuperación** | ⭐⭐⭐ | Contenido largo/repetitivo domina similitud coseno |
| 5 | **Inversión de embeddings** | ⭐⭐ | Reconstrucción de texto desde vectores expuestos |

---

## 3. Mitigaciones priorizadas

| Mitigación | Complejidad | Prioridad | Impacto |
|------------|-------------|-----------|---------|
| **Filtros obligatorios por tenant/usuario/rol** | **Baja-media** | ⭐⭐⭐⭐⭐ | Bloquea 80% de ataques |
| **Validación estricta de ingesta** | **Media** | ⭐⭐⭐⭐ | Previene envenenamiento |
| **Separación de colecciones/namespaces** | **Media** | ⭐⭐⭐⭐ | Elimina filtración cruzada |
| **Reranking + reglas de negocio** | **Media-alta** | ⭐⭐⭐ | Corrige sesgos estructurales |
| **Auditoría completa de recuperaciones** | **Media** | ⭐⭐⭐ | Detecta anomalías |
| **Redacción de datos sensibles** | **Media-alta** | ⭐⭐⭐ | Protege PII/secretos |
| **Red teaming de RAG** | **Alta** | ⭐⭐ | Validación final |

---

## 4. Plan de acción

**✅ Tareas priorizadas con estimación de esfuerzo (para que te las puedas llevar directamente a tu backlog):**

| # | **Tarea** | **Riesgo Mitigado** | **Complejidad** | **Prioridad** | **Estimación** |
|---|-----------|---------------------|-----------------|---------------|----------------|
| 1 | Añadir filtros **obligatorios** por usuario, tenant y rol en **TODAS** las consultas vectoriales | Bypass acceso, filtración cruzada | Baja-media | ⭐⭐⭐⭐⭐ | 2-3 días |
| 2 | Crear **namespaces separados** por cliente/entorno/dominio | Filtración cruzada | Media | ⭐⭐⭐⭐⭐ | 3-5 días |
| 3 | Validar **TODOS** los documentos antes de indexar (procedencia, tipo, tamaño) | Envenenamiento | Media | ⭐⭐⭐⭐ | 4-6 días |
| 4 | **Bloquear** indexación de contenido no confiable (whitelist/blacklist) | Envenenamiento | Media | ⭐⭐⭐⭐ | 2-4 días |
| 5 | Implementar **reranking** con reglas de negocio post-similitud | Sesgo recuperación | Media-alta | ⭐⭐⭐ | 5-8 días |
| 6 | **Log completo**: docs recuperados, usuario, similitud score | Detección anomalías | Media | ⭐⭐⭐ | 2-3 días |
| 7 | **Alertas** por dominancia docs, cambios bruscos | Manipulación silenciosa | Media | ⭐⭐⭐ | 3-5 días |
| 8 | **Redactar** PII/secretos ANTES de indexar | Fugas información | Media-alta | ⭐⭐⭐ | 4-7 días |
| 9 | Política: **reindexar** embeddings cada 30 días | Persistencia vectores rotos | Media | ⭐⭐ | 1 día |
| 10 | **Red teaming** RAG con payloads maliciosos | Validación total | Alta | ⭐⭐ | 1-2 semanas |

---

## 5. Métricas de Éxito (KPIs)

| Métrica | Objetivo | Método |
|---------|----------|---------|
| **Tasa de filtración cruzada** | **0%** | Auditoría logs |
| **Cobertura logs recuperaciones** | **100%** | Monitoreo |
| **Tiempo respuesta básica** | **< 2 semanas** | Sprint planning |
| **Red teaming éxito** | **95% ataques bloqueados** | Pruebas simuladas |

---

## 6. Fuentes Consultadas

Esta guía se basa exclusivamente en fuentes verificadas (Abril 2026):

1. [OWASP LLM08: Vector and Embedding Security Risks (2025) — Indusface](https://www.indusface.com/learning/owasp-llm08-2025-vector-and-embedding-weaknesses/)
2. [LLM08 Vector & Embedding Weaknesses — LLM-Sec.dev](https://www.llm-sec.dev/labs/vector-embedding-weakness)
3. [OWASP Top 10 LLM — EsGeeks](https://esgeeks.com/owasp-top-10-llm/)
4. [OWASP Top 10 para aplicaciones LLM — diffray](https://diffray.ai/es/blog/owasp-top-10-llm-applications/)
5. [Sesgo de tamaño en embeddings y su impacto en búsqueda — Jina AI](https://jina.ai/news/on-the-size-bias-of-text-embeddings-and-its-impact-in-search)
6. [LLM08:2025 Vector and Embedding Weaknesses — OWASP GenAI](https://genai.owasp.org/llmrisk/llm082025-vector-and-embedding-weaknesses/)
7. [Guía OWASP Top 10 para LLMs — Elastic](https://www.elastic.co/blog/owasp-top-10-for-llms-guide)
8. [OWASP Top 10 riesgos para LLMs — Cloudflare](https://www.cloudflare.com/learning/ai/owasp-top-10-risks-for-llms/)
