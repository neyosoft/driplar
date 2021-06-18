import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import { AppText } from "../../../../components";

export const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppText variant="bold" style={styles.homeLabel}>
                Home
            </AppText>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Image source={require("../../../../../assets/avatar.png")} style={styles.avatar} />
            </TouchableOpacity>
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
