import React from 'react'

const todoCard = () => {
  return (
    <div>
       <div>
     
  &gt;<div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Todo's</h2>
      </div>
      <div className="flex -space-x-2 overflow-hidden p-5">
  <img className="inline-block h-14 w-14 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
</div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
            <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span className="absolute inset-0" />
                Boost your conversion rate
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
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