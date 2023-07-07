import React from 'react';
import SideBarLayout from './SideBarLayout';
import Cart from "../components/Cart/Cart";
import DeliveryBox from "../components/DeliveryBox/DeliveryBox";

const CartLayout = () => {
    return (
        <SideBarLayout>
            <div>
                <DeliveryBox />
                <Cart />
            </div>
        </SideBarLayout>
    )
}

export default CartLayout