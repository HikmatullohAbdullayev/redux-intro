import { configureStore } from "@reduxjs/toolkit";
import   todosReduser  from "./todoSlice.jsx"

export const store = configureStore({
    reducer:{
        todos: todosReduser,
    }
})
