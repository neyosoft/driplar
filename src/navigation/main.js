import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, LinkAccount } from "../screens/MainApplication";

const Stack = createStackNavigator();

const MainApplicationNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="LinkAccount" component={LinkAccount} />
        </Stack.Navigator>
    );
};

export default MainApplicationNavigator;
