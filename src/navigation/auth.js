import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome, EmailRegistration } from "../screens/Authentication";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="EmailRegistration" headerMode="none">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="EmailRegistration" component={EmailRegistration} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
