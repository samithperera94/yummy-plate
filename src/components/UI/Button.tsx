import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import classes from "./Button.module.scss";

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode
}

const Button = ({ children, className, ...props }: Props) => {
    return (
        <button
            className={[classes.button, className ? classes[className] : ""].join(" ")}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button