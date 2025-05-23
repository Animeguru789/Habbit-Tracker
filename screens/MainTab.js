import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NotificationsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationsScreen;
