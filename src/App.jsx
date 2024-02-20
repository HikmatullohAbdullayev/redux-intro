import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>

    
    <div className="container  w-[600px] px-5 py-3  mx-auto bg-slate-400 rounded-lg ">
      <div className="text-center   ">
        <h1 className='text-2xl border rounded-lg bg-slate-300'>To Do</h1>
        <div className="pt-5 flex justify-around  items-center p-2  border-b pb-5 border-gray-600">
          <input className='p-1 rounded-lg w-[450px]  outline-slate-600' type="text" placeholder='Nimadur yozing' />
          <button className='bg-green-500 px-5 py-1 rounded-lg text-white'>Add</button>
        </div>
        <ul className='flex flex-col justify-stretch  gap-2 mt-5 h-[300px] overflow-auto'>
          <li className=' flex justify-around  items-center border rounded-lg py-5 '>
           <div className="flex gap-4 w-[60%] ">
             <input id='chek'  type="checkbox" />
            <label className=' w-full  ' htmlFor='chek'> <p className='text-xl text-start p-1 px-2 text-gray-900 rounded-lg bg-slate-500'>Text</p></label></div>

            
           <div className="flex gap-3">
           <button className='bg-yellow-500 px-5 py-1 rounded-lg text-white'>Edit</button>
            <button className='bg-red-500 px-5 py-1 rounded-lg text-white'>Delete</button>
           </div>
          </li>
          <li className=' flex justify-around  items-center border rounded-lg py-5 '>
           <div className="flex gap-4 w-[60%] ">
             <input id='chek'  type="checkbox" />
            <label className=' w-full  ' htmlFor='chek'> <p className='text-xl text-start p-1 px-2 text-gray-900 rounded-lg bg-slate-500'>Text</p></label></div>

            
           <div className="flex gap-3">
           <button className='bg-yellow-500 px-5 py-1 rounded-lg text-white'>Edit</button>
            <button className='bg-red-500 px-5 py-1 rounded-lg text-white'>Delete</button>
           </div>
          </li>
        </ul>
      </div>
    </div>
    </div>

    
    </>
  )
}

export default App
