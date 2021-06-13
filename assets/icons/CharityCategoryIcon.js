import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const CharityCategoryIcon = props => {
    return (
        <Svg width={90} height={66} viewBox="0 0 90 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M84.466 16.113c-2.838.145-4.966 2.598-4.966 5.333v11.502h-1.326a5.366 5.366 0 00-3.714 1.48L62.599 45.841c-2.625 2.53-4.099 5.956-4.099 9.53v7.891c0 3.722 3.133 6.737 7 6.737h7c3.868 0 7-3.015 7-6.737v-5.726l8.372-10.65A9.839 9.839 0 0090 40.79V21.16c0-2.88-2.506-5.198-5.534-5.047zM25.534 16.113c2.838.145 4.966 2.598 4.966 5.333v11.502h1.326c1.393 0 2.727.533 3.714 1.48l11.861 11.414c2.625 2.527 4.102 5.956 4.102 9.526v7.895c0 3.722-3.132 6.737-7 6.737H37.5c-3.867 0-7-3.015-7-6.737v-5.726l-8.372-10.65A9.839 9.839 0 0120 40.79V21.16c0-2.88 2.506-5.198 5.534-5.047z"
                    fill="#CCB644"
                />
                <Path
                    d="M40.318 21.816c1.634 1.573 11.518 9.485 12.204 10.145a3.576 3.576 0 002.478.987c.896 0 1.792-.33 2.475-.987.686-.66 10.573-8.575 12.204-10.145 3.76-3.618 3.76-9.482 0-13.1-3.759-3.617-9.852-3.617-13.611 0-.406.391-.75.82-1.068 1.257a9.363 9.363 0 00-1.067-1.26c-3.76-3.617-9.853-3.617-13.612 0-3.759 3.618-3.759 9.485-.003 13.103z"
                    fill="#201E26"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(20 6)" d="M0 0h70v64H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
