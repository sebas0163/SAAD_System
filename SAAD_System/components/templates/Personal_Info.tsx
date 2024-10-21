import React,{useState} from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import TextInputArea from "@/components/molecules/Text_input_area";
import Title from "@/components/atoms/title";


const bg= require("@/assets/images/wallpaper.jpg");

export default function PersonalInfoTemplate(){
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.imageBG} source={bg} resizeMode="cover">
                <View style={styles.text_cont}>
                    <Title text="Tu información Personal" />
                </View>
                <TextInputArea/>
            </ImageBackground>
            

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
    },
    imageBG:{
        flex: 1,
        justifyContent: 'center',
    },
    text_cont:{
        marginBottom: 100
    }
})