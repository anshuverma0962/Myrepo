import React from 'react'
import './Nextgen.css'
import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
    window.addEventListener('scroll', function () {
        let stickynav = document.getElementById('mystickyNav')
        if (window.pageYOffset >= 410) {
            console.log('jel')
            stickynav.classList.add('stickynav')
        }
        else {
            stickynav.classList.remove('stickynav')
        }
    })
    return (
        <div className='container-fluid mainnav' id='mystickyNav' >
            <nav class="navbar navbar-expand-lg bg-body-tertiary container">
                <div class="container-fluid mainnav" >
                    <img src={logo} style={{ width: '95px' }}></img>
                    <div class="collapse  navbar-collapse" id="navbarSupportedContent">
                        <ul class="headerNav navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/about'>About US</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/servingIndustries'>Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/client'>Our Clients</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/contact'>Contact us</Link>
                            </li>   
                            <li class="nav-item">
                                <Link to='/inbox'>Inbox</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="nav_contact_btn" type="submit" style={{ padding: '10px 50px', borderRadius: '50px',transition:'all 0.4s ease-in-out',border:'1px solid grey' }}  >Contact Us</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
