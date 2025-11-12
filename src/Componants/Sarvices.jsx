import React from "react";
import { CiDiscount1 } from "react-icons/ci";
import { FaCarSide, FaFileInvoiceDollar } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { TbTruckReturn } from "react-icons/tb";


export default function Sarvices() {
  return (
    <div>
      <div className="grid grid-cols-5 gap-5 w-11/12 mx-auto pt-5 ">
        <div className=" flex gap-3 items-center border bg-gray-200 border-gray-500 pl-2 h-[100px]">
          <GiPriceTag className="text-5xl" />
          <div>
            <h1 className="font-bold ">Best prices & offers</h1>
            <p className="text-gray-400">Orders $50 or more</p>
          </div>
        </div>
        <div className=" flex gap-3 items-center border bg-gray-200 border-gray-500 pl-2 h-[100px]">
          <FaCarSide  className="text-5xl"/>
          <div>
            <h1 className="font-bold ">Best prices & offers</h1>
            <p className="text-gray-400">Orders $50 or more</p>
          </div>
        </div>
        <div className=" flex gap-3 items-center border bg-gray-200 border-gray-500 pl-2 h-[100px]">
          <FaFileInvoiceDollar  className="text-5xl" />
          <div>
            <h1 className="font-bold ">Best prices & offers</h1>
            <p className="text-gray-400">Orders $50 or more</p>
          </div>
        </div>
        <div className=" flex gap-3 items-center border bg-gray-200 border-gray-500 pl-2 h-[100px]">
          <CiDiscount1  className="text-5xl"/>
          <div>
            <h1 className="font-bold">Best prices & offers</h1>
            <p className="text-gray-400">Orders $50 or more</p>
          </div>
        </div>
        <div className=" flex gap-3 items-center border bg-gray-200 border-gray-500  pl-2 h-[100px]">
          <TbTruckReturn  className="text-5xl"/>
          <div>
            <h1 className=" font-bold ">Best prices & offers</h1>
            <p className="text-gray-400">Orders $50 or more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
