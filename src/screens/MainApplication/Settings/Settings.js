import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RectButton } from "react-native-gesture-handler";

import { AppText, Button } from "../../../components";
import theme from "../../../theme";

export const Settings = ({ navigation }) => {
    return (
        <SafeAreaView edges={["top"]} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Icon name="close" size={25} />
                </TouchableOpacity>

                <AppText variant="bold" style={styles.headerTitle}>
                    Settings
                </AppText>
            </View>
            <View style={styles.pageContent}>
                <RectButton style={styles.rowItem} onPress={() => navigation.navigate("EditProfile")}>
                    <View style={styles.profilebox}>
                        <Image source={require("../../../../assets/avatar.png")} style={styles.avatar} />
                        <AppText variant="medium" style={styles.profileName}>
                            Obagunwa Emmanuel Adeniyi
                        </AppText>
                    </View>
                    <Icon name="chevron-right" color="#B1AEB8" size={25} />
                </RectButton>
                <RectButton style={styles.rowItem} onPress={() => navigation.navigate("Notification")}>
                    <AppText variant="medium">Notifications</AppText>
                    <Icon name="chevron-right" color="#B1AEB8" size={25} />
                </RectButton>
                <RectButton style={styles.rowItem}>
                    <AppText variant="medium">Loving Driplar? Rate us</AppText>
                    <Icon name="chevron-right" color="#B1AEB8" size={25} />
                </RectButton>
                <RectButton style={styles.rowItem}>
                    <AppText variant="medium">Send us your suggestions</AppText>
                    <Icon name="chevron-right" color="#B1AEB8" size={25} />
                </RectButton>
                <RectButton style={styles.rowItem} onPress={() => navigation.navigate("Help")}>
                    <AppText variant="medium">Help</AppText>
                    <Icon name="chevron-right" color="#B1AEB8" size={25} />
                </RectButton>
                <RectButton style={styles.rowItem}>
                    <AppText variant="medium">Terms of service</AppText>
                    <Icon name="chevron-right" color="#B1AEB8" size={25} />
                </RectButton>
                <RectButton style={styles.rowItem}>
                    <AppText variant="medium">Privacy policy</AppText>
                    <Icon name="chevron-right" color="#B1AEB8" size={25} />
                </RectButton>

                <Button label="Sign out" variant="secondary" style={styles.button} />
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
    headerTitle: {
        fontSize: 22,
        marginTop: 15,
    },
    pageContent: {
        flex: 1,
        backgroundColor: "#FAFAFA",
    },
    rowItem: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        justifyContent: "space-between",
        borderBottomColor: theme.colors.line,
    },
    profilebox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    profileName: {
        flex: 1,
        fontSize: 18,
        lineHeight: 22,
        marginHorizontal: 5,
    },
    button: {
        marginTop: 30,
        marginHorizontal: 20,
    },
});
