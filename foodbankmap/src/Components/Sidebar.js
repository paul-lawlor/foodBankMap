import React from 'react'



const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <button class="closebtn" onclick={openNav}> Close Sidebar</button>
    
        <h1 className='text-center'>Welcome to the <span className="transparent">Scottish</span> Foodbank Map</h1>


        <p className='wrapper'>SEARCH BAR HERE</p>

        <p className='wrapper'>
            Please select your constituency:
            <ul>
                <li>List of constituencies here!</li>
            </ul>
        </p>

        <p className='wrapper'>Filters here!</p>






    </aside>
  )
}

export default Sidebar