import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const StopDealIcon = props => {
    return (
        <Svg width={16} height={20} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M12.727 4.545c-.332 0-.64.096-.909.252v-.252A1.819 1.819 0 0010 2.726c-.333 0-.64.097-.91.253v-.253a1.819 1.819 0 00-3.635 0v.253a1.798 1.798 0 00-.91-.253 1.819 1.819 0 00-1.818 1.819v4.712a2.693 2.693 0 00-.909-.167.91.91 0 00-.909.91v4.545a2.727 2.727 0 002.727 2.727h.91l7.936 1.818c1.14 0 2.064-.924 2.064-2.064V6.363a1.819 1.819 0 00-1.819-1.818z"
                    stroke="#201E26"
                    strokeWidth={1.4}
                />
                <Path d="M14.09 17.273H3.183a1.364 1.364 0 000 2.728H14.09a1.364 1.364 0 000-2.728z" fill="#201E26" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" d="M0 0h15.454v20H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
