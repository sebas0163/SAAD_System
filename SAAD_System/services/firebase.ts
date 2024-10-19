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
        }catch(error){
            console.log("error");
        }
        
    }

}
