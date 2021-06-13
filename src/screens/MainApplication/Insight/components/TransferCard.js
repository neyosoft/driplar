import React from "react";
import { View, TouchableOpacity } from "react-native";
import { TransferCategoryIcon } from "../../../../../assets/icons/TransferCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const TransferCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#FFAC9A" }, style]}>
        <AppText variant="bold">Transfers</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <TransferCategoryIcon />
        </View>
    </TouchableOpacity>
);
