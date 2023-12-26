import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import Category from '../Components/Category'
import View from '../Components/View'

function Home() {
  const [uploadVideoResponse,setUploadVideoResponse] = useState({})
  const [dropResponse,setDropResponse] = useState({})
  return (
    <>
     <div className="container d-flex justify-content-between mt-4 mb-4">
      <div className="add-videos">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
      </div>
      <Link to={'/history'} style={{textDecoration:'none' , color:'white' , fontSize:'25px'}}>Watch History <i  className='fa-solid fa-clock-rotate-left'></i></Link>
     </div>
     <div className='container-fluid w-100 mt-5 mb-5 row'>
      <div className='all-videos col-lg-9'>
       <h2 style={{height:'70px'}}>All Uploaded Videos</h2>
       <View uploadVideoResponse={uploadVideoResponse} setDropResponse={setDropResponse}/>
      </div>
      <div className='category col-lg-3'>
           <Category dropResponse={dropResponse}/>

      </div>
     </div>
    </>
  )
}

export default Home