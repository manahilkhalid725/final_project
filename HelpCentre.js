// src/pages/HelpCentre.js
import React from 'react';
function HelpCentre() {
  return (
    <div className="help-centre-container">
      <h1 className="help-centre-header">Help Centre</h1>
      <div className="help-centre-content">
        <div className="article">
          <h3>How to use this platform</h3>
          <p>Step-by-step guide to using our platform</p>
          <a href="#">Read more</a>
        </div>
        <div className="article">
          <h3>FAQ</h3>
          <p>Commonly asked questions</p>
          <a href="#">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default HelpCentre;
