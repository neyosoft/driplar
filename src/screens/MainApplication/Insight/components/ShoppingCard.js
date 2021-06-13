import React from "react";
import { View, TouchableOpacity } from "react-native";
import { ShoppingCategoryIcon } from "../../../../../assets/icons";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const ShoppingCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#FFABCD" }, style]}>
        <AppText variant="bold">Shopping</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <ShoppingCategoryIcon />
        </View>
    </TouchableOpacity>
);
