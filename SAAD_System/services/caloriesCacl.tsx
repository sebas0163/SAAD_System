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