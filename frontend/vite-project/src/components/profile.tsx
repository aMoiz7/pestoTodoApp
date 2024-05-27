import React, { useEffect, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addnewTodo } from '../apis/todoApi';
import NewTodoModal from './todomodal';
import { userdata } from '../slice/userSlice';


interface ProfileProps {
    onAddnewTodo: (newTodo:any) => void;
  }

const Profile:React.FC<ProfileProps> = ({ onAddnewTodo}) => {

   const dispatch = useDispatch()

    useEffect(() => {
        // Load user data from localStorage if available
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          dispatch(userdata(JSON.parse(storedUser)));
        }
      }, [dispatch]);

 const user = useSelector((state: any) => state.user)
  const name = user.user.name;
  const avatar = user.user.avatar;

  const [modelopen , setIsmodelOpen] = useState(false)

  const addnewTodoHandler =async({title , description}:String)=>{
        const res = await addnewTodo({title , description})
        onAddnewTodo(res.data.data)
        setIsmodelOpen(false)

  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-5 h-30  ">
        <div className="mx-auto max-w-xl lg:mx-0 flex items-center justify-between p-4 ">
          <div className="flex items-center">
            <img className="inline-block h-14 w-14 rounded-full ring-3 ring-white" src={avatar} alt="" />
            <h2 className="text-xl px-6 tracking-tight py-3 text-gray-900 sm:text-xl">Welcome {name}</h2>
          </div>
          <button type="button" onClick={()=>setIsmodelOpen(true)}  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm h-10 px-5 text-center flex items-center justify-around">
            <FaPen className="mr-2" />New Todo
          </button>
        </div>
      </div>
      <NewTodoModal isOpen={modelopen} onClose={()=>setIsmodelOpen(false)}  onSave={addnewTodoHandler} />
    </>
  );
};

export default Profile;
