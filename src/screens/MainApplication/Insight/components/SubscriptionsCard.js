import React from "react";
import { View, TouchableOpacity } from "react-native";
import { SubscriptionCategoryIcon } from "../../../../../assets/icons/SubscriptionCategoryIcon";

import { AppText } from "../../../../components";
import { categoryCardStyle } from "./categoryCardStyle";

export const SubscriptionsCard = ({ style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[categoryCardStyle.container, { backgroundColor: "#AEB6FE" }, style]}>
        <AppText variant="bold">Subscriptions</AppText>
        <View style={categoryCardStyle.iconWrapper}>
            <SubscriptionCategoryIcon />
        </View>
    </TouchableOpacity>
);
