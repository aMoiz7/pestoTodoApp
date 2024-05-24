import React, { useEffect, useState } from 'react'
import { updateTodoStatus } from '../apis/todoApi'

const todoCard = ({ id,  title , description , status }:any) => {
   
   const [updatestatus , setUpdateStatus] = useState(status)  

    console.log(id,"id")
    
   const updateHandler = async(newstatus:string)=>{
    try {
      const data = updateTodoStatus(id , newstatus)
      setUpdateStatus(data)
    } catch (error) {
      console.error('Error updating status:', error);

    }
   }
   
  return (
    <div>
       <div>
     
 <div className="bg-white  flex flex-col  ">
    <div className="mx-auto max-w-l px-0 lg:px-0 flex flex-col">

      <div className="mx-auto mt-10 grid max-w-l grid-cols-3 gap-x-8 gap-y-5 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article className="flex max-w-xl flex-col items-start justify-between">
        
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">

                <span className="absolute inset-0" />
                {title}
              </a>
              <select
                 className="relative rounded-full bg-gray-50 m-10 text-sm text-gray-600 hover:bg-gray-100"
                  value={updatestatus}
                  onChange={(e) => updateHandler(e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Inprogress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
            </h3>
            <p className="mt-2 line-clamp-3 text-m leading-6 text-gray-600">{description}</p>
          </div>

        
          
        </article>
        {/* More posts... */}
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default todoCard