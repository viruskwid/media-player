
import './App.css'
import Header from './Components/Header'
import LandingPage from './pages/LandingPage'
import Foot from './Components/Foot'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'

function App() {
 

  return (
    <>
    <Header/>
   <Routes><Route/>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/history' element={<WatchHistory/>}/>

  
     </Routes>
    <Foot/>
    </>
  )
}

export default App
