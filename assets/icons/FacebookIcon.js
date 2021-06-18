import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const FacebookIcon = props => {
    return (
        <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M14 0a14 14 0 100 28 14 14 0 000-28z" fill="#039BE5" />
            <Path
                d="M15.895 17.71h3.623l.57-3.68h-4.194V12.02c0-1.53.5-2.885 1.93-2.885h2.298V5.922c-.403-.055-1.257-.174-2.871-.174-3.37 0-5.345 1.78-5.345 5.834v2.448H8.442v3.68h3.464v10.117c.686.103 1.38.173 2.094.173.645 0 1.274-.059 1.895-.143V17.711z"
                fill="#fff"
            />
        </Svg>
    );
};
