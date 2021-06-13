import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FcmbRoundedIcon } from "../../../../../assets/icons";

import { cardStyles } from "./cardStyle";
import { AppText } from "../../../../components";

export const FcmbCard = ({ style, onPress, onLongPress }) => (
    <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={[cardStyles.container, { backgroundColor: "#D292FF" }, style]}>
        <AppText variant="bold">FCMB</AppText>
        <View style={cardStyles.iconWrapper}>
            <FcmbRoundedIcon />
        </View>
    </TouchableOpacity>
);
