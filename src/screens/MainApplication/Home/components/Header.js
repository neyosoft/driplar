import React from "react";
import { View, StyleSheet, Image } from "react-native";

import { AppText } from "../../../../components";

export const Header = () => {
    return (
        <View style={styles.container}>
            <AppText variant="bold" style={styles.homeLabel}>
                Home
            </AppText>
            <Image source={require("../../../../../assets/avatar.png")} style={styles.avatar} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 22,
        marginTop: 15,
        justifyContent: "space-between",
    },
    homeLabel: {
        fontSize: 22,
    },
    avatar: {
        width: 36,
        height: 36,
    },
});
