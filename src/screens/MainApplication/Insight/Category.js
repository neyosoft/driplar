import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../../theme";
import { moneyFormat } from "../../../utils/money.utils";
import { PieChartIcon, ShoppingCategoryIcon } from "../../../../assets/icons";
import { AppText, Button, ThreeColumnTab, TransactionListItem } from "../../../components";

import NetlifyLogo from "../../../../assets/NetlifyLogo.png";
import SpotifyLogo from "../../../../assets/SpotifyLogo.png";
import UberLogo from "../../../../assets/UberLogo.png";
import DealImage from "../../../../assets/Deal.png";
import ProductImage from "../../../../assets/ProductImageOne.png";

const { width } = Dimensions.get("window");

export const Category = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState("Insights");

    const renderInsight = () => (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <AppText variant="bold">Do you know...</AppText>
                    <TouchableOpacity>
                        <Icon name="dots-horizontal" size={25} />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <Image style={styles.cardItemImage} source={require("../../../../assets/UberLogo.png")} />
                    <AppText style={styles.cardItemDescription}>
                        You’ve spent <AppText variant="medium">{moneyFormat(39000)}</AppText> on{" "}
                        <AppText variant="medium">Uber</AppText> this month. This is{" "}
                        <AppText variant="medium">20%</AppText> more than you spend monthly.{" "}
                    </AppText>

                    <Button style={styles.cardBtn} variant="secondary" label="See spending history" />
                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <AppText variant="bold">Last month...</AppText>
                    <TouchableOpacity>
                        <Icon name="dots-horizontal" size={25} />
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                    <PieChartIcon />
                    <AppText style={styles.cardItemDescription}>
                        You saved more than you spent in Mar 2021. You’re on a{" "}
                        <AppText variant="medium">2-month</AppText> saving streak. You’ve spent 😁
                    </AppText>

                    <Button style={styles.cardBtn} variant="secondary" label="See spending history" />
                </View>
            </View>
        </ScrollView>
    );

    const renderTransactions = () => (
        <View style={styles.itemWrapper}>
            <TransactionListItem
                amount={2500}
                title="Netflix"
                icon={NetlifyLogo}
                description="April 7"
                style={styles.cardItem}
            />
            <TransactionListItem
                amount={3500}
                title="Spotify"
                icon={SpotifyLogo}
                description="Jan 12"
                style={styles.cardItem}
            />
            <TransactionListItem
                icon={UberLogo}
                title="Uber"
                description="Jan 12"
                amount={3500}
                style={styles.cardItem}
            />
            <TransactionListItem
                amount={3500}
                title="Internet"
                icon={ProductImage}
                description="Jan 12"
                style={styles.cardItem}
            />
        </View>
    );

    const renderDeals = () => {
        return (
            <>
                <View style={styles.dealCard}>
                    <Image source={DealImage} style={styles.dealImage} />
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                        <AppText>Elizabeth</AppText>
                        <TouchableOpacity>
                            <Icon name="dots-horizontal" size={25} />
                        </TouchableOpacity>
                    </View>
                    <AppText variant="medium" style={{ marginTop: 8, fontSize: 18 }}>
                        55% off in May
                    </AppText>
                    <AppText style={{ fontSize: 13, lineHeight: 20, marginTop: 10 }}>
                        What’s the point in overpaying for designer fashion when you can save hundreds of dollars? With
                        all the Zara coupons and Zara promo codes available...
                    </AppText>
                </View>
                <View style={styles.dealCard}>
                    <Image source={DealImage} style={styles.dealImage} />
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                        <AppText>Elizabeth</AppText>
                        <TouchableOpacity>
                            <Icon name="dots-horizontal" size={25} />
                        </TouchableOpacity>
                    </View>
                    <AppText variant="medium" style={{ marginTop: 8, fontSize: 18 }}>
                        55% off in May
                    </AppText>
                    <AppText style={{ fontSize: 13, lineHeight: 20, marginTop: 10 }}>
                        What’s the point in overpaying for designer fashion when you can save hundreds of dollars? With
                        all the Zara coupons and Zara promo codes available...
                    </AppText>
                </View>
                <View style={styles.dealCard}>
                    <Image source={DealImage} style={styles.dealImage} />
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}>
                        <AppText>Elizabeth</AppText>
                        <TouchableOpacity>
                            <Icon name="dots-horizontal" size={25} />
                        </TouchableOpacity>
                    </View>
                    <AppText variant="medium" style={{ marginTop: 8, fontSize: 18 }}>
                        55% off in May
                    </AppText>
                    <AppText style={{ fontSize: 13, lineHeight: 20, marginTop: 10 }}>
                        What’s the point in overpaying for designer fashion when you can save hundreds of dollars? With
                        all the Zara coupons and Zara promo codes available...
                    </AppText>
                </View>
            </>
        );
    };

    const renderContent = () => {
        switch (selectedTab) {
            case "Insights":
                return renderInsight();
            case "Transactions":
                return renderTransactions();
            case "Deals":
                return renderDeals();

            default:
                return renderInsight();
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
                        <Icon name="chevron-left" size={30} color={theme.colors.black} />
                    </TouchableOpacity>
                    <AppText variant="medium" style={styles.title}>
                        Shopping
                    </AppText>
                </View>
                <ShoppingCategoryIcon height={100} style={styles.headerImage} />
            </View>
            <View style={styles.content}>
                <View style={styles.dateSelectionView}>
                    <View style={[styles.monthBtn, styles.activeMonth]}>
                        <AppText variant="medium" style={[styles.monthBtnText, styles.monthBtnActiveText]}>
                            Aprl
                        </AppText>
                    </View>
                    <View style={styles.monthBtn}>
                        <AppText style={styles.monthBtnText}>May</AppText>
                    </View>
                    <View style={styles.monthBtn}>
                        <AppText style={styles.monthBtnText}>2021</AppText>
                    </View>
                    <View style={styles.monthBtn}>
                        <AppText style={styles.monthBtnText}>Custom</AppText>
                    </View>
                </View>

                <View style={{ marginTop: 20, marginHorizontal: 15 }}>
                    <AppText variant="medium" style={{ fontSize: 28 }}>
                        {moneyFormat(146390)}
                    </AppText>
                    <AppText style={{ color: theme.colors.label, fontSize: 13, marginTop: 5 }}>
                        Total spend - Apr 2021
                    </AppText>
                </View>

                <ThreeColumnTab
                    value={selectedTab}
                    style={styles.columnTab}
                    onChange={setSelectedTab}
                    options={["Insights", "Transactions", "Deals"]}
                />

                <ScrollView>{renderContent()}</ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFABCD",
    },
    header: {
        padding: 20,
        paddingRight: 0,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerImage: {
        position: "absolute",
        right: 3,
        bottom: 0,
    },
    columnTab: {
        marginTop: 30,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
        marginTop: 15,
        color: theme.colors.primary,
    },
    flatlist: {
        marginTop: 20,
    },
    noAccountView: {
        flex: 1,
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    noAccountTitle: {
        fontSize: 22,
        marginTop: 10,
        color: theme.colors.primary,
    },
    noAccountDescription: {
        fontSize: 13,
        marginTop: 10,
        textAlign: "center",
        color: theme.colors.label,
        lineHeight: 20,
    },
    card: {
        margin: 10,
        marginTop: 0,
        borderWidth: 0.5,
        borderColor: "#DCDBDB",
        borderRadius: theme.radius.sm,
    },
    cardHeader: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#FAFAFC",
        justifyContent: "space-between",
        borderTopLeftRadius: theme.radius.sm,
        borderTopRightRadius: theme.radius.sm,
    },
    cardContent: {
        padding: 10,
    },
    cardItemImage: {
        width: 80,
        height: 80,
    },
    cardItemDescription: {
        marginTop: 10,
        fontSize: 13,
        lineHeight: 20,
    },
    cardBtn: {
        marginTop: 20,
        marginBottom: 5,
        paddingVertical: 10,
    },
    content: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    dateSelectionView: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        justifyContent: "space-between",
    },
    monthBtn: {
        width: "23%",
        paddingVertical: 10,
        alignItems: "center",
        backgroundColor: "#F1F1F3",
        borderRadius: theme.radius.sm,
    },
    activeMonth: {
        backgroundColor: theme.colors.black,
    },
    monthBtnText: {
        color: theme.colors.placeholder,
    },
    monthBtnActiveText: {
        color: theme.colors.white,
    },
    itemWrapper: {
        borderWidth: 0.5,
        borderColor: "#DCDBDB",
        borderRadius: theme.radius.md,
        marginHorizontal: 10,
    },
    dealCard: {
        margin: 15,
        marginTop: 0,
    },
    dealImage: {
        width: "100%",
        height: width * 0.6,
    },
});
