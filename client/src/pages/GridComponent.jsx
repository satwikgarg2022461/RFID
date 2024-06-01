// GridComponent.jsx
import React from 'react';

const GridComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex items-center space-x-4">
        <span className="icon text-4xl">👥</span>
        <div>
          <h3 className="text-lg font-semibold"> Faster Than Traditional Barcodes</h3>
          <p>Our RFID reader system offers lightning-fast scanning capabilities, significantly reducing checkout times compared to traditional barcode systems.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="icon text-4xl">💼</span>
        <div>
          <h3 className="text-lg font-semibold">Innovation</h3>
          <p>Stay ahead of the curve with our cutting-edge RFID reader system, designed to revolutionize retail processes and enhance efficiency.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="icon text-4xl">📈</span>
        <div>
          <h3 className="text-lg font-semibold">Enhanced Inventory Management</h3>
          <p>Experience unprecedented control over your inventory with our RFID reader system. Accurate and real-time tracking capabilities enable better inventory visibility and control.</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="icon text-4xl">🔒</span>
        <div>
          <h3 className="text-lg font-semibold">Customization</h3>
          <p>Receive tailored solutions to meet your specific business needs, ensuring maximum value and effectiveness.vices.</p>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
