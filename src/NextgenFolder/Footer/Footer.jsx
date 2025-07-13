import React from 'react'
import Logo from './Logo.png'
import '../Nextgen.css'
export default function Footer() {
    return (
        <div >
            <section className='container footer_upper_box'>
                <div className='row contact_box'>
                    <div className='col-md-6 contact_box_right'>
                        <h2>Lets Connect</h2>
                        <p>Let's build something impactful together. Get in touch today.</p>
                        <a href='#'>Contact Us </a>
                    </div>
                    <div className='col-md-6 contact_box_left'  >
                        <h2 style={{ fontSize: '31px', marginBottom: '10px', lineHeight: '39px' }}>Connect With Us</h2>
                        <p>140, Khandsa Road, Gurgaon <br/> Haryana, India</p>
                        <a href='#'>+91-9999066503</a><br />
                        <a href='#'>info@matrixfiltration.com</a>
                    </div>
                </div>
            </section>
            {/*footer list item  */}
            <section className='container-fluid footer ' style={{ backgroundColor: 'black', color: 'white' }}>
                <div className='container footerContent_parent'>
                     <div className='row footerContent'>
                    {/* ----------footer logo-------------------  */}
                    <div className='col-md-6 text-center footerImage px-5'>
                        <img style={{ width: '141px',marginBottom:'24px',alignContent:'start' }} src={Logo}></img>
                        <p className='text-start' style={{ color: 'white',fontSize:'20px' }} >We are matrixfiltration <br />  <span style={{marginLeft:'17%'}}>india </span></p>
                    </div>
                    {/* ----------------- footer list item  */}
                    <div className='col-md-6  '>
                        <div className=' FooterList'>
                            {/* ------------information   div-----------  */}
                            <div className='Footer_Information'>
                                <h3 className='mx-4'>Information</h3>
                                <ul className='footer_infomation_List' >
                                    <li><a href='#'> About US</a></li>
                                    <li><a href='#'> Products</a></li>
                                    <li><a href='#'> Services</a></li>
                                    <li><a href='#'> Clients</a></li>
                                    <li><a href='#'> Downloads</a></li>
                                    <li><a href='#'> Contact US </a></li>
                                </ul>
                            </div>
                            {/* ------------------- product  div --------- */}
                            <div className='Footer_Product'>
                                <h3 className='mx-4'>Products</h3>
                                <ul  >
                                    <li><a className='' href='#'>Magnetic Filter</a></li>
                                    <li><a href='#'>Magnetic Coolant </a></li>
                                    <li><a href='#'>Patch Test Kit</a></li>
                                    <li><a href='#'>Kit Express Display</a></li>
                                </ul>

                            </div>

                        </div>

                    </div>
                    {/* end of  the main footer  */}


                   
                </div>
             
                    
                </div>
                    <section className=' container py-5 text-end'>
                        {/* under bordere section  */}
                        <div className='right_content' style={{ color: 'white' }}>
                            <p>© 2024 Matrix Filtration. All Rights Reserved</p>
                        </div>

                    </section>
               
            </section>

        </div>
    )
}
