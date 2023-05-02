// import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
// const initialState = [
//     {
//         id: uuidv4(),
//         name: '홍길동',
//         title: "제목",
//         contents: "내용",
//     }
// ]

// const todosSlice = createSlice({
//     name: "todos",
//     initialState,
//     reducers: {
//         addTodo: (state, action) => {
//             return [...state, action.payload];
//         },
//         removeTodo: (state, action) => {
//             return state.filter((item) => item.id !== action.payload)
//         },

//     }
// });

// export const { addTodo, removeTodo } = todosSlice.actions;
// export default todosSlice.reducer;