import React from 'react';
import '../../../components/admin/Dashboard/dashboard.css';

const Dashboard = () => {
  const Logout = () => {
    localStorage.clear();
  }

  return (
    <div >
     This is admin Home
    </div>
  );
};

export default Dashboard;

