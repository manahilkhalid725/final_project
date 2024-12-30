import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const navigate = useNavigate();

  // Navigate to the respective admin action page (create, read, etc.)
  const handleNavigation = (action) => {
    navigate(`/admin/${action}`);
  };

  return (
    <div className="admin-page-container">
      <h2 className="admin-page-header">Admin Page</h2>
      <div className="admin-page-buttons">
        <button className="admin-page-button" onClick={() => handleNavigation('create')}>
          Create Listings
        </button>
        <button className="admin-page-button" onClick={() => handleNavigation('read')}>
          Read Listings
        </button>
        <button className="admin-page-button" onClick={() => handleNavigation('update')}>
          Update Listings
        </button>
        <button className="admin-page-button" onClick={() => handleNavigation('delete')}>
          Delete Listings
        </button>
      </div>
    </div>
  );
}

export default AdminPage;
