import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Sidebar({ filteredSetter }) {
  return (
    <div className="flex-column w-25">
      <h1 className='text-center m-3'><span className="transparent">Scottish</span> Foodbank Map</h1>
      
      <div className="mt-4 py-1" style={{borderTop:"solid #dddddd 1px",borderBottom:"solid #dddddd 1px"}}>
      <form className="form-inline d-flex m-2 mb-0">
        <input className="form-control mr-sm-2" style={{borderTopRightRadius:0,borderBottomRightRadius:0,borderBottomLeftRadius:0,borderRight:0}} type="search" placeholder="....." aria-label="Search" />
        <button className="btn btn-primary my-2 my-sm-0" style={{borderTopLeftRadius:0,borderBottomLeftRadius:0,borderBottomRightRadius:0}} type="submit">Search</button>
      </form>

      
      <Accordion className="m-2 mt-0">
        <Accordion.Item eventKey="0" style={{borderTopRightRadius:0,borderTopLeftRadius:0,borderTop:0}}>
          <Accordion.Header>Filters</Accordion.Header>
          <Accordion.Body>
            <h5>Constituencies</h5>
            <form className="ms-2">
              <label className="d-flex align-items-center"> 
              <input onChange={filteredSetter('Glasgow City')}type="checkbox" className="me-1"/>Constituency 1
              </label>
              <label className="d-flex align-items-center"> 
              <input type="checkbox" className="me-1"/>Constituency 2
              </label>
              <label className="d-flex align-items-center"> 
              <input type="checkbox" className="me-1"/>Constituency 3
              </label>
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>

      <div className="m-2 mt-1">
        <h2>About</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit curae dis sodales dignissim, vulputate suspendisse morbi libero tristique ante iaculis himenaeos felis. Libero metus platea cras conubia hendrerit vehicula tortor fringilla, diam integer ante sodales sed curabitur massa, rhoncus pulvinar eu condimentum arcu ornare porta. 
        </p>
        <small className="fixed-bottom m-2 p-1"><a href="https://www.givefood.org.uk/api/">Give Food API</a></small>
      </div>
    </div>
  )
    // <aside 
    //   className='sidebar, w-25 w-sm-100'
    //   >
    //     <h1 className='text-center'><span className="transparent">Scottish</span> Foodbank Map</h1>
    //     <p className='wrapper'>SEARCH BAR HERE</p>
    //     <p className='wrapper'>
    //         Please select your constituency:
    //         <ul>
    //             <li>List of constituencies here!</li>
    //         </ul>
    //     </p>
    //     <p className='wrapper'>Filters here!</p>
    // </aside>

}