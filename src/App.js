import React from "react";
import { ToastProvider } from "react-native-fast-toast";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AuthNavigator from "./navigation";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
    ...DefaultTheme,
    fonts: {
        regular: {
            fontFamily: "Metropolis-Regular",
        },
        medium: {
            fontFamily: "Metropolis-Medium",
        },
        light: {
            fontFamily: "Metropolis-Regular",
        },
        thin: {
            fontFamily: "Metropolis-Regular",
        },
    },
};

const App = () => {
    return (
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
                <ToastProvider>
                    <AuthNavigator />
                </ToastProvider>
            </PaperProvider>
        </SafeAreaProvider>
    );
};

export default App;
