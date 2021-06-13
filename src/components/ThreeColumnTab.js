import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import theme from "../theme";
import { AppText } from "./AppText";

export const ThreeColumnTab = ({ style, options, value, onChange }) => {
    const toBeRender = options.map(option => {
        if (option === value) {
            return (
                <View style={[styles.switcherRowView, styles.switcherSelectedView]}>
                    <AppText style={styles.switcherSelectedText}>{option}</AppText>
                </View>
            );
        } else {
            return (
                <TouchableOpacity style={styles.switcherRowView} onPress={() => onChange(option)}>
                    <AppText style={styles.switcherText}>{option}</AppText>
                </TouchableOpacity>
            );
        }
    });

    return <View style={[styles.switchView, style]}>{toBeRender}</View>;
};

const styles = StyleSheet.create({
    switchView: {
        padding: 5,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: theme.radius.sm,
        justifyContent: "space-between",
        backgroundColor: "rgba(171, 169, 174, 0.2)",
    },
    switcherRowView: {
        width: "28%",
        alignItems: "center",
        paddingVertical: 5,
        borderRadius: theme.radius.sm,
    },
    switcherSelectedView: {
        width: "36%",
        backgroundColor: theme.colors.white,
    },
    switcherSelectedText: {
        fontSize: 14,
        color: theme.colors.primary,
    },
    switcherText: {
        fontSize: 14,
        color: "#797383",
    },
});
