import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../../theme";
import { DriplarIcon } from "../../../../assets/icons/DriplarIcon.js";
import { AppText, Button } from "../../../components";

export const TermsOfService = ({ navigation }) => {
    return (
        <>
            <SafeAreaView edges={["top"]} style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <Icon name="chevron-left" size={25} />
                    </TouchableOpacity>

                    <AppText variant="bold" style={styles.headerTitle}>
                        Terms of Service
                    </AppText>

                    <View style={styles.iconWrapper}>
                        <DriplarIcon />
                    </View>
                </View>

                <View style={styles.pageContent}>
                    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                        <AppText variant="medium" style={[styles.title, { marginTop: 0 }]}>
                            Introduction
                        </AppText>

                        <AppText style={styles.body}>
                            These terms and conditions ('Terms') apply to your use of our mobile application ('App') and
                            our services described below and form part of the agreement between you and Driplar Limited
                            ('Driplar', 'we', 'us').
                        </AppText>
                        <AppText style={styles.body}>
                            By using the Driplar app you agree to these Terms. You should read these Terms carefully
                            along with our Privacy and Cookie Policy, and only use our service if you are over 16 and
                            you agree to them.
                        </AppText>
                        <AppText style={styles.body}>
                            These Terms have no fixed or minimum duration. They will apply until either you or we end
                            this agreement (see 'Your right to cancel and end this agreement' and 'Our right to suspend,
                            restrict or end this agreement')
                        </AppText>

                        <AppText variant="medium" style={styles.title}>
                            What is Driplar?
                        </AppText>

                        <AppText style={styles.body}>
                            Driplar is a friend of your money that will do three key things for you:
                        </AppText>
                        <AppText style={styles.body}>
                            Driplar organises your finances so you can see all your different online bank accounts,
                            savings accounts and credit cards in our App, meaning you can always see where you are with
                            your money. We do this by using technology to communicate with your third-party bank account
                            providers in a secure way.
                        </AppText>
                        <AppText style={styles.body}>
                            Driplar automatically checks how much you are being charged for things by the banks and big
                            businesses you deal with. If Driplar thinks you're being taken advantage of, you're
                            overpaying for something, or it thinks there's something you should know that will benefit
                            you, Driplar will send an alert to tell you. We call these ‘Insights’. ‘Insights’ may be
                            sourced from Driplar itself, third parties or other Driplar customers (see ‘Submitting an
                            insight).
                        </AppText>
                        <AppText style={styles.body}>
                            Driplar scours the web, looking for super-smart ideas that it thinks could save you money,
                            or help you more generally. Driplar will create a personalised list of these ideas just for
                            you and communicate it to you.
                        </AppText>
                        <AppText style={styles.body}>
                            If Driplar finds any ideas that it thinks are particularly important, Driplar will send an
                            alert to tell you. We are constantly developing and improving the Driplar App, so we will
                            also tell you about new features of Driplar that we’ve launched that you might not be aware
                            of, as well as telling you about features of Driplar that we can see you've not used. We
                            recognise everyone will want something different from Driplar – so that’s why Driplar has
                            been built to learn from each user, so we can provide you with a customised experience that
                            will be the most help for you.
                        </AppText>

                        <AppText style={styles.body}>
                            How does Driplar do it? Through the secure processing of your personal data. Without access
                            to your personal data, and the right to process it as required, Driplar cannot perform the
                            function for you that it has been designed for. Your privacy and security are our number one
                            priority, and your data is always protected by bank-level security. Please see our Privacy
                            and Cookie Policy for details of how and on what basis we collect information about you, and
                            the ways in which you and your data are protected. Driplar isn’t endorsed or sponsored by
                            the providers of your personal accounts. As part of the service, Driplar may provide
                            content, website links and offers from third parties.
                        </AppText>

                        <AppText style={styles.body}>
                            We will do our best to check accuracy, but we aren’t responsible for the products and
                            services provided to you by these third parties – these fall under the terms and conditions
                            of the third party themselves. What does Driplar cost? Driplar is free to use. There is no
                            subscription charge or price that you are required to pay, unless you choose to do so. But
                            so we can keep going as a business we may receive payments if you choose to use or purchase
                            third party products and services we promote.
                        </AppText>

                        <AppText style={styles.body}>
                            The suggestions that Driplar makes are not driven by whether we receive a payment or not -
                            we don't compromise ourselves in that way, we always look for the best fit and service for
                            the users of Driplar. As you would expect, these Terms only cover the services provided by
                            us. They don't deal with taxes or costs that might be charged by third parties that you need
                            to pay in order to receive our services – for example costs charged by your…
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
