import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const EatingOutCategoryIcon = props => {
    return (
        <Svg width={90} height={66} viewBox="0 0 90 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M90 16a4 4 0 00-4-4 20 20 0 00-20 20v14.232a8 8 0 005.472 7.6l2.528.844V60h16V16z"
                fill="#489EBA"
            />
            <Path d="M82 84a8 8 0 008-8V60H74v16a8 8 0 008 8zM38 84a8 8 0 008-8V60H30v16a8 8 0 008 8z" fill="#201E26" />
            <Path
                d="M38 12c-8.836 0-16 10.06-16 20a17.332 17.332 0 008 16v12h16V48a17.332 17.332 0 008-16c0-9.94-7.164-20-16-20z"
                fill="#489EBA"
            />
        </Svg>
    );
};
