import React from "react";
import { NavDesktop, NavMobile } from "./components";

function NavBar() {
  return (
    <div>
      <NavDesktop />
      <NavMobile />
    </div>
  );
}

export default NavBar;
