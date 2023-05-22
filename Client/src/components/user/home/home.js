import React from "react";
import { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import '../../../components/user/home/home.css'
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/hero";
import ServiceCard from "../servicecard";
import CategorySlider from "../Categorylist";
import MyCard from "./specialCards";

function Home() {


  // useEffect(() => {
  //   const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` }
  //   axios.get(`${APIURL}/profile/`, { headers }).then(response => {
  //     // setData(response.data)
  //   })
  // }, [APIURL])

  return (
    <div>
      <Navbar />
      <Hero />
      <CategorySlider />
      <div className="flex space-x-10 mt-6 justify-center">
        <ServiceCard />
      </div>

      <MyCard />

    </div>

  );
}

export default Home;
