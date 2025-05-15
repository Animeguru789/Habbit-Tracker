import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { DATA, sortDataByProgress } from './dataUtils'; // Import necessary utilities
import { getProgressValues } from './progressStore';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

const HomeScreen = () => {
  const progressValues = getProgressValues(); // Get shared progress values
  const sortedData = sortDataByProgress(DATA, progressValues);
  const topFourApps = sortedData.slice(0, 4);

  const { themeStyles } = useContext(ThemeContext); // Access themeStyles from ThemeContext

  console.log("Progress Values:", progressValues);
  console.log("Top 4 Apps:", topFourApps.map((app) => ({ id: app.id, title: app.title, progress: progressValues[app.id] })));

  const data = [
    {
      name: "entertainment",
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
    <View style={[styles.container, { backgroundColor: themeStyles.container.backgroundColor }]}>
      <View style={[styles.viewBox, { backgroundColor: themeStyles.container.backgroundColor, left: 0, width: 255 }]}>
        <Image source={require('../assets/icon.png')} style={{ height: 50, width: 50, left: 25, borderRadius: 10 }} />
        <View style={[styles.viewBox, { left: '50%' }]}>
          <Text style={[styles.titleText, { marginLeft: 50, color: themeStyles.text.color }]}>H</Text>
          <Text style={[styles.bigTitle, { color: themeStyles.text.color }]}>APP</Text>
          <Text style={[styles.titleText, { marginRight: 50, color: themeStyles.text.color }]}>its</Text>
        </View>
      </View>
      <View style={[styles.viewBox, { top: 100, backgroundColor: themeStyles.navigation.backgroundColor }]}>
        <View style={styles.chartWrapper}>
          {/* Pie Chart */}
          <PieChart
            data={data}
            width={Dimensions.get("window").width - 40} // Adjust width dynamically
            height={220}
            chartConfig={{
              backgroundColor: themeStyles.container.backgroundColor,
              backgroundGradientFrom: themeStyles.container.backgroundColor,
              backgroundGradientTo: themeStyles.container.backgroundColor,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            absolute // Show percentage values
          />
          {/* Hollow Center */}
          <View style={[styles.hollowCenter, { backgroundColor: themeStyles.container.backgroundColor }]} />
        </View>
      </View>
      <View style={[styles.viewBox, { top: 400, backgroundColor: themeStyles.navigation.backgroundColor }]}>
        <Text style={[styles.titleText, { color: themeStyles.text.color }]}>Most used apps in 30 days</Text>
      </View>
      <View style={[styles.viewBox, { top: 450, backgroundColor: themeStyles.navigation.backgroundColor }]}>
        {topFourApps.map((app) => (
          <TouchableHighlight key={app.id} onPress={() => alert(`${app.title} clicked!`)}>
            <Image style={styles.appImage} source={app.image} />
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  appImage: {
    height: 70,
    width: 70,
    borderRadius: 10,
    margin: 10,
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
    alignItems: "center",
    marginBottom: 20,
    position: "absolute",
    top: 20,
    borderRadius: 10,
    alignSelf: "center", 
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
    borderRadius: 40, // Makes it circular
    top: 70, // Center vertically (half of the PieChart height minus half of hollowCenter height)
    left: (Dimensions.get("window").width - 40) / 2 - 122, // Center horizontally (half of PieChart width minus half of hollowCenter width)
  },
});

export default HomeScreen;
