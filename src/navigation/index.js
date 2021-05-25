import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./auth";
import MainApplicationNavigator from "./main";

const AppNavigation = () => (
    <NavigationContainer>
        <MainApplicationNavigator />
    </NavigationContainer>
);

export default AppNavigation;
