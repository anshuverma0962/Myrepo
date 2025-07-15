import { useState } from 'react'
import Home from './NextgenFolder/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './NextgenFolder/Aboutusfolder/AboutUs';
import ServingIndustries from './NextgenFolder/ServicesFolder/ServingIndustries';
import Client from './NextgenFolder/ClientsFolder/Client';
import Contact from './NextgenFolder/ContactUsFolder/Contact';
import Login from './NextgenFolder/Login';
import Inbox from './NextgenFolder/Inbox/Inbox';
import Page_404 from './NextgenFolder/PageNotFound/Page_404';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home></Home>} > </Route>
        <Route path='/about' element={<AboutUs></AboutUs>} > </Route>
        <Route path='/client' element={<Client></Client>} > </Route>
        <Route path='/servingIndustries' element={<ServingIndustries></ServingIndustries>} > </Route>
        <Route path='/contact' element={<Contact></Contact>} > </Route>
        <Route path='/login' element={<Login></Login>} > </Route>
        <Route path='/inbox' element={<Inbox></Inbox>}></Route>
        <Route path='/*' element={<Page_404></Page_404>}></Route>
      </Routes>
    </>
  )
}
export default App  
