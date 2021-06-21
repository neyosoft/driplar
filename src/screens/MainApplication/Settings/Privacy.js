import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../../theme";
import { DriplarIcon } from "../../../../assets/icons/DriplarIcon.js";
import { AppText, Button } from "../../../components";

export const Privacy = ({ navigation }) => {
    return (
        <>
            <SafeAreaView edges={["top"]} style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Icon name="chevron-left" size={25} />
                    </TouchableOpacity>

                    <AppText variant="bold" style={styles.headerTitle}>
                        Privacy policy
                    </AppText>

                    <View style={styles.iconWrapper}>
                        <DriplarIcon />
                    </View>
                </View>

                <View style={styles.pageContent}>
                    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                        <AppText variant="medium" style={[styles.title, { marginTop: 0 }]}>
                            Our promise to you
                        </AppText>

                        <AppText style={styles.body}>
                            We created Driplar so everyone could have the chance to harness the data held by their Bank
                            and use it for their own advantage. We knew it could help so many people.
                        </AppText>
                        <AppText style={styles.body}>
                            But we know this means we have a big responsibility to do the right thing with the data we
                            hold ourselves.
                        </AppText>
                        <AppText style={styles.body}>
                            That’s why we never sell any of your personal information. And that’s why our number one
                            focus is always how we store, analyse and protect your personal data.
                        </AppText>
                        <AppText variant="medium" style={styles.title}>
                            So how do we actually use your data?
                        </AppText>
                        <AppText style={styles.body}>
                            Well, we use the data you share with us to spot super-smart suggestions we believe will help
                            you spend, save and live smarter. 
                        </AppText>
                        <AppText style={styles.body}>
                            Driplar’s algorithms on what to suggest aren’t programmed to take account of any payments we
                            might receive.
                        </AppText>
                        <AppText style={styles.body}>
                            We also pool data from all the different sources we have - after making it totally anonymous
                            - and use it to identify big trends in areas like consumer spending. We then use this to
                            help other businesses make better decisions. None of your personally identifiable
                            information is ever used for this. In fact, your personal data is never used in a way that
                            means you, any other individual or their data can be identified. 
                        </AppText>
                        <AppText style={styles.body}>
                            We believe our approach to privacy is nice and straightforward. We’ll always be 100% clear
                            with you on how we use your data to help you save time and money - and we’ll always be
                            completely upfront with you about how we make money as a business ourselves.
                        </AppText>

                        <Button label="Back to top" variant="secondary" style={styles.button} />
                    </ScrollView>
                </View>
            </SafeAreaView>
            <SafeAreaView style={{ backgroundColor: "#fff" }} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.purple,
    },
    header: {
        padding: 20,
        backgroundColor: theme.colors.purple,
    },
    headerTitle: {
        fontSize: 22,
        marginTop: 15,
    },
    iconWrapper: {
        width: 75,
        height: 75,
        bottom: 15,
        right: -10,
        borderRadius: 75,
        alignItems: "center",
        position: "absolute",
        justifyContent: "center",
        backgroundColor: theme.colors.white,
    },
    pageContent: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: theme.colors.white,
    },
    contentContainerStyle: {
        padding: 20,
        paddingTop: 0,
    },
    title: {
        marginTop: 20,
        fontSize: 16,
    },
    body: {
        marginTop: 10,
        lineHeight: 20,
    },
    button: {
        marginTop: 40,
    },
});
