import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '/routes/Layout';
import DetailView from '/routes/DetailView';
import WeatherDetail from './Components/WeatherDetail.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/weatherDetails/:datetime' element={<WeatherDetail data={list} /> } />
          <Route index={true} element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
