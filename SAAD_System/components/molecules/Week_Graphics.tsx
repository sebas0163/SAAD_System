import React, { useEffect, useState } from "react";
import { View,StyleSheet, Text } from "react-native";
import Graphic from "@/components/atoms/Graphics";
import Title from "@/components/atoms/title";
import { databaseController } from "@/services/firebase";
import { CalcCaloriesWeek } from "@/services/caloriesCacl";

export default function WeekGraphics(){
    const database = new databaseController();
    const json = database.weekTraining();
    const [days, setDays] = useState<string[]>([]);
    const [oxygen, setOxygen] = useState<number[]>([]);
    const [heart, setHeart] = useState<number[]>([]);
    const [time, setTime] = useState<number[]>([]);
    const [calories, setcal] = useState<number[]>([]);

   useEffect(() => {
        setDays(["lun", "mar", "Mie", "Jue", "Vie", "Sab", "Dom"]);
        setOxygen([0,0,0,0,0,0,0]);
        setHeart([0,0,0,0,0,0,0]);
        setTime([0,0,0,0,0,0,0]);
        setcal([0,0,0,0,0,0,0]);
        fetchData();
        
        
    }, []);

    const fetchData = async ()=>{
        const json = await database.weekTraining();
        const info = await database.getInfo();
        if(json != null){
            setDays(json.date);
            setOxygen(json.oxygen);
            setHeart(json.heartRate);
            setTime(json.time);
            setcal(CalcCaloriesWeek(json.type, json.time, info.weight));
        }else{
            setDays(["lun", "mar", "Mie", "Jue", "Vie", "Sab", "Dom"]);
            setOxygen([0,0,0,0,0,0,0]);
            setHeart([0,0,0,0,0,0,0]);
            setTime([0,0,0,0,0,0,0]);
            setcal([0,0,0,0,0,0,0]);
        }
    }
    return(
        <View style = {styles.content}>
            <Text style={styles.text}>
                Calorías Quemadas Cal
            </Text>
            <Graphic label={days.length >0 ? days:["lun", "mar", "Mie", "Jue", "Vie", "Sab", "Dom"] } datasets={calories.length >0 ? calories:[100,200,300,400,500,600,100] }/>
            {/*Aqui se llama al algoritmo que da los datos */}
            <Text style={styles.text}>
                Tiempo de Ejercicio en minutos
            </Text>
            <Graphic label={days} datasets={time.length>0 ? time:[100,200,300,400,500,600,100]}/>
            {/*Aqui se llama al algoritmo que da los datos */}
            <Text style={styles.text}>
                Ritmo Cardiaco Promedio 
            </Text>
            <Graphic label={days} datasets={heart.length >0 ? heart: [100,200,300,400,500,600,100]}/>
            {/*Aqui se llama al algoritmo que da los datos */}
            <Text style={styles.text}>
                Oxigenación Promedio
            </Text>
            <Graphic label={days} datasets={oxygen.length >0 ? oxygen: [100,200,300,400,500,600,100]}/>
            {/*Aqui se llama al algoritmo que da los datos */}
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