import React from "react";
import { Boxwrap, StyledSpan } from "./styles";
import { useNavigate } from "react-router-dom";

function Todobox({title, name, todoId, children}) {
    const navigate = useNavigate()
    return (
        <Boxwrap onClick={()=>navigate(`/Tododetail/${todoId}`)}>
            <StyledSpan>
                <div >
                    <h2 style={{ margin: '0px', padding: '0px' }}>{title}</h2>
                    <span style={{ fontSize: '10px' }} >작성자 : {name}</span>
                </div>
                <div>
                    {children}
                </div>
            </StyledSpan>
        </Boxwrap>
    );
}


// // <div onClick><div>

// function  test(){

// }


export default Todobox;
