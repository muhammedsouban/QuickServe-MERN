import { Routes, Route } from "react-router-dom";
import Navbar from "../components/user/Navbar/Navbar";
import Cart from "../components/user/cart";
import UserLogin from "../components/user/login/login";
import Signup from "../components/user/login/Register";
import SingleService from "../components/user/singleservice/SingleService";
import ServicesPage from "../components/user/servicesPage/ServicesPage";
import Bookings from "../components/user/Bookings/Bookings";
import BookingDetail from "../components/user/Bookings/BookingDetails";
import UserAuth from "../Auth/userAuth";
import Profile from "../components/user/Profile/profile";
import Footer from "../components/user/Footer/Footer";
import Chat from "../components/user/Chat/chat";
function UserRoute() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/services/:categoryName" element={<ServicesPage />} />
                <Route path="/service" element={<SingleService />} />
                {/* <Route path="/footer" element={<Footer />} /> */}

                <Route element={<UserAuth />}>
                    <Route path="/profile" element={<Profile />} />

                    <Route path="/cart" element={<Cart />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/bookingdetails" element={<BookingDetail />} />
                    <Route path="/chat" element={<Chat />} />


                </Route>
            </Routes>
            {/* <Footer /> */}

        </>
    );
}

export default UserRoute;


