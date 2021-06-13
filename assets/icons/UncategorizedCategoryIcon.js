import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export const UncategorizedCategoryIcon = props => {
    return (
        <Svg width={90} height={66} viewBox="0 0 90 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M92 41c0 19.33-15.67 35-35 35S22 60.33 22 41 37.67 6 57 6s35 15.67 35 35z" fill="#F0F0F1" />
            <Rect x={52} y={19} width={9.155} height={26.548} rx={4.577} fill="#201E26" />
            <Rect x={52} y={51.04} width={9.66} height={11.27} rx={4.83} fill="#201E26" />
        </Svg>
    );
};
