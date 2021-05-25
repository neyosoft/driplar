import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

export const LinkAccountIconTwo = props => {
    return (
        <Svg width={54} height={55} viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Circle cx={27} cy={27.88} fill="#F0F0F0" r={27} />
            <G clipPath="url(#prefix__clip0)">
                <Rect x={11} y={19.3} width={32.4} height={25.2} rx={5} fill="#8C74EB" />
                <Path
                    d="M20 19.3a7.2 7.2 0 0114.4 0H38c0-5.965-4.835-10.8-10.8-10.8-5.965 0-10.8 4.835-10.8 10.8H20zM27.2 28.3a3.599 3.599 0 00-3.6 3.6c0 1.989 1.611 3.6 3.6 3.6s3.6-1.611 3.6-3.6c0-1.99-1.611-3.6-3.6-3.6z"
                    fill="#201E26"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(11 8.5)" d="M0 0h32.4v36H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
