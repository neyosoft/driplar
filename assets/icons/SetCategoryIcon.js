import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const SetCategoryIcon = props => {
    return (
        <Svg width={23} height={22} viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M3.321 7.984h16.372a2.32 2.32 0 011.444.507v-.507c0-1.666-1.293-3.016-2.889-3.016h-7.705l-.524-1.64c-.262-.822-.998-1.376-1.828-1.376h-4.39c-1.064 0-1.926.9-1.926 2.01v4.529a2.32 2.32 0 011.446-.507z"
                stroke="#201E26"
                strokeWidth={1.4}
            />
            <Path
                d="M19.692 7.984H3.32C1.833 7.984.7 9.38.946 10.911l1.056 6.617c.233 1.454 1.437 2.52 2.85 2.52H18.16c1.413 0 2.618-1.066 2.85-2.52l1.056-6.617c.245-1.532-.886-2.927-2.374-2.927z"
                stroke="#201E26"
                strokeWidth={1.4}
            />
        </Svg>
    );
};
