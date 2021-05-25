import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import theme from "../../theme";
import { AppText, Button } from "../../components";

export const LinkAccount = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageView}></View>
            <View style={styles.content}>
                <AppText variant="medium" style={styles.title}>
                    Link bank accounts
                </AppText>

                <View style={styles.rowItem}>
                    <AppText style={styles.rowItemText}>
                        Connect your accounts for insights on how to save and optimize your spending.
                    </AppText>
                </View>
                <View style={styles.rowItem}>
                    <AppText style={styles.rowItemText}>
                        Driplar will only be able to see your balance and transactions.{" "}
                    </AppText>
                </View>
                <View style={styles.rowItem}>
                    <AppText style={styles.rowItemText}>
                        Bank login details aren’t stored or seen. Connection with your bank is encrypted.
                    </AppText>
                </View>

                <Button style={styles.button} label="Link Account" />

                <Button
                    label="Not now"
                    variant="secondary"
                    style={styles.notNowBtn}
                    labelStyle={styles.notNowBtnText}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageView: {
        height: "35%",
    },
    content: {
        flex: 2,
        padding: 20,
    },
    title: {
        fontSize: 24,
    },
    rowItem: {
        flexDirection: "row",
        marginTop: 25,
    },
    rowItemText: {
        fontSize: 14,
        lineHeight: 20,
    },
    button: {
        marginTop: 40,
    },
    notNowBtn: {
        marginTop: 10,
        backgroundColor: "#EEEDF4",
    },
    notNowBtnText: {
        color: theme.colors.text,
    },
});
