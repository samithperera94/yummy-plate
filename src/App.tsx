import './App.css';
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

function App() {
  return (
    <RouterProvider router={router} />


  );
}

export default App;
