import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state: any) => state.user);
  const name = user.user.name;
  const avatar = user.user.avatar;

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <div className="mx-auto max-w-xl lg:mx-0 flex items-center p-4">
          <img className="inline-block h-14 w-14 rounded-full ring-3 ring-white" src={avatar} alt="" />
          <h2 className="text-xl px-6 tracking-tight py-3 text-gray-900 sm:text-xl">Welcome {name}</h2>
        </div>
      </div>
      <div className="mt-20 p-4">
        {/* Other profile content can go here */}
      </div>
    </>
  );
};

export default Profile;
