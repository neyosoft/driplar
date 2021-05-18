import React from "react";
import { ScrollView, StyleSheet, View, useWindowDimensions, StatusBar } from "react-native";

import theme from "../../theme";
import { AppText } from "../../components";
import { BleytIcon } from "../../../assets/icons";

export const Welcome = () => {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.topView}>
                <View></View>
                <ScrollView pagingEnabled={true}>
                    <View style={[{ width }]}></View>
                    <View style={[{ width }]}></View>
                    <View style={[{ width }]}></View>
                </ScrollView>
            </View>
            <View style={styles.bottomView}>
                <View style={styles.bleytBtn}>
                    <BleytIcon style={styles.bleytBtnIcon} />
                    <AppText variant="medium">Continue with Bleyt</AppText>
                </View>
                <View style={styles.appBtn}>
                    <AppText variant="medium" style={styles.appBtnText}>
                        Continue with Email
                    </AppText>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#162235",
    },
    topView: {
        flex: 1,
    },
    bottomView: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: "#111926",
    },
    bleytBtn: {
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.offWhite,
    },
    bleytBtnIcon: {
        top: 10,
        left: 23,
        position: "absolute",
    },
    appBtn: {
        padding: 15,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.primary,
    },
    appBtnText: {
        color: theme.colors.white,
    },
});
