import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const CashCategoryIcon = props => {
    return (
        <Svg width={90} height={66} viewBox="0 0 90 66" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#prefix__clip0)">
                <Path
                    d="M93.8 35.267H26.422A8.42 8.42 0 0018 43.689v33.689a8.42 8.42 0 008.422 8.422H93.8a8.42 8.42 0 008.422-8.422v-33.69a8.42 8.42 0 00-8.422-8.421z"
                    fill="#6EA444"
                />
                <Path
                    d="M29.61 35.267L85.887 22.83c.99-.219 1.975-.223 2.923-.097l-4.704-8.414a8.425 8.425 0 00-11.463-3.242L29.4 35.267h.211z"
                    fill="#6EA444"
                />
                <Path
                    d="M89.589 64.745a4.211 4.211 0 100-8.423 4.211 4.211 0 000 8.422zM30.634 64.745a4.211 4.211 0 100-8.423 4.211 4.211 0 000 8.422zM93.8 35.266c1.314 0 2.543.329 3.65.864l-1.524-6.89a8.416 8.416 0 00-10.039-6.405L29.61 35.266H93.8zM75 61c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15z"
                    fill="#201E26"
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(18 10)" d="M0 0h84.222v75.8H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
