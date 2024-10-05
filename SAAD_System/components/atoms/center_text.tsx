import React from "react";
import {Text, View,StyleSheet} from "react-native"


export default function CenterText({text_}:{text_:string;}){
    return(
        <View style={styles.text_cont}>
             <Text style={styles.text}>
                {text_}
            </Text>
        </View>
       
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    text_cont:{
        flex: 0,
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 15,
        width: 300,
        height: 100,
        backgroundColor: "#e68019",
        marginTop: 75,
        marginLeft: 32,
        opacity: 0.8
    }
})