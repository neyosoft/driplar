import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const HomeFamilyCategoryIcon = props => {
    return (
        <Svg width={90} height={66} viewBox="0 0 90 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M78.667 44H49.333v33h29.334V44zM78.666 33c6.076 0 11-4.925 11-11s-4.924-11-11-11c-6.075 0-11 4.925-11 11s4.925 11 11 11zM49.334 33c6.075 0 11-4.925 11-11s-4.925-11-11-11c-6.076 0-11 4.925-11 11s4.924 11 11 11z"
                    fill="#BD7E44"
                />
                <Path
                    d="M82.333 40.333H45.667C37.567 40.333 31 46.9 31 55v7.333C31 70.433 37.567 77 45.667 77H53v-3.667A7.331 7.331 0 0160.333 66h7.334A7.331 7.331 0 0175 73.333V77h7.333C90.433 77 97 70.433 97 62.333V55c0-8.1-6.567-14.667-14.667-14.667zM64 62.333A7.331 7.331 0 0156.667 55 7.331 7.331 0 0164 47.666 7.331 7.331 0 0171.333 55 7.331 7.331 0 0164 62.333z"
                    fill="#030303"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(31 11)" d="M0 0h66v66H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
