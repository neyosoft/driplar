import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";

export const DealBackIcon = props => {
    return (
        <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M3.807 3.807c-5.076 5.077-5.076 13.309 0 18.385 5.077 5.077 13.308 5.077 18.385 0 5.077-5.076 5.077-13.308 0-18.385-5.076-5.076-13.308-5.076-18.385 0z"
                fill="#4B465A"
                fillOpacity={0.28}
            />
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M14.535 19.58a.802.802 0 01-.57-.24l-5.47-5.48a1.654 1.654 0 01-.362-.543 1.706 1.706 0 01.361-1.837L13.966 6a.82.82 0 01.59-.262.794.794 0 01.592.26.858.858 0 01.23.623.88.88 0 01-.273.604L9.669 12.67l5.436 5.446a.881.881 0 01.192.932.846.846 0 01-.302.387.798.798 0 01-.46.144z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="rotate(90 6.985 11.985)" d="M0 0h14.97v14.97H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
