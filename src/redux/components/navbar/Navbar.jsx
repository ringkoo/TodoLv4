import React from "react";
import { NavBarStyle, StyledSpan } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <NavBarStyle>
                <AiFillHome onClick={() => { navigate('/') }} style={{cursor:'pointer'}}/><StyledSpan>Todo list</StyledSpan>
            </NavBarStyle>
        </>
    );
}

export default Navbar;
