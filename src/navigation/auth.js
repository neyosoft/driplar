import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../screens/Authentication";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
