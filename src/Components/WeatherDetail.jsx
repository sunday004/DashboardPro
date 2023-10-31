import React, { Component, useEffect, useState } from "react";
import './Detail.css'
import {useParams} from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const WeatherDetail = ({list})=> {
    const {datetime} = useParams();
  
    return(
         <div className='Details'>
          {
            // Conditional Rendering
            list ?
              <div>
                <h3>Date: {list.datetime}</h3>
                <h3>Temperature: {list.temp}</h3> 
                <h3>Description: {list.weather.description}</h3> 
                <h3>Elevation: {list.elev_angle}</h3> 
                <h3>Wind speed: {list.wind_spd}</h3> 
                <h3>Wind directon: {list.wind_dir + 'deg'}</h3>
              </div>

            : <h1>{'No Data'}</h1>
          }
    </div>
            );
        };

export default WeatherDetail;