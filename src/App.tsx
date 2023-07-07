import './App.css';
import { useEffect } from 'react';
import { sendCartData, getCartData } from './store/cart-actions';
import { useAppSelector, useAppDispatch } from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import SideBarLayout from './layouts/SideBarLayout';
import CartLayout from './layouts/CartLayout';
import CheckoutPageLayout from './layouts/CheckoutPageLayout';
import CheckoutPage from './pages/CheckoutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/menu",
        element: <CartLayout />,
        children: [
          {
            index: true,
            element: <MenuPage />
          }
        ]
      },
      {
        path: "/checkout",
        element: <CheckoutPageLayout />,
        children: [
          {
            index: true,
            element: <CheckoutPage />
          }
        ]
      },
    ]
  }
])

let isInitial = true;
function App() {

  const dispatch = useAppDispatch()

  const cart = useAppSelector(state => state.cart);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return
    }
    if (cart.isCartChanged) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(getCartData())
  }, [dispatch])



  return (
    <RouterProvider router={router} />


  );
}

export default App;
