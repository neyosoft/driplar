import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RectButton } from "react-native-gesture-handler";
import Animated, {
    runOnJS,
    withTiming,
    interpolate,
    useSharedValue,
    useAnimatedStyle,
    interpolateColor,
} from "react-native-reanimated";
const { width, height } = Dimensions.get("window");

import theme from "../../theme";
import DealImage from "../../../assets/Deal.png";
import { AppText, Button } from "../../components";
import ZaraLogo from "../../../assets/zara-logo.png";
import JumiaLogo from "../../../assets/jumia-logo.png";
import MoreMtnDeal from "../../../assets/more-deal-mtn.png";
import MoreZaraDeal from "../../../assets/more-deal-zara.png";
import { TwitterIcon } from "../../../assets/icons/TwitterIcon.js";
import { FacebookIcon } from "../../../assets/icons/FacebookIcon.js";
import { WhatsappIcon } from "../../../assets/icons/WhatsappIcon.js";
import { DealBackIcon } from "../../../assets/icons/DealBackIcon.js";
import { InstagramIcon } from "../../../assets/icons/InstagramIcon.js";
import { ShareLinkIcon } from "../../../assets/icons/ShareLinkIcon.js";
import { DealOptionIcon } from "../../../assets/icons/DealOptionIcon.js";
import { ShareMessageIcon } from "../../../assets/icons/ShareMessageIcon.js";

export const Article = ({ navigation }) => {
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
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={DealImage} style={styles.articleImage} />
                <TouchableOpacity onPress={navigation.goBack} style={{ position: "absolute", left: 15, top: "47%" }}>
                    <DealBackIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={openModal} style={{ position: "absolute", right: 15, top: "47%" }}>
                    <DealOptionIcon />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ marginTop: 10 }} contentContainerStyle={styles.contentContainerStyle}>
                <View style={styles.tagView}>
                    <AppText variant="medium" style={styles.tagText}>
                        Shopping
                    </AppText>
                </View>

                <AppText variant="medium" style={styles.title}>
                    A Guide to Paris’s Best Independent Shops and Businesses
                </AppText>

                <View
                    style={{
                        marginTop: 15,
                        alignItems: "center",
                        flexDirection: "row",

                        justifyContent: "space-between",
                    }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={ZaraLogo} style={{ marginRight: 5 }} />
                        <AppText>Zara</AppText>
                    </View>
                    <AppText style={{ color: theme.colors.placeholder, fontSize: 12 }}>11 April 2021</AppText>
                </View>
                <View>
                    <AppText style={styles.bodyText}>
                        Physical space is often conceived in three linear dimensions, although modern physicists usually
                        consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime.
                        The concept of space is considered to be of fundamental importance to an understanding of the
                        physical universe.
                    </AppText>
                    <AppText style={styles.bodyText}>
                        However, disagreement continues between philosophers over whether it is itself an entity, a
                        relationship between entities, or part of a conceptual framework.
                    </AppText>
                    <View style={styles.imageBox}>
                        <View style={styles.playBtnWrapper}>
                            <Icon name="play" size={30} />
                        </View>
                    </View>
                    <AppText style={styles.bodyText}>
                        However, disagreement continues between philosophers over whether it is itself an entity, a
                        relationship between entities, or part of a conceptual framework.
                    </AppText>
                </View>

                <View style={styles.buttonRow}>
                    <Button style={styles.button} variant="secondary" label="Share" />
                    <Button style={styles.button} variant="secondary" label="Save for later" />
                </View>

                <View style={styles.separator} />
                <View>
                    <AppText style={{ color: theme.colors.label }}>More on shopping</AppText>
                </View>
                <View style={styles.moreDealCard}>
                    <Image source={MoreMtnDeal} />
                    <View style={styles.moreDealCardRight}>
                        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                            <Image source={JumiaLogo} />
                            <AppText style={{ marginLeft: 5, fontSize: 14 }}>Jumia</AppText>
                        </View>
                        <AppText variant="medium">We ship packages for as low as N750. Available in all 36...</AppText>
                    </View>
                </View>
                <View style={styles.moreDealCard}>
                    <Image source={MoreZaraDeal} />
                    <View style={styles.moreDealCardRight}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image source={ZaraLogo} />
                            <AppText style={{ marginLeft: 5, fontSize: 14 }}>Zara</AppText>
                        </View>
                        <AppText variant="medium">We ship packages for as low as N750. Available in all 36...</AppText>
                    </View>
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
                                    <TwitterIcon style={{ marginRight: 10 }} />
                                    <AppText>Share to Twitter</AppText>
                                </RectButton>
                                <RectButton style={[styles.shareRow, styles.shareRowLine]}>
                                    <InstagramIcon style={{ marginRight: 10 }} />
                                    <AppText>Share to Instagram</AppText>
                                </RectButton>
                                <RectButton style={[styles.shareRow, styles.shareRowLine]}>
                                    <WhatsappIcon style={{ marginRight: 10 }} />
                                    <AppText>Share to Whatsapp</AppText>
                                </RectButton>
                                <RectButton style={[styles.shareRow, styles.shareRowLine]}>
                                    <FacebookIcon style={{ marginRight: 10 }} />
                                    <AppText>Share to Facebook</AppText>
                                </RectButton>
                                <RectButton style={[styles.shareRow, styles.shareRowLine]}>
                                    <ShareMessageIcon style={{ marginRight: 10 }} />
                                    <AppText>Share to Messages</AppText>
                                </RectButton>
                                <RectButton style={styles.shareRow}>
                                    <ShareLinkIcon style={{ marginRight: 10 }} />
                                    <AppText>Copy link</AppText>
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
    articleImage: {
        width: "100%",
        height: width * 0.65,
    },
    contentContainerStyle: {
        padding: 20,
        paddingTop: 10,
    },
    tagText: {
        fontSize: 13,
    },
    tagView: {
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: "flex-start",
        borderRadius: theme.radius.sm,
    },
    title: {
        fontSize: 22,
        marginTop: 14,
        lineHeight: 25,
        color: theme.colors.primary,
    },
    bodyText: {
        marginTop: 5,
        lineHeight: 20,
    },
    imageBox: {
        height: 200,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EDEDEF",
    },
    playBtnWrapper: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#8B8B8D",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonRow: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: "48%",
    },
    separator: {
        marginVertical: 20,
        height: StyleSheet.hairlineWidth,
        backgroundColor: theme.colors.line,
    },
    moreDealCard: {
        marginTop: 20,
        alignItems: "center",
        flexDirection: "row",
    },
    moreDealCardRight: {
        flex: 1,
        marginLeft: 15,
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
        paddingVertical: 12,
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
