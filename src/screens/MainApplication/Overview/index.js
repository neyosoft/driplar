import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../../theme";
import { AppText } from "../../../components";
import { moneyFormat } from "../../../utils/money.utils";

export const Overview = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Icon name="chevron-left" size={30} color={theme.colors.black} />
                </TouchableOpacity>
                <AppText variant="medium" style={styles.overviewTitle}>
                    Overview
                </AppText>
            </View>
            <View style={styles.analyticsBox}>
                <View style={{ padding: 22 }}>
                    <AppText variant="medium" style={styles.amount}>
                        {moneyFormat(630390)}
                    </AppText>
                    <AppText variant="medium" style={styles.amountDescriptionStyle}>
                        Total balance - 5 mins ago
                    </AppText>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    header: {
        padding: 20,
    },
    backButton: {
        alignSelf: "flex-start",
    },
    overviewTitle: {
        marginTop: 10,
        fontSize: 22,
    },
    analyticsBox: {
        backgroundColor: "#FAFAFA",
    },
    amount: {
        fontSize: 40,
        color: theme.colors.black,
    },
    amountDescriptionStyle: {
        marginTop: 10,
        fontSize: 12,
        color: "#797383",
        borderRadius: theme.radius.sm,
    },
});
