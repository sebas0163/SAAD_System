import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MetricsView from "@/components/molecules/Metrics_View";
import RoundButtonWithTimer from "@/components/atoms/round_button";
import Title from "@/components/atoms/title";

export default function ActivityTemp(){
    return(
        <View style={styles.content}>
            <Title text="¡Comencemos!" />
            <RoundButtonWithTimer />
            <MetricsView /> 
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        borderRadius:30
    }
})
