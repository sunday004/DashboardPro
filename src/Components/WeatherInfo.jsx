import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const WeatherInfo = ({datetime, temperature, description})=>{
    return (
        <>
            <td>{datetime}</td> 
            <td>{temperature}</td>
            <td>{description}</td>
            <td> 
                <Link to = {`/${datetime}`}> Detail</Link> 
            </td>
        </>
    )
}

export default WeatherInfo;