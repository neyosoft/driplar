import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const ThumbsDownIcon = props => {
    return (
        <Svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Svg width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <G clipPath="url(#prefix__clip0)">
                    <Path
                        d="M15.336 4.467A4.545 4.545 0 0010.9.908H4.545A3.637 3.637 0 00.91 4.545v6.363c0 .947.484 1.78 1.217 2.27l2.6 5.207a1.272 1.272 0 001.706.57 3.163 3.163 0 001.56-3.91l-.514-1.41h6.158a2.727 2.727 0 002.728-2.727V9.09l-1.028-4.623z"
                        stroke="#201E26"
                        strokeWidth={1.4}
                    />
                    <Path d="M2.727 2.272v10a1.364 1.364 0 01-2.727 0v-10a1.364 1.364 0 012.727 0z" fill="#201E26" />
                </G>
                <Defs>
                    <ClipPath id="prefix__clip0">
                        <Path fill="#fff" d="M0 0h17.273v20H0z" />
                    </ClipPath>
                </Defs>
            </Svg>
        </Svg>
    );
};
