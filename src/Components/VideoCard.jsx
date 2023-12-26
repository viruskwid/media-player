import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { addVideoToHistoryAPI, removeAVideoAPI } from '../services/allAPI';
function VideoCard({video , setDeleteVideoResponse , insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    setShow(true);
    //generate data to store to history 

    const {caption,link}=video
    let today = new Date()
    let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric' , month:'2-digit' , day:'2-digit' , hour:'2-digit' , minute:'2-digit', second:'2-digit'}).format(today)
    let videoHistory = {caption,link,timeStamp}
    //make call

    await addVideoToHistoryAPI(videoHistory)
 
  }
  const removeVideo = async (id)=>{
    await removeAVideoAPI(id)
    setDeleteVideoResponse(true)
  }
  const dargStarted = (e,id)=>{
    console.log("Drag started.....video id"+id);
    e.dataTransfer.setData("videoId",id)
  }
  return (
    <>
    <Card style={{ width: '30rem' }} draggable onDragStart={e=>dargStarted(e,video?.id)}>
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} height={'300px'}  variant="top" src={video?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center '>
          <h5 style={{height:'30px'}}>{video?.caption}</h5>
          
        </Card.Title>
     {  insideCategory?null:  <button onClick={()=>removeVideo(video?.id)} className='btn text-danger'><i class="fa-solid fa-trash"></i></button>}
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='w-100' height="400" src={`${video?.link}?autoplay=1`} title="Tere Hawaale (Full Video) Laal Singh Chaddha | Aamir,Kareena | Arijit,Shilpa | Pritam,Amitabh,Advait" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default VideoCard