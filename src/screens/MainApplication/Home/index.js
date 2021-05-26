import React from "react";
import { View, StyleSheet, SafeAreaView, Image, ImageBackground, ScrollView } from "react-native";

import BalanceBGImage from "../../../../assets/balance-bg.png";

import theme from "../../../theme";
import { Header, RecordCard } from "./components";
import { AppText } from "../../../components";
import { AmountInfoIcon } from "../../../../assets/icons";

export const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.balanceView}>
                <ImageBackground source={BalanceBGImage} style={styles.balanceImage}>
                    <View style={styles.amountWrapper}>
                        <AppText variant="bold" style={styles.balanceAmountStyle}>
                            N 630,390
                        </AppText>
                        <AppText variant="medium" style={styles.amountDescriptionStyle}>
                            Total balance - 5 mins ago
                        </AppText>
                    </View>
                    <AmountInfoIcon style={styles.infoIcon} />
                </ImageBackground>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.recordCardHeader}>
                    <AppText variant="medium" styles={styles.cardTitle}>
                        Spending watchlist
                    </AppText>
                </View>
                <RecordCard />

                <View style={styles.recordCardHeader}>
                    <AppText variant="medium" styles={styles.cardTitle}>
                        Recent payments
                    </AppText>

                    <AppText variant="medium" styles={styles.cardShowAll}>
                        Show all
                    </AppText>
                </View>
                <RecordCard style={styles.cardItem} />
                <RecordCard style={styles.cardItem} />
                <RecordCard style={styles.cardItem} />
                <RecordCard style={styles.cardItem} />
                <RecordCard style={styles.cardItem} />
                <RecordCard style={styles.cardItem} />
                <RecordCard style={styles.cardItem} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    balanceView: {
        height: 180,
        marginTop: 15,
        backgroundColor: "gray",
    },
    balanceImage: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    amountWrapper: {
        margin: 22,
        marginTop: 30,
        alignItems: "flex-start",
    },
    balanceAmountStyle: {
        color: theme.colors.white,
        fontSize: 40,
    },
    amountDescriptionStyle: {
        marginTop: 10,
        fontSize: 11,
        paddingVertical: 10,
        paddingHorizontal: 11,
        color: theme.colors.white,
        borderRadius: theme.radius.sm,
        backgroundColor: "rgba(37, 35, 46, 0.13)",
    },
    infoIcon: {
        right: 20,
        bottom: 20,
        position: "absolute",
    },
    contentContainerStyle: {
        padding: 10,
    },
    recordCardHeader: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cardTitle: {
        color: theme.colors.primary,
    },
    cardShowAll: {
        fontSize: 13,
        color: theme.colors.label,
    },
    cardItem: {
        marginTop: 10,
    },
});
