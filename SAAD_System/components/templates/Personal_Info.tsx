import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import TextInputArea from "@/components/molecules/Text_input_area";
import Title from "@/components/atoms/title";

const bg= {uri:'https://st.depositphotos.com/1258191/2507/i/450/depositphotos_25078065-stock-photo-fit-woman.jpg' }

export default function PersonalInfoTemplate(){
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.imageBG} source={bg} resizeMode="cover">
                <View style={styles.text_cont}>
                    <Title text="Tu información Personal" />
                </View>
                <TextInputArea />
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