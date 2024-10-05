import React from "react";
import { StyleSheet, View, Text} from "react-native";

export default function Title({text}:{text: string}){
    return(
    <View style={styles.cont_title}>
        <Text style={styles.Title}>
                {text}
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    Title:{
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    cont_title:{
        flex: 0,
        alignItems: 'center',
        justifyContent: "center",
        width: 300,
        height: 40,
        marginTop: 75,
        marginLeft: 32,
    }
})