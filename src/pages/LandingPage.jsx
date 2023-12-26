import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='container-fluid mb-5'>
      <div className='row align-items-center m-5'>
       <div className='col-lg-5' > 
       <h4 style={{height:'80px'}}>WELCOME TO<span style={{height:'70px'}} className='text-warning'> MEDIA PLAYER</span></h4>
       <p style={{textAlign:'justify'}}>Media Player App. Will allow you to add and remove their uploaded videos , also helps to arrange them in different categories by providing drag and drop functionalities.</p>
       <Link to={'/home'} className='btn btn-info'>Get Started</Link>
       </div>
       <div className='col'></div>
      <div className='col-lg-6'>
        <img src="https://uploads-ssl.webflow.com/629b43e4ec16c904063413b4/629ba78707d54f28180db505_ezgif.com-gif-maker.gif" alt="" />
      </div>
      </div>
      <div className='features'>
      <h3 style={{height:'70px'}}  className='text-center mt-4'>Features</h3>
      <div className='cards mt-5 d-flex justify-content-between'>
        {/* CARD 1 */}
        <Card style={{ width: '22rem', height:'320px' }}>
      <Card.Img className='img-fluid' style={{height:'390px'}} variant="top" src="https://cdn.dribbble.com/users/1352003/screenshots/6711668/settings_icon.gif" />
      <Card.Body style={{height:'350px'}}>
        <Card.Title style={{height:'40px'}}>Managing Videos</Card.Title>
        <Card.Text style={{height:'50px'}}>
        User can upload, view and remove the Videos   
        </Card.Text>
      </Card.Body>  
    </Card>
    {/* CARD 2 */}
    <Card style={{ width: '22rem' ,height:'320px' }}>
      <Card.Img style={{height:'390px'}} variant="top" src="https://i.gifer.com/origin/55/554818561cbf36d813ef2010cc9d66cc.gif" />
      <Card.Body style={{height:'350px'}}>
        <Card.Title style={{height:'40px'}}>Categorize Videos </Card.Title>
        <Card.Text>
          User can categorise the videos according to their preference using drag
          and drop features
        </Card.Text>
      </Card.Body>
    </Card>
    {/* card 3 */}
    <Card style={{ width: '22rem' ,height:'320px' }}>
      <Card.Img style={{height:'390px'}} variant="top" src="https://cdn.dribbble.com/users/414694/screenshots/5730764/shot.gif" />
      <Card.Body style={{height:'350px'}}>
        <Card.Title style={{height:'40px'}}>Watch History</Card.Title>
        <Card.Text>
        User History
        </Card.Text>
      </Card.Body>
    </Card>
    
      </div>
    </div>
    <div className="row rounded mt-5 border align-items-center p-5">
        <div className="col-lg-5">
          <h3 style={{height:'150px'}} className='text-warning'>Simple , Fast and Powerful</h3>
          <p><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt voluptates eligendi amet, quod reiciendis saepe. Quaerat facere excepturi deleniti, hic consequatur labore recusandae at unde, natus magnam tenetur quasi?</p>
          <p><span className='fs-5'>Categorize Videos</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt voluptates eligendi amet, quod reiciendis saepe. Quaerat facere excepturi deleniti, hic consequatur labore recusandae at unde, natus magnam tenetur quasi?</p>
          <p><span className='fs-5'>Watch history</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt voluptates eligendi amet, quod reiciendis saepe. Quaerat facere excepturi deleniti, hic consequatur labore recusandae at unde, natus magnam tenetur quasi?</p>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
        <iframe width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default LandingPage