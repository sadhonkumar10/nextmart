import React from "react";

import { Outlet } from "react-router";
import Nav from "./Componants/Nav";
import Footer from "./Componants/Footer";

export default function Root() {
  return (
    <div>
      <Nav />

      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
