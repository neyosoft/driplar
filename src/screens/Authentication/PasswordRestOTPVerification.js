import React, { useState } from "react";
import CountryPicker, { CountryModalProvider } from "react-native-country-picker-modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from "react-native";

import theme from "../../theme";
import { AppText, Button } from "../../components";

export const PasswordRestOTPVerification = ({ navigation }) => {
    const [country, setCountry] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <CountryModalProvider>
                <ScrollView contentContainerStyle={styles.scrollview}>
                    <View style={styles.topIconView}>
                        <TouchableOpacity onPress={navigation.goBack}>
                            <Icon name="chevron-left" size={30} style={styles.backIcon} color={theme.colors.primary} />
                        </TouchableOpacity>
                    </View>
                    <AppText variant="medium" style={styles.pageTitle}>
                        Enter the 5-digit code we sent
                    </AppText>

                    <View style={styles.form}>
                        <View style={styles.phoneInputView}>
                            <AppText style={styles.phoneLabel}>Phone number</AppText>
                            <View style={styles.inputRow}>
                                <CountryPicker
                                    withFlag={true}
                                    withFilter={true}
                                    onSelect={setCountry}
                                    preferredCountries={["NG"]}
                                    countryCode={country ? country.cca2 : "NG"}
                                />
                                <Icon
                                    name="menu-down"
                                    size={25}
                                    color="#8B8B8D"
                                    style={{ marginLeft: -10, marginRight: 5 }}
                                />
                                <TextInput
                                    placeholder="0809 876 4678"
                                    style={{ flex: 1, fontSize: 18, fontFamily: "Metropolis-Medium" }}
                                />
                            </View>
                        </View>
                    </View>
                    <AppText variant="medium" style={styles.emailOption}>
                        Resend code
                    </AppText>

                    <Button label="Next" style={styles.button} onPress={() => navigation.navigate("ChangePassword")} />
                </ScrollView>
            </CountryModalProvider>
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
        marginBottom: 150,
        marginVertical: 50,
    },
    phoneInputView: {
        padding: 10,
        paddingBottom: 3,
        backgroundColor: "#F8F7F8",
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    phoneLabel: {
        fontSize: 13,
        color: theme.colors.placeholder,
    },
    emailOption: {
        marginTop: 20,
        fontSize: 13,
        color: theme.colors.label,
    },
    button: {
        marginTop: 20,
    },
});
