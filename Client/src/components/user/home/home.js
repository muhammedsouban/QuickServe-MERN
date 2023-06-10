import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import '../../../components/user/home/home.css'
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/hero";
import ServiceCard from "../servicecard";
import CategorySlider from "../Categorylist";
import MyCard from "./specialCards";
import axios from "axios";
import Advt from "../advt/advt";
import { Location } from "../../../redux/Slice/locationSlice";
function Home() {
  const [show, setShow] = useState()
  const dispatch = useDispatch()



  return (
    <div>
      <Navbar />
      <Hero />
      <CategorySlider />
      <MyCard/>
      <Advt/>
      <MyCard/>
      <Advt/>
    </div>

  );
}

export default Home;
