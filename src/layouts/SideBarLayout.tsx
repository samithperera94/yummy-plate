import { Outlet } from "react-router-dom";
import React from 'react';
import classes from "./SideBarLayout.module.scss";
import Cart from "../components/Cart/Cart";
import DeliveryBox from "../components/DeliveryBox/DeliveryBox";

const SideBarLayout = () => {
  return (
    <div className={classes.sidebarLayout}>
      <div className={classes.mainSection}>
        <Outlet />
      </div>
      <div className={classes.sidebar}>
        <DeliveryBox />
        <Cart />
      </div>

    </div>
  )
}

export default SideBarLayout