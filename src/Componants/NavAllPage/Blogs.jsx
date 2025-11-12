import React from 'react'
import { useLoaderData } from 'react-router'

export default function Blogs() {
  const blogs= useLoaderData()
  
  return (
   <>
   <div className='w-8/10 mx-auto'>
    <div className='flex items-center py-8 '>
      <img src="/public/img/category-1.svg.png" alt="" />
      <h1 className='font-bold text-2xl px-2'> Recips Articles</h1>
    </div>
     <div className='grid grid-cols-3 gap-6 '>
      {blogs.map((item , index)=>
      <div key={index} className='w-[392px] h-[472px] text-center'>
       <div className='flex justify-center'>
         <img src={item.image} alt="" className='w-[362px] h-[309px] rounded-2xl'/>
       </div>
        <p className='text-center font-bold text-xl text-[#B6B6B6] pt-3'>{item.category}</p>
        <h2 className='font-bold text-2xl text-[#253D4E] py-3'>{item.title}</h2>
        <div className='flex gap-5 justify-center font-bold text-[#7E7E7E] text-[13px]'>
          <p className='pr-2'>{item.date}</p>
          <p className='pr-2'><li>{item.views}</li></p>
          <p><li>{item.readTime}</li></p>
        </div>

      </div>
      
      )}
    </div>
   </div>
   
   </>
  )
}
