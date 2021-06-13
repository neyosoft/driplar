import React from "react";
import { View, TouchableOpacity } from "react-native";
import { CharityCategoryIcon } from "../../../../../assets/icons/CharityCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const CharityCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#FFF8B8" }, style]}>
        <AppText variant="bold">Charity</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <CharityCategoryIcon />
        </View>
    </TouchableOpacity>
);
