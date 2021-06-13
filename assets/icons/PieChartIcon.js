import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const PieChartIcon = props => {
    return (
        <Svg width={59} height={61} viewBox="0 0 59 61" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M26.099 7.814c14.366 0 26.011 11.647 26.011 26.013 0 14.367-11.645 26.013-26.011 26.013S.087 48.193.087 33.827C.087 19.461 11.733 7.814 26.1 7.814z"
                fill="#9C88EE"
            />
            <Path
                d="M58.893 33.778c0-3.759-.635-7.38-1.792-10.754C53.741 13.328 45.974 5.686 36.192 2.5A32.982 32.982 0 0026.037.895v32.883L41.27 54.824l4.032 5.576c8.24-5.974 13.591-15.67 13.591-26.622z"
                fill="#000"
            />
            <Path
                d="M58.893 33.778c0-3.759-.635-7.38-1.792-10.754C53.741 13.328 45.974 5.686 36.192 2.5A32.982 32.982 0 0026.037.895v32.883L41.27 54.824l4.032 5.576c8.24-5.974 13.591-15.67 13.591-26.622z"
                fill="#FFABCD"
            />
        </Svg>
    );
};
