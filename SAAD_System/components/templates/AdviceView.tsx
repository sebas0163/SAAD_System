import React from "react";
import { Text,View, StyleSheet, ImageBackground } from "react-native";
import TextAdvice from "@/components/atoms/TextAdvice";

const bg= require("@/assets/images/wallpaper.jpg");

export default function AdviceView(){
    return(
        <View style={styles.cont}>
            <ImageBackground style={styles.imageBg} source={bg} resizeMode="cover">
                <View style={styles.title_cont}>
                    <Text style={styles.Title}>
                        Consejos de Entrenamiento 
                    </Text>
                </View>
                <View style={styles.dataCont}>
                    <TextAdvice title="Mejora" description="Puedes entrenar más inteso!"/>
                    <TextAdvice title="Entrenamiento Actual" description="Has avanzadao mucho, pero has bajado rendimiento estos días" />
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    cont:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    dataCont:{
        alignContent: "center",
        justifyContent: "center",
        flex: 1,
        marginLeft: 50
    },
    imageBg:{
        flex: 1,
        justifyContent: 'center',
    },
    Title:{
        fontSize: 27,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    title_cont:{
        flex:0,
        marginTop: 50,
        marginLeft: 10,
        justifyContent:"center",
    }
})