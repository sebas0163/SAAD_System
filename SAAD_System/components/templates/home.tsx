import React from "react";
import { View,StyleSheet, ImageBackground,Text, Alert } from "react-native";
import CenterText from "@/components/atoms/center_text";
import { StatusBar } from "expo-status-bar";
import Title from '@/components/atoms/title';

const ini= require("@/assets/images/home.jpg");

/**
 * The `Home` function in TypeScript React renders a view with an image background and text content for
 * a SAAD application.
 * @returns The `Home` component is being returned. It contains a View component with an
 * ImageBackground component as its child. Inside the ImageBackground component, there is a View
 * component with a StatusBar component, a Title component, and two CenterText components.
 */
export function Home(){
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