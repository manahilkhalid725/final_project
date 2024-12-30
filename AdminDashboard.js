import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPage from './AdminPage';

function AdminDashboard() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    
    if (role === 'admin') {
      setIsAdmin(true);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!isAdmin) {
    return <div>You must be an admin to access this page.</div>;
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <AdminPage />
    </div>
  );
}

export default AdminDashboard;
