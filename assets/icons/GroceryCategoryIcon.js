import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const GroceryCategoryIcon = props => {
    return (
        <Svg width={91} height={66} viewBox="0 0 91 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M94.976 28.62H40.31a7.807 7.807 0 00-7.81 7.809v46.857C32.5 89.756 37.744 95 44.214 95h46.857c6.47 0 11.715-5.244 11.715-11.714V36.429a7.808 7.808 0 00-7.81-7.81z"
                    fill="#CBA156"
                />
                <Path
                    d="M81.31 52.047a5.857 5.857 0 100-11.714 5.857 5.857 0 000 11.714zM53.976 52.047a5.857 5.857 0 100-11.714 5.857 5.857 0 000 11.714zM41.664 28.619h25.342l-9.363-9.453a4.655 4.655 0 00-6.615 0l-9.364 9.453z"
                    fill="#000"
                />
                <Path d="M57.283 28.619h33.788l-14.47-14.608a3.41 3.41 0 00-4.846 0L57.284 28.62z" fill="#000" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(32.5 13)" d="M0 0h70.286v82H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
