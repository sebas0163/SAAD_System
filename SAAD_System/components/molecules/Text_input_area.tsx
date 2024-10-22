import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Buttons as Button} from "@/components/atoms/buttons";
import InputText from "@/components/atoms/input_text";
import { databaseController } from "@/services/firebase";

/**
 * The `TextInputArea` function in TypeScript React creates a component with input fields for weight,
 * height, and age, and a button to submit the information to a database.
 * @returns The code snippet is a React functional component named `TextInputArea` that returns a View
 * containing three InputText components for entering weight, height, and age values, along with a
 * Button component for submitting the information to a database using the `addInfo` method of a
 * `databaseController` instance. The component uses useState hooks to manage the state of the input
 * fields (`text1`, `text2`,
 */
export default function TextInputArea(){
    const database = new databaseController();
    const [text1,setText1] = useState('');
    const [text2,setText2] = useState('');
    const [text3,setText3] = useState('');
    return(
        <View style={styles.container}>
            <View style={styles.text_cont}>
                <InputText placeholder="Indique su Peso" onChangeText={setText1} value={text1} />
            </View>
            <View style={styles.text_cont}>
                <InputText placeholder="Indique su Altura" onChangeText={setText2} value={text2} />
            </View>
            <View style={styles.text_cont}>
                <InputText placeholder="Indique su Edad" onChangeText={setText3} value={text3} />
            </View>
            <View style={styles.text_cont}>
                <Button text="Ingresar" onPress={()=>{database.addInfo(Number(text3),Number(text2),Number(text1))}} />
            </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:0
    },
    text_cont:{
        height:100,
        width: 300,
        flex: 0,
        alignItems:"center",
        marginLeft: 35
    }
})