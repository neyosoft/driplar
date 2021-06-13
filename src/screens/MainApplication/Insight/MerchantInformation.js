import React, { useMemo, useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";

import theme from "../../../theme";
import { RecordCard } from "../Home/components";
import UberLogo from "../../../../assets/UberLogo.png";
import { moneyFormat } from "../../../utils/money.utils";
import { AppText, Button, TwoColumnTab } from "../../../components";
import ProductImage from "../../../../assets/ProductImageOne.png";
import { FcmbRoundedIcon, NetflixIcon, PieChartIcon } from "../../../../assets/icons";
import { SportifyLogo } from "../../../../assets/icons/SportifyLogo";

export const MerchantInformation = ({ navigation }) => {
    const bottomSheetRef = useRef(null);

    const snapPoints = useMemo(() => [0, "70%"], []);

    const [selected, setSelected] = useState("Insights");

    const renderContent = value => {
        switch (value) {
            case "Insights":
                return (
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <AppText variant="bold">Do you know...</AppText>
                                <TouchableOpacity>
                                    <Icon name="dots-horizontal" size={25} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardContent}>
                                <Image
                                    style={styles.cardItemImage}
                                    source={require("../../../../assets/UberLogo.png")}
                                />
                                <AppText style={styles.cardItemDescription}>
                                    You’ve spent <AppText variant="medium">{moneyFormat(39000)}</AppText> on{" "}
                                    <AppText variant="medium">Uber</AppText> this month. This is{" "}
                                    <AppText variant="medium">20%</AppText> more than you spend monthly.{" "}
                                </AppText>

                                <Button style={styles.cardBtn} variant="secondary" label="See spending history" />
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <AppText variant="bold">Last month...</AppText>
                                <TouchableOpacity>
                                    <Icon name="dots-horizontal" size={25} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardContent}>
                                <PieChartIcon />
                                <AppText style={styles.cardItemDescription}>
                                    You saved more than you spent in Mar 2021. You’re on a{" "}
                                    <AppText variant="medium">2-month</AppText> saving streak. You’ve spent 😁
                                </AppText>

                                <Button style={styles.cardBtn} variant="secondary" label="See spending history" />
                            </View>
                        </View>
                    </ScrollView>
                );
            case "Transactions":
                return (
                    <View style={styles.itemListWrapper}>
                        <RecordCard
                            amount={34660}
                            title="Shopping"
                            icon={ProductImage}
                            description="Apr 7"
                            style={styles.cardItem}
                            onPress={() => {
                                bottomSheetRef.current.expand();
                            }}
                        />
                        <RecordCard
                            title="Uber"
                            amount={12500}
                            icon={UberLogo}
                            description="Apr 5"
                            style={styles.cardItem}
                            onPress={() => {
                                bottomSheetRef.current.expand();
                            }}
                        />
                        <RecordCard
                            amount={25000}
                            title="Shopping"
                            icon={ProductImage}
                            description="Apr 1"
                            style={styles.cardItem}
                            onPress={() => {
                                bottomSheetRef.current.expand();
                            }}
                        />
                    </View>
                );
                break;
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
                        Spotify
                    </AppText>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
                        <View
                            style={{
                                borderWidth: 1,
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                borderRadius: theme.radius.sm,
                            }}>
                            <AppText>Entertainment</AppText>
                        </View>
                        <View
                            style={{
                                marginLeft: 10,
                                borderWidth: 1,
                                paddingVertical: 0,
                                paddingHorizontal: 10,
                                borderRadius: theme.radius.sm,
                            }}>
                            <Icon name="dots-horizontal" size={25} />
                        </View>
                    </View>
                </View>
                <SportifyLogo width={70} height={70} style={styles.headerImage} />
            </View>
            <View style={{ flex: 1, backgroundColor: theme.colors.white }}>
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
                            {moneyFormat(1400)}
                        </AppText>
                        <AppText variant="medium" style={styles.amountDescriptionStyle}>
                            Current account - 6 secs ago
                        </AppText>
                    </View>
                </View>

                <TwoColumnTab
                    value={selected}
                    onChange={setSelected}
                    style={{ marginHorizontal: 20, marginBottom: 10 }}
                    options={["Insights", "Transactions"]}
                />

                <ScrollView>{renderContent(selected)}</ScrollView>
            </View>

            <BottomSheet backdropComponent={BackdropComponent} ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
                <BottomSheetScrollView>
                    <View style={styles.sheetView}>
                        <View style={styles.bottomSheetHeader}>
                            <View>
                                <AppText variant="bold" style={styles.sheetHeaderTitle}>
                                    Transaction
                                </AppText>
                                <AppText style={styles.sheetHeaderSubtitle}>Netflix</AppText>
                            </View>
                            <NetflixIcon />
                        </View>
                        <View style={[styles.sheetItem, { backgroundColor: "#FAFAFA" }]}>
                            <AppText variant="medium" style={{ fontSize: 18 }}>
                                {moneyFormat(14500)}
                            </AppText>
                            <AppText style={styles.sheetHeaderSubtitle}>Apr 7, 2021 - 1:40</AppText>
                        </View>
                        <View style={styles.sheetRow}>
                            <FcmbRoundedIcon />
                            <View style={{ flex: 1, marginHorizontal: 10 }}>
                                <AppText variant="medium" style={{ fontSize: 14 }}>
                                    FCMB
                                </AppText>
                                <AppText style={[styles.sheetHeaderSubtitle, { fontSize: 11, marginTop: 2 }]}>
                                    Ref: 3849932000d3i0dn
                                </AppText>
                            </View>
                            <Icon name="chevron-right" size={24} color="#8B8B8D" />
                        </View>
                        <View style={styles.sheetRow}>
                            <FcmbRoundedIcon />
                            <View style={{ flex: 1, marginHorizontal: 10 }}>
                                <AppText variant="medium" style={{ fontSize: 14 }}>
                                    Entertainment
                                </AppText>
                            </View>
                            <Icon name="chevron-right" size={24} color="#8B8B8D" />
                        </View>

                        <Button style={styles.sheetBtn} label="Set as subscription" variant="secondary" />
                        <Button style={styles.sheetBtn} label="Change Category" variant="secondary" />
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </SafeAreaView>
    );
};

BackdropComponent = props => <BottomSheetBackdrop opacity={0.7} {...props} />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6BFF98",
    },
    header: {
        padding: 20,
        backgroundColor: "#6BFF98",
    },
    headerImage: {
        position: "absolute",
        right: -10,
        bottom: 20,
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
    itemListWrapper: {
        borderWidth: 0.5,
        margin: 10,
        padding: 10,
        borderColor: "#DCDBDB",
        borderRadius: theme.radius.sm,
    },
    sheetView: {
        padding: 22,
    },
    bottomSheetHeader: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    sheetHeaderTitle: {
        fontSize: 22,
        color: theme.colors.primary,
    },
    sheetHeaderSubtitle: {
        marginTop: 5,
        color: theme.colors.label,
    },
    sheetItem: {
        padding: 22,
        marginTop: 10,
    },
    sheetRow: {
        padding: 22,
        paddingVertical: 15,
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.line,
    },
    sheetBtn: {
        marginTop: 10,
    },
    card: {
        margin: 10,
        marginTop: 0,
        borderWidth: 0.5,
        borderColor: "#DCDBDB",
        borderRadius: theme.radius.sm,
    },
    cardHeader: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#FAFAFC",
        justifyContent: "space-between",
        borderTopLeftRadius: theme.radius.sm,
        borderTopRightRadius: theme.radius.sm,
    },
    cardContent: {
        padding: 10,
    },
    cardItemImage: {
        width: 80,
        height: 80,
    },
    cardItemDescription: {
        marginTop: 10,
        fontSize: 13,
        lineHeight: 20,
    },
    cardBtn: {
        marginTop: 20,
        marginBottom: 5,
        paddingVertical: 10,
    },
});
