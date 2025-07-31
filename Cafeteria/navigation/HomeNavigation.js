import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Sobre from "../pages/Sobre";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

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
            <Tab.Screen name="Sobre" component={Sobre}options={{
                    tabBarIcon: ({ color, size }) => ( 
                        <FontAwesome6 name="person" size={24} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
            );
}