import React from 'react'
import { Link } from "react-router-dom"
function Home() {
  return (
    <div className='home-container'>
        <img src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" className='home-img'></img>
        <form onSubmit="">
        <input placeholder='Search' className='search-box'></input>
        </form>
    </div>
  )
}

export default Home