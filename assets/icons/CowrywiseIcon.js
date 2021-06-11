import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";

export const CowrywiseIcon = props => {
    return (
        <Svg width={118} height={118} viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G filter="url(#prefix__filter0_d)">
                <Rect x={15} y={11} width={88} height={88} rx={12} fill="#0066F5" />
                <Rect x={15} y={11} width={88} height={88} rx={12} stroke="#F0F0F1" />
            </G>
            <Path
                d="M59.5 27H44.088l-.03.054-2.127 3.874H59.5c13.014 0 23.57 10.554 23.57 23.572 0 13.018-10.553 23.572-23.57 23.572S35.928 67.517 35.928 54.5a23.519 23.519 0 011.143-7.253h4.5A19.34 19.34 0 1059.5 35.162H39.608l-2.155 3.927H59.5a15.409 15.409 0 11-13.6 8.157H51a11.174 11.174 0 108.5-3.928H35.13l-2.157 3.93A27.546 27.546 0 0032 54.5C32 69.687 44.312 82 59.5 82S87 69.687 87 54.5 74.687 27 59.5 27zm0 20.247a7.253 7.253 0 110 14.506 7.253 7.253 0 010-14.506z"
                fill="#fff"
            />
        </Svg>
    );
};
