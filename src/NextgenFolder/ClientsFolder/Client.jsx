import React, { useState } from 'react'
import './ClientStyle.css'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import { ClientList } from './ClientListData'
export default function Client() {
  const [item, setItem] = useState(ClientList)
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      {/*----------------- Banner Section -----------------------  */}
      <section className='container-fluid About_baner client_baner '>
        <div className='baner_content container'>
          <h1 >Clients</h1>
          <div className='spanbar'></div>
          <ul className='banner_list_item'>
            <li> <a href='#'>Home</a></li>
            <li style={{ borderLeft: '1px solid white' }}> <a href='#'>Client</a></li>
          </ul>
        </div>
      </section>
      {/* -----------------client section=------------------  */}
      <section className='container client_body my-5'>
        <div className='client_content'>
          <h1 className='my-3'>Our Valuable Clients</h1>
          <p className='py-3'>At Matrix Filtration, we proudly serve our clients as a premier <br/>
            manufacturer and supplier
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {item.map((icon, index) => {
            return (
              <div className='client_list' key={index}>
                <div className='client_image'>
                  <img src={icon}></img>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      {/* -----------------footer sseciton  */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
