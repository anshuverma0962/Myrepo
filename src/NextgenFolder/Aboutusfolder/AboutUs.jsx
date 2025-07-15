import React from 'react'
import './About.css'
import Navbar from '../Navbar'
import baner from './AboutAssets/baner.png'
import abt from './AboutAssets/abt.png'
import Footer from '../Footer/Footer'
import history from './AboutAssets/corporate-history.png'
import mission from './AboutAssets/mision.png'
import missionVision from './AboutAssets/mission-vision.png'
import VisionIcon from './AboutAssets/vission-icon.png'
export default function AboutUs() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      {/*------------------------ Baner ------------[] */}
      <section className='container-fluid About_baner '>
        <div className='baner_content container'>
          <h1 >About</h1>
          <div className='spanbar'></div>
          <ul className='banner_list_item'>
            <li> <a href='#'>Home</a></li>
            <li style={{ borderLeft: '1px solid white' }}> <a href='#'>About</a></li>
          </ul>
        </div>
      </section>
      {/* end of the banner section  */}

      <section className='container my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <img style={{ borderRadius: '22px', width: '100%' }} src={abt}></img>
          </div>
          <div className='col-md-6 my-5 company_profile'>
            <h1>Company Profile</h1>
            <p>
              Matrix Filtration Private Limited is an ISO 16889:2008 certified company specializing in the production of Magnetic Filters, Hydraulic Oil Filtration Machines, Industrial Oil Filters, and advanced filtration systems. 
              <br />
              The company offers a diverse product range tailored to meet the varied requirements of industrial oil filtration. This includes Hydraulic Oil Filtration Machines, Lube Oil Filtration Machines, Hydraulic By-pass Filters, Filter Cartridges, and Magnetic Filters. All products are engineered to deliver high efficiency and reliability, ensuring optimal performance in demanding industrial applications.
            </p>
          </div>
        </div>
      </section>
      {/* Matrix at Glance   */}
      <section className='container matrix'>
        <h1 className='my-5'>Matrix At Glance</h1>
        <div className='row matrix_content'>
          <div className='col-md-4'>
            <h3 style={{ color: '#DA2D1C' }}>7+Years of <br/> Experience</h3>
            <p>Delivering performance-driven oil and magnetic filtration systems since 2017</p>

          </div>
          <div className='col-md-4'>
            <h3>100+Custom  <br/>Systems Delivered</h3>
            <p>We design and manufacture application-specific filtration systems.</p>

          </div>
          <div className='col-md-4'>
            <h3>20+Cities Served <br/> Across India</h3>
            <p>We design and manufacture application-specific.</p>

          </div>

        </div>
      </section>
      {/* corporate history  */}
      <section className='container my-5 history'>
        <div className='row'>
          <div className='col-md-6'>
            <img style={{ borderRadius: '22px', width: '100%' }} src={history}></img>
          </div>
          <div className='col-md-6 my-5 company_profile '>
            <h1>Corporate History</h1>
            <p className=''>
              Matrix Filtration India Pvt Ltd, founded in 2017 by Rajni Upadhyay, is a distinguished leader in the field of industrial oil filtration and analysis systems. Headquartered in Gurgaon, Haryana, India, the company is built on the strong foundation of Rajni’s engineering background and over a decade of hands-on industry experience, coupled with her visionary leadership and technical expertise.<br />

              With ISO certification underscoring its adherence to global quality standards. </p>
          </div>
        </div>
      </section>
      {/* resreach and Developerment  */}
      <section className='container'>
        <div className='researchHeading'>
          <h1>Research & Developement</h1>
          <div className='row card_Section'>
            <div className='col-md-4 crd'>
              <h1>Inhouse R&D</h1>
              <p>Matrix Filtration prides itself on its state-of-the-art in-house research and development facility.</p>
            </div>
            <div className='col-md-4 crd'>
              <h1>Custom Solutions</h1>
              <p>We understand that each client has unique requirements, and therefore, we specialize in custom-designing and manufacturing.</p>
            </div>
            <div className='col-md-4 crd'>
              <h1>Service & Client Focus</h1>
              <p>Our dedication extends beyond the technical aspects of our products. We place a strong emphasis on meeting and exceeding all technical and after-sales service expectations of our clients.</p>
            </div>

          </div>

        </div>

      </section>
      {/* misiont section  */}
      <section className='container  missionSection'>
        <div className='row '>
          <div className='col-md-4 mission_card'>
            <div className='inner_box'>
              <img src={mission}/>
              <h3>Our Mission</h3>
              <p className='text-white'>We are dedicated to delivering cutting-edge, eco-friendly filtration solutions for industrial Oils, ensuring superior performance, reliability, and environmental sustainability. With a strong focus on quality, innovation, and customer-centric service, we strive to optimize industrial processes, reduce waste, minimize environmental impact, and set new benchmarks in oil filtration technology.</p>
            </div>
          </div>

          <div className='col-md-4 my-5'>
            <img style={{width:'356px ',height:'527px'}} src={missionVision} ></img>
          </div>

          <div className='col-md-4 mission_card vision_card'>
            <div className='inner_box'>
              <img src={VisionIcon}></img>
              <h3>Our Vision</h3>
              <p className='text-white'>To be a global leader in industrial oil filtration technology, driving innovation and sustainability while enhancing operational efficiency for industries worldwide. We are committed to developing environmentally responsible solutions that promote cleaner operations and a greener future.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
