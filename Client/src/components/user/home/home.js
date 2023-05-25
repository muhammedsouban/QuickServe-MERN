import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import '../../../components/user/home/home.css'
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/hero";
import ServiceCard from "../servicecard";
import CategorySlider from "../Categorylist";
import MyCard from "./specialCards";
import Deleteservice from "../../comfirmations/Deleteservice";
function Home() {
  const [show, setShow] = useState()

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 2000)

  }, [])

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
