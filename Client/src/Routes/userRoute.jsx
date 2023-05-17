import { Routes, Route } from "react-router-dom";
import Services from "../components/admin/Services/Services";
import Navbar from "../components/user/Navbar/Navbar";
function UserRoute() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/hello" element={<Services />} />
            </Routes>
        </>
    );
}

export default UserRoute;


