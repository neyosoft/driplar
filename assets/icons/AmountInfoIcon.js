import * as React from "react";
import Svg, { Circle, Rect, Path } from "react-native-svg";

export const AmountInfoIcon = props => {
    return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Circle cx={8} cy={8} r={8} fill="#4D4B52" fillOpacity={0.7} />
            <Rect x={7} y={6} width={2} height={7} rx={1} fill="#FEFEFF" />
            <Path
                d="M7.961 4.966C7.39 4.966 7 4.544 7 3.983 7 3.41 7.4 3 7.961 3c.583 0 .962.41.972.983 0 .561-.389.983-.972.983z"
                fill="#FEFEFF"
            />
        </Svg>
    );
};
