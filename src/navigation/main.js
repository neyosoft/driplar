import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Overview } from "../screens/MainApplication/Home";
import {
    AccountIcon,
    AccountInactiveIcon,
    HomeIcon,
    HomeInactiveIcon,
    InsightIcon,
    InsightInactiveIcon,
    DealIcon,
    DealInactiveIcon,
} from "../../assets/icons";

import { Insight, Category, MerchantInformation } from "../screens/MainApplication/Insight";
import { AccountList, AccountInformation } from "../screens/MainApplication/Accounts";
import { Deals } from "../screens/MainApplication/Deals";
import { Article, LinkAccount } from "../screens/MainApplication";
import { Settings, EditProfile } from "../screens/MainApplication/Settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigation = () => (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Overview" component={Overview} />
    </Stack.Navigator>
);

const AccountNavigation = () => (
    <Stack.Navigator initialRouteName="AccountList" headerMode="none">
        <Stack.Screen name="AccountList" component={AccountList} />
        <Stack.Screen name="AccountInformation" component={AccountInformation} />
    </Stack.Navigator>
);

const InsightNavigation = () => (
    <Stack.Navigator initialRouteName="Insight" headerMode="none">
        <Stack.Screen name="Insight" component={Insight} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="MerchantInformation" component={MerchantInformation} />
    </Stack.Navigator>
);

const DealNavigation = () => (
    <Stack.Navigator initialRouteName="Deals" headerMode="none">
        <Stack.Screen name="Deals" component={Deals} />
    </Stack.Navigator>
);

const SettingsNavigation = () => (
    <Stack.Navigator initialRouteName="Settings" headerMode="none">
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
);

const BottomNavigation = () => (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: "#201E26",
            inactiveTintColor: "#8B8B8D",
            labelStyle: {
                fontFamily: "Metropolis-Regular",
            },
            style: {
                backgroundColor: "#F9F9F9",
            },
        }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                if (route.name === "Home") {
                    return (iconName = focused ? <HomeIcon /> : <HomeInactiveIcon />);
                } else if (route.name === "Accounts") {
                    return (iconName = focused ? <AccountIcon /> : <AccountInactiveIcon />);
                } else if (route.name === "Insight") {
                    return (iconName = focused ? <InsightIcon /> : <InsightInactiveIcon />);
                } else if (route.name === "Deal") {
                    return (iconName = focused ? <DealIcon /> : <DealInactiveIcon />);
                }
            },
        })}>
        <Tab.Screen name="Home" component={HomeNavigation} />
        <Tab.Screen name="Accounts" component={AccountNavigation} />
        <Tab.Screen name="Insight" component={InsightNavigation} />
        <Tab.Screen name="Deal" component={DealNavigation} />
    </Tab.Navigator>
);

const MainApplicationNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Article" component={Article} />
            <Stack.Screen name="Home" component={BottomNavigation} />
            <Stack.Screen name="LinkAccount" component={LinkAccount} />
            <Stack.Screen name="Settings" component={SettingsNavigation} />
        </Stack.Navigator>
    );
};

export default MainApplicationNavigator;
