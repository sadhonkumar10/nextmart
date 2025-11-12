import React from 'react'

export default function MainCart({mainCart}) {
  return (
    <div className='grid grid-cols-10 w-11/12 mx-auto '>
      {mainCart.map((item,index)=>
      <div key={index} className=' h-[185px] w-[145px] '>
      <div className='border  border-gray-300 m-4 text-center pb-5'>
        <div className='flex justify-center'>
           <img src={item.image} alt="" />
          </div> 
       <h2>{item.name}</h2>
       <p className='text-gray-400 pt-2'>{item.item}</p>
      </div>

      </div>
      
      )}
     
    </div>
  )
}
