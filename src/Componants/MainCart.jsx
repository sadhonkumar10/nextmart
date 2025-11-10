import React from 'react'

export default function MainCart({mainCart}) {
  return (
    <div className='grid grid-cols-11 w-11/12 mx-auto '>
      {mainCart.map((item,index)=>
      <div key={index} className='border-2 m-4'>
       <img src={item.image} alt="" /> 
       <h2>{item.name}</h2>
       <p>{item.item}</p>

      </div>
      
      )}
     
    </div>
  )
}
