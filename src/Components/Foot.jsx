import React from 'react'
import { Link } from 'react-router-dom'


function Foot() {
  return (
    <div >
       <div className='container-fluid d-flex justify-content-between'>
          <div>
          <h4  style={{height:'70px'}}>< i  style={{height:'40px'}} class="fa-solid fa-cloud-arrow-up"></i> Media Player</h4>
          <p style={{fontSize:'12px'}}>Designed and built with all the love in the <br /> world by the the Bootstrap team with the <br /> help of our contribution</p>
          <p style={{fontSize:'12px'}}>Code licensed MIT,docs CC BY 3.0</p>
          <p style={{fontSize:'12px'}}>Currently v5.3.5</p>
          </div>
          <div className='links d-flex flex-column'>
            <h3  style={{height:'70px'}}>Links</h3>
            <Link style={{color:'white'}} className='text-decoration-none' to={'/home'}>Home</Link>
            <Link style={{color:'white'}} className='text-decoration-none' to={'/'}>Landing page</Link>
            <Link style={{color:'white'}} className='text-decoration-none'to={'/history'}>Watch History</Link>
          </div>
          <div className='guide d-flex flex-column'>
            <h3  style={{height:'70px'}}>Guides</h3>
            <a style={{color:'white'}} className='text-decoration-none' href="">React</a>
            <a style={{color:'white'}} className='text-decoration-none' href="">React Routing</a>
            <a style={{color:'white'}} className='text-decoration-none' href="">Vite</a>
          </div>
          <div className='social d-flex flex-column'>
            <h3  style={{height:'70px'}}>Contact</h3>
            <div className='d-flex   '>
            <input type="text" placeholder='enter your mail' className='form-control'/>
            <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
            <div style={{ color: 'white' }} className="icons mt-3 d-flex justify-content-between">
              <i style={{ height: '50px' }} class="fa-solid fa-envelope fa-2x"></i>
              <i style={{ height: '50px' }} class="fa-brands fa-twitter fa-2x"></i>
              <i style={{ height: '50px' }} class="fa-brands fa-github fa-2x"></i>
              <i style={{ height: '50px' }} class="fa-brands fa-facebook fa-2x"></i>
              <i style={{ height: '50px' }} class="fa-brands fa-instagram fa-2x"></i>
              <i style={{ height: '50px' }} class="fa-brands fa-linkedin fa-2x"></i>
  
            </div>
          </div>
       </div>
        <div style={{alignItems:'center'}}>
          <p className='text-center'>Copyright &copy;20233 Media player.Build with React</p>
        </div>

    </div>
  )
}

export default Foot