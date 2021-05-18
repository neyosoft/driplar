import React from "react";
import { Text, StyleSheet } from "react-native";

import theme from "../theme";

export const AppText = ({ style, variant = "normal", ...rest }) => {
    let fontFamily;

    switch (variant) {
        case "medium":
            fontFamily = "Metropolis-Medium";
            break;
        case "bold":
            fontFamily = "Metropolis-Bold";
            break;
        case "normal":
        default:
            fontFamily = "Metropolis-Regular";
            break;
    }

    const textStyle = [styles.text, { fontFamily }, style];

    return <Text style={textStyle} {...rest} />;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        color: theme.colors.text,
    },
});
