import React from 'react'

export default function Nav() {
  return (
    <div className='flex justify-between w-11/12 mx-auto items-center pt-3 font-semibold'>
        <div className='flex items-center'>
            <img src="/public/205.png" alt="" />
            <p>Hot Deals</p>
        </div>
        <div>
           
                <ul className='flex gap-9'>
                    <a href=""><li>About</li></a>
                    <a href=""><li>Shop</li></a>
                    <a href=""><li>Mega Menu </li></a>
                    <a href=""><li>Vendors </li></a>
                    <a href=""><li>Blog</li></a>
                    <a href=""><li>Pages</li></a>
                    <a href=""><li>Contact</li></a>
                </ul>
           
        </div>
        <div>
            <button className='bg-[#3BB77E] px-5 py-2'>Login</button>
        </div>
      
    </div>
  )
}
