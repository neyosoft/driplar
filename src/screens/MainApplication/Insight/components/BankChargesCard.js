import React from "react";
import { View, TouchableOpacity } from "react-native";
import { BankChargesCategoryIcon } from "../../../../../assets/icons/BankChargesCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const BankChargesCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#FFABF7" }, style]}>
        <AppText variant="bold">Bank charges</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <BankChargesCategoryIcon />
        </View>
    </TouchableOpacity>
);
