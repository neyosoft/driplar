import React from "react";

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
        <PaperProvider theme={theme}>
            <AuthNavigator />
        </PaperProvider>
    );
};

export default App;
