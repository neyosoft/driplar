import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const IncomeCategoryIcon = props => {
    return (
        <Svg width={91} height={66} viewBox="0 0 91 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M83.333 83H42.667C37.05 83 32.5 78.45 32.5 72.834V32.167h50.833c5.616 0 10.167 4.551 10.167 10.167v30.5C93.5 78.449 88.949 83 83.333 83z"
                    fill="#5BB49A"
                />
                <Path
                    d="M81.639 62.667a5.083 5.083 0 100-10.167 5.083 5.083 0 000 10.167zM32.5 32.167C32.5 26.55 37.051 22 42.667 22h30.5c5.615 0 10.166 4.551 10.166 10.167H32.5z"
                    fill="#201E26"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(32.5 22)" d="M0 0h61v61H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
