import React, { useState, useEffect} from 'react';
import './App.css';
import DetailView from '../routes/DetailView';
import Dashboard from './Components/Dashboard';
import Layout from '../routes/layout';
import { useRoutes } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchAllWeatherData = async () => {
      try {
        const response = await fetch(
          "https://api.weatherbit.io/v2.0/history/hourly?lat=35.775&lon=-78.638&start_date=2023-10-17&end_date=2023-10-18&tz=local&key=" + API_KEY
        );
        const json = await response.json();
        setList(json.data);
        console.log(list)
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllWeatherData();
  }, []);


  let element = useRoutes([
    {
      path:"/:datetime",
      element: <DetailView list={list} />
    },
    {
      path: "/",
      element:<Dashboard list={list}/>
    }
  ]);


  return (
    <>
    <Layout />
    <div>
      {element}
    </div>
    </>
  );
}

export default App;
