import * as React from "react";
import Svg, { Mask, Circle, G, Path, Defs, ClipPath } from "react-native-svg";

export const ProductIcon = props => {
    return (
        <Svg width={55} height={55} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Mask id="prefix__a" maskUnits="userSpaceOnUse" x={0} y={0} width={55} height={55}>
                <Circle cx={27.5} cy={27.5} r={27.5} fill="#98BBFF" />
            </Mask>
            <G mask="url(#prefix__a)">
                <Mask id="prefix__b" maskUnits="userSpaceOnUse" x={0} y={0} width={55} height={55}>
                    <Circle cx={27.5} cy={27.5} r={27.5} fill="#98BBFF" />
                </Mask>
                <G mask="url(#prefix__b)">
                    <Circle cx={27.5} cy={27.5} r={27.5} fill="#FFABCD" />
                    <G clipPath="url(#prefix__clip0)">
                        <Path
                            d="M8.445 15.61a3.964 3.964 0 012.911-1.276h31.12l.218-1.645A4.963 4.963 0 0147.6 8.396h1.36c1.094 0 1.978.885 1.978 1.98 0 1.094-.884 1.978-1.979 1.978h-1.36a.994.994 0 00-.981.86l-3.042 22.815a6.945 6.945 0 01-6.864 6.013H15.738c-3.574 0-6.606-2.789-6.903-6.351L7.41 18.618a3.975 3.975 0 011.035-3.008z"
                            fill="#DB588D"
                        />
                        <Path
                            d="M35.104 46a3.958 3.958 0 110-7.917 3.958 3.958 0 010 7.917zM17.292 46a3.958 3.958 0 110-7.917 3.958 3.958 0 010 7.917zM21.25 20.271h9.896a1.98 1.98 0 010 3.958H21.25a1.98 1.98 0 010-3.958z"
                            fill="#201E26"
                        />
                    </G>
                </G>
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="matrix(-1 0 0 1 51.333 8)" d="M0 0h44.333v38H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
