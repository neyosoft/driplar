import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import theme from "../../../theme";
import { RecordCard } from "../Home/components";
import UberLogo from "../../../../assets/UberLogo.png";
import { moneyFormat } from "../../../utils/money.utils";
import { AppText, ThreeColumnTab } from "../../../components";
import ProductImage from "../../../../assets/ProductImageOne.png";

const chartData = {
    labels: ["NOV", "DEC", "JAN", "FEB", "MAR", "APR", "NOV", "DEC", "JAN", "FEB", "MAR", "APR"],
    datasets: [
        {
            data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
            ],
        },
    ],
};

const renderCategoryItem = value => {
    switch (value) {
        case "Transactions":
            return (
                <>
                    <RecordCard
                        amount={34660}
                        title="Shopping"
                        icon={ProductImage}
                        style={styles.cardItem}
                        description="Apr 7"
                    />
                    <RecordCard
                        title="Uber"
                        amount={12500}
                        icon={UberLogo}
                        style={styles.cardItem}
                        description="Apr 5"
                    />
                    <RecordCard
                        amount={25000}
                        title="Shopping"
                        icon={ProductImage}
                        style={styles.cardItem}
                        description="Apr 1"
                    />
                </>
            );
            break;

        case "Category":
            return (
                <>
                    <RecordCard
                        title="Uber"
                        amount={50000}
                        icon={UberLogo}
                        style={styles.cardItem}
                        description="2 transactions"
                    />
                    <RecordCard
                        amount={35000}
                        title="Shopping"
                        icon={ProductImage}
                        style={styles.cardItem}
                        description="26 transactions"
                    />
                    <RecordCard
                        title="Uber"
                        amount={150000}
                        icon={UberLogo}
                        style={styles.cardItem}
                        description="7 transactions"
                    />
                </>
            );
            break;
        case "Accounts":
            return (
                <>
                    <RecordCard
                        title="Uber"
                        amount={40500}
                        icon={UberLogo}
                        style={styles.cardItem}
                        description="4 transactions"
                    />
                    <RecordCard
                        amount={25000}
                        title="Shopping"
                        icon={ProductImage}
                        style={styles.cardItem}
                        description="19 transactions"
                    />
                    <RecordCard
                        title="Uber"
                        amount={12500}
                        icon={UberLogo}
                        style={styles.cardItem}
                        description="3 transactions"
                    />
                </>
            );
            break;

        default:
            break;
    }
};

export const Overview = ({ navigation }) => {
    const [selected, setSelected] = useState("Transactions");
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
                    <Icon name="chevron-left" size={30} color={theme.colors.black} />
                </TouchableOpacity>
                <AppText variant="medium" style={styles.overviewTitle}>
                    Overview
                </AppText>
            </View>
            <ScrollView style={{ backgroundColor: theme.colors.white }}>
                <View style={styles.analyticsBox}>
                    <View style={{ padding: 22 }}>
                        <AppText variant="medium" style={styles.amount}>
                            {moneyFormat(630390)}
                        </AppText>
                        <AppText variant="medium" style={styles.amountDescriptionStyle}>
                            Total balance - 5 mins ago
                        </AppText>
                    </View>
                    <ScrollView horizontal={true}>
                        <LineChart
                            bezier
                            height={200}
                            yAxisLabel="₦"
                            fromZero={true}
                            withDots={false}
                            data={chartData}
                            withInnerLines={false}
                            withOuterLines={false}
                            withHorizontalLabels={false}
                            style={{ marginVertical: 10, marginLeft: -64 }}
                            width={Dimensions.get("window").width * Math.round(chartData.labels.length / 5)}
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
                    </ScrollView>
                </View>

                <ThreeColumnTab
                    value={selected}
                    onChange={setSelected}
                    options={["Transactions", "Category", "Accounts"]}
                />

                <View style={styles.dateSelectionView}>
                    <View style={[styles.monthBtn, styles.activeMonth]}>
                        <AppText variant="medium" style={[styles.monthBtnText, styles.monthBtnActiveText]}>
                            Aprl
                        </AppText>
                    </View>
                    <View style={styles.monthBtn}>
                        <AppText style={styles.monthBtnText}>May</AppText>
                    </View>
                    <View style={styles.monthBtn}>
                        <AppText style={styles.monthBtnText}>2021</AppText>
                    </View>
                    <View style={styles.monthBtn}>
                        <AppText style={styles.monthBtnText}>Custom</AppText>
                    </View>
                </View>

                <View style={styles.itemListWrapper}>{renderCategoryItem(selected)}</View>
            </ScrollView>
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

    dateSelectionView: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        justifyContent: "space-between",
    },
    monthBtn: {
        width: "23%",
        paddingVertical: 10,
        alignItems: "center",
        backgroundColor: "#F1F1F3",
        borderRadius: theme.radius.sm,
    },
    activeMonth: {
        backgroundColor: theme.colors.black,
    },
    monthBtnText: {
        color: theme.colors.placeholder,
    },
    monthBtnActiveText: {
        color: theme.colors.white,
    },
    itemListWrapper: {
        borderWidth: 0.5,
        margin: 10,
        padding: 10,
        borderColor: "#DCDBDB",
        borderRadius: theme.radius.sm,
    },
});
