import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, TextInput as AppTextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TextInput } from "react-native-paper";

import theme from "../../../theme";
import { AppText, TwoColumnTab, Button } from "../../../components";

export const Help = ({ navigation }) => {
    const [currentTab, setCurrentTab] = useState("FAQs");

    const renderContent = () => {
        if (currentTab === "FAQs") {
            return (
                <View>
                    <RectButton style={styles.rowItem}>
                        <AppText variant="medium" style={styles.topLabel}>
                            What is Driplar?
                        </AppText>
                        <Icon name="plus" color="#B1AEB8" size={15} />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <AppText variant="medium" style={styles.topLabel}>
                            Is my banking account safe?
                        </AppText>
                        <Icon name="plus" color="#B1AEB8" size={15} />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <AppText variant="medium" style={styles.topLabel}>
                            How does Driplar work?
                        </AppText>
                        <Icon name="plus" color="#B1AEB8" size={15} />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <AppText variant="medium" style={styles.topLabel}>
                            How is my data used?
                        </AppText>
                        <Icon name="plus" color="#B1AEB8" size={15} />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <AppText variant="medium" style={styles.topLabel}>
                            Can Driplar process transactions?
                        </AppText>
                        <Icon name="plus" color="#B1AEB8" size={15} />
                    </RectButton>
                </View>
            );
        } else {
            return (
                <View style={styles.form}>
                    <TextInput
                        label="First name"
                        style={styles.formGroup}
                        underlineColor={theme.colors.purple}
                        theme={{ colors: { background: "#fff" } }}
                    />
                    <TextInput
                        label="Email"
                        style={styles.formGroup}
                        underlineColor={theme.colors.purple}
                        theme={{ colors: { background: "#fff" } }}
                    />

                    <AppTextInput
                        multiline={true}
                        style={styles.formTextarea}
                        placeholder="Send us your questions, feedback or suggestions."
                    />

                    <View style={styles.addImageBox}>
                        <Icon name="plus" size={20} color={theme.colors.label} />
                    </View>

                    <Button label="Submit" style={styles.formBtn} />
                </View>
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Icon name="chevron-left" size={25} />
                </TouchableOpacity>

                <AppText variant="bold" style={styles.headerTitle}>
                    Help
                </AppText>
            </View>

            <ScrollView>
                <View style={styles.pageContent}>
                    <TwoColumnTab
                        value={currentTab}
                        style={styles.tabs}
                        onChange={setCurrentTab}
                        options={["FAQs", "Contact us"]}
                    />
                    {renderContent()}
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

    tabs: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
    form: {
        marginHorizontal: 20,
    },
    formGroup: {
        marginTop: 20,
    },
    formTextarea: {
        padding: 10,
        height: 200,
        marginTop: 20,
        backgroundColor: "#F8F7F8",
    },
    formBtn: {
        marginTop: 30,
    },
    addImageBox: {
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F0F0F0",
    },
});
