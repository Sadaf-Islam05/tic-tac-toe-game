
import React from 'react';
import './Square.css'; // Optional: Add styles specific to Square if needed

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square;

