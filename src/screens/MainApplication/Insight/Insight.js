import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from "react-native";
import { useToast } from "react-native-fast-toast";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../../theme";
import { moneyFormat } from "../../../utils/money.utils";
import { BrainIcon, PieChartIcon } from "../../../../assets/icons";
import { AppText, Button, ThreeColumnTab } from "../../../components";
import { GroceryCard, IncomeCard, TransportCard, TravelCard, ShoppingCard } from "./components";
import { EntertainmentCard } from "./components/EntertainmentCard";
import { EatingOutCard } from "./components/EatingOutCard";
import { HomeFamilyCard } from "./components/HomeFamilyCard";
import { HealthCard } from "./components/HealthCard";
import { CashCard } from "./components/CashCard";

export const Insight = ({ navigation }) => {
    const toast = useToast();
    const [enable, setEnable] = useState(true);
    const [selectedTab, setSelectedTab] = useState("Feed");

    const renderCard = item => {
        switch (item) {
            case "Groceries":
                return <GroceryCard />;

            case "Income":
                return <IncomeCard />;
            case "Transport":
                return <TransportCard />;
            case "Travel":
                return <TravelCard />;
            case "Shopping":
                return <ShoppingCard />;
            case "Entertainment":
                return <EntertainmentCard />;
            case "Eating out":
                return <EatingOutCard />;
            case "Home & Family":
                return <HomeFamilyCard />;
            case "Health":
                return <HealthCard />;
            case "Cash":
                return <CashCard />;

            default:
                return <GroceryCard />;
        }
    };

    const renderEmptyList = () => (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <View style={styles.noAccountView}>
                    <BrainIcon />

                    <AppText style={styles.noAccountTitle}>No insights</AppText>

                    <AppText style={styles.noAccountDescription}>
                        Link your bank accounts to enable Driplar analyze your spending habits and provide personalized
                        insights.
                    </AppText>
                </View>
                <Button label="Link bank accounts" onPress={() => setEnable(true)} />
            </View>
        </SafeAreaView>
    );

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
                renderItem={({ item }) => renderCard(item)}
                contentContainerStyle={{ paddingHorizontal: 20 }}
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
                    "Subscriptions",
                ]}
                columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 10 }}
            />
        );
    };

    const renderContent = () => {
        switch (selectedTab) {
            case "Feed":
                return renderFeeds();

            case "Categories":
                return renderCategories();
        }
    };

    if (!enable) {
        return renderEmptyList();
    }

    return (
        <SafeAreaView style={styles.container}>
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
    flatlistItem: {
        width: "48%",
        height: 100,
        padding: 20,
        backgroundColor: "#FFEAC4",
    },
});
