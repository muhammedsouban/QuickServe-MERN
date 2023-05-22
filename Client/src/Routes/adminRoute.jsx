import { Routes, Route } from "react-router-dom";
import Services from "../components/admin/Services/Services";
import AdminNavbar from "../components/admin/AdminNavbar/AdminNavbar";
import Sidebar from "../components/admin/sidebar/sidebar";
import Dashboard from "../components/admin/Dashboard/dashboard";
import ProviderCard from "../components/admin/ProviderList";
import Category from "../components/admin/category/Category";
function AdminRoute() {
    return (
        <>
            <AdminNavbar />
            <Sidebar />
            <Routes>
                <Route path="/AdminHome" element={<Dashboard />} />
                <Route path="/service" element={<Services />} />
                <Route path="/category" element={<Category />} />
                <Route path="/provider" element={<ProviderCard />} />
            </Routes>
        </>
    );
}

export default AdminRoute;


