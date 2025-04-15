import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen'; // Ensure this path is correct
import SecondaryTab from '../screens/SecondaryTab'; // Ensure this path is correct

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
    screenOptions={{
        tabBarShowLabel: true, // Enable labels for tabs
        headerShown: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 70,
            backgroundColor: '#FFFFFF',
        },
        tabBarLabelStyle: {
            fontSize: 12, // Adjust font size for the label
            color: 'black', // Default label color
        },
    }}
>
    <Tab.Screen
        name="DrawerHome"
        component={HomeScreen}
        options={{
            tabBarIcon: ({ focused }) => (
                <Icon
                    name={focused ? 'home' : 'home-outline'}
                    size={24}
                    color={focused ? 'blue' : 'black'}
                />
            ),
            tabBarLabel: 'Home', // Add label for this tab
        }}
    />

    <Tab.Screen
        name="Apps"
        component={SecondaryTab}
        options={{
            tabBarIcon: ({ focused }) => (
                <Icon
                    name={focused ? 'aperture' : 'aperture-outline'}
                    size={24}
                    color={focused ? 'blue' : 'black'}
                />
            ),
            tabBarLabel: 'Apps', // Add label for this tab
        }}
    />
</Tab.Navigator>
    );
};

export default BottomTabNavigation;