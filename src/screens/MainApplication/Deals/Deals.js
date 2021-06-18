import React, { useState } from "react";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback, Platform, Dimensions } from "react-native";
import Animated, {
    runOnJS,
    withTiming,
    interpolate,
    useSharedValue,
    useAnimatedStyle,
    interpolateColor,
} from "react-native-reanimated";

const { height } = Dimensions.get("window");

import theme from "../../../theme";
import MtnDeal from "../../../../assets/Mtn.png";
import DealImage from "../../../../assets/Deal.png";
import { AppText, Button } from "../../../components";
import { ScrollView } from "react-native-gesture-handler";
import { MtnLogo } from "../../../../assets/icons/MtnLogo";
import { StarIcon } from "../../../../assets/icons/StarIcon";
import { LabelIcon } from "../../../../assets/icons/LabelIcon";
import { ThumbsDownIcon } from "../../../../assets/icons/ThumbsDownIcon";
import { ShareArrowIcon } from "../../../../assets/icons/ShareArrowIcon";
import { StopDealIcon } from "../../../../assets/icons/StopDealIcon";

const tags = ["Latest", "Saved", "Shopping", "Transport", "Entertainment"];

const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

export const Deals = ({ navigation }) => {
    const [enabled, setEnabled] = useState(true);
    const [tag, setTag] = useState("Latest");

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

    const renderTags = () => {
        return tags.map(item => {
            if (item === tag) {
                return (
                    <View key={item} style={[styles.labelBtn, styles.activeLabelBtn]}>
                        <AppText variant="medium" style={styles.activeLabelText}>
                            {item}
                        </AppText>
                    </View>
                );
            } else {
                return (
                    <TouchableOpacity key={item} style={styles.labelBtn} onPress={() => setTag(item)}>
                        <AppText variant="medium">{item}</AppText>
                    </TouchableOpacity>
                );
            }
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

    const renderContent = () => {
        if (tag === "Latest") {
            return (
                <>
                    <Touchable style={styles.dealCard} onPress={() => navigation.navigate("Article")}>
                        <View>
                            <Image source={MtnDeal} style={styles.dealImageStyle} />
                            <View style={styles.dealHeader}>
                                <View style={{ flexDirection: "row" }}>
                                    <MtnLogo />
                                    <AppText style={{ marginLeft: 5 }}>MTN</AppText>
                                </View>

                                <TouchableOpacity onPress={openModal}>
                                    <Icon name="dots-horizontal" size={25} />
                                </TouchableOpacity>
                            </View>
                            <AppText variant="medium" style={styles.dealTitle}>
                                Welcome Back Offer
                            </AppText>
                            <AppText style={styles.dealDescription}>
                                Welcome Back Offer is an offer that rewards customers that spent at least 60 days on the
                                MTN network and have not performed any chargeable activity in the last...
                            </AppText>
                        </View>
                    </Touchable>
                    <Touchable style={styles.dealCard} onPress={() => navigation.navigate("Article")}>
                        <View>
                            <Image source={DealImage} style={styles.dealImageStyle} />
                            <View style={styles.dealHeader}>
                                <View style={{ flexDirection: "row" }}>
                                    <AppText style={{ marginLeft: 5 }}>Shopping</AppText>
                                </View>

                                <TouchableOpacity onPress={openModal}>
                                    <Icon name="dots-horizontal" size={25} />
                                </TouchableOpacity>
                            </View>
                            <AppText variant="medium" style={styles.dealTitle}>
                                A Guide to Paris’s Best Independent Shops and Businesses
                            </AppText>
                            <AppText style={styles.dealDescription}>
                                Physical space is often conceived in three linear dimensions, although modern physicists
                                usually consider it, with time, to be part of a boundless four-dimensional continuum
                                known as spacetime.
                            </AppText>
                        </View>
                    </Touchable>
                    <Touchable style={styles.dealCard} onPress={() => navigation.navigate("Article")}>
                        <View>
                            <Image source={MtnDeal} style={styles.dealImageStyle} />
                            <View style={styles.dealHeader}>
                                <View style={{ flexDirection: "row" }}>
                                    <MtnLogo />
                                    <AppText style={{ marginLeft: 5 }}>MTN</AppText>
                                </View>

                                <TouchableOpacity onPress={openModal}>
                                    <Icon name="dots-horizontal" size={25} />
                                </TouchableOpacity>
                            </View>
                            <AppText variant="medium" style={styles.dealTitle}>
                                Welcome Back Offer
                            </AppText>
                            <AppText style={styles.dealDescription}>
                                Welcome Back Offer is an offer that rewards customers that spent at least 60 days on the
                                MTN network and have not performed any chargeable activity in the last...
                            </AppText>
                        </View>
                    </Touchable>
                </>
            );
        } else {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: "50%" }}>
                    <AppText style={{ textAlign: "center", lineHeight: 20, width: "80%" }}>
                        No saved deals. Deals you save for later will appear here.
                    </AppText>
                </View>
            );
        }
    };

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
                    {renderTags()}
                </ScrollView>
            </View>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>{renderContent()}</ScrollView>

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
                                    <ShareArrowIcon style={{ marginRight: 10 }} />
                                    <AppText>Share</AppText>
                                </RectButton>
                                <RectButton style={[styles.shareRow, styles.shareRowLine]}>
                                    <StarIcon style={{ marginRight: 10 }} />
                                    <AppText>Save for later</AppText>
                                </RectButton>
                                <RectButton style={[styles.shareRow, styles.shareRowLine]}>
                                    <ThumbsDownIcon style={{ marginRight: 10 }} />
                                    <AppText>Not interested in this deal</AppText>
                                </RectButton>
                                <RectButton style={[styles.shareRow, styles.shareRowLine]}>
                                    <StopDealIcon style={{ marginRight: 10 }} />
                                    <AppText>Not interested in MTN</AppText>
                                </RectButton>
                            </View>
                            <Button variant="secondary" label="Cancel" style={styles.cancelBtn} onPress={closeModal} />
                        </Animated.View>
                    </Animated.View>
                </>
            )}
        </SafeAreaView>
    );
};

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
});
