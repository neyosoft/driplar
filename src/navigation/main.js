import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LinkAccount } from "../screens/MainApplication";

const Stack = createStackNavigator();

const MainApplicationNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="LinkAccount" headerMode="none">
            <Stack.Screen name="LinkAccount" component={LinkAccount} />
        </Stack.Navigator>
    );
};

export default MainApplicationNavigator;