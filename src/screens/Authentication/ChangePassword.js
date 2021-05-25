import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native";

import theme from "../../theme";
import { AppText, Button } from "../../components";

export const ChangePassword = ({ navigation }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollview}>
                <View style={styles.topIconView}>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Icon name="chevron-left" size={30} style={styles.backIcon} color={theme.colors.primary} />
                    </TouchableOpacity>
                </View>
                <AppText variant="medium" style={styles.pageTitle}>
                    Change your password
                </AppText>

                <TextInput
                    label="New Password"
                    secureTextEntry={true}
                    style={styles.formGroup}
                    placeholder="Enter new password"
                    underlineColor={theme.colors.purple}
                    theme={{ colors: { background: "#fff" } }}
                    right={
                        <TextInput.Icon
                            style={{ marginLeft: 5 }}
                            color={theme.colors.label}
                            name={showPassword ? "eye" : "eye-off"}
                            onPress={() => setShowPassword(status => !status)}
                        />
                    }
                />

                <TextInput
                    secureTextEntry={true}
                    label="Confirm Password"
                    style={styles.formGroup}
                    placeholder="Confirm new password"
                    underlineColor={theme.colors.purple}
                    right={
                        <TextInput.Icon
                            style={{ marginLeft: 5 }}
                            color={theme.colors.label}
                            name={showConfirmPassword ? "eye" : "eye-off"}
                            onPress={() => setShowConfirmPassword(status => !status)}
                        />
                    }
                    theme={{ colors: { background: "#fff" } }}
                />

                <Button label="Confirm" style={styles.button} onPress={() => navigation.navigate("ChangePassword")} />
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
    button: {
        marginTop: 30,
    },
});
