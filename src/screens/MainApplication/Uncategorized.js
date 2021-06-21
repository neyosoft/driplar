import React, { useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RNPickerSelect from "react-native-picker-select";
import { RectButton } from "react-native-gesture-handler";
import {
    BottomSheetFlatList,
    BottomSheetBackdrop,
    BottomSheetTextInput,
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import LottieView from "lottie-react-native";
import Animated, {
    runOnJS,
    withTiming,
    interpolate,
    useSharedValue,
    useAnimatedStyle,
    interpolateColor,
} from "react-native-reanimated";

import theme from "../../theme";
import { AppText, Button } from "../../components";
import { moneyFormat } from "../../utils/money.utils";
import { SetCategoryIcon } from "../../../assets/icons/SetCategoryIcon";
import { TransactionViewIcon } from "../../../assets/icons/TransactionViewIcon";
import { UncategorizedCategoryIcon } from "../../../assets/icons/UncategorizedCategoryIcon";

import { GroceryCard, IncomeCard, TransportCard, TravelCard, ShoppingCard } from "./Insight/components";
import { EntertainmentCard } from "./Insight/components/EntertainmentCard";
import { EatingOutCard } from "./Insight/components/EatingOutCard";
import { HomeFamilyCard } from "./Insight/components/HomeFamilyCard";
import { HealthCard } from "./Insight/components/HealthCard";
import { CashCard } from "./Insight/components/CashCard";
import { SavingsCard } from "./Insight/components/SavingsCard";
import { InvestmentCard } from "./Insight/components/InvestmentCard";
import { TransferCard } from "./Insight/components/TransferCard";
import { CharityCard } from "./Insight/components/CharityCard";
import { BankChargesCard } from "./Insight/components/BankChargesCard";
import { MiscellaneousCard } from "./Insight/components/MiscellaneousCard";
import { SubscriptionsCard } from "./Insight/components/SubscriptionsCard";
const { height } = Dimensions.get("window");

const merchants = [
    { label: "GTBank", value: "GTBank" },
    { label: "Access Bank", value: "Access Bank" },
    { label: "First Bank", value: "First Bank" },
];

const renderCategoryCard = item => {
    switch (item) {
        case "Groceries":
            return <GroceryCard />;
        case "Income":
            return <IncomeCard />;
        case "Transport":
            return <TransportCard />;
        case "Travel":
            return <TravelCard />;
        case "Shopping":
            return <ShoppingCard />;
        case "Entertainment":
            return <EntertainmentCard />;
        case "Eating out":
            return <EatingOutCard />;
        case "Home & Family":
            return <HomeFamilyCard />;
        case "Health":
            return <HealthCard />;
        case "Cash":
            return <CashCard />;
        case "Savings":
            return <SavingsCard />;
        case "Investments":
            return <InvestmentCard />;
        case "Transfers":
            return <TransferCard />;
        case "Charity":
            return <CharityCard />;
        case "Bank charges":
            return <BankChargesCard />;
        case "Miscellaneous":
            return <MiscellaneousCard />;
        case "Subscriptions":
            return <SubscriptionsCard />;

        default:
            return <GroceryCard />;
    }
};

export const Uncategorized = ({ navigation }) => {
    const [merchant, setMerchant] = useState("");
    const bottomSheetRef = useRef();
    const successSheetRef = useRef();

    const modalAnimation = useSharedValue(0);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        modalAnimation.value = withTiming(1, { duration: 500 });
    };

    const closeModal = () => {
        modalAnimation.value = withTiming(0, { duration: 500 }, () => {
            "worklet";
            runOnJS(setShowModal)(false);
        });
    };

    const modalContentStyle = useAnimatedStyle(() => {
        return {
            opacity: modalAnimation.value,
            transform: [{ translateY: interpolate(modalAnimation.value, [0, 1], [height, 0]) }],
        };
    }, []);

    const overlayStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                modalAnimation.value,
                [0, 1],
                ["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.8)"],
            ),
        };
    }, []);

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
                        <Icon name="chevron-left" size={30} color={theme.colors.primary} />
                    </TouchableOpacity>
                    <AppText variant="medium" style={styles.overviewTitle}>
                        Uncategorized
                    </AppText>
                </View>
                <UncategorizedCategoryIcon width={80} height={80} style={styles.headerImage} />
            </View>

            <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.dropdownWrapper}>
                    <RNPickerSelect
                        value={merchant}
                        items={merchants}
                        onValueChange={setMerchant}
                        useNativeAndroidPickerStyle={false}
                        placeholder={{ label: "All", value: "" }}
                        Icon={() => <Icon name="chevron-down" size={24} />}
                        style={{
                            inputIOS: styles.dropdownInput,
                            inputAndroid: styles.dropdownInput,
                            iconContainer: { top: 23, right: 12 },
                        }}
                    />
                </View>

                <View style={styles.section}>
                    <RectButton style={styles.sectionRow} onPress={openModal}>
                        <UncategorizedCategoryIcon width={55} height={55} />
                        <View style={styles.sectionRowCenter}>
                            <AppText variant="medium">Transaction ref #1</AppText>
                            <AppText style={{ color: theme.colors.placeholder, marginTop: 3, fontSize: 12 }}>
                                Apr 25 - 13:30
                            </AppText>
                        </View>
                        <View style={styles.priceWrapper}>
                            <AppText variant="medium">{moneyFormat(11500)}</AppText>
                        </View>
                    </RectButton>
                    <RectButton style={styles.sectionRow} onPress={openModal}>
                        <UncategorizedCategoryIcon width={55} height={55} />
                        <View style={styles.sectionRowCenter}>
                            <AppText variant="medium">Transaction ref #1</AppText>
                            <AppText style={{ color: theme.colors.placeholder, marginTop: 3, fontSize: 12 }}>
                                Apr 25 - 13:30
                            </AppText>
                        </View>
                        <View style={styles.priceWrapper}>
                            <AppText variant="medium">{moneyFormat(11500)}</AppText>
                        </View>
                    </RectButton>
                    <RectButton style={styles.sectionRow} onPress={openModal}>
                        <UncategorizedCategoryIcon width={55} height={55} />
                        <View style={styles.sectionRowCenter}>
                            <AppText variant="medium">Transaction ref #1</AppText>
                            <AppText style={{ color: theme.colors.placeholder, marginTop: 3, fontSize: 12 }}>
                                Apr 25 - 13:30
                            </AppText>
                        </View>
                        <View style={styles.priceWrapper}>
                            <AppText variant="medium">{moneyFormat(11500)}</AppText>
                        </View>
                    </RectButton>
                    <RectButton style={styles.sectionRow} onPress={openModal}>
                        <UncategorizedCategoryIcon width={55} height={55} />
                        <View style={styles.sectionRowCenter}>
                            <AppText variant="medium">Transaction ref #1</AppText>
                            <AppText style={{ color: theme.colors.placeholder, marginTop: 3, fontSize: 12 }}>
                                Apr 25 - 13:30
                            </AppText>
                        </View>
                        <View style={styles.priceWrapper}>
                            <AppText variant="medium">{moneyFormat(11500)}</AppText>
                        </View>
                    </RectButton>
                </View>
            </ScrollView>

            {showModal && (
                <>
                    <Animated.View
                        onPress={closeModal}
                        onTouchEnd={closeModal}
                        style={[StyleSheet.absoluteFill, overlayStyle]}
                    />

                    <Animated.View pointerEvents="box-none" style={[styles.overlay]}>
                        <Animated.View style={[styles.overlayContent, modalContentStyle]}>
                            <View style={styles.topContent}>
                                <RectButton style={[styles.shareRow, styles.shareRowLine]}>
                                    <TransactionViewIcon style={{ marginRight: 10 }} />
                                    <AppText>View transaction receipt</AppText>
                                </RectButton>
                                <RectButton
                                    style={[styles.shareRow, styles.shareRowLine]}
                                    onPress={() => {
                                        bottomSheetRef.current?.present(1);
                                        closeModal();
                                    }}>
                                    <SetCategoryIcon style={{ marginRight: 10 }} />
                                    <AppText>Set category</AppText>
                                </RectButton>
                            </View>
                            <Button variant="secondary" label="Cancel" style={styles.cancelBtn} onPress={closeModal} />
                        </Animated.View>
                    </Animated.View>
                </>
            )}

            <BottomSheetModalProvider stackBehavio="push">
                <BottomSheetModal
                    ref={bottomSheetRef}
                    index={0}
                    snapPoints={["80%"]}
                    backdropComponent={BackdropComponent}>
                    <View style={styles.bottomContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <AppText variant="bold" style={styles.bottomSheetTitle}>
                                    Set category
                                </AppText>
                                <AppText style={{ color: theme.colors.placeholder, marginTop: 4, fontSize: 14 }}>
                                    Transaction ref #1
                                </AppText>
                            </View>
                            <UncategorizedCategoryIcon width={55} height={55} />
                        </View>

                        <View style={styles.searchbox}>
                            <Icon name="magnify" size={25} color="#B1AEB8" />
                            <BottomSheetTextInput style={styles.searchboxTextinput} placeholder="Find category" />
                        </View>

                        <BottomSheetFlatList
                            data={[
                                "Groceries",
                                "Income",
                                "Transport",
                                "Travel",
                                "Shopping",
                                "Entertainment",
                                "Eating out",
                                "Health",
                                "Cash",
                                "Home & Family",
                                "Savings",
                                "Investments",
                                "Transfers",
                                "Charity",
                                "Bank charges",
                                "Miscellaneous",
                                "Subscriptions",
                            ]}
                            numColumns={2}
                            keyExtractor={item => item}
                            renderItem={({ item }) => renderCategoryCard(item)}
                            columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 10 }}
                        />

                        <Button
                            label="Save"
                            style={{ marginTop: 10 }}
                            onPress={() => successSheetRef.current?.present()}
                        />
                    </View>
                </BottomSheetModal>
                <BottomSheetModal
                    ref={successSheetRef}
                    index={0}
                    snapPoints={[330]}
                    backdropComponent={BackdropComponent}>
                    <View style={styles.bottomContainer}>
                        <View style={styles.successTopBottomWrapper}>
                            <LottieView
                                autoPlay
                                style={{ width: 100 }}
                                source={require("../../../assets/lottie/success.json")}
                            />

                            <AppText variant="medium" style={styles.topContentTitle}>
                                Category set!
                            </AppText>
                            <AppText style={styles.topContentDescription}>
                                Your balances and insights will be updated to reflect the new addition.
                            </AppText>
                        </View>

                        <Button
                            label="Got it"
                            style={{ marginTop: 10 }}
                            onPress={() => {
                                bottomSheetRef.current?.dismiss();
                                successSheetRef.current?.dismiss();
                            }}
                        />
                    </View>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </SafeAreaView>
    );
};

const BackdropComponent = props => <BottomSheetBackdrop opacity={0.7} {...props} />;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    header: {
        padding: 20,
        backgroundColor: theme.colors.white,
    },
    headerImage: {
        right: -2,
        bottom: 10,
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
    contentContainerStyle: {
        margin: 10,
    },
    section: {
        borderColor: "#DCDBDB",
        borderRadius: theme.radius.md,
        borderWidth: StyleSheet.hairlineWidth,
    },
    sectionRow: {
        padding: 20,
        alignItems: "center",
        flexDirection: "row",
    },
    sectionRowCenter: {
        flex: 1,
        marginHorizontal: 10,
    },
    priceWrapper: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        backgroundColor: "#EFEFEF",
        borderRadius: theme.radius.sm,
    },
    dropdownWrapper: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
    dropdownInput: {
        fontSize: 15,
        marginTop: 10,
        borderRadius: 8,
        paddingRight: 40,
        paddingVertical: 13,
        paddingHorizontal: 20,
        borderColor: "#DCDBDB",
        borderRadius: theme.radius.sm,
        borderWidth: StyleSheet.hairlineWidth,
    },

    overlay: {
        alignItems: "center",
        ...StyleSheet.absoluteFill,
        justifyContent: "flex-end",
    },
    overlayContent: {
        width: "90%",
        marginBottom: 40,
    },
    topContent: {
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.white,
    },
    shareRow: {
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    shareRowLine: {
        borderBottomColor: theme.colors.line,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    cancelBtn: {
        marginTop: 8,
    },
    bottomContainer: {
        flex: 1,
        padding: 25,
        backgroundColor: theme.colors.white,
    },
    successTopBottomWrapper: {
        alignItems: "center",
    },
    bottomSheetTitle: {
        fontSize: 25,
    },
    searchbox: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 14,
        backgroundColor: "#F1F1F3",
        borderRadius: theme.radius.sm,
    },
    searchboxTextinput: {
        flex: 1,
        height: 45,
        marginLeft: 5,
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
});
