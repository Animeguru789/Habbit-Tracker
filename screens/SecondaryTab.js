import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AppScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewBox}>
        <Text style={styles.titleText}>Welcome to the App Screen!</Text>
        <Text style={styles.titleText}>This is where you can manage your apps.</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF", // Matches the main background color
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
});

export default AppScreen;
