# SAAD System
# Sistema Ayudante de la Actividad Deportiva (SAAD)

**Autor**: Sebastián Moya Monge  
**Instituto**: Instituto Tecnológico de Costa Rica, Escuela de Ingeniería en Computadores  
**Correo**: sebas0163@estudiantec.cr

## Resumen
El Sistema Ayudante de la Actividad Deportiva (SAAD) es un dispositivo empotrado diseñado para monitorear parámetros de salud como la frecuencia cardíaca y la saturación de oxígeno en sangre durante la actividad física. Utiliza un sensor MAX30102 y un microcontrolador ESP32 para recolectar y transmitir datos biométricos a una aplicación móvil en tiempo real mediante Wi-Fi. La app, desarrollada en React Native y Expo, permite visualizar las métricas de salud y ofrece recomendaciones personalizadas basadas en inteligencia artificial.

## Índice de Contenidos
- [Introducción](#introducción)
- [Antecedentes](#antecedentes)
- [Descripción de la Solución](#descripción-de-la-solución)
- [Resultados](#resultados)
- [Conclusiones](#conclusiones)
- [Recomendaciones](#recomendaciones)

## Introducción
En un contexto de creciente sedentarismo, SAAD surge como una solución accesible y de bajo consumo energético que permite a los usuarios mejorar sus hábitos deportivos de forma autónoma y segura. Este sistema está diseñado para monitorear signos vitales y brindar recomendaciones de entrenamiento.

## Antecedentes
El monitoreo de salud mediante dispositivos portátiles ha avanzado significativamente, permitiendo la integración de sensores en aplicaciones deportivas. Tecnologías como el MAX30102, usado en este proyecto, permiten una monitorización precisa y continua de parámetros biométricos clave.

### Dispositivos de Monitoreo de Salud
Desde los primeros monitores de frecuencia cardíaca, los avances tecnológicos han hecho posible desarrollar dispositivos cada vez más precisos y accesibles.

### Algoritmos de Cálculo de Calorías y Zonas de Entrenamiento
SAAD emplea algoritmos basados en el MET (Equivalente Metabólico de Tarea) y la frecuencia cardíaca máxima para calcular las calorías quemadas y clasificar la intensidad del ejercicio en diferentes zonas de entrenamiento.

### Inteligencia Artificial para Recomendaciones
La IA de Cohere se utiliza para generar recomendaciones personalizadas en función de los datos de salud del usuario, mejorando la experiencia y adaptándola a sus necesidades específicas.

## Descripción de la Solución
SAAD consta de dos bloques: hardware y software. El hardware incluye un microcontrolador ESP32 y el sensor MAX30102, que miden la frecuencia cardíaca y la saturación de oxígeno. La app móvil recibe y analiza los datos, ofreciendo una interfaz intuitiva con las siguientes funcionalidades:
- Conexión con el dispositivo de monitoreo.
- Visualización de métricas en tiempo real.
- Análisis de datos históricos.
- Generación de recomendaciones personalizadas con IA.

## Resultados
El sistema cumple con sus objetivos, proporcionando un monitoreo en tiempo real de métricas de salud, almacenamiento de datos y recomendaciones personalizadas. Entre sus fortalezas se incluyen la funcionalidad en tiempo real y una interfaz amigable, aunque presenta algunas limitaciones en cuanto a portabilidad y precisión en condiciones de movimiento.

## Conclusiones
SAAD representa una herramienta efectiva para monitorear la salud durante el ejercicio. Cumple con los objetivos planteados, ofreciendo un monitoreo confiable y recomendaciones de entrenamiento.

## Recomendaciones
- **Optimización de Sensores**: Considerar el uso de sensores de mayor precisión para reducir interferencias por movimiento.
- **Mejorar la Portabilidad**: Reducir el tamaño del dispositivo para aumentar la comodidad del usuario.
- **Ampliación de Funcionalidades**: Incorporar opciones adicionales en la app, como exportación de datos y redes sociales.
- **Evaluación de la IA**: Realizar estudios para evaluar el impacto de las recomendaciones en los hábitos de los usuarios.

## Referencias
- Cohere. “Using the Chat API,” Cohere Documentation, 2024.
- Analog Devices, “MAX30102 Pulse Oximeter and Heart-Rate Sensor.”
- Espressif Systems, “ESP32 Series Datasheet.”
- [Más referencias en el artículo original...]

