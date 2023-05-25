import { Routes, Route } from "react-router-dom";
import Services from "../components/admin/Services/Services";
import Navbar from "../components/user/Navbar/Navbar";
import Cart from "../components/user/cart";
import UserLogin from "../components/user/login/login";
import Signup from "../components/user/login/Register";

function UserRoute() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/Services" element={<Services />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/login" element={<UserLogin />} />
                <Route exact path="/register" element={<Signup />} />



            </Routes>
        </>
    );
}

export default UserRoute;


