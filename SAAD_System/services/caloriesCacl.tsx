/**
 * The function `CalcCaloriesWeek` calculates the total calories burned in a week based on the mode of
 * exercise, time spent exercising each day, and weight.
 * @param {number[]} mode - The `mode` parameter represents the MET (Metabolic Equivalent of Task)
 * values for different activities. In this case, it is an array of numbers representing the MET values
 * for running at different intensities.
 * @param {number[]} time - The `time` parameter represents the duration of exercise in minutes for
 * each day of the week.
 * @param {number} weight - Weight is a number representing the weight of the person in kilograms.
 * @returns The function `CalcCaloriesWeek` is returning an array of calculated calories for each day
 * of the week based on the input parameters provided (mode, time, weight).
 */
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
/**
 * The function calculates the calories burned per day based on the activity mode, time spent, and
 * weight.
 * @param {number} mode - The `mode` parameter represents the intensity level of the activity being
 * performed. It ranges from 0 to 2, with each value corresponding to a specific MET (Metabolic
 * Equivalent of Task) value for running.
 * @param {number} time - The `time` parameter in the `CalcCaloriesDay` function represents the
 * duration of the activity in minutes. It is used to calculate the total calories burned based on the
 * activity mode, MET value, and weight provided.
 * @param {number} weight - Weight is the weight of the person in kilograms.
 * @returns the calculated calories burned per day based on the input parameters of mode (MET value for
 * running), time (in minutes), and weight (in kilograms).
 */
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
/**
 * The function `trainingZones` calculates the percentage of heart rate values within different
 * training zones based on age and maximum heart rate frequency.
 * @param {number} age - The `age` parameter is a number representing the age of an individual.
 * @param {number[]} heartRate - The `heartRate` parameter is an array of numbers representing the
 * heart rates recorded during a training session.
 * @returns The `trainingZones` function returns an array of three numbers representing the percentage
 * of heart rate values falling within different training zones. The first number represents the
 * percentage of heart rates in the 50-70% range, the second number represents the percentage in the
 * 70-85% range, and the third number represents the percentage above 85%.
 */
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
/**
 * The function `filterSignal` takes in oxygen levels, heart rate, and age as parameters, applies
 * certain filters based on conditions, and returns the filtered oxygenation and heart rate values as
 * strings.
 * @param {number} oxygen - The `oxygen` parameter represents the oxygen level in the blood.
 * @param {number} heartRate - The `heartRate` parameter represents the heart rate value of a person.
 * @param {number} age - The `age` parameter in the `filterSignal` function represents the age of a
 * person. It is used to calculate the maximum heart rate (fcm) by subtracting the age from 220. This
 * maximum heart rate is then used to determine if the heart rate is within certain percentage ranges.
 * @returns The function `filterSignal` returns an object with two properties: `oxigenacion` and
 * `pulsaciones`, both as strings.
 */
export function filterSignal(oxygen:number, heartRate:number, age:number){
    let fcm = 220-age;
    if(oxygen == -999){
        oxygen = 80;
    }if (heartRate == -999){
        heartRate =80;
    }if (oxygen < 90){
        oxygen =0;
    }if((heartRate*100)/fcm > 85){
        heartRate =1;
    }if((heartRate*100)/fcm < 49){
        heartRate =0;
    }
    return {
        oxigenacion: String(oxygen),
        pulsaciones: String(heartRate)
    }
}