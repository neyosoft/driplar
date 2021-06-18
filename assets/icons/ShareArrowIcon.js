import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const ShareArrowIcon = props => {
    return (
        <Svg width={23} height={20} viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M21.444 7.444L16.89 12c-.445.444-1.333.111-1.333-.556V8.89H7.778c-.778 0-1.445.444-1.89 1-.221.333-.332.667-.332 1v5.666c0 1.112-.778 2.112-1.89 2.334-1.333.222-2.555-.89-2.555-2.222V11.11c0-3.667 3-6.667 6.667-6.667h7.778V1.89c0-.667.777-1 1.333-.556l4.555 4.556a1.074 1.074 0 010 1.555z"
                stroke="#201E26"
                strokeWidth={1.4}
                strokeMiterlimit={10}
            />
        </Svg>
    );
};
