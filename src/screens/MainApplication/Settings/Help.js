import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet, TouchableOpacity, ScrollView, TextInput as AppTextInput, Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import LottieView from "lottie-react-native";

import Animated, {
    runOnJS,
    withTiming,
    interpolate,
    useSharedValue,
    useAnimatedStyle,
    interpolateColor,
} from "react-native-reanimated";

import theme from "../../../theme";
import { AppText, TwoColumnTab, Button } from "../../../components";

const { height } = Dimensions.get("window");

export const Help = ({ navigation }) => {
    const modalAnimation = useSharedValue(0);
    const [showModal, setShowModal] = useState(false);
    const [currentTab, setCurrentTab] = useState("FAQs");

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

    const renderContent = () => {
        if (currentTab === "FAQs") {
            return (
                <View>
                    <RectButton style={styles.rowItem}>
                        <AppText variant="medium" style={styles.topLabel}>
                            What is Driplar?
                        </AppText>
                        <Icon name="plus" color="#B1AEB8" size={15} />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <AppText variant="medium" style={styles.topLabel}>
                            Is my banking account safe?
                        </AppText>
                        <Icon name="plus" color="#B1AEB8" size={15} />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <AppText variant="medium" style={styles.topLabel}>
                            How does Driplar work?
                        </AppText>
                        <Icon name="plus" color="#B1AEB8" size={15} />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <AppText variant="medium" style={styles.topLabel}>
                            How is my data used?
                        </AppText>
                        <Icon name="plus" color="#B1AEB8" size={15} />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <AppText variant="medium" style={styles.topLabel}>
                            Can Driplar process transactions?
                        </AppText>
                        <Icon name="plus" color="#B1AEB8" size={15} />
                    </RectButton>
                </View>
            );
        } else {
            return (
                <>
                    <View style={styles.form}>
                        <TextInput
                            label="First name"
                            style={styles.formGroup}
                            underlineColor="transparent"
                            theme={{ colors: { background: "#fff" } }}
                        />
                        <TextInput
                            label="Email"
                            style={styles.formGroup}
                            underlineColor="transparent"
                            theme={{ colors: { background: "#fff" } }}
                        />

                        <AppTextInput
                            multiline={true}
                            textAlignVertical="top"
                            style={styles.formTextarea}
                            placeholder="Send us your questions, feedback or suggestions."
                        />

                        <View style={styles.addImageBox}>
                            <Icon name="plus" size={20} color={theme.colors.label} />
                        </View>

                        <Button label="Submit" style={styles.formBtn} onPress={openModal} />
                    </View>
                </>
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Icon name="chevron-left" size={25} />
                </TouchableOpacity>

                <AppText variant="bold" style={styles.headerTitle}>
                    Help
                </AppText>
            </View>

            <ScrollView>
                <View style={styles.pageContent}>
                    <TwoColumnTab
                        value={currentTab}
                        style={styles.tabs}
                        onChange={setCurrentTab}
                        options={["FAQs", "Contact us"]}
                    />
                    {renderContent()}
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
                            <View style={styles.handle} />

                            <LottieView
                                autoPlay
                                style={{ width: 100 }}
                                source={require("../../../../assets/lottie/success.json")}
                            />

                            <AppText variant="medium" style={styles.topContentTitle}>
                                Message sent!
                            </AppText>
                            <AppText style={styles.topContentDescription}>
                                Thank you for contacting us. We’ll get back to you really soon.
                            </AppText>
                            <View style={styles.buttonBox}>
                                <Button label="Okay" style={styles.cancelBtn} onPress={closeModal} />
                            </View>
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
        padding: 20,
    },
    headerTitle: {
        fontSize: 22,
        marginTop: 15,
    },
    pageContent: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    rowItem: {
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        justifyContent: "space-between",
        borderBottomColor: theme.colors.line,
    },
    topLabel: {
        color: theme.colors.primary,
    },

    tabs: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
    form: {
        marginHorizontal: 20,
    },
    formGroup: {
        marginTop: 20,
    },
    formTextarea: {
        padding: 20,
        height: 200,
        marginTop: 20,
        color: theme.colors.primary,
        backgroundColor: "#F8F7F8",
    },
    formBtn: {
        marginVertical: 30,
    },
    addImageBox: {
        width: 55,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F0F0F0",
    },
    overlay: {
        ...StyleSheet.absoluteFill,
        justifyContent: "flex-end",
    },
    overlayContent: {
        alignItems: "center",
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: theme.radius.md,
        borderTopRightRadius: theme.radius.md,
    },
    handle: {
        width: 50,
        height: 4,
        marginTop: 10,
        marginBottom: 30,
        borderRadius: 20,
        backgroundColor: "#C7C7CC",
    },
    topContentTitle: {
        fontSize: 22,
    },
    topContentDescription: {
        marginTop: 10,
        lineHeight: 20,
        width: "70%",
        textAlign: "center",
        color: theme.colors.label,
    },
    buttonBox: {
        width: "90%",
        marginTop: 20,
        marginVertical: 30,
    },
    cancelBtn: {
        marginTop: 8,
    },
});
