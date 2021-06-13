import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const TransferCategoryIcon = props => {
    return (
        <Svg width={90} height={66} viewBox="0 0 90 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M76 48.5v-35c0-3.867-3.132-7-7-7H41c-3.867 0-7 3.133-7 7v35L55 59l21-10.5z" fill="#EA564D" />
            <Path
                d="M68 40c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13zM55 20.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                fill="#201E26"
            />
            <Path
                d="M83.203 24.594L76 20.271V48.5l-21 10.5-21-10.5V20.271l-7.203 4.323A14 14 0 0020 36.599v29.4c0 5.8 4.7 10.5 10.5 10.5h49c5.8 0 10.5-4.7 10.5-10.5v-29.4a14 14 0 00-6.797-12.005z"
                fill="#201E26"
            />
        </Svg>
    );
};
