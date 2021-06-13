import React from "react";
import { View, TouchableOpacity } from "react-native";
import { EatingOutCategoryIcon } from "../../../../../assets/icons/EatingOutCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const EatingOutCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#C4F1FF" }, style]}>
        <AppText variant="bold">Eating Out</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <EatingOutCategoryIcon />
        </View>
    </TouchableOpacity>
);
