import React from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../theme";
import { AppText } from "../../components";

export const EmailRegistration = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview}>
                <View style={styles.topIconView}>
                    <TouchableOpacity>
                        <Icon name="chevron-left" size={30} style={styles.backIcon} color={theme.colors.primary} />
                    </TouchableOpacity>
                </View>
                <AppText variant="medium" style={styles.pageTitle}>
                    Create an account
                </AppText>

                <TextInput
                    label="Email"
                    style={styles.formGroup}
                    underlineColor={theme.colors.purple}
                    // backgroundColor="#F8F7F8"
                />
                <TextInput
                    label="Password"
                    style={styles.formGroup}
                    underlineColor={theme.colors.purple}
                    backgroundColor="#F8F7F8"
                />

                <AppText>By continuing, you agree to our terms of service and privacy policy. </AppText>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    scrollview: {
        padding: 20,
    },
    topIconView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: -7,
    },
    formGroup: {
        marginTop: 20,
    },
    pageTitle: {
        fontSize: 25,
        marginTop: 22,
        color: "#201E26",
        marginBottom: 30,
    },
});
