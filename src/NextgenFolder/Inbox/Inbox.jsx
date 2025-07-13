import React, { useEffect, useState } from 'react'
import { useFirebase } from '../FirebaseProvider'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import InboxCard from './InboxCard'
import './inboxstyle.css'
export default function Inbox() {
  const [item, setItem] = useState([])
  const firebase = useFirebase()
  useEffect(() => {
    firebase.getDetail().then((message) => setItem(message.docs))
  }, [])
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      {/* -------------------------baner section  */}
      <section className='container-fluid contact_baner'>
        <div className='baner_content container'>
          <h1 >Inbox Center</h1>
          <div className='spanbar'></div>
          <ul className='banner_list_item' >
            <li> <a href='#'>Home</a></li>
            <li style={{ borderLeft: '1px solid white' }}> <a href='#'>Inbox</a></li>
          </ul>
        </div>
      </section>
      {/*  --------------- Inbox section-------------- */}
      <section class="table-section container my-5" >
        <table style={{ boxShadow: '-5px 15px 20px grey' }}>
          <thead >
            <tr >
              <th style={{ backgroundColor: 'rgb(238, 102, 12)', color: 'white', width: '210px', padding: '5px' }}  >Name</th>
              <th style={{ backgroundColor: 'rgb(238, 102, 12)', color: 'white', width: '150px' }} className=''>Mobile no.#</th>
              <th style={{ backgroundColor: 'rgb(238, 102, 12)', color: 'white', width: '250px' }} className=''>Email</th>
              <th style={{ backgroundColor: 'rgb(238, 102, 12)', color: 'white', width: '210px' }} className=''>Company</th>
              <th style={{ backgroundColor: 'rgb(238, 102, 12)', color: 'white', width: '210px' }} >Message</th>
            </tr>
          </thead>
          <tbody>
            {item.length==0?
           <div> 
            <h6> Loading......</h6>
            <div class="spinner-border text-primary" role="status">
  <span class="sr-only">.</span>
</div>
           </div> 
            
            
            :
            (item.map((a, index) => {
              return (
                <>
                  <InboxCard {...a.data()}></InboxCard>
                </>
              )
            }))}
          </tbody>
        </table>
      </section>
      {/* ---------------footer----------------- */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
