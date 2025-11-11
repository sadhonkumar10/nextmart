import React from "react";
import { Link } from "react-router";

export default function Nav() {
  const links = (
    <>
      <Link to="/">
        {" "}
        <li>Home</li>
      </Link>
      <Link to="/About">
        {" "}
        <li>About</li>
      </Link>
      <Link to="/shop">
        {" "}
        <li>Shop</li>
      </Link>

      <Link to="/Megemanu">
        {" "}
        <li>MegaMune</li>
      </Link>
      <Link to="/blogs">
        {" "}
        <li>Blogs</li>
      </Link>
      <Link to="/contact">
        {" "}
        <li>Contact</li>
      </Link>
    </>
  );

  return (
    <div className="flex justify-between w-11/12 mx-auto items-center pt-3 font-semibold">
      <div className="flex items-center">
       <Link to='/'> <img src="/public/205.png" alt="" /></Link>
        <p>Hot Deals</p>
      </div>

      <div>
        <ul className="flex gap-9">{links}</ul>
      </div>

      <div>
        <button className="bg-[#3BB77E] px-5 py-2">Login</button>
      </div>
    </div>
  );
}
