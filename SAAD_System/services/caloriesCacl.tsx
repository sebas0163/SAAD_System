export  function CalcCaloriesWeek(mode:number[], time:number[], weight: number){
    /**
     * Mode: from 0 to 2, and its the MET (for running)
     */
    let calorias =[];
    for(let i =0; i <7; i++){
        calorias.push((CalcCaloriesDay(mode[i], time[i]*60, weight)));
    }
    console.log(calorias);
    return calorias
}
export  function CalcCaloriesDay(mode:number, time:number, weight:number){
    /**
         * Mode: from 0 to 2, and its the MET (for running)
         */
    let cal =0;
    let met = 0;
    if(mode ==0){
        met =3;
    }else if (mode ==1){
        met =8
    }else{
        met = 12
    }
    cal = Math.round((time/60) *((met * weight))/60);
    return cal
}
export function trainingZones(age:number,heartRate:number[]){
    let fcm = 220- age // Max heartrate frecuency
    let porcent:number[] = [0,0,0];
    heartRate.forEach((rate)=>{
        let range:number = (rate*100)/fcm
        if (range>50 && range <70){
            porcent[0] +=1;
        }else if (range > 70 && range < 85){
            porcent[1] +=1;
        }else if(range> 85){
            porcent[2] += 1;
        }
    });
    let result:number[] =[Math.round((porcent[0]*100)/heartRate.length),Math.round((porcent[1]*100)/heartRate.length),Math.round((porcent[2]*100)/heartRate.length)];
    return result



}