import React,{useState} from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import TextInputArea from "@/components/molecules/Text_input_area";
import Title from "@/components/atoms/title";


const bg= require("@/assets/images/wallpaper.jpg");

/**
 * The function `PersonalInfoTemplate` renders a component displaying personal information with a
 * background image and a text input area.
 * @returns A function component named `PersonalInfoTemplate` is being returned. Inside this component,
 * a `View` component is rendered with a background image (`ImageBackground`) and a text component
 * (`Title`) displaying "Tu información Personal". Additionally, a `TextInputArea` component is
 * included within the `ImageBackground`.
 */
export default function PersonalInfoTemplate(){
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.imageBG} source={bg} resizeMode="cover">
                <View style={styles.text_cont}>
                    <Title text="Tu información Personal" />
                </View>
                <TextInputArea/>
            </ImageBackground>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
    },
    imageBG:{
        flex: 1,
        justifyContent: 'center',
    },
    text_cont:{
        marginBottom: 100
    }
})