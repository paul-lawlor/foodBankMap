import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Map from './Components/Map';
import Sidebar from './Components/Sidebar'

const allFoodbanks = "https://www.givefood.org.uk/api/2/foodbanks/"

//get API data 
export default function App() {

  const [foodbankData, setFoodbankData] = useState([]);

  useEffect(() => {
     // Get data
    axios.get(allFoodbanks)
    .then ((response) => {
      setFoodbankData(response.data.filter((value, index, array) => {return value.country === 'Scotland';}))
    })
  }, [])
  
  return (
    <div className='d-flex'>
      <Sidebar />
      <Map data={foodbankData}/>
    </div>
  );

}







