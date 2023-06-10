import { Routes, Route, useLocation } from "react-router-dom";
import Services from "../components/admin/Services/Services";
import AdminNavbar from "../components/admin/AdminNavbar/AdminNavbar";
import Dashboard from "../components/admin/Dashboard/dashboard";
import ProviderCard from "../components/admin/Providers/ProviderList";
import Category from "../components/admin/category/Category";
import UserList from "../components/admin/users/users";
import City from "../components/admin/City/city";
import MediaCard from "../components/admin/Media/MediaCards";
import AdminLogin from '../components/admin/Login/login'
import Bookings from "../components/admin/Bookings/bookings";
import StatCard from "../components/admin/Dashboard/StatCard";
import AddAdvertisement from "../components/admin/Media/Advertisement";
import AddBanner from "../components/admin/Media/Banner";
import Media from "../components/admin/Media/Media";
import AdminChat from "../components/admin/Support/chat";
import Sidebar from "../components/admin/Support/chatSidebar";

function AdminRoute() {
    const location = useLocation();
    const excludeNavbarRoutes = ["/admin/chat", "/admin/side"];

    const shouldRenderNavbar = !excludeNavbarRoutes.includes(location.pathname);

    return (
        <>
            {shouldRenderNavbar && <AdminNavbar />}
            <Routes>
                <Route path="/login" element={<AdminLogin />} />
                <Route path="/AdminHome" element={<Dashboard />} />
                <Route path="/service" element={<Services />} />
                <Route path="/category" element={<Category />} />
                <Route path="/provider" element={<ProviderCard />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/city" element={<City />} />
                <Route path="/media" element={<Media/>} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/sample" element={<AddBanner />} />
                <Route path="/chat" element={<AdminChat />} />
                <Route path="/side" element={<Sidebar />} />
            </Routes>
        </>
    );
}

export default AdminRoute;
