import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import ProviderRoute from "./Routes/providerRoute";
import ProviderHome from "./components/Provider/home";
import ProviderLanding from "./components/Provider/dashboard";
import AdminLogin from "./components/admin/Login/login";
import Home from "./components/user/home/home";
import UserRoute from "./Routes/userRoute";
import AdminRoute from "./Routes/adminRoute";
import ProviderLogin from "./components/Provider/login";
import { Toaster } from "react-hot-toast";
import AdminAuth from "./Auth/adminAuth";
import UserAuth from "./Auth/userAuth";
import ProviderAuth from "./Auth/providerAuth";
import Requests from "./components/Provider/Bookings/Requests";

function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
        <Route path="/provider/register" element={<ProviderLanding />} />

          <Route path="/provider/landing" element={<ProviderHome />} />
          <Route path="/provider/login" element={<ProviderLogin />} />
          <Route path="/provider/request" element={<Requests />} />
          <Route element={<AdminAuth />}>
            <Route path="/admin/*" element={<AdminRoute />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />

          <Route path="/*" element={<UserRoute />} />
          <Route path="/" element={<Home />} />

          <Route path="/provider/*" element={<ProviderRoute />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
