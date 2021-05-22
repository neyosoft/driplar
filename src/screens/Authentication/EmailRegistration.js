import React from "react";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

import theme from "../../theme";
import { AppText, Button } from "../../components";

export const EmailRegistration = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview}>
                <View style={styles.topIconView}>
                    <TouchableOpacity onPress={navigation.goBack}>
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

                <AppText style={styles.description}>
                    By continuing, you agree to our <AppText variant="medium">terms of service</AppText> and
                    <AppText variant="medium"> privacy policy</AppText>.
                </AppText>

                <Button label="Next" style={{ marginTop: 20 }} onPress={() => navigation.navigate("NameInput")} />

                <View style={styles.existingAccountView}>
                    <AppText>Already signed up?</AppText>

                    <Button
                        label="Log In"
                        style={styles.loginBtn}
                        labelStyle={styles.loginLabelStyle}
                        onPress={() => navigation.navigate("Login")}
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
    description: {
        lineHeight: 20,
        marginTop: 60,
        fontSize: 13,
    },
    existingAccountView: {
        marginTop: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    loginBtn: {
        backgroundColor: "#EEEDF4",
    },
    loginLabelStyle: {
        color: theme.colors.text,
    },
});
