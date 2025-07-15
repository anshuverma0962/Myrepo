import React from 'react'
import './Error_Page.css'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
export default function Page_404() {
  return (
    <div className=''>
        <header>
            <Navbar></Navbar>
        </header>
        <div className='container error_page'>

        </div>
        <div className='error_content'> 
        <h2> Page Not Found</h2>
        <p>The page you are trying to access doesn’t exist or has been moved. <br/>

Try going back to our homepage.</p>
</div>
        <footer>
            <Footer></Footer>
        </footer>
    </div>

  )
}
