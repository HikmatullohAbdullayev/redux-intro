import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todos);
  console.log(selector);

  const [chek, setChek] = useState(true);
  const [editInp, setEditInp] = useState(true);

  const chekked = () => {
    return setChek(!chek);
  };
  const editBtn = () => {
    return setEditInp(!editInp);
  };
  console.log(editInp);
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="container  w-[600px] px-5 py-3  mx-auto bg-slate-400 rounded-lg ">
          <div className="text-center   ">
            <h1 className="text-2xl border rounded-lg bg-slate-300 mt-2">
              To Do
            </h1>
            <div className="pt-5 flex justify-around  items-center p-2  border-b pb-5 border-gray-600">
              <input
                className="p-1 rounded-lg w-[450px]  outline-slate-600"
                type="text"
                placeholder="Nimadur yozing"
              />
              <button className="bg-green-500 px-5 py-1 rounded-lg text-white">
                Add
              </button>
            </div>
            <ul className="flex flex-col justify-stretch  gap-2 mt-5 h-[300px] overflow-auto">
              <li className=" flex justify-around  items-center border rounded-lg py-5 ">
                {editInp ? (
                  <div className="flex gap-4 w-[60%] ">
                    <input
                      onClick={chekked}
                      className="cursor-pointer "
                      id="chek"
                      type="checkbox"
                    />
                    <label className=" w-full  " htmlFor="chek">
                      {" "}
                      <p
                        className={`text-xl text-start p-1 px-2  rounded-lg bg-slate-500 ${
                          chek ? "text-gray-900" : "line-through"
                        }`}
                      >
                        Text
                      </p>
                    </label>
                  </div>
                ) : (
                  <div className="flex gap-4 w-[60%] ">
                    <input
                      type="text"
                      placeholder="Edit text"
                      className=" p-1 rounded-lg w-[450px]  outline-slate-600"
                    />
                  </div>
                )}

                <div className="flex gap-3">
                  
                  {editInp ? (
                    <>
                      <button onClick={editBtn}
                        className="bg-yellow-500 px-5 py-1 rounded-lg text-white"
                      >Edit
                      </button>
                      <button className="bg-red-500 px-5 py-1 rounded-lg text-white">
                        Delete
                      </button>{" "}
                    </>
                  ) : (
                    <>
                      <button className="bg-yellow-500 px-5 py-1 rounded-lg text-white">
                        Save
                      </button>
                      <button  onClick={editBtn} className="bg-red-500 px-5 py-1 rounded-lg text-white">
                    Close
                  </button>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
