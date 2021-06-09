import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const DealInactiveIcon = props => {
    return (
        <Svg width={23} height={23} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 21.4V1.52c0-.287.282-.52.63-.52h18.537c.348 0 .63.233.63.52V21.4c0 .206-.148.393-.377.476a.745.745 0 01-.68-.094l-2.193-1.67a.729.729 0 00-.847-.006l-1.438 1.06c-.72.532-1.807.53-2.525-.006l-1.416-1.056a.73.73 0 00-.845 0L9.56 21.16c-.718.535-1.804.538-2.526.006l-1.437-1.06a.728.728 0 00-.847.006l-2.193 1.67a.734.734 0 01-.68.094c-.229-.083-.377-.27-.377-.477zM20.037 2.04H2.76v18.17l1.136-.865c.719-.547 1.81-.555 2.54-.017l1.438 1.06a.73.73 0 00.841-.002l1.417-1.056a2.126 2.126 0 011.266-.403c.453 0 .906.134 1.267.403l1.417 1.056a.73.73 0 00.841.002l1.438-1.06c.729-.538 1.821-.53 2.54.017l1.136.865V2.04zm-5.135 6.14l-5.72 5.72c-.246.246-.61.28-.814.078-.203-.204-.168-.568.078-.814l5.72-5.72c.245-.246.61-.28.813-.077.203.203.169.567-.077.813zM9 8a1 1 0 11-2 0 1 1 0 012 0zm5 7a1 1 0 100-2 1 1 0 000 2z"
                fill="#8B8B8D"
            />
            <Path
                d="M20.92 21.876l.085.235-.085-.235zm-.68-.094l-.152.199.151-.199zm-2.193-1.67l.151-.2-.151.2zm-.847-.006l.148.201-.148-.201zm-1.438 1.06l-.148-.202.148.202zm-2.525-.006l.15-.2-.15.2zm-1.416-1.056l-.15.2.15-.2zm-.845 0l-.15-.2.15.2zM9.56 21.16l-.15-.2.15.2zm-2.526.006l.149-.202-.149.202zm-1.437-1.06l-.148.201.148-.201zm-.847.006l-.151-.2.151.2zm-2.193 1.67l-.151-.199.151.199zm-.68.094l-.085.235.085-.235zM2.76 2.041v-.25h-.25v.25h.25zm17.277 0h.25v-.25h-.25v.25zM2.76 20.211h-.25v.505l.402-.306-.152-.2zm1.136-.865l-.152-.199.152.2zm2.54-.017l-.148.201.148-.201zm1.438 1.06l-.149.2.149-.2zm.841-.002l-.149-.2.15.2zm1.417-1.056l-.15-.2.15.2zm2.533 0l.15-.2-.15.2zm1.417 1.056l.149-.2-.15.2zm.841.002l-.148-.201.148.2zm1.438-1.06l.148.201-.148-.201zm2.54.017l.152-.199-.152.2zm1.136.865l-.152.199.401.306v-.505h-.25zM9.181 13.9l.177.177-.177-.177zm5.72-5.72l-.177-.176.177.176zM8.367 13.98l.177-.177-.177.177zm.078-.814l-.177-.177.177.177zm5.72-5.72l.176.177-.177-.177zm.813-.077l.177-.177-.177.177zM1.25 1.52v19.878h.5V1.521h-.5zM2.13.75c-.44 0-.88.302-.88.77h.5c0-.106.123-.27.38-.27v-.5zm18.537 0H2.13v.5h18.537v-.5zm.88.77c0-.468-.441-.77-.88-.77v.5c.256 0 .38.164.38.27h.5zm0 19.88V1.52h-.5V21.4h.5zm-.542.711c.305-.11.542-.377.542-.712h-.5c0 .08-.06.187-.213.242l.17.47zm-.338.059a.995.995 0 00.338-.059l-.17-.47a.494.494 0 01-.168.029v.5zm-.579-.189a.958.958 0 00.579.189v-.5a.46.46 0 01-.276-.087l-.303.398zm-2.193-1.67l2.193 1.67.303-.398-2.193-1.67-.303.398zm-.547-.004a.479.479 0 01.547.004l.303-.398a.978.978 0 00-1.146-.008l.296.402zm-1.437 1.06l1.437-1.06-.296-.402-1.438 1.06.297.402zm-2.823-.007c.806.602 2.013.604 2.823.007l-.297-.402c-.633.466-1.598.464-2.227-.005l-.3.4zm-1.417-1.055l1.417 1.055.299-.4-1.417-1.056-.299.4zm-.545 0a.48.48 0 01.545 0l.299-.401a.98.98 0 00-1.143 0l.299.4zM9.709 21.36l1.417-1.055-.3-.401-1.416 1.055.3.401zm-2.823.007c.81.597 2.017.595 2.823-.007l-.299-.4c-.63.469-1.594.471-2.227.004l-.297.403zm-1.437-1.06l1.437 1.06.297-.403-1.438-1.06-.296.403zm-.547.003a.48.48 0 01.547-.003l.296-.402a.978.978 0 00-1.146.008l.303.397zm-2.193 1.67l2.193-1.67-.303-.397-2.193 1.67.303.398zm-.917.131c.304.11.661.065.917-.13l-.303-.398a.484.484 0 01-.444.058l-.17.47zM1.25 21.4c0 .335.237.602.542.712l.17-.47c-.153-.055-.212-.163-.212-.242h-.5zM2.76 2.291h17.277v-.5H2.76v.5zm.25 17.92V2.04h-.5v18.17h.5zm.734-1.064l-1.135.865.303.398 1.135-.865-.303-.398zm2.84-.02c-.818-.603-2.032-.595-2.84.02l.303.398c.63-.48 1.6-.487 2.24-.015l.298-.402zm1.438 1.06l-1.437-1.06-.297.403 1.437 1.06.297-.402zm.544 0a.481.481 0 01-.544 0l-.297.403a.98.98 0 001.14-.003l-.299-.4zm1.417-1.056l-1.417 1.055.299.401 1.416-1.055-.298-.401zm1.415-.453c-.5 0-1.007.148-1.415.453l.298.4a1.876 1.876 0 011.117-.353v-.5zm1.416.453a2.376 2.376 0 00-1.416-.453v.5c.405 0 .804.12 1.118.354l.298-.401zm1.417 1.055l-1.417-1.055-.299.4 1.417 1.056.299-.4zm.544.002a.481.481 0 01-.544-.002l-.299.401a.98.98 0 001.14.003l-.297-.402zm1.437-1.06l-1.437 1.06.297.402 1.437-1.06-.297-.402zm2.84.02c-.807-.616-2.021-.624-2.84-.02l.297.402c.64-.472 1.61-.465 2.24.015l.304-.398zm1.136.864l-1.135-.865-.303.398 1.135.865.303-.398zm-.401-17.97V20.21h.5V2.04h-.5zM9.358 14.077l5.72-5.72-.354-.353-5.72 5.72.354.353zm-1.168.077c.331.331.857.233 1.168-.077l-.354-.354c-.181.182-.385.153-.46.078l-.354.353zm.078-1.167c-.31.31-.409.836-.078 1.167l.354-.353c-.076-.076-.104-.279.077-.46l-.353-.354zm5.72-5.72l-5.72 5.72.353.354 5.72-5.72-.354-.354zm1.167-.077c-.331-.331-.857-.233-1.168.077l.354.354c.181-.182.385-.153.46-.078l.354-.353zm-.078 1.167c.31-.31.409-.836.078-1.167l-.354.353c.076.076.104.28-.077.46l.353.354zM8 9.25c.69 0 1.25-.56 1.25-1.25h-.5a.75.75 0 01-.75.75v.5zM6.75 8c0 .69.56 1.25 1.25 1.25v-.5A.75.75 0 017.25 8h-.5zM8 6.75c-.69 0-1.25.56-1.25 1.25h.5A.75.75 0 018 7.25v-.5zM9.25 8c0-.69-.56-1.25-1.25-1.25v.5a.75.75 0 01.75.75h.5zm5.5 6a.75.75 0 01-.75.75v.5c.69 0 1.25-.56 1.25-1.25h-.5zm-.75-.75a.75.75 0 01.75.75h.5c0-.69-.56-1.25-1.25-1.25v.5zm-.75.75a.75.75 0 01.75-.75v-.5c-.69 0-1.25.56-1.25 1.25h.5zm.75.75a.75.75 0 01-.75-.75h-.5c0 .69.56 1.25 1.25 1.25v-.5z"
                fill="#8B8B8D"
            />
        </Svg>
    );
};