import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const ShareMessageIcon = props => {
    return (
        <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M14 0a14 14 0 100 28 14 14 0 000-28z" fill="#5FEB5C" />
            <Path
                d="M15.504 6.158a7.28 7.28 0 00-8.345 6.03 7.244 7.244 0 00.236 3.302l-1.187 2.772a.91.91 0 00.913 1.265l3.005-.257a7.244 7.244 0 003.061 1.262 7.28 7.28 0 102.317-14.374z"
                fill="#FEFEFF"
            />
        </Svg>
    );
};
