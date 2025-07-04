import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { gihubinfoloader } from './Components/Github/Github.jsx'
import Login from './Components/Login/Login.jsx'

// making Router                                     //>.has two methoods to create router

// methood 1:
/*
const router = createBrowserRouter([
  {
    path: '/' , 
    element : <Layout/> ,
    children : [
      {
        path : "" ,                                                 
        element : <Home/>
      },
      {
        path : "about" , 
        element : <About/>
      },
      {
        path : "contact" , 
        element : <Contact/>
      }
    ]
  }
])
*/


//methood 2:

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element= {<Layout/>}>
      <Route path='login' element={<Login/>} />
      <Route path="" element = {<Home/>}/>
      <Route path="about" element = {<About/>}/>
      <Route path="contact" element = {<Contact/>}/>
      <Route
      loader = {gihubinfoloader}
       path="github" 
       element = {<Github/>}/>

      <Route path="/user/:userid" element = {<User/>}/>
    </Route>

  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
