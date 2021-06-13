import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const ShoppingCategoryIcon = props => {
    return (
        <Svg width={91} height={66} viewBox="0 0 91 95" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M10.916 24.159a8.325 8.325 0 016.115-2.681h65.358l.457-3.455c.686-5.137 5.112-9.015 10.3-9.015H96a4.153 4.153 0 014.157 4.156 4.153 4.153 0 01-4.157 4.157h-2.855c-1.04 0-1.925.777-2.062 1.804l-6.389 47.917c-.955 7.2-7.153 12.628-14.414 12.628H26.233c-7.507 0-13.874-5.857-14.498-13.339L8.742 30.476a8.35 8.35 0 012.174-6.317z"
                    fill="#DB588D"
                />
                <Path
                    d="M66.905 87.983a8.313 8.313 0 110-16.627 8.313 8.313 0 010 16.627zM29.496 87.983a8.313 8.313 0 110-16.627 8.313 8.313 0 010 16.627zM37.81 33.947h20.782a4.158 4.158 0 014.157 4.157 4.158 4.158 0 01-4.157 4.156H37.81a4.158 4.158 0 01-4.156-4.156 4.158 4.158 0 014.156-4.157z"
                    fill="#201E26"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="matrix(-1 0 0 1 100.158 .694)" d="M0 0h99.758v99.758H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
