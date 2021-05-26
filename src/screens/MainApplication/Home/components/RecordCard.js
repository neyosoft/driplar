import React from "react";
import { View, StyleSheet } from "react-native";
import { ProductIcon } from "../../../../../assets/icons";

import theme from "../../../../theme";
import { AppText } from "../../../../components";

export const RecordCard = ({ style, onPress, icon, title, description, amount }) => {
    return (
        <View style={[styles.container, style]}>
            <ProductIcon />
            <View style={styles.centerView}>
                <AppText style={styles.title}>Home</AppText>
                <AppText style={styles.description}>7 transactions - 60% of income</AppText>
            </View>
            <AppText style={styles.amount}>N 127,568</AppText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    centerView: {
        flex: 1,
        marginHorizontal: 13,
    },
    title: {
        color: theme.colors.primary,
    },
    description: {
        marginTop: 5,
        color: theme.colors.placeholder,
    },
    amount: {
        padding: 10,
        backgroundColor: "#EFEFEF",
        borderRadius: theme.radius.sm,
    },
});
