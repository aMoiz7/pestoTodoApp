import React, { useEffect, useState } from 'react';
import { FaLockOpen, FaPen } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addnewTodo } from '../apis/todoApi';
import NewTodoModal from './todomodal';
import { logout, userdata } from '../slice/userSlice';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

interface ProfileProps {
  onAddnewTodo: (newTodo: any) => void;
}

const Profile: React.FC<ProfileProps> = ({ onAddnewTodo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Load user data from localStorage if available
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(userdata(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const user = useSelector((state: any) => state.user);
  const name = user.user.name;
  const avatar = user.user.avatar;

  const [modelOpen, setModelOpen] = useState(false);

  type addTodo = {
    title: String;
    description: String;
  };

  const addNewTodoHandler = async ({ title, description }: addTodo) => {
    const res = await addnewTodo({ title, description });
    onAddnewTodo(res.data.data);
    setModelOpen(false);
  };

  const logoutHandler = () => {
    Cookies.remove('accessToken');
    dispatch(logout());
    navigate('/login');
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="mx-auto p-4 md:flex md:items-center md:justify-between md:px-8 lg:px-16 xl:px-24">
          <div className="flex items-center">
            <img className="inline-block h-20 w-20 rounded-full ring-3 ring-white" src={avatar} alt="" />
            <h2 className="ml-4 text-2xl font-bold text-blue-600">Welcome {name}</h2>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              type="button"
              onClick={() => setModelOpen(true)}
              className="inline-block mr-4 text-lg font-medium text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg h-14 px-6"
            >
              <FaPen className="inline-block mr-2" />
              New Todo
            </button>
            <button
              type="button"
              onClick={logoutHandler}
              className="inline-block text-lg font-medium text-white bg-gradient-to-br from-red-600 to-purple-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg h-14 px-6"
            >
              <FaLockOpen className="inline-block mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
      <NewTodoModal isOpen={modelOpen} onClose={() => setModelOpen(false)} onSave={addNewTodoHandler} />
    </>
  );
};

export default Profile;
