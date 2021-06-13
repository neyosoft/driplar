import React from "react";
import { View, TouchableOpacity } from "react-native";
import { CashCategoryIcon } from "../../../../../assets/icons/CashCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const CashCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#DBFFBF" }, style]}>
        <AppText variant="bold">Cash</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <CashCategoryIcon />
        </View>
    </TouchableOpacity>
);
