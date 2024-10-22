import React from "react";
import { StyleSheet, View, Text} from "react-native";

/**
 * The function `Title` is a React component in TypeScript that renders a text title within a styled
 * view.
 * @param  - The code snippet you provided is a React component called `Title` that takes a prop named
 * `text` of type string. The component renders a `<View>` containing a `<Text>` element with the text
 * content being the value of the `text` prop. The styles for the component are defined in
 * @returns A functional component named `Title` is being returned. It takes a prop `text` of type
 * string and renders a `<View>` component with styles `cont_title`, containing a `<Text>` component
 * with styles `Title` displaying the `text` prop value.
 */
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