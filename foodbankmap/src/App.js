import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "./Components/Map";
import Sidebar from "./Components/Sidebar";

const ALL_FOODBANKS_API_URL = "https://www.givefood.org.uk/api/2/foodbanks/";
const GET_NEEDS_API_URL = "https://www.givefood.org.uk/api/2/foodbanks/search/?lat_lng="

//get API data
export default function App() {
  const [foodbankData, setFoodbankData] = useState([]);

  // FILTERS STATE

  /* Array Key
  0 - Glasgow
  1 - Edinburgh
  */
  const [dataFilter, setDataFilter] = useState('')

  useEffect(() => {
    console.log("USE EFFECT")
    // Get data
    axios.get(ALL_FOODBANKS_API_URL).then((response) => {

      // Filter Data
      let filteredData = response.data.filter((value, index, array) => {
        return (dataFilter) ? value.politics.district === dataFilter : value.country === "Scotland";
      });

      // Get Needs & Excess
      let promises = filteredData.map((foodBank) => {
        return axios.get(GET_NEEDS_API_URL + foodBank.lat_lng).then((response) => {
          // If the value is 'Unknown, or blank, change it to None
          foodBank.needs = (response.data[0].needs.needs === 'Unknown') ? ['None'] : response.data[0].needs.needs.replace(/\r/g, "").split("\n");
          foodBank.excess = (response.data[0].needs.excess === "") ? ['None'] : response.data[0].needs.excess?.replace(/\r/g,"")?.split('\n') || ['None'];
        });
      });

      // Save the data to useState
      Promise.all(promises).then(() => {
        setFoodbankData(filteredData);
      });
    });
  }, [dataFilter]);

  return (
    <div className="d-flex">
      <Sidebar setDataFilter={setDataFilter} />
      <Map data={foodbankData} />
    </div>
  );
}
