import React from 'react'

import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer/Footer'
import { useFirebase } from './FirebaseProvider'
export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(false)
  const [loginSucess, setLoginSucess] = useState(false)
  const firebase = useFirebase()
  const formHandler = async (e) => {
    e.preventDefault()
    try {
      console.log('wait..........')
      firebase.loginUser(email, password)
      console.log('singin user success fuly')
    }
    catch (err) {
      console.log("this is error", err)
    }
  }
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <div>
        {/* ----------Login Banner------------- */}
        <section className='container-fluid About_baner client_baner '>
          <div className='baner_content container'>
            <h1 >Login </h1>
            <div className='spanbar'></div>
            <ul>
              <li> <a href='#'>Home</a></li>
              <li style={{ borderLeft: '1px solid white' }}> <a href='#'>Login</a></li>
            </ul>
          </div>
        </section>
        {/* ----------- Login Form -------------------- */}
        <section className='centerform'>
          <form className='parentform' onSubmit={formHandler}>
            <div className='forminside'>
              <h4 className='text-center text-white' > Log-In </h4>
              <br />
              <label> Enter your email</label>
              <br />
              <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Email' required />
              <br />
              <label>Enter your Password</label>
              <br />
              <input onChange={(e) => setPassword(e.target.value)} value={password} required type='password' placeholder='Passords' />
              <br />
              <br />
              <button type='submit'> Submit</button>
              <br />
            </div>
          </form>
        </section>
      </div>
      {/* -----------Footer ------------ */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
