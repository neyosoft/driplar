import React from "react";
import { View, TouchableOpacity } from "react-native";
import { SavingsCategoryIcon } from "../../../../../assets/icons/SavingsCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const SavingsCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#C9E5FF" }, style]}>
        <AppText variant="bold">Savings</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <SavingsCategoryIcon />
        </View>
    </TouchableOpacity>
);
