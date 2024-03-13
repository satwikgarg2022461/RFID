// GridComponent.jsx
import React from 'react';

const GridComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center space-x-4">
        <span className="icon">👥</span>
        <div>
          <h3 className="text-lg font-semibold">Crores of Customers</h3>
          <p>Mission to integrate in every Retail store in India.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="icon">💼</span>
        <div>
          <h3 className="text-lg font-semibold">Ease of Doing Business</h3>
          <p>Easy to integrate software.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="icon">📈</span>
        <div>
          <h3 className="text-lg font-semibold">Growth</h3>
          <p>Minimal software access as compared to competitors.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="icon">🔒</span>
        <div>
          <h3 className="text-lg font-semibold">Secure Payments</h3>
          <p>Extra secure back-end services.</p>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
