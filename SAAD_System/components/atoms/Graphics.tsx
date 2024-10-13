import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function Graphic({label, datasets}:{label:string[], datasets:number[]}) {
  return (
    <View style={styles.container}>
      <LineChart
        data={{
          labels: label,
          datasets: [
            {
              data: datasets,
            },
          ],
        }}
        width={325} // Ancho del gráfico
        height={220}         // Altura del gráfico
        yAxisLabel= ""     // Etiqueta del eje Y
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // Número de decimales en las etiquetas
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
    }
})
