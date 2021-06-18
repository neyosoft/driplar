import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const StarIcon = props => {
    return (
        <Svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                clipRule="evenodd"
                d="M9.73 1.618a1.337 1.337 0 012.36 0l2.238 4.223a.36.36 0 00.258.187l4.708.825a1.337 1.337 0 01.729 2.244l-3.324 3.435a.37.37 0 00-.1.304l.671 4.731a1.337 1.337 0 01-1.91 1.388l-4.292-2.1a.355.355 0 00-.159-.038.374.374 0 00-.16.037l-4.293 2.1a1.337 1.337 0 01-1.909-1.388l.67-4.731a.358.358 0 00-.099-.304L1.795 9.096a1.337 1.337 0 01.729-2.244l4.707-.825a.36.36 0 00.258-.187l2.24-4.222z"
                stroke="#201E26"
                strokeWidth={1.4}
            />
        </Svg>
    );
};
