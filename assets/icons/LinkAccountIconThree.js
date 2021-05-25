import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg";

export const LinkAccountIconThree = props => {
    return (
        <Svg width={54} height={55} viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Circle cx={27} cy={27.88} fill="#F0F0F0" r={27} />
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M30.625 10.5c-6.834 0-12.375 5.541-12.375 12.375S23.791 35.25 30.625 35.25 43 29.71 43 22.875c0-6.834-5.54-12.374-12.375-12.374zm4.125 11.55a3.299 3.299 0 110-6.6 3.3 3.3 0 110 6.6z"
                    fill="#FCBD30"
                />
                <Path
                    d="M19.219 27.682l-8.735 8.735c-.31.31-.484.729-.484 1.166v4.267c0 .91.74 1.65 1.65 1.65h4.267c.437 0 .858-.173 1.167-.483l2.133-2.134a2.334 2.334 0 00.683-1.65 2.333 2.333 0 012.333-2.333c.62 0 1.213-.246 1.65-.683l1.936-1.935a12.416 12.416 0 01-6.6-6.6zM41.35 43.5c-.422 0-.845-.162-1.166-.483l-29.7-29.7a1.648 1.648 0 010-2.333 1.648 1.648 0 012.333 0l29.7 29.7A1.648 1.648 0 0141.35 43.5z"
                    fill="#201E26"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(10 10.5)" d="M0 0h33v33H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
