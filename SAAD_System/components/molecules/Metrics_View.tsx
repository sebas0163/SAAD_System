import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import TextHolder from "@/components/atoms/TextHolder";

const ESP32_URL= 'http://192.168.100.13:80/data';

export default function MetricsView(){
    const [data, setData] = useState<{ pulsaciones: string; oxigenacion: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () =>{
        try {
            const response = await fetch(ESP32_URL);
            if (!response.ok) {
              throw new Error('Error al obtener datos');
            }
            const jsonData = await response.json();
            setData(jsonData);
          } catch (err) {
            setError("error");
          }
    }
    useEffect(() => {
        // Obtener datos inmediatamente al montar el componente
        fetchData();
        
        // Configurar intervalo para obtener datos cada 2 minutos (120000 ms)
        const interval = setInterval(() => {
          fetchData();
        }, 120000);
    
        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(interval);
      }, []);

    return(
        <View style={styles.content}>
            {error ? (
                <View> 
                    <TextHolder title="Pulsaciones" description="0" />
                    <TextHolder title="Oxigenación" description="0"/>
                </View>
                
            ):(
                data &&(
                    <View > 
                    <TextHolder title="Pulsaciones" description={data.pulsaciones} />
                    <TextHolder title="Oxigenación"  description={data.oxigenacion}/>
                    </View>
            ))}
            
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        width: 360,
        height: 600,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    }
})