import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const ShoppingCategoryIcon = props => {
    return (
        <Svg width={91} height={66} viewBox="0 0 91 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M28.039 22.052a6.76 6.76 0 014.964-2.177h53.069l.371-2.805C87 12.9 90.594 9.75 94.806 9.75h2.319a3.372 3.372 0 013.375 3.375 3.372 3.372 0 01-3.375 3.375h-2.319c-.843 0-1.562.631-1.674 1.465l-5.187 38.907c-.776 5.845-5.808 10.253-11.704 10.253H40.475c-6.096 0-11.266-4.755-11.772-10.83l-2.43-29.113a6.78 6.78 0 011.765-5.13z"
                    fill="#DB588D"
                />
                <Path
                    d="M73.5 73.875a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5zM43.125 73.875a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5zM49.875 30H66.75a3.376 3.376 0 010 6.75H49.875a3.376 3.376 0 010-6.75z"
                    fill="#201E26"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="matrix(-1 0 0 1 100.5 3)" d="M0 0h81v81H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
