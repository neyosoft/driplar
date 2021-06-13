import React from "react";
import { View, TouchableOpacity } from "react-native";
import { TransportCategoryIcon } from "../../../../../assets/icons";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const TransportCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#C8CAFF" }, style]}>
        <AppText variant="bold">Groceries</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <TransportCategoryIcon />
        </View>
    </TouchableOpacity>
);
