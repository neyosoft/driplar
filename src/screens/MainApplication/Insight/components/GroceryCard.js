import React from "react";
import { View, TouchableOpacity } from "react-native";
import { GroceryCategoryIcon } from "../../../../../assets/icons";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const GroceryCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#FFEAC4" }, style]}>
        <AppText variant="bold">Groceries</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <GroceryCategoryIcon />
        </View>
    </TouchableOpacity>
);
