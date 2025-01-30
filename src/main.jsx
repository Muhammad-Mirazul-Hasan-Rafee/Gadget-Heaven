import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import GadgetDetails from './Components/GadgetDetails/GadgetDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
     errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/gadgets/:product_id',
        element:<GadgetDetails></GadgetDetails>,
        loader: ()=> fetch('/gadgets.json')
      },
      {
        path: 'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
