import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import filter from './ServiceAssets/filtration.png'
import analyse from './ServiceAssets/analysis.png'
export default function ServingIndustries() {
  return (
    <div>
      <Navbar></Navbar>
      <section className='container-fluid About_baner service_baner'>
        <div className='baner_content container'>
          <h1 >Services</h1>
          <div className='spanbar'></div>
          <ul className='banner_list_item'>
            <li> <a href='#'>Home</a></li>
            <li style={{ borderLeft: '1px solid white' }}> <a href='#'>Service</a></li>
          </ul>
        </div>
      </section>
      {/* --------------------------oil filteration  */}
      <section className='container service'>
        <div className='row serviceSection'  >
          <div className='col-md-6'><img src={filter}></img></div>
          <div className='col-md-6 service_content'>
            <div className='inner_content'>
              <h2>Oil Filtration Services</h2>
              <p>We mobilize quickly for emergency outages, scheduled outages, routine maintenance, and pre-commissioning of new equipment. We execute these cleaning services in an effective manner. Furthermore, these purification services are offered at customer’s place in a given budget.</p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------- */}
      <section className='container service'>
        <div className='row serviceSection'  >
          <div className='col-md-6 service_content'>
            <div className='inner_content'>
              <h2>Oil Analysis Services</h2>
              <p>We mobilize quickly for emergency outages, scheduled outages, routine maintenance, and pre-commissioning of new equipment. We execute these cleaning services in an effective manner. Furthermore, these purification services are offered at customer’s place in a given budget.</p>
            </div>
          </div>
          <div className='col-md-6'><img src={filter}></img></div>
        </div>
      </section>
      {/* --------------footer----------- */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
