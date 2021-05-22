import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
    Login,
    Welcome,
    NameInput,
    ChangePassword,
    ForgetPassword,
    PhoneNumberInput,
    EmailRegistration,
    PasswordRestOTPVerification,
} from "../screens/Authentication";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome" headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="NameInput" component={NameInput} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="PhoneNumberInput" component={PhoneNumberInput} />
            <Stack.Screen name="EmailRegistration" component={EmailRegistration} />
            <Stack.Screen name="PasswordRestOTPVerification" component={PasswordRestOTPVerification} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
