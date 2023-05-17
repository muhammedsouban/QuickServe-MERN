import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/user/Home";
import UserRoute from "./Routes/userRoute";
import AdminRoute from "./Routes/adminRoute";
function App() {
  return (
  
      <BrowserRouter>
        <Routes>
        <Route path="/*" element={<UserRoute />}/>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/admin/*" element={<AdminRoute />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;


