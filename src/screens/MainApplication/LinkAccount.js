import React, { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SafeAreaView, View, StyleSheet, Image } from "react-native";

import theme from "../../theme";
import { AppText, Button } from "../../components";
import BankGridImage from "../../../assets/banks-grid.png";
import { LinkAccountIconOne, LinkAccountIconThree, LinkAccountIconTwo } from "../../../assets/icons";

export const LinkAccount = () => {
    const bottomSheetRef = useRef();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageView}>
                <Image source={BankGridImage} resizeMode="cover" style={styles.bankImages} />
            </View>
            <View style={styles.content}>
                <AppText variant="medium" style={styles.title}>
                    Link bank accounts
                </AppText>

                <View style={styles.rowItem}>
                    <LinkAccountIconOne />
                    <AppText style={styles.rowItemText}>
                        Connect your accounts for insights on how to save and optimize your spending.
                    </AppText>
                </View>
                <View style={styles.rowItem}>
                    <LinkAccountIconTwo />
                    <AppText style={styles.rowItemText}>
                        Driplar will only be able to see your balance and transactions.{" "}
                    </AppText>
                </View>
                <View style={styles.rowItem}>
                    <LinkAccountIconThree />

                    <AppText style={styles.rowItemText}>
                        Bank login details aren’t stored or seen. Connection with your bank is encrypted.
                    </AppText>
                </View>

                <Button style={styles.button} label="Link Account" onPress={() => bottomSheetRef.current.snapTo(1)} />

                <Button
                    label="Not now"
                    variant="secondary"
                    style={styles.notNowBtn}
                    labelStyle={styles.notNowBtnText}
                />
            </View>

            <BottomSheet ref={bottomSheetRef} index={1} snapPoints={[0, 600]}>
                <View style={styles.bottomContainer}>
                    <AppText variant="bold" style={styles.bottomSheetTitle}>
                        Link your account with inflow
                    </AppText>

                    <View>
                        <View style={styles.bottomSheetRowItem}>
                            <Icon name="lock" color="#fff" size={18} />
                            <View style={styles.bottomSheetRowItemRight}>
                                <AppText variant="medium" style={styles.bottomSheetRowItemTitle}>
                                    Secured
                                </AppText>
                                <AppText style={styles.bottomSheetRowItemDescription}>
                                    Your information is encrypted using bank grade security
                                </AppText>
                            </View>
                        </View>
                        <View style={styles.bottomSheetRowItem}>
                            <Icon name="eye-off" color="#fff" size={18} />
                            <View style={styles.bottomSheetRowItemRight}>
                                <AppText variant="medium" style={styles.bottomSheetRowItemTitle}>
                                    Private
                                </AppText>
                                <AppText style={styles.bottomSheetRowItemDescription}>
                                    Your credentials will never be made accessible to inflow.
                                </AppText>
                            </View>
                        </View>
                        <View style={styles.bottomSheetRowItem}>
                            <Icon name="shield" color="#fff" size={18} />
                            <View style={styles.bottomSheetRowItemRight}>
                                <AppText variant="medium" style={styles.bottomSheetRowItemTitle}>
                                    Protected
                                </AppText>
                                <AppText style={styles.bottomSheetRowItemDescription}>
                                    Inflow and Mono doesn't have access to move your funds.
                                </AppText>
                            </View>
                        </View>
                    </View>

                    <AppText style={styles.terms}>By clicking the button below you agree to Driplar T&C</AppText>

                    <Button label="Click to Continue" style={styles.termsBtn} labelStyle={styles.termsBtnLabel} />
                </View>
            </BottomSheet>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    imageView: {
        height: "35%",
    },
    bankImages: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    content: {
        flex: 2,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginTop: 20,
    },
    rowItem: {
        marginTop: 25,
        alignItems: "center",
        flexDirection: "row",
    },
    rowItemText: {
        flex: 1,
        fontSize: 13,
        lineHeight: 20,
        marginLeft: 15,
    },
    button: {
        marginTop: 40,
    },
    notNowBtn: {
        marginTop: 10,
        backgroundColor: "#EEEDF4",
    },
    notNowBtnText: {
        color: theme.colors.text,
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: "#0066F5",
        padding: 25,
    },
    bottomSheetTitle: {
        color: theme.colors.white,
        fontSize: 25,
        marginTop: 20,
        width: 250,
        lineHeight: 40,
    },
    bottomSheetRowItem: {
        flexDirection: "row",
        marginTop: 20,
    },
    bottomSheetRowItemRight: {
        flex: 1,
        marginLeft: 10,
    },
    bottomSheetRowItemTitle: {
        color: theme.colors.white,
        fontSize: 18,
    },
    bottomSheetRowItemDescription: {
        marginTop: 5,
        lineHeight: 20,
        fontSize: 13,
        color: theme.colors.white,
    },
    terms: {
        marginTop: 40,
        lineHeight: 20,
        color: theme.colors.white,
    },
    termsBtn: {
        marginTop: 20,
        backgroundColor: theme.colors.white,
    },
    termsBtnLabel: {
        fontWeight: "800",
        fontSize: 17,
        color: theme.colors.text,
    },
});
