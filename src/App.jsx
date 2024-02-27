import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./store/todoSlice";

function App(props) {
  const [selectId, setSelectId] = useState(null);
  const [newValue, setNewValue] = useState(null)


  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const inputValue = e.target[0].value;

    const todoObj = {
      id: Date.now(),
      title: inputValue,
      status: false,
    };

    dispatch(addTodo(todoObj));
    console.log(state);
  };
  const editTodoId = (id) => {
    setSelectId(id);
  };

  const saveTodoFunc = (id, title) =>{
    dispatch(editTodo({id, title}))
    setSelectId(null)
  }
  console.log(selectId);

  return (
    <div className="p-4 container mx-auto w-[600px] text-center">
    <h1 className="text-2xl font-bold mb-4">App</h1>
    <form onSubmit={(e) => submitForm(e)} className="mb-4">
      <input
        type="text"
        name=""
        id=""
        placeholder="text1"
        className="border p-2 rounded mr-2 focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
    <div>
      {state.list.length > 0 ? (
        state.list.map((item) => (
          <div key={item.id} className="mb-4 bg-green-500">
            {selectId == item.id ? (
              <input
                onChange={(e) => setNewValue(e.target.value)}
                className=" border p-2 text-black rounded focus:outline-none focus:ring focus:border-red-300"
                type="text"
                defaultValue={item.title}
              />
            ) : (
              <h3 className="mb-2">{item.title}</h3>
            )}
            <code className="text-gray-500">id: {item.id}</code>
            <button
              onClick={() => dispatch(deleteTodo(item.id))}
              className="ml-2 p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              ❌
            </button>
            {selectId == item.id ? (
              <button
                onClick={() => saveTodoFunc(item.id, newValue)}
                className="ml-2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                ✅
              </button>
            ) : (
              <button
                onClick={() => editTodoId(item.id)}
                className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                📝
              </button>
            )}
          </div>
        ))
      ) : (
        <p className="text-gray-500">Malumot Yo'q</p>
      )}
    </div>
  </div>
  

  );
}

export default App;
