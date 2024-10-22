import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

/**
 * The `InputText` function is a React component in TypeScript that renders a text input field with
 * specified placeholder, value, and onChangeText function.
 * @param  - - `placeholder`: A string representing the placeholder text to be displayed in the input
 * field.
 * @returns The `InputText` function is being returned, which is a React component rendering a
 * TextInput element with specific props such as placeholder, onChangeText function, value, style,
 * placeholderTextColor, and textAlign.
 */
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