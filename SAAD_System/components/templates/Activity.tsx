import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import MetricsView from "@/components/molecules/Metrics_View";
import RoundButtonWithTimer from "@/components/atoms/round_button";
import Title from "@/components/atoms/title";
const bg= require("@/assets/images/wallpaper.jpg");

/**
 * The `ActivityTemp` function renders a component with a background image, a title, and a
 * `MetricsView` component.
 * @returns The `ActivityTemp` function is returning a View component with a background image, a Title
 * component with the text "¡Comencemos!", and a MetricsView component.
 */
export default function ActivityTemp(){
    return(
        <View style={styles.content}>
            <ImageBackground style={styles.imageBG} source={bg} resizeMode="cover">
                <Title text="¡Comencemos!" />
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
    },
   
})
