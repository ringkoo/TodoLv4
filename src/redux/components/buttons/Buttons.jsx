import React from "react";
import { Buttonwrap, StyledSpan } from "./styles";
import { FcAdvance } from "react-icons/fc";

function Buttons(props) {
    const showArrow = props.showArrow ? <FcAdvance /> : null;
    return (
        <>
            <Buttonwrap backgroundcolor={props.backgroundcolor} onClick={props.onClick}>
                <StyledSpan justifycontent={props.justifycontent}>
                    {props.name}
                    {props.contents}
                    {props.id}
                    {props.onChange}
                    {props.children} {showArrow}
                </StyledSpan>
            </Buttonwrap>
        </>
    );
}

export default Buttons;
