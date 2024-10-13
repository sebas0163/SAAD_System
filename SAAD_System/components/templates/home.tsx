import React from "react";
import { View,StyleSheet, ImageBackground,Text, Alert } from "react-native";
import {Buttons as Button_atom} from "@/components/atoms/buttons";
import CenterText from "@/components/atoms/center_text";
import { StatusBar } from "expo-status-bar";
import Title from '@/components/atoms/title';
import { useRouter } from "expo-router";

const ini= require("@/assets/images/home.jpg");

export function Home(){
    const router= useRouter();
    return(
        <View style={styles.container}>
            <ImageBackground source={ini} resizeMode="cover" style={styles.image}>
                <View style={styles.text_cont}>
                    <StatusBar style="light" backgroundColor="#6a51ae" />
                    <Title text="SAAD Aplication" />
                    <CenterText text_="Dispositivo vinculado. ¡Hora de Entrenar!" />
                    <CenterText text_="Revisa todas la caracterísitcas que te ofrece SAAD para mejorar tu salud" />
                </View>
            </ImageBackground>
            
        </View> 
       
    )     
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
      },
      text_cont:{
        marginBottom:100
      }
})