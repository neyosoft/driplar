import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Animated, {
    runOnJS,
    withTiming,
    interpolate,
    useSharedValue,
    useAnimatedStyle,
    interpolateColor,
} from "react-native-reanimated";

const { height } = Dimensions.get("window");

import { AppText, Button } from "../../../components";
import theme from "../../../theme";

export const EditProfile = ({ navigation }) => {
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
            <View style={styles.header}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Icon name="chevron-left" size={25} />
                </TouchableOpacity>

                <AppText variant="bold" style={styles.headerTitle}>
                    Edit Profile
                </AppText>
            </View>

            <ScrollView>
                <View style={styles.pageContent}>
                    <View style={styles.pictureBox}>
                        <Image source={require("../../../../assets/avatar.png")} style={styles.avatar} />
                        <Button
                            variant="secondary"
                            label="Change photo"
                            style={styles.changePhotoBtn}
                            labelStyle={styles.changePhotoBtnText}
                        />
                    </View>

                    <RectButton style={styles.rowItem}>
                        <View>
                            <AppText style={styles.topLabel}>First name</AppText>
                            <AppText variant="medium" style={styles.bottomLabel}>
                                Emmanuel
                            </AppText>
                        </View>
                        <Icon name="chevron-right" color="#B1AEB8" size={25} />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <View>
                            <AppText style={styles.topLabel}>Last name</AppText>
                            <AppText variant="medium" style={styles.bottomLabel}>
                                Obagunwa
                            </AppText>
                        </View>
                        <Icon name="chevron-right" color="#B1AEB8" size={25} />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <View>
                            <AppText style={styles.topLabel}>Email</AppText>
                            <AppText variant="medium" style={styles.bottomLabel}>
                                access2emma@gmail.com
                            </AppText>
                        </View>
                        <Icon name="chevron-right" color="#B1AEB8" size={25} />
                    </RectButton>
                    <RectButton style={styles.rowItem}>
                        <View>
                            <AppText style={styles.topLabel}>Phone number</AppText>
                            <AppText variant="medium" style={styles.bottomLabel}>
                                08056347833
                            </AppText>
                        </View>
                        <Icon name="chevron-right" color="#B1AEB8" size={25} />
                    </RectButton>

                    <Button
                        onPress={openModal}
                        variant="secondary"
                        style={styles.button}
                        label="Delete account"
                        labelStyle={styles.buttonText}
                    />
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
                        <Animated.View style={modalContentStyle}>
                            <View style={styles.topContent}>
                                <View style={styles.handle} />

                                <AppText variant="medium" style={styles.topContentTitle}>
                                    Delete account?
                                </AppText>
                                <AppText style={styles.topContentDescription}>
                                    All your insights and accounts will be deleted. This action cannot be undone.
                                </AppText>

                                <View style={styles.buttonBox}>
                                    <Button
                                        variant="secondary"
                                        label="Delete account"
                                        style={styles.deleteBtn}
                                        labelStyle={{ color: "#fff" }}
                                    />

                                    <Button
                                        label="Cancel"
                                        variant="secondary"
                                        onPress={closeModal}
                                        style={styles.cancelBtn}
                                    />
                                </View>
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
        backgroundColor: "#FAFAFA",
    },
    pictureBox: {
        marginTop: 40,
        alignItems: "center",
    },
    avatar: {
        width: 130,
        height: 130,
    },
    changePhotoBtn: {
        marginTop: 10,
        paddingVertical: 10,
        marginBottom: 40,
    },
    changePhotoBtnText: {
        fontSize: 13,
        fontFamily: "Metropolis-Medium",
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
        fontSize: 13,
        color: theme.colors.placeholder,
    },
    bottomLabel: {
        marginTop: 7,
    },
    button: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    buttonText: {
        color: theme.colors.danger,
        fontFamily: "Metropolis-Medium",
    },
    overlay: {
        ...StyleSheet.absoluteFill,
        justifyContent: "flex-end",
    },
    topContent: {
        alignItems: "center",
        borderTopLeftRadius: theme.radius.md,
        borderTopRightRadius: theme.radius.md,
        backgroundColor: theme.colors.white,
    },
    handle: {
        width: 50,
        backgroundColor: "#C7C7CC",
        borderRadius: 20,
        height: 4,
        marginTop: 10,
        marginBottom: 30,
    },
    topContentTitle: {
        fontSize: 22,
    },
    topContentDescription: {
        width: "85%",
        marginTop: 10,
        textAlign: "center",
        color: theme.colors.label,
    },
    buttonBox: {
        width: "90%",
        marginVertical: 30,
    },
    deleteBtn: {
        backgroundColor: theme.colors.danger,
    },
    cancelBtn: {
        marginTop: 10,
    },
});
