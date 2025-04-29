import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const HomeScreen = () => {
  const data = [
    {
      name: "Completed",
      population: 70,
      color: "#4CAF50",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Pending",
      population: 30,
      color: "#FF5722",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.viewBox}>
        <Text style={[styles.titleText, { marginLeft: 50 }]}>H</Text>
        <Text style={styles.bigTitle}>APP</Text>
        <Text style={[styles.titleText, { marginRight: 50 }]}>its</Text>
      </View>
      <View style={[styles.viewBox, { top: 100 }]}>
        <View style={styles.chartWrapper}>
          {/* Pie Chart */}
          <PieChart
            data={data}
            width={Dimensions.get("window").width - 40} // Adjust width dynamically
            height={220}
            chartConfig={{
              backgroundColor: "#1cc910",
              backgroundGradientFrom: "#eff3ff",
              backgroundGradientTo: "#efefef",
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            absolute // Show percentage values
          />
          {/* Hollow Center */}
          <View style={styles.hollowCenter} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCE", // Matches the main background color
  },
  titleText: {
    fontSize: 24,
    marginHorizontal: 5,
  },
  bigTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  viewBox: {
    flexDirection: "row",
    height: "auto",
    width: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFe0e0", // Background color of the view
    position: "absolute",
    top: 20,
    borderRadius: 10,
  },
  chartContainer: {
    marginTop: 150,
    alignItems: "center",
  },
  chartWrapper: {
    position: "relative", // Allows overlaying the hollow center
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width - 40, // Match PieChart width
    height: 220, // Match PieChart height
  },
  hollowCenter: {
    position: "absolute",
    width: 80, // Adjust size of the hollow center (smaller than the pie chart)
    height: 80,
    backgroundColor: "#FFe0e0", // Matches the viewBox background color
    borderRadius: 40, // Makes it circular
    top: 70, // Center vertically (half of the PieChart height minus half of hollowCenter height)
    left: (Dimensions.get("window").width - 40) / 2 - 122, // Center horizontally (half of PieChart width minus half of hollowCenter width)
  },
});

export default HomeScreen;
