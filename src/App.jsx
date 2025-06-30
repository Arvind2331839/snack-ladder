import { useState } from 'react'
import Navbar from './home/Navbar'
import SideBar from './home/SideBar'

const App = () => {
  const [sideBarToggle, setSideBarToggle]= useState(false)
console.log(sideBarToggle)
  return (
    <div className=''>
      <Navbar sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle} />
      <SideBar sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle}/>
    </div>
  )
}

export default App
