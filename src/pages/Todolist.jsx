import React from "react";
import Navbar from "../redux/components/navbar/Navbar";
import Todobox from "../redux/components/todobox/Todobox";
import { useQuery, useMutation, queryCache, useQueryClient } from "react-query";
import { getTodos, deleteTodo } from "../api/todos";
import { useNavigate } from "react-router-dom";

function Todolist() {
  // 리엑트 쿼리문은 데이터를 캐싱(저장)하는데, 이 행위를 하는게 아래의 코드.
  const { isLoading, isError, data } = useQuery("todos", getTodos);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // useMutation의 첫번째 인자는 사용할 API이고, 두번째 인자는 {성공:() 실패:()}여부에 따라 수행하는 행동()
  const deleteTodoMutation = useMutation(deleteTodo, {
    // 성공 시 try문 onSuccess
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
    // catch 문 : error 떴을 때 캐치.
    onError: () => {

    }
  });


  const DetailjoinHandler = (event, id) => {
    navigate(`/tododetail/${id}`)
    event.stopPropagation()

  }

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  // 함수형 컴포넌트는 props만 전달 받을 수 있고, onClick이 되는 것은 'element' 이다.
  // 함수형 컴포넌트는 onClick이 안먹힌다.

  return (
    <>
      <Navbar />
      <h1>&nbsp;내 할일</h1>
      <>
        {data.map((item) => {
          return (
            <Todobox 
              title={item.title}
              todoId={item.id}

              name={item.name}
              key={item.id}
            >
            <button
              // mutate메서드는 첫번째 인자는 API 파라미터로 넘길 값이 들어감.
              onClick={(event) => {
                event.stopPropagation()
                deleteTodoMutation.mutate(item.id)
              }}>⛔
            </button>
              
            </Todobox>
          )
        })}
      </>
    </>
  );
}

export default Todolist;
