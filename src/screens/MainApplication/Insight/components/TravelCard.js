import React from "react";
import { View, TouchableOpacity } from "react-native";
import { TravelCategoryIcon } from "../../../../../assets/icons";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const TravelCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#F3FFA6" }, style]}>
        <AppText variant="bold">Travel</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <TravelCategoryIcon />
        </View>
    </TouchableOpacity>
);
