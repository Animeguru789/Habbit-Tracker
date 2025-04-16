import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={[styles.titleText, {marginLeft: 50,}]}>H</Text>
        <Text style={styles.bigTitle}>APP</Text>
        <Text style={[styles.titleText, {marginRight: 50,}]}>its</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCE',
  },
  titleText: {
    fontSize: 24,
    marginHorizontal: 5,
  },
  bigTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textBox: {
    flexDirection: 'row',
    Height: 'auto',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFe0e0',
    position: 'absolute',
    top: 20,
    borderRadius: 10,
  },
});

export default HomeScreen;


