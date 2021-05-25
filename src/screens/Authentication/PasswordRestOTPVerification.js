import React, { useState } from "react";
import CountryPicker, { CountryModalProvider } from "react-native-country-picker-modal";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

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
                        <OTPInputView
                            pinCount={6}
                            editable={true}
                            style={{ height: 100 }}
                            autoFocusOnLoad={true}
                            keyboardType="phone-pad"
                            codeInputFieldStyle={styles.codeInputStyle}
                            codeInputHighlightStyle={styles.codeInputStyle}
                            onCodeFilled={code => console.log("The code is: ", code)}
                        />
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
    codeInputStyle: {
        color: "#000",
        fontSize: 20,
        backgroundColor: "#F8F7F8",
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
