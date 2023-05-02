import React from "react";
import Navbar from "../redux/components/navbar/Navbar"
import Buttons from "../redux/components/buttons/Buttons";
import { useNavigate } from "react-router-dom";



function Main() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <h1>&nbsp;무엇을 할까요?</h1>

            <Buttons
                backgroundcolor='white'
                showArrow={true}
                justifycontent='space-between'
                onClick={() => { navigate('/Todowrite') }}
            >할일 기록하기</Buttons>

            <Buttons
                backgroundcolor='whitegray'
                showArrow={false}
                justifycontent='space-between'
                onClick={() => { navigate('/Todolist') }}
            >Todo List</Buttons>
        </>
    );
}

export default Main;
