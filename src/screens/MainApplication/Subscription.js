import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useToast } from "react-native-fast-toast";

import theme from "../../theme";
import { RecordCard } from "./Home/components";
import { moneyFormat } from "../../utils/money.utils";
import { AppText, Button, TwoColumnTab } from "../../components";
import { SubscriptionCategoryIcon } from "../../../assets/icons/SubscriptionCategoryIcon";
import { NetflixIcon } from "../../../assets/icons/NetflixIcon";
import { EntertainmentCategoryIcon } from "../../../assets/icons/EntertainmentCategoryIcon";
import ProductImage from "../../../assets/ProductImageOne.png";
import MtnDeal from "../../../assets/Mtn.png";
import DealImage from "../../../assets/Deal.png";
import { MtnLogo } from "../../../assets/icons/MtnLogo";

export const Subscription = ({ navigation }) => {
    const toast = useToast();
    const bottomSheetRef = useRef();

    const [selected, setSelected] = useState("Transactions");

    const renderContent = () => {
        switch (selected) {
            case "Transactions":
                return (
                    <View style={styles.itemListWrapper}>
                        <RecordCard
                            amount={34660}
                            title="Shopping"
                            icon={ProductImage}
                            description="Apr 7"
                            onPress={() => {
                                bottomSheetRef.current.expand();
                            }}
                        />
                        <RecordCard
                            title="Uber"
                            amount={12500}
                            icon={ProductImage}
                            description="Apr 5"
                            onPress={() => {
                                bottomSheetRef.current.expand();
                            }}
                        />
                        <RecordCard
                            amount={25000}
                            title="Shopping"
                            icon={ProductImage}
                            description="Apr 1"
                            onPress={() => {
                                bottomSheetRef.current.expand();
                            }}
                        />
                    </View>
                );

            case "Deals":
                return (
                    <View>
                        <View style={styles.dealCard}>
                            <View>
                                <Image source={MtnDeal} style={styles.dealImageStyle} />
                                <View style={styles.dealHeader}>
                                    <View style={{ flexDirection: "row" }}>
                                        <MtnLogo />
                                        <AppText style={{ marginLeft: 5 }}>MTN</AppText>
                                    </View>

                                    <TouchableOpacity>
                                        <Icon name="dots-horizontal" size={25} />
                                    </TouchableOpacity>
                                </View>
                                <AppText variant="medium" style={styles.dealTitle}>
                                    Welcome Back Offer
                                </AppText>
                                <AppText style={styles.dealDescription}>
                                    Welcome Back Offer is an offer that rewards customers that spent at least 60 days on
                                    the MTN network and have not performed any chargeable activity in the last...
                                </AppText>
                            </View>
                        </View>
                        <View style={styles.dealCard}>
                            <View>
                                <Image source={DealImage} style={styles.dealImageStyle} />
                                <View style={styles.dealHeader}>
                                    <View style={{ flexDirection: "row" }}>
                                        <AppText style={{ marginLeft: 5 }}>Shopping</AppText>
                                    </View>

                                    <TouchableOpacity>
                                        <Icon name="dots-horizontal" size={25} />
                                    </TouchableOpacity>
                                </View>
                                <AppText variant="medium" style={styles.dealTitle}>
                                    A Guide to Paris’s Best Independent Shops and Businesses
                                </AppText>
                                <AppText style={styles.dealDescription}>
                                    Physical space is often conceived in three linear dimensions, although modern
                                    physicists usually consider it, with time, to be part of a boundless
                                    four-dimensional continuum known as spacetime.
                                </AppText>
                            </View>
                        </View>
                        <View style={styles.dealCard}>
                            <View>
                                <Image source={MtnDeal} style={styles.dealImageStyle} />
                                <View style={styles.dealHeader}>
                                    <View style={{ flexDirection: "row" }}>
                                        <MtnLogo />
                                        <AppText style={{ marginLeft: 5 }}>MTN</AppText>
                                    </View>

                                    <TouchableOpacity>
                                        <Icon name="dots-horizontal" size={25} />
                                    </TouchableOpacity>
                                </View>
                                <AppText variant="medium" style={styles.dealTitle}>
                                    Welcome Back Offer
                                </AppText>
                                <AppText style={styles.dealDescription}>
                                    Welcome Back Offer is an offer that rewards customers that spent at least 60 days on
                                    the MTN network and have not performed any chargeable activity in the last...
                                </AppText>
                            </View>
                        </View>
                    </View>
                );
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
                        <Icon name="chevron-left" size={30} color={theme.colors.primary} />
                    </TouchableOpacity>
                    <AppText variant="medium" style={styles.overviewTitle}>
                        Subscription
                    </AppText>
                </View>
                <SubscriptionCategoryIcon width={80} height={80} style={styles.headerImage} />
            </View>

            <ScrollView style={styles.scrollview} contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.dateSelectionView}>
                    <View style={[styles.monthBtn, styles.activeMonth]}>
                        <AppText variant="medium" style={[styles.monthBtnText, styles.monthBtnActiveText]}>
                            Aprl
                        </AppText>
                    </View>
                    <View style={styles.monthBtn}>
                        <AppText style={styles.monthBtnText}>May</AppText>
                    </View>
                    <View style={styles.monthBtn}>
                        <AppText style={styles.monthBtnText}>2021</AppText>
                    </View>
                    <View style={styles.monthBtn}>
                        <AppText style={styles.monthBtnText}>Custom</AppText>
                    </View>
                </View>

                <View style={styles.analyticsBox}>
                    <View style={{ padding: 22 }}>
                        <AppText variant="medium" style={styles.amount}>
                            {moneyFormat(50500)}
                        </AppText>
                        <AppText variant="medium" style={styles.amountDescriptionStyle}>
                            Expected spend - Apr 2021
                        </AppText>
                    </View>
                </View>

                <TwoColumnTab
                    value={selected}
                    onChange={setSelected}
                    options={["Transactions", "Deals"]}
                    style={{ marginHorizontal: 20, marginBottom: 10 }}
                />

                {renderContent(selected)}
            </ScrollView>

            <BottomSheet ref={bottomSheetRef} index={0} snapPoints={[0, 500]} backdropComponent={BackdropComponent}>
                <View style={styles.bottomContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <AppText variant="bold" style={styles.bottomSheetTitle}>
                                Subscription
                            </AppText>
                            <AppText style={{ color: theme.colors.placeholder, marginTop: 4, fontSize: 14 }}>
                                Netflix
                            </AppText>
                        </View>
                        <NetflixIcon width={55} height={55} />
                    </View>

                    <View style={styles.sheetamountview}>
                        <AppText variant="bold" style={styles.bottomSheetTitle}>
                            {moneyFormat(14500)}
                        </AppText>
                        <AppText style={{ color: theme.colors.placeholder, marginTop: 4, fontSize: 14 }}>
                            Due on May 1
                        </AppText>
                    </View>

                    <View
                        style={{
                            paddingVertical: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            borderBottomColor: "#FBFBFC",
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}>
                        <View
                            style={{
                                width: 55,
                                height: 55,
                                borderRadius: 55,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#98BBFF",
                            }}>
                            <EntertainmentCategoryIcon height={35} width={35} />
                        </View>
                        <AppText variant="medium" style={{ flex: 1, marginHorizontal: 15 }}>
                            Entertainment
                        </AppText>
                        <Icon name="chevron-right" size={25} color="#8B8B8D" />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Button
                            variant="secondary"
                            label="Edit subscription"
                            style={{ marginTop: 10 }}
                            onPress={() => {
                                bottomSheetRef.current?.close();
                            }}
                        />
                        <Button
                            variant="secondary"
                            label="Remove subscription"
                            style={{ marginTop: 10 }}
                            onPress={() => {
                                bottomSheetRef.current?.close();
                                toast.show("Subscription removed.");
                            }}
                        />
                        <Button
                            variant="secondary"
                            label="Change category"
                            style={{ marginTop: 10 }}
                            onPress={() => {
                                bottomSheetRef.current?.close();
                                toast.show("Category changed.");
                            }}
                        />
                    </View>
                </View>
            </BottomSheet>
        </SafeAreaView>
    );
};

const BackdropComponent = props => <BottomSheetBackdrop opacity={0.7} {...props} />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#AEB6FE",
    },
    header: {
        padding: 20,
        backgroundColor: "#AEB6FE",
    },
    headerImage: {
        right: 0,
        bottom: 0,
        position: "absolute",
    },
    backButton: {
        alignSelf: "flex-start",
        marginLeft: -10,
    },
    overviewTitle: {
        marginTop: 10,
        fontSize: 22,
        color: theme.colors.primary,
    },
    scrollview: {
        backgroundColor: "#fff",
    },
    contentContainerStyle: {
        padding: 10,
    },

    dateSelectionView: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        justifyContent: "space-between",
    },
    monthBtn: {
        width: "23%",
        paddingVertical: 10,
        alignItems: "center",
        backgroundColor: "#F1F1F3",
        borderRadius: theme.radius.sm,
    },
    activeMonth: {
        backgroundColor: theme.colors.black,
    },
    monthBtnText: {
        color: theme.colors.placeholder,
    },
    monthBtnActiveText: {
        color: theme.colors.white,
    },
    analyticsBox: {
        backgroundColor: "#FAFAFA",
    },
    amount: {
        fontSize: 28,
        color: theme.colors.black,
    },
    amountDescriptionStyle: {
        marginTop: 10,
        fontSize: 12,
        color: "#797383",
        borderRadius: theme.radius.sm,
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

    bottomContainer: {
        flex: 1,
        padding: 25,
        backgroundColor: theme.colors.white,
    },
    successTopBottomWrapper: {
        alignItems: "center",
    },
    topContentTitle: {
        fontSize: 22,
    },
    topContentDescription: {
        width: "90%",
        lineHeight: 20,
        marginVertical: 10,
        textAlign: "center",
        color: theme.colors.label,
    },
    itemListWrapper: {
        borderWidth: 0.5,
        margin: 10,
        padding: 10,
        borderColor: "#DCDBDB",
        borderRadius: theme.radius.sm,
    },
    bottomSheetTitle: {
        fontSize: 25,
    },
    sheetamountview: {
        paddingVertical: 25,
        backgroundColor: "#FAFAFA",
    },
});
