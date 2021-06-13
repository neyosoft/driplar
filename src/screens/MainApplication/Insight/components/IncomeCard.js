import React from "react";
import { View, TouchableOpacity } from "react-native";
import { IncomeCategoryIcon } from "../../../../../assets/icons";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const IncomeCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#C4FFEE" }, style]}>
        <AppText variant="bold">Income</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <IncomeCategoryIcon />
        </View>
    </TouchableOpacity>
);
