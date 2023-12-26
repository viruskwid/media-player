import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-info">
        <div>
          <Navbar.Brand style={{marginLeft:'20px'}}>
         <div className='d-flex'>
         <Link className='d-flex flex-row' to={'/'} style={{textDecoration:'none' , color:'white'}} >
              <i style={{height:'20px'}} class="fa-solid fa-cloud-arrow-up fa-beat ms-3 mt-1 mb-3 me-2"></i>
             <h5 style={{height:'30px'}}> Media Player</h5>
         </Link >
         </div>
          </Navbar.Brand>
        </div>
      </Navbar>
  )
}

export default Header