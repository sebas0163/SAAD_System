import React, { useState } from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { Picker } from "@react-native-picker/picker";
import WeekGraphics from "@/components/molecules/Week_Graphics";
import Title from "@/components/atoms/title";
import DayGraphics from "@/components/molecules/Day_Graphics";

const bg= require("@/assets/images/wallpaper.jpg");

/* This code snippet is defining a functional component named `StadisticsView` using the `export
default` syntax in TypeScript for a React application. */
export default function StadisticsView(){
    const [selectedValue, setSelectedValue] = useState("día");
    return(
        <ScrollView>
             <ImageBackground style={styles.imageBG} source={bg} resizeMode="cover">
             <Title text="Tu entrenamiento" />
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Día" value="Día" />
                    <Picker.Item label="Semana" value="Semana" />
                </Picker>
            {selectedValue === "Día" ? (
                //<Title text="Tu entrenamiento" />
                <DayGraphics/>
            ):(<WeekGraphics />

            )}
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1

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
        
    },
    imageBG:{
        flex: 1,
        justifyContent: 'center',
    }
})