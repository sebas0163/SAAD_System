import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function InputText({placeholder, onChangeText, value}:{placeholder:string, onChangeText: (text:string)=>void, value:string}){
    return(
        <TextInput
        editable
        numberOfLines={1}
        maxLength={3}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.txt_input}
        placeholderTextColor="white"
        textAlign="center"
        
        />
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 0,
    },
    txt_input: {
        padding: 10,
        backgroundColor: "#e68019",
        opacity: 0.8,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25, 
        borderRadius: 10,
        width: 200,
        color: "white"
    }
})