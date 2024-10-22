import React, { useEffect, useState } from "react";
import { Text,View, StyleSheet, ImageBackground } from "react-native";
import TextAdvice from "@/components/atoms/TextAdvice";
import { CohereClientV2 } from "cohere-ai";
import { databaseController } from "@/services/firebase";

const bg= require("@/assets/images/wallpaper.jpg");


/**
 * The `AdviceView` function fetches training advice from Cohere based on user and training data, and
 * displays it in a React component.
 * @returns The `AdviceView` component is being returned. It contains a view with a background image, a
 * title for training advice, and a component displaying the fetched advice text.
 */
export default function AdviceView(){
    const [text, setText] = useState<string>("");
    const cohere = new CohereClientV2({
        token: 'TSYfj0lz1JKYwdgpGBRz3Z79ANo2lvRPbMmns4Wu'
    });
    const db = new databaseController();

    useEffect(()=>{
        fetchAdviceFromCohere();
    },[])
    const fetchAdviceFromCohere = async () => {
        const info = await db.getInfo();
        const data = await db.weekTraining();
        const json ={
            age: info.age,
            weight: info.weight,
            height: info.height,
            SPO2: data?.oxygen,
            heartrate: data?.heartRate
        }
        const response = await cohere.chat({
          model: 'command-r-plus',
          messages: [
            {
              role: 'user',
              content: 'Puedes darme un consejo de 30 palabras de mejora en mi entrenamiento con el json dado y un comentario sobre mi avance con estos datos de 20 palabras que te doy en el json. El SPO2 y heartrate son array con un dato por día de la semana. Esto es para visualizar en una interfaz así que por favor ve al punto'+ {json},
            },
          ],
        });

        const text_ = response.message?.content;
        if(text_){
            setText(text_[0].text);
            
        }else{
            console.log("NO hay Créditos");
        }
        
      }

    return(
        <View style={styles.cont}>
            <ImageBackground style={styles.imageBg} source={bg} resizeMode="cover">
                <View style={styles.title_cont}>
                    <Text style={styles.Title}>
                        Consejos de Entrenamiento 
                    </Text>
                </View>
                <View style={styles.dataCont}>
                    <TextAdvice title="Mejora" description={text}/>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    cont:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    dataCont:{
        alignContent: "center",
        justifyContent: "center",
        flex: 1,
        marginLeft: 50
    },
    imageBg:{
        flex: 1,
        justifyContent: 'center',
    },
    Title:{
        fontSize: 27,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    title_cont:{
        flex:0,
        marginTop: 50,
        marginLeft: 10,
        justifyContent:"center",
    }
})