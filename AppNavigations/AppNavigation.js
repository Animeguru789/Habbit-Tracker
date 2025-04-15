import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import ProfileScreen from '../screens/ProfileScreen'; // Settings screen
import MainTab from '../screens/MainTab'; // Notifications screen

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: true, // Show headers for drawer screens
                    drawerType: 'front', // Use 'front' for the drawer type
                }}
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