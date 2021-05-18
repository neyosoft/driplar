import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./auth";

const AppNavigation = () => (
  <NavigationContainer>
    <AuthNavigator />
  </NavigationContainer>
);

export default AppNavigation;
