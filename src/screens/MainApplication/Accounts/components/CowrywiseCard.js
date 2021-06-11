import React from "react";
import { View, TouchableOpacity } from "react-native";
import { CowrywiseRoundedIcon } from "../../../../../assets/icons";

import { cardStyles } from "./cardStyle";
import { AppText } from "../../../../components";

export const CowrywiseCard = ({ style }) => (
    <TouchableOpacity style={[cardStyles.container, { backgroundColor: "#97C2FF" }, style]}>
        <AppText variant="bold">Cowrywise</AppText>
        <View style={cardStyles.iconWrapper}>
            <CowrywiseRoundedIcon />
        </View>
    </TouchableOpacity>
);
