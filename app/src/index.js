import * as React from 'react';
import * as  ReactDOM from 'react-dom/client';
import './index.css';

import Header from "./Header";
import Footer from "./Footer";

import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Portfolio from './content/Portfolio';
import Home from './content/Home';
import CaseStudies from './content/CaseStudies';
import Skillset from './content/Skillset';
import ContactMe from './content/ContactMe';
import Login from './content/Login';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },
  {
    path:"/Portfolio",
    element: <Portfolio/>,
  },
  {
    path:"/CaseStudies",
    element: <CaseStudies/>,
  },
  {
    path:"/Skillset",
    element: <Skillset/>,
  },
  {
    path:"/ContactMe",
    element: <ContactMe/>,
  },
  {
    path:"/Login",
    element: <Login/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>
);
