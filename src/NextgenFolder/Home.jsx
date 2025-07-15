import React from 'react'
import Navbar from './Navbar'
import about from '../assets/About.png'
import arrow from '../assets/arrow.svg'
import hyva from '../assets/hyva.png'
import aditya from '../assets/aditya.png'
import jindal from '../assets/jindal.png'
import lnt from '../assets/lnt.png'
import subros from '../assets/subros.png'
import escort from '../assets/escort.png'
import './Nextgen.css'
import Footer from './Footer/Footer'
import filter from '../assets/filter.png'
import sepration from '../assets/sepration.png'
import analytics from '../assets/analytics.png'
import automotive from '../assets/autocar.png'
import twoplant from '../assets/twoplant.jpg'
import twoguy from '../assets/twoGuy.jpg'
import oil from '../assets/oil.jpg'
import machine from '../assets/machine.jpg'
import female from '../assets/female.jpg'



export default function Home() {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            {/* ------------home banner --------------- */}
            <section className='container-Fluid heroSection'>
                <div className='banner '>
                    <div>
                        <h1>Next-Gen Filtration  <br /> <span className='technology'>Technology   </span></h1>

                        <h5 className='explore_btn' > <img src={arrow}></img>Explore Products</h5>
                    </div>
                </div>
            </section>
            {/*----------------------- Product section----------------  */}
            <section className='container ProductSection'>
                <h1>Explore Our Products</h1>
                <div className='row products'>
                    <div className='col-md-4  explore_Product'> <img src={filter}></img> <h2> For Filtration</h2> </div>
                    <div className='col-md-4 explore_Product '> <img src={sepration}></img> <h2>For Sepration</h2></div>
                    <div className='col-md-4 explore_Product'> <img src={analytics}></img><h2>For Analytics</h2></div>
                </div>
            </section>
            {/*-------------------- about us section----------------  */}
            <section className='container aboutSection'>
                <div className='row'>
                    <div className='col-md-6 aboutText'>
                        <h1> About Us</h1>
                        <p>Matrix Filtration has been manufacturing industrial oil filters and filtration systems since it’s inception in 2017. Over the years we had carried a variety of products to meet industrial oil filtration needs, including Hydraulic oil filtration machine, Lube filtration machines, Paper band filtration system, Magentic coolant separators,Hydraulic By-pass filters, Filter Cartridges ,Magnetic Filters, Hydraulic oil cleaning machines etc.
                        </p>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h2 style={{ color: '#F02916', fontSize: '56px' }}>500+</h2>
                                <p>Installation Across India</p>
                            </div>
                            <div className='col-md-6'>
                                <h2 style={{ color: '#F02916', fontSize: '56px' }}>15+</h2>
                                <p>Industries Served</p>
                            </div>
                        </div>
                        {/* button Readmo re */}
                        <div className='row readbtn'>
                            <div className='col-md-8 d-flex px-3 text-center readbtn_first '>
                                <img className='' src={arrow}>
                                </img>
                                <h3 className='mx-3'  >  Read More</h3>
                            </div>
                            <div className='col-md-4'></div>
                        </div>
                    </div>
                    <div className='col-md-6 aboutImage' >
                        <img src={about}></img>
                    </div>
                </div>
            </section>
            {/* -------------------------- srervng industries seciton ------------ */}
            <section className='container Industries  my-5'>
                <h1 className='my-5'> Industries We Serve </h1>
                <div className='row Industries'>
                    <div className='col-md-4  serving_industries'>
                        <img src={automotive}></img>
                        <h2> Automative</h2>
                        <p>We enhance engine performance, reduce emissions, and extend vehicle life through advanced filtration for all vehicle types.</p>
                    </div>
                    <div className='col-md-4  serving_industries'>
                        <img src={twoplant}></img>
                        <h2>Power Plants</h2>
                        <p>Our filters protect turbines and equipment, ensuring efficiency, safety, and reduced maintenance in all power generation systems.</p>
                    </div>

                    <div className='col-md-4  serving_industries'>
                        <img src={twoguy} alt="" />
                        <h2>Aero Space</h2>
                        <p>We provide high-performance filtration for engines and systems, ensuring safety, reliability, and compliance in aerospace operations.</p>
                    </div>
                </div>
                <div className='row Industries my-5'>
                    <div className='col-md-4   serving_industries' >
                        <img src={oil}></img>
                        <h2> Oil & Gas</h2>
                        <p>Durable filtration solutions protect vital equipment, improving safety, efficiency, and longevity in oil and gas operations.</p>
                    </div>
                    <div className='col-md-4  serving_industries'>
                        <img src={machine} alt="" />
                        <h2>Machine Tools</h2>
                        <p>Filtration improves precision and equipment life by removing contaminants from fluids in machining and manufacturing environments.</p>

                    </div>
                    <div className='col-md-4  serving_industries'> <img src={female} alt="" />
                        <h2>Engineering</h2>
                        <p>Customized filters safeguard machinery, enhance durability, and reduce maintenance across various industrial and engineering applications</p>
                    </div>
                </div>
            </section>
            {/*------------------------- our client------------------ section  */}
            <section className='container'>
                <h1>Our Clients</h1>
                <div className='d-flex client'>
                    <div> <img src={hyva}></img></div>
                    <div> <img src={jindal}></img></div>
                    <div> <img src={subros}></img></div>
                    <div> <img src={lnt}></img></div>
                    <div> <img src={escort}></img></div>
                    <div> <img src={aditya}></img></div>
                </div>
            </section>
            {/* ---------------------------collabration section----------------  */}
            <section className='container my-5'>
                <div className='row '>
                    <div className='col-md-6 my-5 Collab_content'>
                        <h1>Collaboration & Experience</h1>
                        <p>In 2021 Matrix Filtration India Pvt Ltd had a collaboration with TAN Delta Systems Ltd, a UK based company, world leader in oil condition monitoring management systems.</p>
                        <div className='row Collab mx-auto my-5'>
                            <div className='col-md-6 collab_first '>
                                <a className='collab_first ' href='#'>Collaborations</a>
                            </div>
                            <div className='col-md-6 collab_second'>
                                <a className='collab_second' href='#'>Experience</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img style={{ borderRadius: '22px', width: '100%' }} src='https://cdn-ildojkp.nitrocdn.com/XFFKnHnXYZbQdvLQSyOgrNCvJthCDvdn/assets/images/optimized/rev-1e12d28/matrixfiltration.com/wp-content/uploads/2025/06/collborations.webp'></img>
                    </div>
                </div>
            </section>
            {/*---------------- Footer Section -------------- */}'
            <footer>
                <Footer></Footer>
            </footer>
        @
        </div>

    )
}
