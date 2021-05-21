import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome, NameInput, EmailRegistration, PhoneNumberInput } from "../screens/Authentication";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="PhoneNumberInput" headerMode="none">
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="NameInput" component={NameInput} />
            <Stack.Screen name="PhoneNumberInput" component={PhoneNumberInput} />
            <Stack.Screen name="EmailRegistration" component={EmailRegistration} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
