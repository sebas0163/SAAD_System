import React, { useEffect, useState } from "react";
import { View,StyleSheet, Text } from "react-native";
import Graphic from "@/components/atoms/Graphics";
import Title from "@/components/atoms/title";
import { databaseController } from "@/services/firebase";
import { CalcCaloriesDay } from "@/services/caloriesCacl";

export default function DayGraphics(){
    const database = new databaseController();
    const [days, setDays] = useState<string[]>([]);
    const [oxygen, setOxygen] = useState<number[]>([]);
    const [heart, setHeart] = useState<number[]>([]);
    const [time, setTime] = useState<number>(0);
    const [calories, setcal] = useState<number>(0);

   useEffect(() => {
        setDays([" ", " ", " ", " ", " ", " ", " "]);
        setOxygen([0,0,0,0,0,0,0]);
        setHeart([0,0,0,0,0,0,0]);
        setTime(0);
        fetchData();
        
        
    }, []);

    const fetchData = async ()=>{
        const json = await database.getDayTraining();
        const info = await database.getInfo();
        if(json != null){
            setOxygen(json.oxygen);
            setHeart(json.heartRate);
            setTime(json.time);
            setDays([" ", " ", " ", " ", " ", " ", " "]);
            setcal(CalcCaloriesDay(json.type, json.time, info.weight));
        }else{
            setDays([" ", " ", " ", " ", " ", " ", " "]);
            setOxygen([0,0,0,0,0,0,0]);
            setHeart([0,0,0,0,0,0,0]);
            setTime(0);
        }
    }
    return(
        <View style = {styles.content}>
            <Text style={styles.text}>
                Ritmo Cardiaco Promedio
            </Text>
            <Graphic label={days.length >0 ? days:[" ", " ", " ", " ", " ", " ", " "] } datasets={heart.length >0 ? heart: [100,200,300,400,500,600,100]}/>
            {/*Aqui se llama al algoritmo que da los datos */}
            <Text style={styles.text}>
                Oxigenación Promedio
            </Text>
            <Graphic label={days} datasets={oxygen.length >0 ? oxygen: [100,200,300,400,500,600,100]}/>
            {/*Aqui se llama al algoritmo que da los datos */}
            <Text style={styles.text}>
                Calorías Quemadas: {calories} cal
            </Text>
            <Text style={styles.text}>
                Tiempo de Ejercicio: {time/ 60} minutos
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        flex: 1
    },
    text:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',             // Texto blanco para resaltar sobre el botón naranja
    }
})