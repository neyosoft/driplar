import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import { AppText } from "../../../../components";

export const AccountCard = ({ style, name, backgroundColor, icon: Icon }) => (
    <TouchableOpacity style={[styles.container, { backgroundColor }, style]}>
        <AppText variant="medium">{name}</AppText>
        {/* <Icon style={styles.icon} /> */}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: 106,
        padding: 10,
        borderRadius: 8,
    },
    icon: {
        alignSelf: "flex-end",
    },
});
