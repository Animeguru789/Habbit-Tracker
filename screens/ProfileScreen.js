import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Switch } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const ProfileScreen = ({ navigation }) => {
  const { isDarkMode, toggleDarkMode, themeStyles } = useContext(ThemeContext);

  return (
    <View style={[styles.container, themeStyles.container]}>
      <Text style={themeStyles.text}>Settings Screen</Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        thumbColor={themeStyles.switchThumb.color}
        trackColor={themeStyles.switchTrack}
      />
      <Text style={themeStyles.text}>
        {isDarkMode ? 'Dark Mode Enabled' : 'Light Mode Enabled'}
      </Text>
      <View style={[styles.button, themeStyles.button]}>
        <Button
          title="Go to Home"
          color={themeStyles.button.color}
          onPress={() => navigation.navate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default ProfileScreen;

