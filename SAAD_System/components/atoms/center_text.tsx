import React from "react";
import {Text, View,StyleSheet} from "react-native"


/**
 * The `CenterText` function is a React component in TypeScript that renders text centered within a
 * view.
 * @param  - The `CenterText` function is a React component that takes a prop named `text_` which is
 * expected to be a string. The component renders a `View` containing a `Text` component with the text
 * content being the value of the `text_` prop. The text is styled using
 * @returns A functional component named CenterText is being returned. It takes a prop named text_ of
 * type string. Inside the component, a View component with styles.text_cont is rendered, containing a
 * Text component with styles.text that displays the value of the text_ prop.
 */
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