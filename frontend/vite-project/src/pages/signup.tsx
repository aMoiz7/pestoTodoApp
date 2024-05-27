import React, { useState } from 'react'
import { signupUser } from '../apis/userapi';
import { useNavigate } from 'react-router-dom';

const signup = () => {

 const navigate = useNavigate()
  const [data , setData] = useState({name:"" , username :"" , email:"" , password:"", avatar:null });

  const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value, files } = e.target;

    if (name === "avatar" && files && files.length > 0) {
      setData((prev) => ({ ...prev, [name]: files[0] }));
    }

    else {

    setData((prev) => ({ ...prev, [name]: value }));  

    }
  }

  const signupHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);

    if (data.avatar) {
      
      formData.append("avatar", data.avatar);

    }

    const res =  await signupUser(formData);
    if(res)navigate("/login")
    
  };

  return (
  <div><div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up </h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={signupHandler} method="POST">
      <div>
          <label htmlFor="name"  className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input id="name" name="name" type="text" value={data.name} onChange={changeHandler} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>


<div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div className="mt-2">
            <input id="username" name="username" type="text" value={data.username} onChange={changeHandler}   required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
            
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autoComplete="email" value={data.email} onChange={changeHandler}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="current-password" value={data.password} onChange={changeHandler}  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
       

        <div>
              <label className='block text-sm font-medium leading-6 text-gray-900>upload Avatar'>Avatar</label>
              <input type="file"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name='avatar' onChange={changeHandler}   />
            </div>

            <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm text-gray-500">
        already a member?
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</a>
      </p>
    </div>
  </div>
  </div>

  )
}

export default signup