import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const EntertainmentCategoryIcon = props => {
    return (
        <Svg width={90} height={70} viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M5.55.835h25.9A5.55 5.55 0 0137 6.385v18.5a5.55 5.55 0 01-5.55 5.55H5.55A5.55 5.55 0 010 24.885v-18.5A5.55 5.55 0 015.55.835z"
                    fill="#5678B9"
                />
                <Path
                    d="M24.152 14.096l-8.325-5.55a1.849 1.849 0 00-2.877 1.54v11.1a1.85 1.85 0 002.877 1.538l8.325-5.55a1.852 1.852 0 000-3.078zM31.45 17.485a1.85 1.85 0 100-3.7 1.85 1.85 0 000 3.7zM31.45 10.085a1.85 1.85 0 100-3.7 1.85 1.85 0 000 3.7z"
                    fill="#201E26"
                />
                <Path d="M31.45 24.885a1.85 1.85 0 100-3.7 1.85 1.85 0 000 3.7z" fill="#000" />
                <Path
                    d="M5.55 17.485a1.85 1.85 0 100-3.7 1.85 1.85 0 000 3.7zM5.55 10.085a1.85 1.85 0 100-3.7 1.85 1.85 0 000 3.7zM5.55 24.885a1.85 1.85 0 100-3.7 1.85 1.85 0 000 3.7z"
                    fill="#201E26"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(0 .835)" d="M0 0h37v29.6H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
