import React from "react";
import { View,StyleSheet, ImageBackground,Text, Alert } from "react-native";
import {Buttons as Button_atom} from "@/components/atoms/buttons";
import CenterText from "@/components/atoms/center_text";
import { StatusBar } from "expo-status-bar";
import Title from '@/components/atoms/title'

const ini ={uri: 'https://i.pinimg.com/736x/aa/08/b7/aa08b7692149ba0412fabf1ad99511ae.jpg'}

export function Home(){
    return(
        <View style={styles.container}>
            <ImageBackground source={ini} resizeMode="cover" style={styles.image}>
                <StatusBar style="light" backgroundColor="#6a51ae" />
                <Title text="SAAD Aplication" />
                <CenterText text_="Para iniciar con la Aplicación SAAD por favor vincule su dispositivo." />
                <Button_atom text="Establecer Conexión" onPress={()=>{Alert.alert("Estado de la conexión","Conectado con éxito!!")}} /> 
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