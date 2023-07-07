import React from 'react';
import SideBarLayout from './SideBarLayout';
import Card from '../components/UI/Card';
import OrderSummary from "../components/Checkout/OrderSummary";

const CheckoutPageLayout = () => {
  return (
    <SideBarLayout>
      <div>
        <Card className='orderSummary'>
          <h4>Order Summary</h4>
          <OrderSummary />
        </Card>
      </div>
    </SideBarLayout>
  )
}

export default CheckoutPageLayout