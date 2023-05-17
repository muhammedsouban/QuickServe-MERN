import { Routes, Route } from "react-router-dom";
import Services from "../components/admin/Services/Services";
import AdminNavbar from "../components/admin/AdminNavbar/AdminNavbar";
import Sidebar from "../components/admin/sidebar/sidebar";
function AdminRoute() {
    return (
        <>
            <AdminNavbar/>
            <Sidebar/>
            <Routes>
                <Route path="/service" element={<Services />} />
            </Routes>
        </>
    );
}

export default AdminRoute;


