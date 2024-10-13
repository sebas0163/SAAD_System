import React from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';

export function Buttons({onPress,text}:{onPress:()=>void, text:string}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button_st} onPress={onPress}>
                <Text style={styles.text_b}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  // Centrar verticalmente
        alignItems: 'center',       // Centrar horizontalmente
       
    },
    button_st: {
        backgroundColor: "#e68019", // Color de fondo del botón (naranja)
        borderRadius: 30,           // Bordes redondeados
        paddingVertical: 12,        // Espaciado vertical interno del botón
        paddingHorizontal: 32,      // Espaciado horizontal interno del botón
        shadowColor: '#000',        // Sombra del botón
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
        elevation: 5,         
    },
    text_b: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',             // Texto blanco para resaltar sobre el botón naranja
    },
});
