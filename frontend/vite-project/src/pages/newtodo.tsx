import React from 'react'

const newtodo = () => {
  return (
    <div><div className="flex min-h-full flex-col justify-center px-2 py-2 lg:px-2 border ">
   
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
      <form className="space-y-4" action="#" method="POST">
        <div>
          <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
          <div className="mt-1">
            <input id="title" name="title" type="title" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>
          
<div>
  <label htmlFor="message"  className="block text-sm font-medium leading-5 text-gray-900">Description</label>
  <textarea id="message" rows={4} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Write your thoughts here..." defaultValue={""} />
</div>

        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post</button>
        </div>
      </form>
   
    </div>
  </div></div>
  )
}

export default newtodo