import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../redux/components/navbar/Navbar";
import { getTodos } from "../api/todos";
import axios from "axios";
import { useState } from "react";
import LabledInput from "../redux/components/common/LabledInput";

function Todoedit() {
  const { isLoading, isError, data } = useQuery("todos", getTodos);
  const { id } = useParams();
  let navigate = useNavigate()
  const [edit, setEdit] = useState('')
  const [editclick, setEditclick] = useState(false)

  const editClickHandler = () => {
    setEditclick(true)
  }


  // contents의 변경을 감지하는 함수
  const handleContentsChange = (event) => {
    setEdit(event.target.value);
  };

  const Onsubmit = () => {
    axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, {  // PATCH
      contents: edit,
    })
    alert('내용이 수정되었습니다')
    navigate(`/Tododetail/${id}`)
  }

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }





  const itemId = data.find((item) => item.id === Number(id));
  return (
    <>
      <Navbar />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '30px',
        marginLeft: '10px',
        marginRight: '10px'
      }}>
        <span>id: {itemId.id}</span>
        <button onClick={() => navigate(`/TodoList`)}
          style={{
            border: '1px solid black',
            backgroundColor: 'white',
            borderRadius: '5px',
            marginLeft: '10px',
          }}>이전으로</button>
      </div>
      <div style={{
        padding: '10px',
        fontSize: '30px',
        fontWeight: '700',
      }}>{itemId.title}</div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        fontWeight: '700',
      }}>
        {
          <LabledInput height={'200px'} onChange={handleContentsChange} value={edit} />
        }
      </div>
      <button onClick={Onsubmit}
        style={{
          position: 'absolute',
          top: '800px',
          fontWeight: '700',
          width: '99%',
          height: '50px',
          backgroundColor: 'white',
          border: '3px soild gray',
          borderRadius: '5px',
        }}
      >저장</button>
    </>
  );
}

export default Todoedit;
