import React from "react";
import { View, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import theme from "../theme";
import { AppText } from "./AppText";

export const Button = ({ style, label, labelStyle, disabled, ...rest }) => {
    const buttonStyle = [styles.button, style];
    const buttonTextStyle = [styles.buttonText, labelStyle];

    if (disabled) {
        buttonStyle.push(styles.disabledBtn);
        buttonTextStyle.push(styles.disabledText);
    }

    return (
        <RectButton style={buttonStyle} {...rest}>
            <AppText variant="medium" style={buttonTextStyle}>
                {label}
            </AppText>
        </RectButton>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 17,
        paddingHorizontal: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.primary,
    },
    buttonText: {
        color: theme.colors.white,
    },
    disabledBtn: {
        backgroundColor: "#F9F8F9",
    },
    disabledText: {
        color: "#C9C9CB",
    },
});
