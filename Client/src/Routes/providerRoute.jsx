import { Routes, Route } from "react-router-dom";
import ProviderNavbar from "../components/Provider/Navbar";
import Sidebar from "../components/Provider/sidebar";
import ProviderDashboard from "../components/Provider/dashboard";
function ProviderRoute() {
    return (
        <>
            <ProviderNavbar />
            <Sidebar />
            <Routes>
                <Route path="/home" element={<ProviderDashboard />} />
                <Route path="/profile" element={<ProviderDashboard />} />
                <Route path="/requests" element={<ProviderDashboard />} />
                <Route path="/pending" element={<ProviderDashboard />} />
                <Route path="/completed" element={<ProviderDashboard />} />
                <Route path="/notification" element={<ProviderDashboard />} />
            </Routes>
        </>
    );
}

export default ProviderRoute;


