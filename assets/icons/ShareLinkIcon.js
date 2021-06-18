import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const ShareLinkIcon = props => {
    return (
        <Svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M14 0a14 14 0 100 28 14 14 0 000-28z" fill="#ED587C" />
            <Path
                d="M19.295 7.705a3.799 3.799 0 00-5.373 0l-.69.69a3.79 3.79 0 00-.884 3.953 3.79 3.79 0 00-3.952.883l-.691.69a3.799 3.799 0 105.373 5.374l.69-.691a3.79 3.79 0 00.884-3.953 3.79 3.79 0 003.952-.883l.691-.69a3.8 3.8 0 000-5.373z"
                stroke="#FEFEFE"
                strokeWidth={1.4}
            />
            <Path
                d="M16.55 10.451a1.381 1.381 0 00-1.954 0l-4.145 4.145a1.381 1.381 0 001.953 1.954l4.145-4.145c.54-.54.54-1.414 0-1.954z"
                fill="#FEFEFE"
            />
        </Svg>
    );
};
