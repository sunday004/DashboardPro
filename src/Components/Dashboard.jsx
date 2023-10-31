import WeatherInfo from './WeatherInfo';
import Card from './Card';
import Chart from './Chart';
import React, { useState, useEffect} from 'react';

const Dashboard = ({list}) =>{

    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = list.filter((items) => //Object.keys(items).filter((item) => 
        Object.values(items)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase()) || Object.values(items.weather).join("").toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list));
    }
  };

    return(
        <div className='whole-page'>
        <div className='summary'>
        <Card 
          name = 'High Temperature'
          value = '19.6'
        />
        <Card
          name = 'Dominant Cloud Type'
          value = 'Overcast Cloud'
        />
        <Card
          name = 'Total Data Entries'
          value = '24'
        />
      </div>
        <div className='container'>
        <input
          type="text"
          placeholder="Search date and temperature..."
          onChange={(event) => searchItems(event.target.value)}
        />
        <select name="description filter" id="" onChange={(event) => searchItems(event.target.value)}>
          <option value="" placeholder='filter description'>filter description</option>
          <option value="Overcast">Overcast</option>
          <option value="Scattered">Scattered Clouds</option>
          <option value="Clear Sky">Clear Sky</option>
          <option value="Broken Clouds">Broken Clouds</option>
          <option value="Few Clouds">Few Clouds</option>
        </select>
        <table>
          <tbody>
              <tr>
                <td><b>Date and Time</b></td>
                <td><b>Temperature (Celsius)</b></td>
                <td><b>Description</b></td>
                <td><b>Detail</b></td>
              </tr>
              {searchInput.length > 0 ?
                  filteredResults.map((item, index) => (
                    <tr key={index}>
                      <WeatherInfo
                        datetime={item.datetime}
                        temperature={item.temp}
                        description={item.weather.description}
                      />
                    </tr>
                  ))
              : list.length > 0 ? (
                  list.map((item, index) => (
                    <tr key={index}>
                      <WeatherInfo
                        datetime={item.datetime}
                        temperature={item.temp}
                        description={item.weather.description}
                      />
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No Data</td>
                  </tr>
                )
              }
          </tbody>
        </table>
        </div>
        <Chart list={list} />
    </div>
    )
}

export default Dashboard;