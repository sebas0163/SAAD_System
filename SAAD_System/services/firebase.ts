// firebase.ts

import {getFirestore, collection, doc, getDoc, getDocs, query, where, addDoc, deleteDoc, updateDoc} from 'firebase/firestore';
import { initializeApp } from "firebase/app";

export class databaseController{
    private firebaseApp_;
    private db;
    constructor(){
        this.firebaseApp_ = initializeApp({
            apiKey: "AIzaSyCcAn_u2qeaKDYx-wGyYXXwMX3MLx9meys",
            authDomain: "saad-prot.firebaseapp.com",
            projectId: "saad-prot",
            storageBucket: "saad-prot.appspot.com",
            messagingSenderId: "361467898967",
            appId: "1:361467898967:web:97ae12c4dcca97960d8712",
            measurementId: "G-T9JVBC0K2Z"
        });
        this.db = getFirestore("(default)");
    }
    async addInfo(age:number, height:number, weight:number){
        this.db = getFirestore("(default)");
        try{
            const docRef = doc(this.db, "userInfo", "R61l2zcBOozT3rS0MS49");
            await updateDoc(docRef,{
                age:age,
                height:height,
                weight: weight 
            });
            console.log("Modificado con exito");
            this.getInfo();
        }catch(error){
            console.log("error");
        }
        
    }
    async getInfo(){
        this.db = getFirestore("(default)");
        const docRef = doc(this.db, "userInfo", "R61l2zcBOozT3rS0MS49");
        const data_ = await getDoc(docRef);
        if(data_ != undefined){
            console.log(data_.data().age); // manejar error pero funciona
        }else{
            console.log("error no existe el documento con ese id"); // manejar error pero funciona
        }
        

    }
    async sendTrainingInfo(oxygen:number[], heart:number[], time:number){
        this.db = getFirestore("(default)");
        try{
            const docRef = await addDoc(collection(this.db, "Trainings"),{
                SPO2: oxygen,
                heartRate: heart,
                time: time,
                date: new Date()
            });
            console.log("Exito al almacenar los datos");
        }catch(error){
            console.log("Error al almacenar los datos");
        }
        
    }
    async getDayTraining(){
        //later
    }
    async weekTraining(){
        //later
    }

}
