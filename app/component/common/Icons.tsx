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
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.60011 8.2495L0.000274586 1.64967L1.64994 -5.76976e-07L7.42494 5.775L13.1999 -7.21092e-08L14.8496 1.64967L8.24978 8.2495C8.03099 8.46822 7.7343 8.59108 7.42494 8.59108C7.11558 8.59108 6.81889 8.46822 6.60011 8.2495Z" fill="#010101" />
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
