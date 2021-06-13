import React from "react";
import { View, TouchableOpacity } from "react-native";
import { GTBankRoundedIcon } from "../../../../../assets/icons";

import { cardStyles } from "./cardStyle";
import { AppText } from "../../../../components";

export const GTBankCard = ({ style, onPress, onLongPress }) => (
    <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={[cardStyles.container, { backgroundColor: "#FFA775" }, style]}>
        <AppText variant="bold">GTBank</AppText>
        <View style={cardStyles.iconWrapper}>
            <GTBankRoundedIcon />
        </View>
    </TouchableOpacity>
);
