import { Outlet } from "react-router-dom";
import React, { ReactNode } from 'react';
import classes from "./SideBarLayout.module.scss";
import Cart from "../components/Cart/Cart";
import DeliveryBox from "../components/DeliveryBox/DeliveryBox";

interface Props {
  children: ReactNode
}
const SideBarLayout = ({ children }: Props) => {
  return (
    <div className={classes.sidebarLayout}>
      <div className={classes.mainSection}>
        <Outlet />
      </div>
      <div className={classes.sidebar}>
        {children}
      </div>

    </div>
  )
}

export default SideBarLayout