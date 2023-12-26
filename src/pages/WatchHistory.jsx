import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getVideoFromHistoryAPI , removeHistoryAPI } from '../services/allAPI'

function WatchHistory() {
  const [history,setHistory] = useState([])
  useEffect(()=>{
    getHistory()
  },[])
  const getHistory = async ()=>{
    const result = await getVideoFromHistoryAPI()
    if (result.status==200) {
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }
  }
  const removeHistoryItem = async (id)=>{
    await removeHistoryAPI(id)
    getHistory()
  }
  return (
    <div className='container-fluid'>
    <div className='d-flex justify-content-between align-items-center mt-5'>
      <h5 style={{height:'50px'}}>Watch History</h5>
      <Link style={{textDecoration:'none',color:'white'}}><i  class="fa-solid fa-arrow-left me-2 mt-2"></i>Back</Link>
    </div>
   <Table>
   <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>   URL   </th>
          <th>Time Stamp</th>
          <th><button className='btn'><i class="fa-solid fa-list-ul"></i></button></th>

        </tr>
      </thead>
      <tbody>
      { history?.length>0? history?.map((video,index)=>(
        <tr>
        <td>{index+1}</td>
        <td>{video?.caption}</td>
        <td><a href={video?.link}></a></td>
        <td>{video?.timeStamp}</td>
        <td><button onClick={()=>removeHistoryItem(video?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
      </tr>
      )):
      <p className='fw-bolder text-danger'>Sorry Its empty</p>
      }
      </tbody>
   </Table>
    </div>
  )
}

export default WatchHistory
