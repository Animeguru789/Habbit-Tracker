import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import ProfileScreen from '../screens/ProfileScreen'; // Settings screen
import MainTab from '../screens/MainTab'; // Notifications screen
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the hamburger menu icon

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={({ navigation }) => ({
                    headerShown: true, // Show headers for drawer screens
                    drawerType: 'front', // Use 'front' for the drawer type
                    drawerStyle: {
                        backgroundColor: '#FFe0e0', // Set the background color of the drawer
                        width: '60%', // Set the width of the drawer
                    },
                    headerStyle: {
                        backgroundColor: '#FFe0e0', // Set the background color of the top bar
                    },
                    headerTintColor: '#000', // Set the color of the header text/icons
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.toggleDrawer()} // Toggle the drawer
                            style={{ marginLeft: 15 }}
                        >
                            <Icon name="menu" size={24} color="#000" /> {/* Hamburger menu icon */}
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

export default AppNavigation;