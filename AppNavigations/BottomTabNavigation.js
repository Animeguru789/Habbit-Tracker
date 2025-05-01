import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import SecondaryTab from '../screens/SecondaryTab';
import MainTab from '../screens/MainTab';
import ProfileScreen from '../screens/ProfileScreen';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({ navigation }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: '#FFe0e0',
                    borderTopWidth: 0,
                    height: 60,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Icon
                            name={focused ? 'home' : 'home-outline'}
                            size={24}
                            color={focused ? 'blue' : 'black'}
                        />
                    ),
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
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;