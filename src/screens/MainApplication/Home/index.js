import React from "react";
import { View, StyleSheet, SafeAreaView, ImageBackground, ScrollView, Image } from "react-native";

import BalanceBGImage from "../../../../assets/balance-bg.png";

import theme from "../../../theme";
import { Header, RecordCard } from "./components";
import { AppText } from "../../../components";
import { AmountInfoIcon, CategoryThree } from "../../../../assets/icons";

import UberLogo from "../../../../assets/UberLogo.png";
import NetlifyLogo from "../../../../assets/NetlifyLogo.png";
import SpotifyLogo from "../../../../assets/SpotifyLogo.png";
import ProductImage from "../../../../assets/ProductImageOne.png";
import TransportCategoryIcon from "../../../../assets/TransportCategoryIcon.png";

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
            <ScrollView>
                <View style={styles.recordCardHeader}>
                    <AppText variant="bold" styles={styles.cardTitle}>
                        Spending watchlist
                    </AppText>
                </View>

                <RecordCard
                    amount={127500}
                    title="Shopping"
                    icon={ProductImage}
                    style={styles.cardItem}
                    description="7 transactions - 60% of income"
                />
                <RecordCard
                    amount={42500}
                    title="Transport"
                    style={styles.cardItem}
                    icon={TransportCategoryIcon}
                    description="26 transactions - 15% of income"
                />

                <View style={styles.recordCardHeader}>
                    <AppText variant="bold" styles={styles.cardTitle}>
                        Recent payments
                    </AppText>

                    <AppText variant="medium" styles={styles.cardShowAll}>
                        Show all
                    </AppText>
                </View>

                <View style={styles.itemWrapper}>
                    <RecordCard
                        amount={2500}
                        title="Netflix"
                        icon={NetlifyLogo}
                        description="April 7"
                        style={styles.cardItem}
                    />
                    <RecordCard
                        amount={3500}
                        title="Spotify"
                        icon={SpotifyLogo}
                        description="Jan 12"
                        style={styles.cardItem}
                    />
                    <RecordCard
                        icon={UberLogo}
                        title="Uber"
                        description="Jan 12"
                        amount={3500}
                        style={styles.cardItem}
                    />
                    <RecordCard
                        amount={3500}
                        title="Internet"
                        icon={ProductImage}
                        description="Jan 12"
                        style={styles.cardItem}
                    />
                </View>

                <View style={styles.recordCardHeader}>
                    <AppText variant="bold" styles={styles.cardTitle}>
                        New deals in your favourite categories
                    </AppText>
                </View>

                <View style={{ marginVertical: 10, paddingHorizontal: 20 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image source={require("../../../../assets/category-one.png")} style={styles.categoryItem} />
                        <Image source={require("../../../../assets/category-two.png")} style={styles.categoryItem} />
                        <CategoryThree />
                    </ScrollView>
                </View>

                <View style={styles.recordCardHeader}>
                    <AppText variant="bold" styles={styles.cardTitle}>
                        Categorize these transactions
                    </AppText>
                    <AppText variant="medium" styles={styles.cardShowAll}>
                        Show all
                    </AppText>
                </View>

                <View style={styles.itemWrapper}>
                    <RecordCard
                        amount={2500}
                        title="Netflix"
                        icon={NetlifyLogo}
                        description="April 7"
                        style={styles.cardItem}
                    />
                    <RecordCard
                        amount={3500}
                        title="Spotify"
                        icon={SpotifyLogo}
                        description="Jan 12"
                        style={styles.cardItem}
                    />
                    <RecordCard
                        icon={UberLogo}
                        title="Uber"
                        description="Jan 12"
                        amount={3500}
                        style={styles.cardItem}
                    />
                    <RecordCard
                        amount={3500}
                        title="Internet"
                        icon={ProductImage}
                        description="Jan 12"
                        style={styles.cardItem}
                    />
                </View>
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
    recordCardHeader: {
        margin: 10,
        marginTop: 20,
        marginHorizontal: 20,
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
    itemWrapper: {
        borderWidth: 0.5,
        borderColor: "#DCDBDB",
        borderRadius: theme.radius.md,
        marginHorizontal: 10,
    },
    cardItem: {},
    categoryItem: {
        marginRight: 8,
    },
});
