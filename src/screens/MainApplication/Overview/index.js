import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { LineChart } from "react-native-chart-kit";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

import theme from "../../../theme";
import { AppText } from "../../../components";
import { moneyFormat } from "../../../utils/money.utils";

export const Overview = () => {
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Icon name="chevron-left" size={30} color={theme.colors.black} />
                </TouchableOpacity>
                <AppText variant="medium" style={styles.overviewTitle}>
                    Overview
                </AppText>
            </View>
            <View style={styles.analyticsBox}>
                <View style={{ padding: 22 }}>
                    <AppText variant="medium" style={styles.amount}>
                        {moneyFormat(630390)}
                    </AppText>
                    <AppText variant="medium" style={styles.amountDescriptionStyle}>
                        Total balance - 5 mins ago
                    </AppText>
                </View>
                <LineChart
                    bezier
                    height={200}
                    yAxisLabel="₦"
                    fromZero={true}
                    withDots={true}
                    withInnerLines={false}
                    withOuterLines={false}
                    withHorizontalLabels={false}
                    width={Dimensions.get("window").width + 60}
                    style={{ marginVertical: 10, marginLeft: -40 }}
                    data={{
                        labels: ["NOV", "DEC", "JAN", "FEB", "MAR", "APR"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                ],
                            },
                        ],
                    }}
                    chartConfig={{
                        strokeWidth: 2,
                        decimalPlaces: 2,
                        backgroundColor: "white",
                        color: () => "#9C88EE",
                        labelColor: () => "#797383",
                        style: { borderRadius: 16 },
                        fillShadowGradientOpacity: 1,
                        fillShadowGradient: "#47368D",
                        backgroundGradientTo: "#FAFAFA",
                        backgroundGradientFrom: "#FAFAFA",
                        backgroundGradientToOpacity: 1,
                        propsForDots: { r: "5", strokeWidth: "5", stroke: "#9C88EE" },
                    }}
                    decorator={() => {
                        return tooltipPos.visible ? (
                            <View>
                                <Svg>
                                    <Rect
                                        x={tooltipPos.x - 15}
                                        y={tooltipPos.y + 10}
                                        width="60"
                                        height="30"
                                        fill="black"
                                    />
                                    <TextSVG
                                        x={tooltipPos.x + 5}
                                        y={tooltipPos.y + 30}
                                        fill="white"
                                        fontSize="14"
                                        fontWeight="bold"
                                        textAnchor="middle">
                                        {tooltipPos.value}
                                    </TextSVG>
                                </Svg>
                            </View>
                        ) : null;
                    }}
                    onDataPointClick={data => {
                        let isSamePoint = tooltipPos.x === data.x && tooltipPos.y === data.y;

                        isSamePoint
                            ? setTooltipPos(previousState => {
                                  return {
                                      ...previousState,
                                      value: 500 || data.value,
                                      visible: !previousState.visible,
                                  };
                              })
                            : setTooltipPos({ x: data.x, value: 500 || data.value, y: data.y, visible: true });
                    }}
                />
            </View>

            <View style={styles.switchView}>
                <View style={styles.switcherSelectedView}>
                    <AppText style={styles.switcherSelectedText}>Transactions</AppText>
                </View>
                <AppText style={styles.switcherText}>Categories</AppText>
                <AppText style={styles.switcherText}>Accounts</AppText>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    header: {
        padding: 20,
    },
    backButton: {
        alignSelf: "flex-start",
    },
    overviewTitle: {
        marginTop: 10,
        fontSize: 22,
    },
    analyticsBox: {
        backgroundColor: "#FAFAFA",
    },
    amount: {
        fontSize: 40,
        color: theme.colors.black,
    },
    amountDescriptionStyle: {
        marginTop: 10,
        fontSize: 12,
        color: "#797383",
        borderRadius: theme.radius.sm,
    },
    switchView: {
        padding: 5,
        marginTop: 25,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        borderRadius: theme.radius.sm,
        justifyContent: "space-between",
        backgroundColor: "rgba(171, 169, 174, 0.2)",
    },
    switcherSelectedView: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: theme.radius.sm,
        backgroundColor: theme.colors.white,
    },
    switcherSelectedText: {
        fontSize: 14,
        color: theme.colors.primary,
    },
    switcherText: {
        fontSize: 14,
        color: "#797383",
    },
});
