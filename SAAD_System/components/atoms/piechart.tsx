import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

/**
 * The function `Pie_Chart` generates a pie chart component in a TypeScript React application based on
 * the provided percentage data.
 * @param  - The `Pie_Chart` function is a React component that renders a pie chart using the
 * `react-native-chart-kit` library. Here's an explanation of the parameters used in the function:
 * @returns The function `Pie_Chart` is returning a JSX element that renders a `PieChart` component
 * with data based on the `porcent` prop passed to the function. The `pieChartData` array contains data
 * for different categories like 'Quema Grasa', 'Aeróbica', and 'Anaeróbica' along with their
 * respective populations and colors. The `chartConfig` object
 */
export default function Pie_Chart({porcent}:{ porcent:number[]}){
    const pieChartData = [
        { name: 'Quema Grasa', population: porcent[0], color: '#e26a00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Aeróbica', population: porcent[1], color: '#ffa726', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Anaeróbica', population: porcent[2], color: '#f9d4ab', legendFontColor: '#7F7F7F', legendFontSize: 15 }
      ];
      const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

  return (
    <View style={styles.container}>
        <PieChart
        data={pieChartData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        absolute
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    }
});