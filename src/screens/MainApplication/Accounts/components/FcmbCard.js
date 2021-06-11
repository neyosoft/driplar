import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FcmbRoundedIcon } from "../../../../../assets/icons";

import { cardStyles } from "./cardStyle";
import { AppText } from "../../../../components";

export const FcmbCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[cardStyles.container, { backgroundColor: "#D292FF" }, style]}>
        <AppText variant="bold">FCMB</AppText>
        <View style={cardStyles.iconWrapper}>
            <FcmbRoundedIcon />
        </View>
    </TouchableOpacity>
);
