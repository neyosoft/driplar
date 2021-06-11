import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, LinkAccount, Overview } from "../screens/MainApplication";
import { AccountIcon, AccountInactiveIcon, HomeIcon, HomeInactiveIcon } from "../../assets/icons";

import { AccountList, AccountInformation } from "../screens/MainApplication/Accounts";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AccountNavigation = () => (
    <Stack.Navigator initialRouteName="AccountList" headerMode="none">
        <Stack.Screen name="AccountList" component={AccountList} />
        <Stack.Screen name="AccountInformation" component={AccountInformation} />
    </Stack.Navigator>
);

const HomeNavigation = () => (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: "#201E26",
            inactiveTintColor: "#8B8B8D",
            labelStyle: {
                fontFamily: "Metropolis-Regular",
            },
        }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                if (route.name === "Home") {
                    return (iconName = focused ? <HomeIcon /> : <HomeInactiveIcon />);
                } else if (route.name === "Accounts") {
                    return (iconName = focused ? <AccountIcon /> : <AccountInactiveIcon />);
                } else if (route.name === "Insight") {
                    return (iconName = focused ? <AccountIcon /> : <AccountInactiveIcon />);
                } else if (route.name === "Deal") {
                    return (iconName = focused ? <AccountIcon /> : <AccountInactiveIcon />);
                }
            },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Accounts" component={AccountNavigation} />
    </Tab.Navigator>
);

const MainApplicationNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={HomeNavigation} />
            <Stack.Screen name="Overview" component={Overview} />
            <Stack.Screen name="LinkAccount" component={LinkAccount} />
        </Stack.Navigator>
    );
};

export default MainApplicationNavigator;
