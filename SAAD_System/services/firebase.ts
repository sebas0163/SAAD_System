// firebase.ts

import {getFirestore, doc, getDoc, getDocs, query, where, addDoc, deleteDoc, updateDoc, collection, increment, arrayUnion} from 'firebase/firestore';
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
        if(data_.exists()){
            let result={
                age: data_.data().age,
                weight: data_.data().weight,
                height: data_.data().height

            }
            return result
        }else{
            return {
                age: 30,
                weight: 70,
                height: 1.80
            }
        }
        

    }
    async sendTrainingInfo(oxygen:number[], heart:number[], time:number, type:number){
        this.db = getFirestore("(default)");
        const day = new Date;
        const currentDate = day.toISOString().split('T')[0];
        try{
            const refDoc = collection(this.db, "Trainings");
            const q = query(refDoc, where("date", "==", currentDate));
            const docSnapshot = await getDocs(q);
            console.log(currentDate);
            if(!docSnapshot.empty){ // si existe en la fecha se agregan los datos a ese 
                docSnapshot.forEach(async (doc)=>{
                    const docRef = doc.ref;
                    await updateDoc(docRef,{
                        SPO2: arrayUnion(...oxygen),
                        heartRate: arrayUnion(...heart),
                        time: increment(time),
                        type: type
                    });
                });
            }else{
                const docRef = await addDoc(collection(this.db, "Trainings"),{
                    SPO2: oxygen,
                    heartRate: heart,
                    time: time,
                    date: currentDate,
                    type: type
                });
            }
            console.log("Exito al almacenar los datos");
        }catch(error){
            console.log("Error al almacenar los datos");
        }
        
    }
    async getDayTraining(){
        this.db = getFirestore("(default)");
        const day = new Date;
        const currentDate = day.toISOString().split('T')[0];
        try{
            const collection_ = collection(this.db, "Trainings");
            const query_ = query(collection_, where("date", "==", currentDate));
            const querySnapShot = await getDocs(query_);
            if(querySnapShot.empty){
                return (null);
            }else{
                let totalTime =0;
                let totalOxygen:number[] = [];
                let totalheart:number[] = [];
                let day = "";
                let type = 0;
                querySnapShot.forEach((doc)=>{
                    totalTime = doc.data().time;
                    totalOxygen = doc.data().SPO2;
                    totalheart = doc.data().heartRate;
                    type = doc.data().type;
                })
                const result = {
                    time: totalTime,
                    oxygen: totalOxygen,
                    heartRate: totalheart,
                    type: type
                }
                console.log(result);
                return (result);
            }
        }catch(error){
            console.log("No hay datos para el día de hoy");
            return (null);
        }
    }
    async weekTraining(){
        this.db = getFirestore("(default)");
        const day = new Date;
        const sevenDaysAgo = new Date(day);
        sevenDaysAgo.setDate(day.getDate() - 7); // Resta 7 días a la fecha actual
        const currentDate =sevenDaysAgo.toISOString().split('T')[0];
        try{
            const collection_ = collection(this.db, "Trainings");
            const query_ = query(collection_, where("date", ">=", currentDate));
            const querySnapShot = await getDocs(query_); 
            if(querySnapShot.empty){
                return (null);
            }else{
                let totalTime:number[] = [0,0,0,0,0,0,0];
                let totalOxygen:number[] = [0,0,0,0,0,0,0];
                let totalheart:number[] = [0,0,0,0,0,0,0];
                let day:string[] = ["","","","","","",""];
                let type:number[] = [0,0,0,0,0,0,0];
                let cont = 0;
                querySnapShot.forEach((doc)=>{
                    totalTime[cont] = doc.data().time/60;
                    let oxygenArr:number[] =  doc.data().SPO2;
                    let heartArr:number[] = doc.data().heartRate;
                    totalOxygen[cont]= (oxygenArr.reduce((acc,curr) => acc + curr,0))/oxygenArr.length;
                    totalheart[cont]= (heartArr.reduce((acc,curr)=> acc+curr,0))/heartArr.length;
                    day[cont] = doc.data().date;
                    type[cont] = doc.data().type;
                    cont ++;
                })
                const weekSumary ={
                    time: totalTime,
                    oxygen: totalOxygen,
                    heartRate: totalheart,
                    date: this.convertDate(day),
                    type: type
                };
                return (weekSumary);
            }
        }catch(error){
            console.log("No hay datos para el día de hoy");
            return (null);
        }
    }
    convertDate(dates:string[]):string[]{
        const days = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
        let list= dates.map(date => {
            const  [year,month,day] = date.split("-").map(Number);
            const dateObj = new Date(`20${year}-${month}-${day}`);
            const weekday = dateObj.getDay();
            return days[weekday]
        });
        for (let i =0; i <7; i++){
            if(list[i]== undefined){
                list[i] = "-"
            }
        }
        return list
    }

}
