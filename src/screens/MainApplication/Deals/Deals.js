import ActionSheet from "react-native-actionsheet";
import React, { useState, useRef, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

import theme from "../../../theme";
import MtnDeal from "../../../../assets/Mtn.png";
import DealImage from "../../../../assets/Deal.png";
import { AppText, Button } from "../../../components";
import { ScrollView } from "react-native-gesture-handler";
import { MtnLogo } from "../../../../assets/icons/MtnLogo";
import { LabelIcon } from "../../../../assets/icons/LabelIcon";

export const Deals = ({ navigation }) => {
    const bottomSheetRef = useRef(null);

    const actionSheet = useRef(null);
    const snapPoints = useMemo(() => [0, "40%"], []);

    const [enabled, setEnabled] = useState(false);

    const renderEmptyList = () => (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
                <View style={styles.noAccountView}>
                    <LabelIcon />
                    <AppText style={styles.noAccountTitle}>No deals at this time</AppText>
                    <AppText style={styles.noAccountDescription}>
                        We constantly search for the best deals that can help you save on your spending.
                    </AppText>
                </View>
                <Button label="Link bank accounts" onPress={() => setEnabled(true)} />
            </View>
        </SafeAreaView>
    );

    if (!enabled) {
        return renderEmptyList();
    }

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <AppText variant="medium" style={styles.title}>
                        Deals
                    </AppText>
                    <Icon name="magnify" size={25} />
                </View>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={[styles.labelBtn, styles.activeLabelBtn]}>
                        <AppText variant="medium" style={styles.activeLabelText}>
                            Latest
                        </AppText>
                    </View>
                    <View style={styles.labelBtn}>
                        <AppText variant="medium">Saved</AppText>
                    </View>
                    <View style={styles.labelBtn}>
                        <AppText variant="medium">Shopping</AppText>
                    </View>
                    <View style={styles.labelBtn}>
                        <AppText variant="medium">Transport</AppText>
                    </View>
                    <View style={styles.labelBtn}>
                        <AppText variant="medium">Entertainment</AppText>
                    </View>
                </ScrollView>
            </View>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
                <View style={styles.dealCard}>
                    <Image source={MtnDeal} style={styles.dealImageStyle} />
                    <View style={styles.dealHeader}>
                        <View style={{ flexDirection: "row" }}>
                            <MtnLogo />
                            <AppText style={{ marginLeft: 5 }}>MTN</AppText>
                        </View>

                        <TouchableOpacity onPress={() => actionSheet.current?.show()}>
                            <Icon name="dots-horizontal" size={25} />
                        </TouchableOpacity>
                    </View>
                    <AppText variant="medium" style={styles.dealTitle}>
                        Welcome Back Offer
                    </AppText>
                    <AppText style={styles.dealDescription}>
                        Welcome Back Offer is an offer that rewards customers that spent at least 60 days on the MTN
                        network and have not performed any chargeable activity in the last...
                    </AppText>
                </View>
                <View style={styles.dealCard}>
                    <Image source={DealImage} style={styles.dealImageStyle} />
                    <View style={styles.dealHeader}>
                        <View style={{ flexDirection: "row" }}>
                            <AppText style={{ marginLeft: 5 }}>Shopping</AppText>
                        </View>

                        <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
                            <Icon name="dots-horizontal" size={25} />
                        </TouchableOpacity>
                    </View>
                    <AppText variant="medium" style={styles.dealTitle}>
                        A Guide to Paris’s Best Independent Shops and Businesses
                    </AppText>
                    <AppText style={styles.dealDescription}>
                        Physical space is often conceived in three linear dimensions, although modern physicists usually
                        consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime.
                    </AppText>
                </View>
                <View style={styles.dealCard}>
                    <Image source={MtnDeal} style={styles.dealImageStyle} />
                    <View style={styles.dealHeader}>
                        <View style={{ flexDirection: "row" }}>
                            <MtnLogo />
                            <AppText style={{ marginLeft: 5 }}>MTN</AppText>
                        </View>

                        <TouchableOpacity onPress={() => actionSheet.current?.show()}>
                            <Icon name="dots-horizontal" size={25} />
                        </TouchableOpacity>
                    </View>
                    <AppText variant="medium" style={styles.dealTitle}>
                        Welcome Back Offer
                    </AppText>
                    <AppText style={styles.dealDescription}>
                        Welcome Back Offer is an offer that rewards customers that spent at least 60 days on the MTN
                        network and have not performed any chargeable activity in the last...
                    </AppText>
                </View>
            </ScrollView>

            <ActionSheet
                ref={actionSheet}
                styles={{
                    messageText: {
                        fontSize: 14,
                        backgroundColor: "red",
                    },
                    buttonText: {
                        fontSize: 15,
                        color: "black",
                    },
                }}
                options={["Share", "Save for later", "Not interested in this deal", "Not interested in MTN", "Cancel"]}
                cancelButtonIndex={4}
                onPress={index => {
                    console.log("Clicked on some index: ", index);
                }}
            />

            <BottomSheet backdropComponent={BackdropComponent} ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
                <View style={{ backgroundColor: "red", flex: 1 }}>
                    <View>
                        <View>
                            <AppText>Share</AppText>
                        </View>
                    </View>
                </View>
            </BottomSheet>
        </SafeAreaView>
    );
};

BackdropComponent = props => <BottomSheetBackdrop opacity={0.7} {...props} />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    header: {
        marginBottom: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    content: {
        padding: 20,
        paddingBottom: 10,
    },
    title: {
        fontSize: 22,
    },
    flatlist: {
        marginTop: 20,
    },
    noAccountView: {
        flex: 1,
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    noAccountTitle: {
        fontSize: 22,
        marginTop: 30,
        color: theme.colors.primary,
    },
    noAccountDescription: {
        fontSize: 13,
        marginTop: 10,
        textAlign: "center",
        color: theme.colors.label,
        lineHeight: 20,
    },
    labelBtn: {
        borderWidth: 1,
        marginRight: 8,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: theme.radius.sm,
    },
    activeLabelBtn: {
        backgroundColor: theme.colors.primary,
    },
    activeLabelText: {
        color: theme.colors.white,
    },
    dealCard: {
        marginBottom: 15,
    },
    dealHeader: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    dealImageStyle: {
        width: "100%",
    },
    dealTitle: {
        marginTop: 10,
        fontSize: 18,
    },
    dealDescription: {
        marginTop: 5,
        fontSize: 13,
        lineHeight: 20,
    },
});
