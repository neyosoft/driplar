import React from "react";
import { View, Image, ScrollView, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import theme from "../../../theme";
import { AppText } from "../../../components";
import { Header, RecordCard } from "./components";
import { AmountInfoIcon } from "../../../../assets/icons";
import BalanceBGImage from "../../../../assets/balance-bg.png";

import UberLogo from "../../../../assets/UberLogo.png";
import { moneyFormat } from "../../../utils/money.utils";
import NetlifyLogo from "../../../../assets/NetlifyLogo.png";
import SpotifyLogo from "../../../../assets/SpotifyLogo.png";
import ProductImage from "../../../../assets/ProductImageOne.png";
import TransportCategoryIcon from "../../../../assets/TransportCategoryIcon.png";

const { width } = Dimensions.get("window");

export const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <Header />

            <ScrollView>
                <TouchableOpacity style={styles.balanceView} onPress={() => navigation.navigate("Overview")}>
                    <ImageBackground source={BalanceBGImage} style={styles.balanceImage}>
                        <View style={styles.amountWrapper}>
                            <AppText variant="bold" style={styles.balanceAmountStyle}>
                                {moneyFormat(630390)}
                            </AppText>
                            <AppText variant="medium" style={styles.amountDescriptionStyle}>
                                Total balance - 5 mins ago
                            </AppText>
                        </View>
                        <AmountInfoIcon style={styles.infoIcon} />
                    </ImageBackground>
                </TouchableOpacity>
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
                    onPress={() => navigation.navigate("Overview")}
                />
                <RecordCard
                    amount={42500}
                    title="Transport"
                    style={styles.cardItem}
                    icon={TransportCategoryIcon}
                    description="26 transactions - 15% of income"
                    onPress={() => navigation.navigate("Overview")}
                />

                <View style={styles.recordCardHeader}>
                    <AppText variant="bold" styles={styles.cardTitle}>
                        Upcoming payments
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
                        onPress={() => navigation.navigate("Overview")}
                    />
                    <RecordCard
                        amount={3500}
                        title="Spotify"
                        icon={SpotifyLogo}
                        description="Jan 12"
                        style={styles.cardItem}
                        onPress={() => navigation.navigate("Overview")}
                    />
                </View>
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
                        icon={UberLogo}
                        title="Uber"
                        description="Jan 12"
                        amount={3500}
                        style={styles.cardItem}
                        onPress={() => navigation.navigate("Overview")}
                    />
                    <RecordCard
                        amount={3500}
                        title="Internet"
                        icon={ProductImage}
                        description="Jan 12"
                        style={styles.cardItem}
                        onPress={() => navigation.navigate("Overview")}
                    />
                </View>

                <View style={styles.recordCardHeader}>
                    <AppText variant="bold" styles={styles.cardTitle}>
                        New deals in your favourite categories
                    </AppText>
                </View>

                <View style={{ marginVertical: 10, paddingHorizontal: 20 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Image
                            style={styles.categoryItem}
                            source={require("../../../../assets/category-eating-out.png")}
                        />
                        <Image
                            style={styles.categoryItem}
                            source={require("../../../../assets/category-groceries.png")}
                        />
                        <Image
                            style={styles.categoryItem}
                            source={require("../../../../assets/category-bank-charges.png")}
                        />
                        <Image
                            style={styles.categoryItem}
                            source={require("../../../../assets/category-transfers.png")}
                        />
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
                        onPress={() => navigation.navigate("Overview")}
                    />
                    <RecordCard
                        amount={3500}
                        title="Spotify"
                        icon={SpotifyLogo}
                        description="Jan 12"
                        style={styles.cardItem}
                        onPress={() => navigation.navigate("Overview")}
                    />
                    <RecordCard
                        icon={UberLogo}
                        title="Uber"
                        description="Jan 12"
                        amount={3500}
                        style={styles.cardItem}
                        onPress={() => navigation.navigate("Overview")}
                    />
                    <RecordCard
                        amount={3500}
                        title="Internet"
                        icon={ProductImage}
                        description="Jan 12"
                        style={styles.cardItem}
                        onPress={() => navigation.navigate("Overview")}
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
        width: width / 2.5,
        height: width / 4,
    },
});
