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
  const [dataFilter, setDataFilter] = useState({
    glasgow: true
  });

  useEffect(() => {
    // Get data
    axios.get(ALL_FOODBANKS_API_URL).then((response) => {

      // Filter Data to Scotland Only
      let filteredData = response.data.filter((value, index, array) => {
        // CHECK FILTERS HERE TO SEE WHAT TO SHOW
        // i.e. return value.politics.district === "Glasgow City";
        return value.country === "Scotland";
      });

      // Get Needs & Excess
      let promises = filteredData.map((foodBank) => {
        return axios.get(GET_NEEDS_API_URL + foodBank.lat_lng).then((response) => {
          foodBank.needs = (response.data[0].needs.needs === 'Unknown') ? ['None'] : response.data[0].needs.needs.replace(/\r/g, "").split("\n");
          foodBank.excess = (response.data[0].needs.excess === "") ? ['None'] : response.data[0].needs.excess?.replace(/\r/g,"")?.split('\n') || ['None'];
        });
      });

      // Save the data to useState
      Promise.all(promises).then(() => {
        setFoodbankData(filteredData);
      });
    });
  }, []);

  return (
    <div className="d-flex">
      <Sidebar filteredSetter={setDataFilter} />
      <Map data={foodbankData} />
    </div>
  );
}
