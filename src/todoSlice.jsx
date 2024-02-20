import { createSlice } from "@reduxjs/toolkit";

 const todoSlice = createSlice(

    {
        name: "todos",
        initialState: [
            {
             id:1,
             text: "text1",
             isChek: false   
            }
        ],
        reducers: {
            addTodo: (action, payload) =>{
                return [ ...action, payload];
            },
        }
    }
 )

 export const { addTodo } = todoSlice.actions
 export default todoSlice.reducer;
