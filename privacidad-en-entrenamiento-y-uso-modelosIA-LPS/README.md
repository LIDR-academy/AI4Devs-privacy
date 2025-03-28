# Privacidad en Entrenamiento y Uso de Modelos de IA

Hay dos conceptos importantes a considerar en el contexto de la privacidad en el entrenamiento y uso de modelos de IA: la privacidad federada o Federated Learning (FL) y la privacidad diferencial o Differential Privacy (DP).

## Federated Learning (FL)

### Descentralización de Datos
- Los datos permanecen en cada dispositivo o cliente, evitando su centralización.
- Solo se comparten las actualizaciones (por ejemplo, gradientes o pesos) del modelo.
- [Fuente: geeksforgeeks.org](https://www.geeksforgeeks.org/federated-learning-for-privacy-preserving-models/)

### Proceso de Entrenamiento
1. **Inicialización**: Se crea un modelo global inicial.
2. **Selección de Clientes**: Se elige un subconjunto de dispositivos para entrenar en cada ronda.
3. **Entrenamiento Local**: Cada cliente entrena el modelo usando sus propios datos.
4. **Agregación**: Las actualizaciones locales se envían a un servidor (o se agregan de forma descentralizada) mediante algoritmos como FedAvg.
5. **Iteración**: El modelo global se actualiza y se redistribuye para la siguiente ronda.

### Ventajas Principales
- Mejora de la privacidad al no mover datos sensibles.
- Cumplimiento de regulaciones de protección de datos.
- Reducción en el ancho de banda requerido para transferir grandes volúmenes de datos.

## Differential Privacy (DP)

### Introducción
- Técnica que garantiza que la salida de un algoritmo no revele información sobre un individuo en particular.
- Se logra añadiendo ruido a los resultados del algoritmo. Se cuantifica mediante el parámetro ε (epsilon): valores menores implican mayor privacidad.

### Mecanismos Clave
1. **Adición de ruido** a las actualizaciones o salidas del modelo para ocultar contribuciones individuales. Por ejemplo:
   - **Laplace Mechanism**: Añade ruido distribuido según una distribución de Laplace. [Fuente](https://deic.uab.cat/~gnavarro/files/teaching/gna-dp-laplace.pdf)
   - **Gaussian Mechanism**: Añade ruido distribuido según una distribución normal. [Fuente](https://github.com/kjam/practical-data-privacy/blob/main/03%20-%20Differential%20Privacy%20with%20Gaussian%20Noise.ipynb)
2. **Clipping de Gradientes**: Se limita la magnitud de las actualizaciones locales antes de añadir ruido, controlando la sensibilidad de la función. [Fuente](https://www.mdpi.com/2073-431X/13/11/277)

> **Nota importante**: Es fundamental ajustar los parámetros (ruido, clipping y ε) para no degradar significativamente la precisión del modelo.

## Integración de FL y DP

### Aplicación de DP en el entorno FL
- Se puede combinar FL y DP para maximizar la privacidad.
- Cada cliente aplica DP a sus actualizaciones locales antes de enviarlas al servidor.
- El servidor agrega las actualizaciones con DP adicional si es necesario.

### Protocolos de Agregación Segura
- **Secure Aggregation**: Permite que el servidor agregue actualizaciones sin conocer los valores individuales, reforzando la privacidad global. [Fuente](https://arxiv.org/abs/1611.04482)

### Evaluación y Ajuste
Realizar pruebas para ajustar el valor de ε y los umbrales de clipping, de forma que se mantenga un equilibrio entre privacidad y precisión del modelo.

## Consideraciones Prácticas para el Desarrollo

### Diseño Arquitectónico
- Implementa una infraestructura descentralizada que mantenga los datos en el origen y solo comparta actualizaciones.

### Entrenamiento Local y Agregación Eficiente
- Define claramente los procesos de entrenamiento local y usa algoritmos robustos de agregación (p.ej., FedAvg).

### Implementación de DP en Cada Cliente
- Incorpora técnicas de clipping y añade ruido calibrado en las actualizaciones locales para proteger la privacidad.

### Protocolos de Seguridad Adicionales
- Utiliza protocolos como Secure Aggregation para evitar que el servidor tenga acceso a actualizaciones individuales.

### Optimización del Trade-off Privacidad/Utilidad
- Realiza pruebas continuas para ajustar parámetros (como ε y los umbrales de clipping) y asegurar que la precisión del modelo no se vea comprometida excesivamente.