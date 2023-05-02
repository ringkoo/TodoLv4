import React, { useState } from "react";
import LabledInput from "../common/LabledInput";
import HeightBox from "../common/HeightBox";
import { StyledButton } from "./styles";
import { FlexDiv } from "./styles";
import RightMarginBox from "../common/RightMarginBox";
import "./styles";
import { addTodo } from "../../../api/todos";
import { useMutation, useQueryClient } from "react-query";

function Input() {

    // 리엑트 쿼리 관련 코드
    const queryClient = useQueryClient();
    const mutation = useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries('todos')
            console.log('성공하였습니다!')
        }
    })


    // 컴포넌트 내부에서 사용할 state 2개(제목, 내용) 정의
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    // 에러 메시지 발생 함수
    const getErrorMsg = (errorCode, params) => {
        switch (errorCode) {
            case "01":
                return alert(
                    `[필수 입력 값 검증 실패 안내]\n\n제목과 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요.\n입력된 값(제목 : '${params.title}', 내용 : '${params.contents}')`
                );
            default:
                return `시스템 내부 오류가 발생하였습니다.`;
        }
    };

    // Name 변경을 감지하는 함수
    const handleNameChange = (event) => {
        setName(event.target.value);
        
    };

    // title의 변경을 감지하는 함수
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    // contents의 변경을 감지하는 함수
    const handleContentsChange = (event) => {
        setContents(event.target.value);
    };

    // form 태그 내부에서의 submit이 실행된 경우 호출되는 함수
    const handleSubmitButtonClick = (event) => {
        // submit의 고유 기능인, 새로고침(refresh)을 막아주는 역함
        event.preventDefault();

        // 제목과 내용이 모두 존재해야만 정상처리(하나라도 없는 경우 오류 발생)
        // "01" : 필수 입력값 검증 실패 안내
        if (!title || !contents || !name) {
            return getErrorMsg("01", { title, contents, name });
        }


        // 추가하려는 todo를 newTodo라는 객체로 세로 만듦
        const newTodo = {
            name,
            title,
            contents,
        };

        // todo를 추가하는 reducer 호출
        // 인자 : payload
        // dispatch(addTodo(newTodo));
        mutation.mutate(newTodo);
        // state 초기화
        setName("");
        setTitle("");
        setContents("");
    };

    return (
        <>
            <form onSubmit={handleSubmitButtonClick}>
                <FlexDiv>
                    <RightMarginBox margin={10}>
                        <LabledInput
                            id="name"
                            label="작성자"
                            placeholder="작성자명을 입력해주세요."
                            value={name}
                            onChange={handleNameChange}
                            
                        />
                        <HeightBox height={10} />
                        <LabledInput
                            id="title"
                            label="제목"
                            placeholder="제목을 입력해주세요."
                            value={title}
                            onChange={handleTitleChange}
                        />
                        <HeightBox height={10} />
                        <LabledInput
                            id="contents"
                            label="내용"
                            placeholder="내용을 입력해주세요."
                            value={contents}
                            onChange={handleContentsChange}
                            height="200px"
                        />
                    </RightMarginBox>
                    <StyledButton type="submit">제출</StyledButton>
                </FlexDiv>
            </form>
        </>
    );
}

export default Input;
