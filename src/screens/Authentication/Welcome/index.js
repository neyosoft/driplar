import React from "react";
import { View, Image, StatusBar, StyleSheet, SafeAreaView, useWindowDimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedScrollHandler } from "react-native-reanimated";

import theme from "../../../theme";
import { SliderDot } from "./components";
import { AppText } from "../../../components";
import { BleytIcon, DriplarWelcomeIcon } from "../../../../assets/icons";

export const Welcome = () => {
    const transX = useSharedValue(0);
    const { width } = useWindowDimensions();

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: event => {
            transX.value = event.contentOffset.x;
        },
    });

    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />

                <View style={styles.topView}>
                    <View style={styles.pageIndicatorSection}>
                        {[1, 2, 3].map((_, index) => {
                            return <SliderDot width={width} index={index} position={transX} key={`key-${index}`} />;
                        })}
                    </View>
                    <Animated.ScrollView
                        pagingEnabled={true}
                        horizontal={true}
                        scrollEventThrottle={1}
                        showsHorizontalScrollIndicator={false}
                        onScroll={scrollHandler}>
                        <View style={[{ width, justifyContent: "center", alignItems: "center" }]}>
                            <DriplarWelcomeIcon />
                            <AppText variant="bold" style={styles.logoText}>
                                Driplar
                            </AppText>
                        </View>
                        <View
                            style={[
                                {
                                    width,
                                    backgroundColor: theme.colors.purple,
                                    justifyContent: "space-between",
                                },
                            ]}>
                            <View style={styles.pageHeader}>
                                <AppText variant="bold" style={styles.pageTitle}>
                                    Save and optimize your spending
                                </AppText>
                                <AppText style={styles.pageSubTitle}>
                                    Take control of your finances with tips on how to lower bills and be better with
                                    your savings.
                                </AppText>
                            </View>

                            <Image
                                height="400"
                                width={width}
                                style={{ width, height: 400 }}
                                source={require("../../../../assets/welcome-illustration-2.png")}
                            />
                        </View>
                        <View
                            style={[
                                {
                                    width,
                                    backgroundColor: theme.colors.purple,
                                    // justifyContent: "space-between",
                                },
                            ]}>
                            <View style={styles.pageHeader}>
                                <AppText variant="bold" style={styles.pageTitle}>
                                    With insights made for you
                                </AppText>
                                <AppText style={styles.pageSubTitle}>
                                    Driplar analyzes your spending habits to help you keep a close eye on your finances.{" "}
                                </AppText>
                            </View>

                            <Image
                                height="200"
                                width={width}
                                resizeMode="stretch"
                                style={{ width, height: 500, borderWidth: 4 }}
                                source={require("../../../../assets/welcome-illustration-3.png")}
                            />
                        </View>
                    </Animated.ScrollView>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.bleytBtn}>
                        <BleytIcon style={styles.bleytBtnIcon} />
                        <AppText variant="medium">Continue with Bleyt</AppText>
                    </View>
                    <View style={styles.appBtn}>
                        <AppText variant="medium" style={styles.appBtnText}>
                            Continue with Email
                        </AppText>
                    </View>
                </View>
            </SafeAreaView>

            <SafeAreaView style={{ backgroundColor: "#111926" }} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#162235",
    },
    topView: {
        flex: 1,
    },
    pageIndicatorSection: {
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        right: 0,
        left: 0,
        top: 30,
        zIndex: 1000,
    },
    pageIndicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        backgroundColor: theme.colors.white,
    },
    logoText: {
        fontSize: 30,
        marginTop: 20,
        color: theme.colors.white,
    },
    bottomView: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: "#111926",
    },
    bleytBtn: {
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.offWhite,
    },
    bleytBtnIcon: {
        top: 10,
        left: 23,
        position: "absolute",
    },
    appBtn: {
        padding: 15,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.primary,
    },
    appBtnText: {
        color: theme.colors.white,
    },
    pageHeader: {
        padding: 30,
        marginTop: 50,
        paddingRight: 50,
    },
    pageTitle: {
        fontSize: 30,
        color: theme.colors.white,
    },
    pageSubTitle: {
        fontSize: 14,
        marginTop: 12,
        lineHeight: 20,
        color: theme.colors.white,
    },
});
