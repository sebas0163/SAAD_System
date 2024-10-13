import React from "react";
import { View,StyleSheet, Text } from "react-native";
import Graphic from "@/components/atoms/Graphics";
import Title from "@/components/atoms/title";

export default function WeekGraphics(){
    return(
        <View style = {styles.content}>
            <Text style={styles.text}>
                Calorías Quemadas
            </Text>
            <Graphic label={["lun", "mar", "Mie", "Jue", "Vie", "Sab", "Dom"]} datasets={[100,200,300,400,500,600,100]}/>
            {/*Aqui se llama al algoritmo que da los datos */}
            <Text style={styles.text}>
                Tiempo de Ejercicio
            </Text>
            <Graphic label={["lun", "mar", "Mie", "Jue", "Vie", "Sab", "Dom"]} datasets={[1,2,0.5,1,2,2,0]}/>
            {/*Aqui se llama al algoritmo que da los datos */}
            <Text style={styles.text}>
                Ritmo Cardiaco Promedio
            </Text>
            <Graphic label={["lun", "mar", "Mie", "Jue", "Vie", "Sab", "Dom"]} datasets={[90,50,90,100,110,80,90]}/>
            {/*Aqui se llama al algoritmo que da los datos */}
            <Text style={styles.text}>
                Oxigenación Promedio
            </Text>
            <Graphic label={["lun", "mar", "Mie", "Jue", "Vie", "Sab", "Dom"]} datasets={[20,80,100,90,40,20,10]}/>
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