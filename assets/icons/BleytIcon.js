import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const BleytIcon = (props) => {
    return (
        <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.573 25.587L.358 9.95l13.518-7.648 3.244 5.507 2.3-1.301 5.969 10.132-15.817 8.95v-.002z"
                fill="#174542"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.378 10.658a.442.442 0 00-.167.61l5.663 9.636c.377.64 1.211.86 1.864.49l.803-.455 5.85-3.317c1.856-1.078 2.487-3.427 1.406-5.266-1.088-1.851-3.498-2.485-5.382-1.417l-.039.022a3.041 3.041 0 00-.354-2.193c-.848-1.442-2.698-1.962-4.188-1.2l-.002-.004-5.454 3.094z"
                fill="#A7FC81"
            />
        </Svg>
    );
};
