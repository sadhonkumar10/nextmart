import React from "react";

export default function ProductsCart({ products }) {
  return (
    <div className="w-11/12 mx-auto pt-8">
      <div className="grid grid-cols-5 gap-5 ">
        {products.map((item, index) => (
          <div key={index} className="border-2 border-gray-300 rounded-2xl ">
            <div className="relative ">
              <img src={item.img} alt="" />
              <div className="pl-4 pr-4">
                <p className="font-semibold text-[#ADADAD]">{item.brand}</p>
                <h2 className="font-semibold text-2xl pb-3">
                  {item.productName}
                </h2>
                <p className="text-2xl">{item.rating}</p>
                <p className=" absolute top-0.5 left-41 bg-[#3BB77E] px-2 py-1 rounded-tl-[15px] rounded-br-[20px]">
                  {item.offPercentage}%
                </p>
                <div className="flex justify-between items-center pb-8">
                  <p className="text-lg font-bold text-[#3BB77E]">
                    ${item.currentPrice}
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ${item.oldPrice}
                    </span>
                  </p>

                  <button className="bg-[#3BB77E] text-white px-4 py-1 rounded-xl mt-2 hover:bg-[#2c9a65]">
                    Add cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
