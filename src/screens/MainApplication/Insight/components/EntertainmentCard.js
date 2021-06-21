import React from "react";
import { View, TouchableOpacity } from "react-native";
import { EntertainmentCategoryIcon } from "../../../../../assets/icons/EntertainmentCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const EntertainmentCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#98BBFF" }, style]}>
        <AppText variant="bold">Entertainment</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <EntertainmentCategoryIcon width={60} height={50} />
        </View>
    </TouchableOpacity>
);
