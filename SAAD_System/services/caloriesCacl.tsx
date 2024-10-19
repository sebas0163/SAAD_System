

export default function CalcCalories(mode:number){
    /**
     * Base de datos posee por día horas entrandas => promedio de pulsaciones => promedio 
     */
    var calorias =[];
    if(mode ==0){
        // Llamar a la base para obtener los datos del día 
        const time = 60;
        const peso = 70;
        const MET = 2 // MET INTENSIDAD DEL EJERCICIO
        calorias = [time *((MET * peso)/60)];
        return calorias
    }else{

    }
}