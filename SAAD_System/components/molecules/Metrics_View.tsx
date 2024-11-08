import React, { useEffect, useState } from "react";
import { View, StyleSheet,TouchableOpacity,Text, Alert } from "react-native";
import TextHolder from "@/components/atoms/TextHolder";
import { databaseController } from "@/services/firebase";
const ESP32_URL = 'http://192.168.69.83:80/data';
import { Picker } from "@react-native-picker/picker";
import { filterSignal } from "@/services/caloriesCacl";
/* The above code is a TypeScript React component called MetricsView. It includes functionality for a
timer/cronometer that can be started, paused, and reset. The component fetches data from a database
and an external API (ESP32_URL) to display information about heart rate (pulsaciones) and oxygen
levels (oxigenacion). */
export default function MetricsView() {
  const database = new databaseController();
  const [isRunning, setIsRunning] = useState(false);  // Estado para saber si el cronómetro está corriendo
  const [time, setTime] = useState(0);                // Estado para el tiempo del cronómetro (en segundos)
  const [data, setData] = useState<{ pulsaciones: string; oxigenacion: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [oxigenData,setOxigenData]= useState<number[]>([]);
  const [heartData,setHeartData]= useState<number[]>([]);
  const [age, setage] = useState<number>(20);
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>; // Tipo dinámico compatible con navegadores y Node.js
    if (isRunning) {
      fetchInfo();
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
  const fetchInfo= async()=>{
    const json = await database.getInfo();
    setage(json.age);
  }
  const handleReset = () => {
    setIsRunning(false);
    database.sendTrainingInfo(oxigenData,heartData,time, Number(selectedValue));
    setData(null);
    setOxigenData([]);
    setHeartData([]);
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
      //filterSignal(Number(jsonData.oxigenacion), Number(jsonData.pulsaciones), age);
      setData(jsonData);
      //watchAlert();
      setError(null); // Reiniciar el error si la solicitud es exitosa
    } catch (err) {
      setError("Error al obtener datos");
      setData(null); // Limpiar los datos en caso de error
    }
  }
  const watchAlert=()=>{
    if (data?.pulsaciones == "1"){
      Alert.alert("Pulso alto","Tus pulsaciones están por encima del 85% por favor contacta a un profesional");
      handleReset();
    }if (data?.pulsaciones =="0"){
      Alert.alert("Pulso alto","Tus pulsaciones están por debajo del 50% por favor contacta a un profesional");
      console.log("aqui")
      //handleReset();
    }if(data?.oxigenacion == "0"){
      Alert.alert("Oxigenación baja","Tu rango de oxigenación es muy baja. Por favor contacta ayuda profesional");
      handleReset();
    }
  }

  useEffect(() => {
    if (isRunning) {
      fetchData(); // Obtener datos inmediatamente al iniciar

      const interval = setInterval(() => {
        fetchData(); // Obtener datos cada minuto cuando el cronómetro está en marcha
        setOxigenData(prevOxigenData => data?.oxigenacion ? [...prevOxigenData, Number(data.oxigenacion)]:prevOxigenData);
        setHeartData(prevHeartData => data?.pulsaciones ? [...prevHeartData, Number(data.pulsaciones)] : prevHeartData);
      }, 3000);

      return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }
  }, [isRunning,data]);
  const [selectedValue, setSelectedValue] = useState(0);
  return (
    <View style={styles.content}>
        <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Liviano" value={0} />
                    <Picker.Item label="Moderado" value={1} />
                    <Picker.Item label="Intenso" value={2} />
          </Picker>
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
  picker:{
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 200,
    height: 50,
    width: 150,
    backgroundColor: "grey",
    color:"white",
    opacity: 0.8,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25, 
    borderRadius: 10,
  }
});
