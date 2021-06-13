import React from "react";
import { View, TouchableOpacity } from "react-native";
import { UncategorizedCategoryIcon } from "../../../../../assets/icons/UncategorizedCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const UncategorizedCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#FBFBFB" }, style]}>
        <AppText variant="bold">Uncategorized</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <UncategorizedCategoryIcon />
        </View>
    </TouchableOpacity>
);
