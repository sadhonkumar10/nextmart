import React, { useState } from "react";
import { useLoaderData } from "react-router";

export default function MegaMune() {
  const megamenu = useLoaderData();
  const [selectBrand, setSelectBrand] = useState("All");

  const filteredbarnd =
    selectBrand === "All"
      ? megamenu
      : megamenu.filter((item) => item.brand === selectBrand);
  const brands = ["All", "Nestlé", "Angie’s", "Blue Diamond"];
  return (
    <>
      <div className="w-10/12 mx-auto py-10">
        <div className="flex justify-between py-9">
          <div>
            <h1 className="font-bold text-3xl">Popular Products</h1>
          </div>
          <div className="flex gap-8">
           {brands.map((brand , index)=>(
            <button key={index} onClick={()=>setSelectBrand(brand)}
               className={`${
                  selectBrand === brand
                    ? "text-[#3BB77E] font-semibold border-b-2 border-[#3BB77E]"
                    : "text-gray-600"
                } hover:text-[#3BB77E]`}>
              {brand}

            </button>

           )
          
          
          )}
          </div>
        </div>
        <div className="grid grid-cols-5 gap-5 ">
          {filteredbarnd.map((item, index) => (
            <div key={index} className="border-2 border-gray-300 rounded-2xl ">
              <div className="relative ">
                <img src={item.img} alt="" />
                <div className="pl-4 pr-4">
                  <p className="font-semibold text-[#ADADAD]">{item.brand}</p>
                  <h2 className="font-semibold text-2xl pb-3">{item.productName}</h2>
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
                  Add
                </button>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
