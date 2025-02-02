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
import ListedCart from './Components/ListedCart/ListedCart.jsx';
import AskAi from './Components/AskAi/AskAi.jsx';

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
        path:'ai',
        element:<AskAi></AskAi>
      },
      {
        path:'/gadgets/:product_id',
        element:<GadgetDetails></GadgetDetails>,
        loader: ()=> fetch('/gadgets.json')
      },
     {
        path:'dashboard/listedCart',
        element: <ListedCart></ListedCart>,
        loader: ()=> fetch('/gadgets.json')
      },
      {
        path: 'dashboard',
        element:<Dashboard></Dashboard>,
        loader: ()=> fetch('/gadgets.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
