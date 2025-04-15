import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IonIcons } from '@reacticons/ionicons'
import HomeScreen from '../screens/HomeScreen';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';

const Tab = createBottomTabNavigator();


const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false, // Hide labels for tabs
                headerShown: false, // Hide header for all tabs
                tabBarStyle: {
                    position: 'absolute', // Position the tab bar absolutely
                    bottom: 0, // Align it to the bottom
                    right: 0, // Align it to the right
                    left: 0, // Align it to the left
                    elevation: 0, // Remove shadow on Android
                    height: Platform.OS === 'ios' ? 90 : 60, // Set height for the tab bar
                    backgroundColor: '#FFFFFF', // Set background color for the tab bar
                }, 
            }}
            >
                <Tab.Screen
                    name="DrawerHome"
                    component={HomeScreen} // Replace with your HomeScreen component
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={focused ? icons.HomeScreen : icons.home-Outline} // Replace with your icon source
                                resizeMode="contain"
                                style={{
                                    height: 24,
                                    width: 24, 
                                    tintColor: focused ? 'blue' : '#000000' // Change color based on focus state,
                                }}
                            />

                        ),
                    }}
                />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;