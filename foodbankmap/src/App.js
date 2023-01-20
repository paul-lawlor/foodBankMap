import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "./Components/Map";
import Sidebar from "./Components/Sidebar";

const allFoodbanks = "https://www.givefood.org.uk/api/2/foodbanks/";

//get API data
export default function App() {
  const [foodbankData, setFoodbankData] = useState([]);

  // FILTERS STATE
  const [dataFilter, setDataFilter] = useState({
    glasgow: true
  });

  useEffect(() => {
    // Get data
    axios.get(allFoodbanks).then((response) => {
      setFoodbankData(
        response.data.filter((value, index, array) => {

          if (dataFilter.glasgow === true) {
            if (dataFilter.edin === true) {
              // gla and edin
            } else {
              // just gla
            }
          } else if (dataFilter.edin === true) {
            // just edin
          }


          return value.politics.district === "Glasgow City";
          //return value.country === "Scotland";
        })
      );
    });
  }, []);

  return (
    <div className="d-flex flex-md-row flex-column">
      <Sidebar filteredSetter={setDataFilter} />
      <Map data={foodbankData} />
    </div>
  );
}
