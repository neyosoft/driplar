import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../../theme";
import { PieChartIcon } from "../../../../assets/icons";
import { moneyFormat } from "../../../utils/money.utils";
import { AppText, Button, ThreeColumnTab } from "../../../components";
import { GroceryCard, IncomeCard, TransportCard, TravelCard, ShoppingCard } from "./components";
import { EntertainmentCard } from "./components/EntertainmentCard";
import { EatingOutCard } from "./components/EatingOutCard";
import { HomeFamilyCard } from "./components/HomeFamilyCard";
import { HealthCard } from "./components/HealthCard";
import { CashCard } from "./components/CashCard";
import { SavingsCard } from "./components/SavingsCard";
import { InvestmentCard } from "./components/InvestmentCard";
import { TransferCard } from "./components/TransferCard";
import { CharityCard } from "./components/CharityCard";
import { BankChargesCard } from "./components/BankChargesCard";
import { MiscellaneousCard } from "./components/MiscellaneousCard";
import { SubscriptionsCard } from "./components/SubscriptionsCard";
import { UncategorizedCard } from "./components/UncategorizedCard";

import { FcmbCard, GTBankCard, CowrywiseCard } from "../Accounts/components";

export const Insight = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState("Feed");

    const renderCategoryCard = item => {
        switch (item) {
            case "Groceries":
                return <GroceryCard onPress={() => navigation.navigate("Category")} />;
            case "Income":
                return <IncomeCard onPress={() => navigation.navigate("Category")} />;
            case "Transport":
                return <TransportCard onPress={() => navigation.navigate("Category")} />;
            case "Travel":
                return <TravelCard onPress={() => navigation.navigate("Category")} />;
            case "Shopping":
                return <ShoppingCard onPress={() => navigation.navigate("Category")} />;
            case "Entertainment":
                return <EntertainmentCard onPress={() => navigation.navigate("Category")} />;
            case "Eating out":
                return <EatingOutCard onPress={() => navigation.navigate("Category")} />;
            case "Home & Family":
                return <HomeFamilyCard onPress={() => navigation.navigate("Category")} />;
            case "Health":
                return <HealthCard onPress={() => navigation.navigate("Category")} />;
            case "Cash":
                return <CashCard onPress={() => navigation.navigate("Category")} />;
            case "Savings":
                return <SavingsCard onPress={() => navigation.navigate("Category")} />;
            case "Investments":
                return <InvestmentCard onPress={() => navigation.navigate("Category")} />;
            case "Transfers":
                return <TransferCard onPress={() => navigation.navigate("Category")} />;
            case "Charity":
                return <CharityCard onPress={() => navigation.navigate("Category")} />;
            case "Bank charges":
                return <BankChargesCard onPress={() => navigation.navigate("Category")} />;
            case "Miscellaneous":
                return <MiscellaneousCard onPress={() => navigation.navigate("Category")} />;
            case "Subscriptions":
                return <SubscriptionsCard onPress={() => navigation.navigate("Subscription")} />;
            case "Uncategorized":
                return <UncategorizedCard onPress={() => navigation.navigate("Uncategorized")} />;

            default:
                return <GroceryCard onPress={() => navigation.navigate("Category")} />;
        }
    };

    const renderMerchantCard = merchant => {
        switch (merchant) {
            case "FCMB":
                return (
                    <FcmbCard
                        onLongPress={() => {
                            setSelectedBank("FCMB");
                            bottomSheetRef.current.expand();
                        }}
                        onPress={() => navigation.navigate("MerchantInformation")}
                    />
                );
            case "GTBank":
                return (
                    <GTBankCard
                        onLongPress={() => {
                            setSelectedBank("GTBank");
                            bottomSheetRef.current.expand();
                        }}
                        onPress={() => navigation.navigate("MerchantInformation")}
                    />
                );
            case "Cowrywise":
                return (
                    <CowrywiseCard
                        onLongPress={() => {
                            setSelectedBank("Cowrywise");
                            bottomSheetRef.current.expand();
                        }}
                        onPress={() => navigation.navigate("MerchantInformation")}
                    />
                );
        }
    };

    const renderFeeds = () => (
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

    const renderCategories = () => {
        return (
            <FlatList
                numColumns={2}
                style={{ marginBottom: 5 }}
                renderItem={({ item }) => renderCategoryCard(item)}
                contentContainerStyle={{ paddingHorizontal: 20 }}
                keyExtractor={item => item}
                data={[
                    "Groceries",
                    "Income",
                    "Transport",
                    "Travel",
                    "Shopping",
                    "Entertainment",
                    "Eating out",
                    "Health",
                    "Cash",
                    "Home & Family",
                    "Savings",
                    "Investments",
                    "Transfers",
                    "Charity",
                    "Bank charges",
                    "Miscellaneous",
                    "Subscriptions",
                    "Uncategorized",
                ]}
                columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 10 }}
            />
        );
    };

    const renderMerchants = () => (
        <FlatList
            numColumns={2}
            contentContainerStyle={{ paddingHorizontal: 20 }}
            data={["FCMB", "GTBank", "Cowrywise"]}
            keyExtractor={(_, index) => `index-${index}`}
            renderItem={({ item }) => renderMerchantCard(item)}
            columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 10 }}
        />
    );

    const renderContent = () => {
        switch (selectedTab) {
            case "Feed":
                return renderFeeds();
            case "Categories":
                return renderCategories();
            case "Merchants":
                return renderMerchants();
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <View style={styles.header}>
                <AppText variant="medium" style={styles.title}>
                    Insight
                </AppText>
                <Icon name="magnify" size={25} />
            </View>

            <ThreeColumnTab
                value={selectedTab}
                style={styles.columnTab}
                onChange={setSelectedTab}
                options={["Feed", "Categories", "Merchants"]}
            />

            {renderContent()}
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
        marginBottom: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    columnTab: {
        marginBottom: 10,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 22,
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
    flatlistItem: {
        width: "48%",
        height: 100,
        padding: 20,
        backgroundColor: "#FFEAC4",
    },
});
