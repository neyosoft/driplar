import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const DealOptionIcon = props => {
    return (
        <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M3.807 3.807c-5.076 5.077-5.076 13.309 0 18.385 5.077 5.077 13.308 5.077 18.385 0 5.077-5.076 5.077-13.308 0-18.385-5.076-5.076-13.308-5.076-18.385 0z"
                fill="#4B465A"
                fillOpacity={0.28}
            />
            <Path
                d="M6 15a2 2 0 100-4 2 2 0 000 4zM12.5 15a2 2 0 100-4 2 2 0 000 4zM19 15a2 2 0 100-4 2 2 0 000 4z"
                fill="#fff"
            />
        </Svg>
    );
};
