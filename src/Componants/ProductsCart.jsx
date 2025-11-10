import React from 'react'

export default function ProductsCart({ products }) {
  return (
    <div className="products-container grid grid-cols-5 w-11/12 mx-auto ">
      {products.map((item, index) => (
        <div key={index} className="product-card border-2 pl-5 m-3">
           <img src={item.image} alt={item.name} />
          <p>{item.category}</p>
          <h2>{item.name}</h2>
          <p>{item.rating}</p>
          <p>{item.brand}</p>
          <div>
           <div>
             <p>Price: ${item.price}</p>
            <p>{item.oldPrice}</p>
           </div>
           <button>add card</button>
          </div>
         
        </div>
      ))}
    </div>
  )
}
