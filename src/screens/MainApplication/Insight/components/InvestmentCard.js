import React from "react";
import { View, TouchableOpacity } from "react-native";
import { InvestmentCategoryIcon } from "../../../../../assets/icons/InvestmentCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const InvestmentCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#B8FFD0" }, style]}>
        <AppText variant="bold">Investment</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <InvestmentCategoryIcon />
        </View>
    </TouchableOpacity>
);
