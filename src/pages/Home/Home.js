import React from 'react'
import './Home.css'
import Sidebar from '../../component/Sidebar'
import HomeRightbar from '../../component/HomeRightbar/HomeRightbar'
function Home() {
  return (
    <div className='mainHome'>
        <Sidebar />
        <HomeRightbar />
    </div>
  )
}

export default Home