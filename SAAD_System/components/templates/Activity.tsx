import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import MetricsView from "@/components/molecules/Metrics_View";
import RoundButtonWithTimer from "@/components/atoms/round_button";
import Title from "@/components/atoms/title";

const bg= {uri:'https://w0.peakpx.com/wallpaper/171/1003/HD-wallpaper-black-plain-solid-black.jpg' }

export default function ActivityTemp(){
    return(
        <View style={styles.content}>
            <ImageBackground style={styles.imageBG} source={bg} resizeMode="cover">
                <Title text="¡Comencemos!" />
                <RoundButtonWithTimer />
                <MetricsView /> 
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        borderRadius:30
    },
    imageBG:{
        flex: 1,
        justifyContent: 'center',
    }
})
