import type { ReactElement } from "react";
import React from "react";

interface LoginCardProps {
    icon: string;
    className?: string;
    fill?: string;
    iconClass?: string;
    pathClassName?: string;
}

const Icons: React.FC<LoginCardProps> = ({
    icon,
    className,
    pathClassName,
}) => {
    const iconList = {
        closeIcon: (
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                    fill="currentColor"
                />
            </svg>
        ),
        arrow: (
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.60011 8.2495L0.000274586 1.64967L1.64994 -5.76976e-07L7.42494 5.775L13.1999 -7.21092e-08L14.8496 1.64967L8.24978 8.2495C8.03099 8.46822 7.7343 8.59108 7.42494 8.59108C7.11558 8.59108 6.81889 8.46822 6.60011 8.2495Z" fill="#010101" />
            </svg>
        ),
        allPodcastStar: (
            <svg width="473" height="168" viewBox="0 0 473 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_3004_2034)">
                    <path d="M11.1712 20.085L15.8471 21.1177L11.0961 20.511L10.0413 25.183L10.6701 20.4359L5.99903 19.3812L10.7452 20.0099L11.7777 15.335L11.1712 20.085Z" fill="white" />
                </g>
                <g className="animate-fade-in-scale-reverse" filter="url(#filter1_d_3004_2034)">
                    <path d="M204.448 8.84935L207.254 9.46909L204.403 9.10517L203.77 11.9089L204.147 9.06006L201.346 8.4272L204.193 8.80424L204.812 6.00006L204.448 8.84935Z" fill="white" />
                </g>
                <g className="animate-fade-in-scale" filter="url(#filter2_d_3004_2034)">
                    <path d="M134.011 84.9861L136.817 85.6058L133.966 85.2419L133.333 88.0456L133.71 85.1968L130.908 84.5639L133.755 84.941L134.374 82.1368L134.011 84.9861Z" fill="white" />
                </g>
                <g className="animate-fade-in-scale-reverse" filter="url(#filter3_d_3004_2034)">
                    <path d="M418.08 158.839L420.82 157.973L418.169 159.083L419.023 161.827L417.924 159.172L415.182 160.025L417.836 158.928L416.971 156.189L418.08 158.839Z" fill="white" />
                </g>
                <g className="animate-fade-in-scale" filter="url(#filter4_d_3004_2034)">
                    <path d="M324.329 40.6943L329.113 40.8994L324.329 41.127L324.102 45.9121L323.896 41.127L319.113 40.8994L323.896 40.6943L324.102 35.9121L324.329 40.6943Z" fill="white" />
                </g>
                <g className="animate-opacity-pulse" filter="url(#filter5_d_3004_2034)">
                    <path d="M263.455 111.217L278.765 111.872L263.455 112.602L262.726 127.912L262.07 112.602L246.764 111.872L262.07 111.217L262.726 95.9121L263.455 111.217Z" fill="url(#paint0_radial_3004_2034)" />
                </g>
                <g className="animate-opacity-pulse" filter="url(#filter6_d_3004_2034)">
                    <path d="M463.864 70.797L471.344 72.4481L463.743 71.4788L462.054 78.9534L463.061 71.3586L455.587 69.6698L463.182 70.6768L464.833 63.1965L463.864 70.797Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d_3004_2034" x="0" y="9.33398" width="21.8477" height="21.8496" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3004_2034" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3004_2034" result="shape" />
                    </filter>
                    <filter id="filter1_d_3004_2034" x="195.346" y="0" width="17.9082" height="17.9082" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3004_2034" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3004_2034" result="shape" />
                    </filter>
                    <filter id="filter2_d_3004_2034" x="124.908" y="76.1367" width="17.9082" height="17.9082" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3004_2034" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3004_2034" result="shape" />
                    </filter>
                    <filter id="filter3_d_3004_2034" x="409.182" y="150.189" width="17.6387" height="17.6387" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3004_2034" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3004_2034" result="shape" />
                    </filter>
                    <filter id="filter4_d_3004_2034" x="313.113" y="29.9121" width="22" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3004_2034" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3004_2034" result="shape" />
                    </filter>
                    <filter id="filter5_d_3004_2034" x="240.764" y="89.9121" width="44.002" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3004_2034" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3004_2034" result="shape" />
                    </filter>
                    <filter id="filter6_d_3004_2034" x="449.586" y="57.1973" width="27.7578" height="27.7559" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3004_2034" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3004_2034" result="shape" />
                    </filter>
                    <radialGradient id="paint0_radial_3004_2034" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(262.764 111.912) rotate(90) scale(16 16.0004)">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#8E2EE0" />
                        
                    </radialGradient>
                </defs>
            </svg>
        ),
    }

    const addClassName = (
        icon: ReactElement<SVGElement>
    ): ReactElement<SVGElement> => {
        return React.cloneElement(icon, {
            className: (className || "") + " custom-class",
        });
    };
    const iconsNew = Object.fromEntries(
        Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)])
    );
    return iconsNew[icon] || null;
};

export default Icons;
