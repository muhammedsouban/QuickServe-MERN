import { Routes, Route } from "react-router-dom";
import ProviderNavbar from "../components/Provider/Navbar";
import Sidebar from "../components/Provider/sidebar";
import ProviderDashboard from "../components/Provider/dashboard";
import Profile from "../components/Provider/Profile/Profile";
import Requests from "../components/Provider/Bookings/Requests";
function ProviderRoute() {
    return (
        <>
            <ProviderNavbar />
            <Routes>
                <Route path="/home" element={<ProviderDashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/pending" element={<ProviderDashboard />} />
                <Route path="/completed" element={<ProviderDashboard />} />
                <Route path="/notification" element={<ProviderDashboard />} />
            </Routes>
        </>
    );
}

export default ProviderRoute;


