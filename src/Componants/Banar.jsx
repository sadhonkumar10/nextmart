import React from "react";

export default function Banar() {
  return (
    <div className="flex gap-4 w-11/12 mx-auto m-4 ">
      <div className="w-full h-[322px] bg-[url('/img/alt.png')] bg-cover bg-center  ">
        <h2 className="pt-26 pl-10 text-2xl font-semibold pb-3">
          Everyday Fresh & <br />
          Clean with Our <br />
          Products
        </h2>
        <div className=" pl-10">
          <button className="px-4 py-2 bg-[#3BB77E] text-white">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-full h-[322px] bg-[url('/img/alt1.png')] bg-cover bg-center">
        <h2 className="pt-26 pl-10 text-2xl font-semibold pb-3">
          Make your Breakfast <br /> Healthy and Easy
        </h2>
        <div className=" pl-10">
          <button className="px-4 py-2 bg-[#3BB77E] text-white">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-full h-[322px] bg-[url('/img/alt2.png')] bg-cover bg-center">
        <h2 className="pt-26 pl-10 text-2xl font-semibold pb-3">
          The best Organic <br /> Products Online
        </h2>
        <div className=" pl-10">
          <button className="px-4 py-2 bg-[#3BB77E] text-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
