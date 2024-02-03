// GridComponent.jsx
import React from 'react';

// Custom CSS class for the square boxes with updated background color and centered text
const squareBoxStyle = {
  width: '100px',  // Square box side length
  height: '100px', // Square box side length
  padding: '10px', // Padding inside the box
  border: '1px solid black', // Border for the box
  margin: '10px', // Margin around the box
  backgroundColor: 'blue', // Change the background color to blue
  display: 'flex', // Use flexbox for centering
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
  listStyle: 'none', // Removes default list styling when using <li>
};

const GridComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-start"> {/* This ensures the grid is left-aligned */}
      <div style={squareBoxStyle}>
        <h2> "lorem"</h2>
        <p>Bullet 1</p>
      </div>
      <div style={squareBoxStyle}>
        <h2> "lorem"</h2>
        <p>Bullet 2</p>
      </div>
      <div style={squareBoxStyle}>
        <h2> "lorem"</h2>
        <p>Bullet 3</p>
      </div>
      <div style={squareBoxStyle}>
        <h2> "lorem"</h2>
        <p>Bullet 4</p>
      </div>
    </div>
  );
};

export default GridComponent;
