import React from 'react';
import '../../../components/admin/Dashboard/dashboard.css';
import Sidebar from '../sidebar/sidebar';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
const Dashboard = () => {
  const Logout = () => {
    localStorage.clear();
  }

  return (
    <div >
      <AdminNavbar />
      <Sidebar />
    </div>
  );
};

export default Dashboard;

