import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Sidebar({ setDataFilter }) {

  const filterChange = (filter) => {
    setDataFilter(filter);
  }

  return (
    <div className="flex-column w-25">
      <h1 className='text-center m-3'><span className="transparent">Scottish</span> Foodbank Map</h1>
      
      <div className="mt-4 py-1" style={{borderTop:"solid #dddddd 1px",borderBottom:"solid #dddddd 1px"}}>
      <form className="form-inline d-flex m-2 mb-0">
        <input onChange={(e) => filterChange(e.target.value)} className="form-control mr-sm-2" style={{borderBottomRightRadius:0,borderBottomLeftRadius:0}} type="search" placeholder="Search District..." aria-label="Search" />
      </form>

      <Accordion className="m-2 mt-0">
        <Accordion.Item eventKey="0" style={{borderTopRightRadius:0,borderTopLeftRadius:0,borderTop:0}}>
          <Accordion.Header>Filters</Accordion.Header>
          <Accordion.Body>
            <h5>District</h5>
            <form className="ms-2">
              <label className="d-flex align-items-center my-1 pb-1" style={{borderBottom:"solid #dddddd 1px"}}> 
              <input onChange={() => filterChange('')} type="radio" name="constituency" className="me-1"/>Show All
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Glasgow City')} type="radio" name="constituency" className="me-1"/>Glasgow City
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('City of Edinburgh')} type="radio" name="constituency" className="me-1"/>City of Edinburgh
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('North Lanarkshire')} type="radio" name="constituency" className="me-1"/>North Lanarkshire
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('South Lanarkshire')} type="radio" name="constituency" className="me-1"/>South Lanarkshire
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Argyll and Bute')} type="radio" name="constituency" className="me-1"/>Argyll and Bute
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Highland')} type="radio" name="constituency" className="me-1"/>City of Edinburgh
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Na h-Eileanan Siar')} type="radio" name="constituency" className="me-1"/>Na h-Eileanan Siar (Western Isles)
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('North Ayrshire')} type="radio" name="constituency" className="me-1"/>North Ayrshire
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('South Ayrshire')} type="radio" name="constituency" className="me-1"/>South Ayrshire
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Fife')} type="radio" name="constituency" className="me-1"/>Fife
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Scottish Borders')} type="radio" name="constituency" className="me-1"/>Scottish Borders
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Dumfries and Galloway')} type="radio" name="constituency" className="me-1"/>Dumfries and Galloway
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Perth and Kinross')} type="radio" name="constituency" className="me-1"/>Perth and Kinross
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Angus')} type="radio" name="constituency" className="me-1"/>Angus
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('West Lothian')} type="radio" name="constituency" className="me-1"/>West Lothian
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Aberdeenshire')} type="radio" name="constituency" className="me-1"/>Aberdeenshire
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('West Dunbartonshire')} type="radio" name="constituency" className="me-1"/>West Dunbartonshire
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Renfrewshire')} type="radio" name="constituency" className="me-1"/>Renfrewshire
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Inverclyde')} type="radio" name="constituency" className="me-1"/>Inverclyde
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Aberdeen City')} type="radio" name="constituency" className="me-1"/>Aberdeen City
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Falkirk')} type="radio" name="constituency" className="me-1"/>Falkirk
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('East Renfrewshire')} type="radio" name="constituency" className="me-1"/>East Renfrewshire
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Stirling')} type="radio" name="constituency" className="me-1"/>Stirling
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Orkney Islands')} type="radio" name="constituency" className="me-1"/>Orkney Islands
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('East Dunbartonshire')} type="radio" name="constituency" className="me-1"/>East Dunbartonshire
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Dundee City')} type="radio" name="constituency" className="me-1"/>Dundee City
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Shetland Islands')} type="radio" name="constituency" className="me-1"/>Shetland Islands
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('East Lothian')} type="radio" name="constituency" className="me-1"/>East Lothian
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Midlothian')} type="radio" name="constituency" className="me-1"/>Midlothian
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Clackmannanshire')} type="radio" name="constituency" className="me-1"/>Clackmannanshire
              </label>
              <label className="d-flex align-items-center"> 
              <input onChange={() => filterChange('Moray')} type="radio" name="constituency" className="me-1"/>Moray
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
        <small className="fixed-bottom m-2 p-1"><a href="https://www.givefood.org.uk/api/" className="p-1 text-primary rounded-1" style={{backgroundColor:"rgba(23,23,23,0.3)"}}>Give Food API</a></small>
      </div>
    </div>
  )
}