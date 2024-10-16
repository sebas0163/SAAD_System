import React, { useEffect, useState } from "react";
import { View, StyleSheet,TouchableOpacity,Text } from "react-native";
import TextHolder from "@/components/atoms/TextHolder";

const ESP32_URL = 'http://192.168.100.13:80/data';

export default function MetricsView() {
  const [isRunning, setIsRunning] = useState(false);  // Estado para saber si el cronómetro está corriendo
  const [time, setTime] = useState(0);                // Estado para el tiempo del cronómetro (en segundos)
  const [data, setData] = useState<{ pulsaciones: string; oxigenacion: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>; // Tipo dinámico compatible con navegadores y Node.js

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1); // Incrementar el tiempo cada segundo
      }, 1000);
    } else if (!isRunning && time !== 0) {
        interval=setInterval(() => {
                setTime(prevTime => prevTime + 0); // Incrementar el tiempo cada segundo
            }, 1000);
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning); // Alternar entre iniciar y detener el cronómetro
  };

  const handleReset = () => {
    setIsRunning(false);
    setData(null); 
    setTime(0); // Reiniciar el cronómetro
  };

  // Formatear el tiempo en minutos y segundos
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const fetchData = async () => {
    try {
      const response = await fetch(ESP32_URL);
      if (!response.ok) {
        throw new Error('Error al obtener datos');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setError(null); // Reiniciar el error si la solicitud es exitosa
    } catch (err) {
      setError("Error al obtener datos");
      setData(null); // Limpiar los datos en caso de error
    }
  }

  useEffect(() => {
    if (isRunning) {
      fetchData(); // Obtener datos inmediatamente al iniciar

      const interval = setInterval(() => {
        fetchData(); // Obtener datos cada minuto cuando el cronómetro está en marcha
      }, 3000);

      return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }
  }, [isRunning]);

  return (
    <View style={styles.content}>
        <View style={styles.container}>
            <Text style={styles.timer}>{formatTime(time)}</Text>
            <TouchableOpacity style={styles.button} onPress={handleStartStop}>
                <Text style={styles.buttonText}>{isRunning ? 'Pausar' : 'Comenzar'}</Text>
            </TouchableOpacity>

            {!isRunning && time > 0 && (
            <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                <Text style={styles.resetButtonText}>Reiniciar</Text>
            </TouchableOpacity>
            )}
        </View>
        <View style={styles.content}>
        {error ? (
            <View>
            <TextHolder title="Pulsaciones" description="0" />
            <TextHolder title="Oxigenación" description="0" />
            </View>
        ) : (
            data && (
            <View>
                <TextHolder title="Pulsaciones" description={data.pulsaciones} />
                <TextHolder title="Oxigenación" description={data.oxigenacion} />
            </View>
            )
        )}
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: 360,
    height: 600,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',  // Centrar verticalmente
    alignItems: 'center',      // Centrar horizontalmente
  },
  timer: {
    fontSize: 48,              // Tamaño del cronómetro grande
    fontWeight: 'bold',
    marginBottom: 20,          // Espacio entre el cronómetro y el botón
    color: "white"
  },
  button: {
    backgroundColor: '#e68019', // Color del botón (tomato)
    width: 150,                 // Ancho del botón
    height: 150,                // Alto del botón (igual que el ancho para hacerlo redondo)
    borderRadius: 75,           // Hacer el botón redondo (mitad del ancho/alto)
    justifyContent: 'center',   // Centrar el texto verticalmente
    alignItems: 'center',       // Centrar el texto horizontalmente
    shadowColor: '#000',        // Sombra del botón
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,               // Elevación para sombra en Android
    marginBottom: 20,           // Espacio entre el botón y el reset
  },
  buttonText: {
    fontSize: 20,               // Tamaño del texto del botón
    color: '#fff',              // Texto blanco
    fontWeight: 'bold',         // Negrita
  },
  resetButton: {
    backgroundColor: '#e68019',    // Color del botón de reinicio
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  resetButtonText: {
    fontSize: 18,
    color: 'white',
  },
});
