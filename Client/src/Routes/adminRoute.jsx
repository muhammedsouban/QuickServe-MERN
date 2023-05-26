import { Routes, Route } from "react-router-dom";
import Services from "../components/admin/Services/Services";
import AdminNavbar from "../components/admin/AdminNavbar/AdminNavbar";
import Dashboard from "../components/admin/Dashboard/dashboard";
import ProviderCard from "../components/admin/Providers/ProviderList";
import Category from "../components/admin/category/Category";
import UserList from "../components/admin/users/users";

function AdminRoute() {
    return (
        <>
            <AdminNavbar />
            <Routes>
                <Route path="/AdminHome" element={<Dashboard />} />
                <Route path="/service" element={<Services />} />
                <Route path="/category" element={<Category />} />
                <Route path="/provider" element={<ProviderCard />} />
                <Route path="/users" element={<UserList />} />

            </Routes>
        </>
    );
}

export default AdminRoute;


