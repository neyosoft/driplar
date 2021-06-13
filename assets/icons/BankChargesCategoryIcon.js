import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const BankChargesCategoryIcon = props => {
    return (
        <Svg width={90} height={66} viewBox="0 0 90 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M90.636 68.09h-1.909V33.728h.806a6.83 6.83 0 002.535-13.173L63.241 9.024a13.65 13.65 0 00-10.126 0l-28.827 11.53a6.831 6.831 0 002.543 13.173h.805v34.364h-1.909A5.73 5.73 0 0020 73.818a5.73 5.73 0 005.727 5.727h64.91a5.73 5.73 0 005.727-5.727 5.73 5.73 0 00-5.728-5.727z"
                    fill="#C54EA3"
                />
                <Path
                    d="M57.628 26.893a5.174 5.174 0 100-10.347 5.174 5.174 0 000 10.347zM90.636 68.091c.672 0 1.31.137 1.91.351V32.998c-.913.45-1.925.73-3.013.73H81.09V68.09h9.545zM25.727 68.091h9.546V33.727H26.83c-1.088 0-2.1-.278-3.013-.729v35.444a5.663 5.663 0 011.91-.351z"
                    fill="#201E26"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(20 7)" d="M0 0h76.364v84H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
