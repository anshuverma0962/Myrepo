import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import location from './ContactAssest/location.png'
import phone from './ContactAssest/phone.png'
import mail from './ContactAssest/mail.png'
import { useFirebase } from '../FirebaseProvider'
export default function Contact() {
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [message, setMessage] = useState('')
    const [submission, setSubmission] = useState(false)
    const firebase = useFirebase()
    const submitHandler = async (e) => {
        e.preventDefault()
        await firebase.addContact(name, mobile, email, company, message);
        alert('message sent succesfully')
        setName("")
        setMobile("")
        setCompany("")
        setMessage("")
        setEmail("")
        setSubmission(true)



    }

    const messageHandler = () => {
        setSubmission(false)
    }

    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <section className='container-fluid contact_baner'>
                <div className='baner_content container'>
                    <h1 >Contact US</h1>
                    <div className='spanbar'></div>
                    <ul className='banner_list_item'>
                        <li> <a href='#'>Home</a></li>
                        <li style={{ borderLeft: '1px solid white' }}> <a href='#'>Contact Us</a></li>
                    </ul>
                </div>
            </section>
            {/* form  seciton 
 */}
            <section className='container contact_usSection'>
                <div className=''>
                    <div className='row'>
                        <div className='col-md-6 contact_left'>
                            <div className='d-flex mx-3'>
                                <img src={location}></img>
                                <div className='contact_item'>
                                    <h4>Matrix Filtration   </h4>
                                    <p>140, Khandsa Road, Gurgaon, Haryana, India</p>
                                </div>
                            </div>
                            <div className='d-flex mx-3'>
                                <img src={phone}></img>
                                <div className=''>
                                    <h4>Mobile Number</h4>
                                    <p>+91 9999066503</p>
                                </div>
                            </div>

                            <div className='d-flex mx-3'>
                                <img src={mail}></img>
                                <div className=''>
                                    <h4>Email Id</h4>
                                    <p>info@matrixfiltration.com</p>
                                </div>
                            </div>
                        </div>
                        {/*------------------------ form section */}
                        <div className='col-md-6 contact_right'>
                            <div className='mainHeading mx-3'>
                                <h3 className='mx-3'>Get In Touch</h3>
                                <div className='mx-3'>
                                    {submission == true ? <h4 style={{ color: '#FC0606' }}> Query Sent succesfully  <button className='msgbtn' onClick={messageHandler}>X</button> </h4> : ''}
                                </div>
                                <form onSubmit={submitHandler}>
                                    <div className='d-flex'>
                                        <div> <label className='mx-3'>Name <sup>*</sup></label><br />
                                            <input className='mx-3' type='text' onChange={(e) => setName(e.target.value)} value={name} required></input>
                                        </div>
                                        <div>
                                            <label>Mobile no <sup>*</sup></label> <br />
                                            <input type='number' onChange={(e) => setMobile(e.target.value)} value={mobile}  required ></input>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <div>
                                            <label className='mx-3' >Email ID </label> <br />
                                            <input className='mx-3' type='email' onChange={(e) => setEmail(e.target.value)} value={email} ></input>
                                        </div>
                                        <div>
                                            <label>Company Name <sup>*</sup></label> <br />
                                            <input type='text' onChange={(e) => setCompany(e.target.value)} value={company} required></input>
                                        </div>
                                    </div>
                                    <label className='mx-3'>Message <sup>*</sup></label> <br />
                                    <textarea className='p-5 mx-3' type='number' onChange={(e) => setMessage(e.target.value)} value={message} required></textarea>
                                    <br />
                                    <button className='my-5 submitButton mx-3' type='submit'> Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* footer  */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}
