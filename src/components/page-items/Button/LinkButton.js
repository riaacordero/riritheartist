// Link-style button for on/off switch features (e.g.: Intro page avatar)
import React from "react";

const LinkSTYLES = [
    'link-button--primary',
]

export const LinkButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = LinkSTYLES.includes(buttonStyle) ? buttonStyle : LinkSTYLES[0]
    return(<linkbutton className={`linkbutton ${checkButtonStyle}`} onClick={onClick}
    type={type}>{children}</linkbutton>)
}