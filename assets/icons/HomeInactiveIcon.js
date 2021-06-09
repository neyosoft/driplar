import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const HomeInactiveIcon = props => {
    return (
        <Svg width={24} height={21} viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M5.264 20.955h4.557a1.05 1.05 0 001.05-1.05v-4.347a1.355 1.355 0 112.707 0v4.347a1.05 1.05 0 001.05 1.05h4.56a2.1 2.1 0 002.1-2.1V9.668l.944.753a1.05 1.05 0 101.313-1.64L12.879.263a1.05 1.05 0 00-1.312 0L.726 8.77a1.05 1.05 0 101.294 1.654l1.142-.895v9.326a2.1 2.1 0 002.102 2.1zM12.22 2.431l6.967 5.557v10.867H15.68v-3.297a3.454 3.454 0 10-6.906 0v3.297h-3.51V7.875l6.956-5.444z"
                    fill="#8B8B8D"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(.056)" d="M0 0h23.887v21H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
