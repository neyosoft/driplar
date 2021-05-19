import React from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import theme from "../../../../theme";

export const SliderDot = ({ width, index, position }) => {
  const animatedStyle = useAnimatedStyle(() => {
    console.log({ width, index, position });
    return {
      backgroundColor: interpolateColor(
        position.value,
        [(index - 1) * width, index * width, (index + 1) * width],
        ["rgb(255, 255, 255)", "rrgba(32, 30, 38, 0.75)", "rgb(255, 255, 255)"],
        "RGB",
      ),
    };
  });

  return <Animated.View style={[styles.pageIndicator, animatedStyle]} />;
};

const styles = StyleSheet.create({
  pageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: theme.colors.white,
  },
});
