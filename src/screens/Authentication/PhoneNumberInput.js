import React from "react";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

import theme from "../../theme";
import { AppText, Button } from "../../components";

export const PhoneNumberInput = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview}>
                <View style={styles.topIconView}>
                    <TouchableOpacity>
                        {/* <Icon name="chevron-left" size={30} style={styles.backIcon} color={theme.colors.primary} /> */}
                    </TouchableOpacity>
                </View>
                <AppText variant="medium" style={styles.pageTitle}>
                    Enter your phone number
                </AppText>

                <View style={styles.form}>
                    <TextInput
                        label="First name"
                        underlineColor={theme.colors.purple}
                        theme={{ colors: { background: "#fff" } }}
                    />
                </View>

                <AppText style={styles.note}>
                    By continuing, you will receive an SMS to verify your phone number.
                </AppText>

                <Button label="Next" style={styles.button} />
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
        marginLeft: -7,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    formGroup: {
        marginTop: 20,
    },
    pageTitle: {
        fontSize: 25,
        marginTop: 22,
        color: "#201E26",
    },
    form: {
        marginVertical: 50,
        marginBottom: 150,
    },
    note: {
        lineHeight: 20,
        color: theme.colors.label,
    },
    button: {
        marginTop: 20,
    },
});
