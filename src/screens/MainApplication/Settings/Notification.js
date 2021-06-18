import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Switch, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../../theme";
import { AppText } from "../../../components";

export const Notification = ({ navigation }) => {
    const [balanceAlert, setBalanceAlert] = useState(true);
    const [monthlyInsight, setMonthlyInsight] = useState(true);
    const [watchlist, setWatchlist] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Icon name="chevron-left" size={25} />
                </TouchableOpacity>

                <AppText variant="bold" style={styles.headerTitle}>
                    Notification
                </AppText>
            </View>

            <ScrollView>
                <View style={styles.pageContent}>
                    <RectButton style={styles.rowItem}>
                        <View style={{ flex: 1 }}>
                            <AppText variant="medium" style={styles.topLabel}>
                                Balance alerts
                            </AppText>
                            <AppText style={styles.bottomLabel}>Alerts on noteworthy balance amounts</AppText>
                        </View>
                        <Switch
                            thumbColor="#fff"
                            value={balanceAlert}
                            ios_backgroundColor="#DCDBDB"
                            trackColor={{ false: "#DCDBDB", true: "#201E26" }}
                            onValueChange={() => setBalanceAlert(!balanceAlert)}
                        />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <View style={{ flex: 1 }}>
                            <AppText variant="medium" style={styles.topLabel}>
                                Monthly insights
                            </AppText>
                            <AppText style={styles.bottomLabel}>A monthly summary of your spending insights</AppText>
                        </View>
                        <Switch
                            thumbColor="#fff"
                            value={monthlyInsight}
                            ios_backgroundColor="#DCDBDB"
                            trackColor={{ false: "#DCDBDB", true: "#201E26" }}
                            onValueChange={() => setMonthlyInsight(!monthlyInsight)}
                        />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <View style={{ flex: 1 }}>
                            <AppText variant="medium" style={styles.topLabel}>
                                Spending watchlist
                            </AppText>
                            <AppText style={styles.bottomLabel}>Alerts on spendings to keep an eye on</AppText>
                        </View>
                        <Switch
                            value={watchlist}
                            thumbColor="#fff"
                            ios_backgroundColor="#DCDBDB"
                            onValueChange={() => setWatchlist(!watchlist)}
                            trackColor={{ false: "#DCDBDB", true: "#201E26" }}
                        />
                    </RectButton>
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
        padding: 20,
    },
    headerTitle: {
        fontSize: 22,
        marginTop: 15,
    },
    pageContent: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    rowItem: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        justifyContent: "space-between",
        borderBottomColor: theme.colors.line,
    },
    topLabel: {
        color: theme.colors.primary,
    },
    bottomLabel: {
        marginTop: 7,
        fontSize: 12,
        color: theme.colors.placeholder,
    },
});
