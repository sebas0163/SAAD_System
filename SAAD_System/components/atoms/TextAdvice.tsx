import React from "react";
import { View, StyleSheet, Text} from "react-native";

export default function TextAdvice({title, description}:{title:string, description:string}){
    return(
        <View style={styles.content}>
            <View style={styles.upperCont}>
                <Text style={styles.textTit}>
                    {title}
                </Text>
            </View>
            <View style={styles.lowerCont}>
                <Text style={styles.textDescrip}>
                    {description}
                </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        width: 250,
        height: 500,
        marginTop: 25,
        justifyContent:"center",
        alignItems:"center"
    },
    upperCont:{
        width:250,
        height:30,
        backgroundColor: "#e68019",
        borderTopEndRadius:12,
        borderTopStartRadius:12
    },
    lowerCont:{
        width: 250,
        height:470,
        backgroundColor: "#a0a0a0",
        borderBottomEndRadius:12,
        borderBottomStartRadius:12
        
    },
    textTit:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginLeft:5,
        marginTop:2
    },
    textDescrip:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: "center",
        alignItems:"center",
        justifyContent:"center",
        marginTop: 5
    }
})