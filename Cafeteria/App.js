import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./navigation/HomeNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigation />
    </NavigationContainer>
  );
}