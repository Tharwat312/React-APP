import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'
import Notfound from './Components/Notfound/Notfound'

export default function App() {
    let routes = createBrowserRouter([
        {path: "", element: <Layout />,children:[
            {index: true, element: <Home />},
            {path: "about", element: <About />},
            {path: "portfolio", element: <Portfolio />},
            {path: "contact", element: <Contact />},
            {path: "*", element:<Notfound />}
        ]},
    ])
    return <RouterProvider router={routes}></RouterProvider>
}
