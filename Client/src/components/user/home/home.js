import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import '../../../components/user/home/home.css'
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/hero";
import ServiceCard from "../servicecard";
import CategorySlider from "../Categorylist";
import MyCard from "./specialCards";
import Deleteservice from "../../comfirmations/Deleteservice";
import axios from "axios";
import { Location } from "../../../redux/Slice/locationSlice";
function Home() {
  const [show, setShow] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      axios.get(url).then(res => {
        const data = res.data.address;
        dispatch(Location({ field: "data", value: data }));
      });
    });

    // setTimeout(() => {
    //   setShow(true)
    // }, 2000)
  }, []);


  return (
    <div>
      <Navbar />
      <Hero />
      <CategorySlider />
      <ServiceCard />
      <MyCard />
      {show && <Deleteservice open={setShow} />}
    
    </div>

  );
}

export default Home;
