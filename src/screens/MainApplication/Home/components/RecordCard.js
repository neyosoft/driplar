import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import theme from "../../../../theme";
import { AppText } from "../../../../components";
import { moneyFormat } from "../../../../utils/money.utils";

export const RecordCard = ({ style, onPress, icon, title, description, amount }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Image source={icon} style={styles.image} />
            <View style={styles.centerView}>
                <AppText variant="medium" style={styles.title}>
                    {title}
                </AppText>
                <AppText style={styles.description}>{description}</AppText>
            </View>
            <AppText variant="medium" style={styles.amount}>
                {moneyFormat(amount)}
            </AppText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "#F0F0F0",
        justifyContent: "space-between",
    },
    image: {
        width: 50,
        height: 50,
    },
    centerView: {
        flex: 1,
        marginHorizontal: 13,
    },
    title: {
        fontSize: 14,
        color: theme.colors.primary,
    },
    description: {
        marginTop: 5,
        fontSize: 11,
        color: theme.colors.placeholder,
    },
    amount: {
        padding: 10,
        backgroundColor: "#EFEFEF",
        borderRadius: theme.radius.sm,
    },
});
