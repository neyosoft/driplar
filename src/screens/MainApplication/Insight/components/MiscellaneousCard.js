import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MiscellaneousCategoryIcon } from "../../../../../assets/icons/MiscellaneousCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const MiscellaneousCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#B8FFF2" }, style]}>
        <AppText variant="bold">Miscellaneous</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <MiscellaneousCategoryIcon />
        </View>
    </TouchableOpacity>
);
