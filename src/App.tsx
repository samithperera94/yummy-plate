import './App.css';
import { useEffect } from 'react';
import { sendCartData } from './store/cart-actions';
import { useAppSelector, useAppDispatch } from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import SideBarLayout from './layouts/SideBarLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <SideBarLayout />,
        children: [
          {
            index: true,
            element: <HomePage />
          }
        ]
      }
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



  return (
    <RouterProvider router={router} />


  );
}

export default App;
