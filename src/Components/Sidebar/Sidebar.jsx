import React from 'react'
import '../Sidebar/Sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h3>Categories</h3>
      <ul>
        <li >All <span>8</span></li>
        <li className='active'>Tech <span>2</span></li>
        <li>Travel<span>2</span></li>
        <li>Health<span>2</span></li>
        <li>Business<span>2</span></li>
      </ul>
    </div>
  )
}

export default Sidebar
