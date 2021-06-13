import * as React from "react";
import Svg, { Circle, Defs, Pattern, Use, Image } from "react-native-svg";

export const NetflixIcon = props => {
    return (
        <Svg
            width={56}
            height={56}
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}>
            <Circle cx={28} cy={28} r={28} fill="url(#prefix__pattern0)" />
            <Defs>
                <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                    <Use xlinkHref="#prefix__image0" transform="scale(.0098)" />
                </Pattern>
                <Image
                    id="prefix__image0"
                    width={102}
                    height={102}
                    xlinkHref="data:image/png;base64,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"
                />
            </Defs>
        </Svg>
    );
};
