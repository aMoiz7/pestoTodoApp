import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'

const todoCard = ({ id,  title , description , status , handleUpdateStatus , handleDeleteTodo }:any) => {
   
   const [updatestatus , setUpdateStatus] = useState(status)  

    console.log(status)
   const updateHandler = async(newstatus:string)=>{
    try {
      await handleUpdateStatus(id , newstatus)
      setUpdateStatus(newstatus)
    } catch (error) {
      console.error('Error updating status:', error);

    }
   }

   const deleteHandler =async()=>{
    await handleDeleteTodo(id)
   } 

  return (
    <div>
       <div>
     
 <div className="bg-white  flex flex-col   ">
    <div className="mx-auto  lg:px-0 flex flex-col">

      <div className="mx-auto mt-0 grid max-w-l grid-cols-3 gap-x-8 gap-y-1 border-t border-gray-200 pt-5 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article className="flex max-w-xl flex-col items-start justify-between">
        
          <div className="group relative">
            <h3 className=" text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">

                <span className="absolute inset-0" />
                {title}
              </a>
              <select
                 className="relative rounded-full bg-gray-50 my-5 mx-4 text-sm text-gray-600 hover:bg-gray-100"
                  value={updatestatus}
                  onChange={(e) => updateHandler(e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Inprogress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
            </h3>
            <p className=" line-clamp-3 text-m leading-6 text-gray-600">{description}</p>
          </div>

          <FaTrash className='mt-3' onClick={deleteHandler}/>
          
        </article>
       
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default todoCard