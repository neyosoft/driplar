import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const HomeIcon = props => {
    return (
        <Svg width={24} height={21} viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M4.798 20.92h5.485v-5.213a1.697 1.697 0 011.441-1.702 1.66 1.66 0 011.886 1.646v5.269h5.477a1.886 1.886 0 001.886-1.886V9.04l1.409 1.123a.81.81 0 001.16-.162.838.838 0 00-.188-1.128L12.446.174a.808.808 0 00-1.002 0L.334 8.875a.832.832 0 00-.226 1.078.807.807 0 001.196.229l1.617-1.26v10.112a1.886 1.886 0 001.877 1.886z"
                    fill="#201E26"
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
