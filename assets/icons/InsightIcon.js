import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const InsightIcon = props => {
    return (
        <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                d="M10.682.222C4.916.222.222 4.916.222 10.682c0 5.765 4.694 10.46 10.46 10.46 5.765 0 10.46-4.695 10.46-10.46 0-5.766-4.695-10.46-10.46-10.46zm.823 1.73L12.05 2c.115.033.247.05.379.082l-.923.675v-.807zm0 1.828l1.928-1.433c.082.033.164.049.247.082.197.066.395.132.593.214.066.05.131.082.214.132l-2.982 2.207V3.78zm0 2.224l3.772-2.8c.132.082.28.147.396.23.165.115.28.247.428.362l-4.596 3.41V6.004zm0 2.223l5.255-3.904c.05.05.082.066.132.116l.033.033c.18.18.313.378.477.576L11.505 9.43V8.227zm-.823 11.267c-4.86 0-8.813-3.953-8.813-8.812 0-4.58 3.525-8.302 7.99-8.73v8.73c0 .46.361.823.823.823h8.73c-.428 4.464-4.151 7.99-8.73 7.99zm8.68-10.18l.05.544h-1.104l1.005-.758c.017.083.033.149.05.214zm-.428-1.63c.066.18.116.362.165.56l-2.174 1.614H15.31l3.476-2.586c.05.132.099.28.148.412zm-.527-1.153l-4.48 3.327h-1.631l5.634-4.167c.098.148.18.296.263.46.082.116.148.248.214.38z"
                fill="#201E26"
            />
            <Path
                d="M10.682 19.494c-4.86 0-8.813-3.953-8.813-8.812 0-4.58 3.525-8.302 7.99-8.73v8.73c0 .46.361.823.823.823h8.73c-.428 4.464-4.151 7.99-8.73 7.99z"
                fill="#201E26"
            />
        </Svg>
    );
};