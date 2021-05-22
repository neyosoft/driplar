import React from "react";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

import theme from "../../theme";
import { AppText, Button } from "../../components";

export const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview}>
                <View style={styles.topIconView}>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Icon name="chevron-left" size={30} style={styles.backIcon} color={theme.colors.primary} />
                    </TouchableOpacity>
                </View>
                <AppText variant="medium" style={styles.pageTitle}>
                    Log in to Driplar
                </AppText>

                <TextInput
                    label="Email"
                    style={styles.formGroup}
                    underlineColor={theme.colors.purple}
                    theme={{ colors: { background: "#fff" } }}
                />
                <TextInput
                    label="Password"
                    secureTextEntry={true}
                    style={styles.formGroup}
                    underlineColor={theme.colors.purple}
                    right={<TextInput.Affix text="Show" />}
                    theme={{ colors: { background: "#fff" } }}
                />

                <View style={styles.forgetPasswordView}>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgetPassword")}>
                        <AppText variant="medium">Forget Password</AppText>
                    </TouchableOpacity>
                </View>

                <Button label="Log In" style={styles.button} onPress={() => navigation.navigate("PhoneNumberInput")} />

                <View style={styles.newAccountRow}>
                    <AppText>Don’t have an account?</AppText>

                    <Button
                        label="Sign up"
                        style={styles.signupBtn}
                        labelStyle={styles.signupLabelStyle}
                        onPress={() => navigation.navigate("EmailRegistration")}
                    />
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
        marginBottom: 50,
    },
    forgetPasswordView: {
        marginTop: 60,
        flexDirection: "row",
    },
    button: {
        marginTop: 30,
    },
    newAccountRow: {
        marginTop: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    signupBtn: {
        backgroundColor: "#EEEDF4",
    },
    signupLabelStyle: {
        color: theme.colors.text,
    },
});
