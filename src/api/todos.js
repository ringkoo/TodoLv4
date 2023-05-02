import axios from "axios";
// import { queryCache } from "react-query";

const getTodos = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
    return response.data;
};

const addTodo = async (newTodo) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

const deleteTodo = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
};


export { getTodos, addTodo, deleteTodo };

