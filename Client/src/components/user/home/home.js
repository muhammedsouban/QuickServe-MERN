import React from "react";
import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import '../../../components/user/home/home.css'
import axios from "axios";
import { useSelector } from 'react-redux'
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/hero";


function Home() {
  const APIURL = useSelector(state => state.APIURL.url)

  useEffect(() => {
    const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` }
    axios.get(`${APIURL}/profile/`, { headers }).then(response => {
      // setData(response.data)
    })
  }, [APIURL])

  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default Home;
