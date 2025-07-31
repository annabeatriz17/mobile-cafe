import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Contato from "../pages/Contato";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}  
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="home" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen name="Menu" component={Menu} options={{
                    tabBarIcon: ({ color, size }) => ( 
                        <MaterialIcons name="restaurant-menu" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen name="Contato" component={Contato} options={{
                    tabBarIcon: ({ color, size }) => ( 
                        <Feather name="info" size={24} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
            );
}