import React from "react";
import { View, TouchableOpacity } from "react-native";
import { HealthCategoryIcon } from "../../../../../assets/icons/HealthCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const HealthCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#FFA9A6" }, style]}>
        <AppText variant="bold">Health</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <HealthCategoryIcon />
        </View>
    </TouchableOpacity>
);
