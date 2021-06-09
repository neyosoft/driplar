import * as React from "react";
import Svg, { Rect, Mask, G, Path } from "react-native-svg";

export const CategoryThree = props => {
    return (
        <Svg width={11} height={106} viewBox="0 0 11 106" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Rect x={0.5} y={0.5} width={162} height={105} rx={7.5} fill="#FAFAFC" stroke="#F2F3F4" />
            <Mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={163} height={106}>
                <Rect x={0.5} y={0.5} width={162} height={105} rx={7.5} fill="#FAFAFC" stroke="#F2F3F4" />
            </Mask>
            <G mask="url(#prefix__a)">
                <Path d="M0 8a8 8 0 018-8h147a8 8 0 018 8v90a8 8 0 01-8 8H8a8 8 0 01-8-8V8z" fill="#EDA0E5" />
            </G>
        </Svg>
    );
};
