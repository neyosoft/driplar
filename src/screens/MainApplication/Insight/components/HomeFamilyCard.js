import React from "react";
import { View, TouchableOpacity } from "react-native";
import { HomeFamilyCategoryIcon } from "../../../../../assets/icons/HomeFamilyCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const HomeFamilyCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#FFDAB8" }, style]}>
        <AppText variant="bold">Home & Family</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <HomeFamilyCategoryIcon />
        </View>
    </TouchableOpacity>
);
