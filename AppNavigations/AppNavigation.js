import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import ProfileScreen from '../screens/ProfileScreen'; // Settings screen
import MainTab from '../screens/MainTab'; // Notifications screen
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the hamburger menu icon

const Drawer = createDrawerNavigator();

const AppNavigation = ({ themeStyles }) => {
  console.log('themeStyles:', themeStyles); // Debug log
  if (!themeStyles) {
    console.error('themeStyles is undefined. Ensure it is passed as a prop.');
    return null; // Prevent rendering if themeStyles is undefined
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerShown: true, // Show headers for drawer screens
          drawerType: 'front', // Use 'front' for the drawer type
          drawerStyle: {
            backgroundColor: themeStyles.navigation.backgroundColor, // Dynamically set drawer background color
            width: '60%', // Set the width of the drawer
          },
          headerStyle: {
            backgroundColor: themeStyles.navigation.backgroundColor, // Dynamically set header background color
          },
          headerTintColor: themeStyles.text.color, // Dynamically set header text/icon color
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()} // Toggle the drawer
              style={{ marginLeft: 15 }}
            >
              <Icon name="menu" size={24} color={themeStyles.text.color} /> {/* Hamburger menu icon */}
            </TouchableOpacity>
          ),
        })}
      >
        {/* Bottom Tab Navigation */}
        <Drawer.Screen
          name="Home"
          component={BottomTabNavigation}
          options={{ headerTitle: '' }} // Set the header title for the Home screen
        />

        {/* Settings Screen */}
        <Drawer.Screen
          name="Settings"
          component={ProfileScreen}
          options={{ title: 'Settings' }} // Set the header title for the Settings screen
        />

        {/* Notifications Screen */}
        <Drawer.Screen
          name="Notifications"
          component={MainTab}
          options={{ title: 'Notifications' }} // Set the header title for the Notifications screen
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navigation: {},
});

export default AppNavigation;