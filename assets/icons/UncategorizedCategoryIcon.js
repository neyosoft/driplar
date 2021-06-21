import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export const UncategorizedCategoryIcon = props => {
    return (
        <Svg width={70} height={70} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M70 35c0 19.33-15.67 35-35 35S0 54.33 0 35 15.67 0 35 0s35 15.67 35 35z" fill="#F0F0F1" />
            <Rect x={30} y={13} width={9.155} height={26.548} rx={4.577} fill="#201E26" />
            <Rect x={30} y={45.04} width={9.66} height={11.27} rx={4.83} fill="#201E26" />
        </Svg>
    );
};
