import React from "react";
import { View, StyleSheet } from "react-native";
import TextHolder from "@/components/atoms/TextHolder";

export default function MetricsView(){
    return(
        <View style={styles.content}>
            <TextHolder title="Pulsaciones" description="85" />
            <TextHolder title="Oxigenación" description="522"/>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        width: 360,
        height: 600,
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    }
})