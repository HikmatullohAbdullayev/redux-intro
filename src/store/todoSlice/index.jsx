import { createSlice } from "@reduxjs/toolkit";

const todoSlice =  createSlice({
    initialState:{
        list: [],
        text: " nma  gap"
    },
    name: "todo",
    reducers:{
        addTodo: (state,actions) => {
            // console.log(state,actions );
            state.list = [actions.payload, ...state.list]
        },
        deleteTodo: (state,actions ) => {
            state.list = state.list.filter((item ) => item.id !== actions.payload)
        },
        editTodo: (state, actions ) => {
            state.list = state.list.map((item) => 
            item.id === actions.payload.id ? {...item, title: actions.payload.title} : item)
        },
        chekTodo: ( ) => {},

    }
})

export const {addTodo,deleteTodo,editTodo} =todoSlice.actions
export default todoSlice.reducer
