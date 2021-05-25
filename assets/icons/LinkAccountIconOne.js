import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg";

export const LinkAccountIconOne = props => {
    return (
        <Svg width={54} height={55} viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Circle cx={27} cy={27.88} fill="#F0F0F0" r={27} />
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M32.571 17.071H22.286S12 22.214 12 34.214C12 42.736 18.907 44.5 27.429 44.5c8.521 0 15.428-1.764 15.428-10.286 0-12-10.286-17.143-10.286-17.143z"
                    fill="#5BB49A"
                />
                <Path
                    d="M22.273 25.643h3.084l3.507 4.351v-4.35h3.267V35.5H29.2l-3.66-4.548V35.5h-3.268v-9.857z"
                    fill="#201E26"
                />
                <Path
                    d="M21.429 28.178h11.828v2.253H21.43v-2.253zM21.429 31.557h11.828v2.253H21.43v-2.253z"
                    fill="#201E26"
                />
                <Path
                    d="M32.18 11.162l-1.51-.301A3.415 3.415 0 0027.428 8.5c-1.518 0-2.79.993-3.241 2.36l-1.51.302c-1.826.365-2.697 2.467-1.663 4.017l1.261 1.892h10.308l1.262-1.892c1.032-1.55.161-3.652-1.664-4.017z"
                    fill="#5BB49A"
                />
                <Path d="M34.286 18.785H20.57a1.714 1.714 0 110-3.428h13.715a1.714 1.714 0 110 3.428z" fill="#000" />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(12 8.5)" d="M0 0h30.857v36H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
