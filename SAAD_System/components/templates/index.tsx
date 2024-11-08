import React from "react";
import { View,StyleSheet, ImageBackground,Text, Alert } from "react-native";
import {Buttons as Button_atom} from "@/components/atoms/buttons";
import CenterText from "@/components/atoms/center_text";
import { StatusBar } from "expo-status-bar";
import Title from '@/components/atoms/title';
import { useRouter } from "expo-router";
const ESP32_URL = 'http://192.168.69.83:80/connect';

const ini= require("@/assets/images/home.jpg");

/**
 * The `Index` function in a TypeScript React component fetches data from a specified URL and handles
 * the response to establish a connection, displaying alerts based on the connection status.
 * @returns The `Index` function is returning a JSX element that consists of a `View` component
 * containing an `ImageBackground` component. Inside the `ImageBackground`, there is a `StatusBar`, a
 * `Title` component with text "SAAD Application", a `CenterText` component with a message, and a
 * `Button_atom` component with text "Establecer Conexión" that triggers the
 */
export function Index(){
    const router= useRouter();
    const fetchData = async () => {
        try {
          const response = await fetch(ESP32_URL);
          if (!response.ok) {
            Alert.alert("Estado de la conexión","No se ha podido establecer la conexión");
            throw new Error('Error al obtener conectar');
            
          }
          const jsonData = await response.json();
          if(jsonData.connect =="1"){
            Alert.alert("Estado de la conexión","Conectado con éxito!!");
            router.navigate('/(tabs)/home');
          }else{
            Alert.alert("Estado de la conexión","No se ha podido establecer la conexión");
          }
      }catch (err) {
        console.log("Error al obtener datos");
        Alert.alert("Estado de la conexión","No se ha podido establecer la conexión");
      }
    }
    return(
        <View style={styles.container}>
            <ImageBackground source={ini} resizeMode="cover" style={styles.image}>
                <StatusBar style="light" backgroundColor="#6a51ae" />
                <Title text="SAAD Aplication" />
                <CenterText text_="Para iniciar con la Aplicación SAAD por favor vincule su dispositivo." />
                <Button_atom text="Establecer Conexión" onPress={()=>{fetchData()}} /> 
                {/*agregar aqui arriba el método de conexión */}
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
})