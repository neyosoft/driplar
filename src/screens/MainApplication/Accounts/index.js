import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../../theme";
import { BankIcon } from "../../../../assets/icons";
import { AppText, Button } from "../../../components";
import { AccountCard } from "./components/AccountCard";

export const Accounts = () => {
    const [list, setList] = useState([]);

    const renderEmptyList = () => (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <View style={styles.noAccountView}>
                    <BankIcon />
                    <AppText style={styles.noAccountTitle}>No accounts</AppText>
                    <AppText style={styles.noAccountDescription}>
                        Link your bank accounts to enable Driplar see just how much you spend and help you optimize your
                        savings.
                    </AppText>
                </View>
                <Button
                    label="Link bank accounts"
                    onPress={() => {
                        setList([
                            {
                                name: "FCMB",
                                backgroundColor: "#D292FF",
                                icon: "Hello",
                            },
                            {
                                name: "Cowrywise",
                                backgroundColor: "#97C2FF",
                                icon: "Hello",
                            },
                            {
                                name: "GTBank",
                                backgroundColor: "#FFA775",
                                icon: "Hello",
                            },
                        ]);
                    }}
                />
            </View>
        </SafeAreaView>
    );

    if (list.length === 0) {
        return renderEmptyList();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <AppText variant="medium" style={styles.title}>
                        Accounts
                    </AppText>
                    <Icon name="plus" size={25} />
                </View>

                <FlatList
                    numColumns={2}
                    data={list}
                    renderItem={({ item }) => <AccountCard {...item} style={{ width: 170 }} />}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    content: {
        padding: 20,
    },
    header: {
        marginBottom: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
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
        marginTop: 30,
        color: theme.colors.primary,
    },
    noAccountDescription: {
        fontSize: 13,
        marginTop: 10,
        textAlign: "center",
        color: theme.colors.label,
        lineHeight: 20,
    },
});
