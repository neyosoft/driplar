import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import theme from "../theme";
import { AppText } from "./AppText";

export const Button = ({ style, variant = "primary", label, labelStyle, disabled, ...rest }) => {
    const buttonStyle = [styles.button];
    const buttonTextStyle = [styles.buttonText];

    switch (variant) {
        case "primary":
            buttonStyle.push(styles.primaryBtn);
            buttonTextStyle.push(styles.primaryBtnText);
            break;
        case "secondary":
            buttonStyle.push(styles.secondaryBtn);
            buttonTextStyle.push(styles.secondaryBtnText);
            break;
        default:
            break;
    }

    if (style) {
        buttonStyle.push(style);
    }
    if (labelStyle) {
        buttonTextStyle.push(labelStyle);
    }

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
    },
    primaryBtn: {
        backgroundColor: theme.colors.primary,
    },
    primaryBtnText: {
        color: theme.colors.white,
    },
    secondaryBtn: {
        backgroundColor: "#EEEDF4",
    },
    secondaryBtnText: {
        color: theme.colors.primary,
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
