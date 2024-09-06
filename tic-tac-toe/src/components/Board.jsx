import React from 'react';
import Square from './Square'; // Adjusted path
import './Board.css'; // Optional: Add styles specific to Board if needed

const Board = ({ squares, onClick }) => (
  <div className="board">
    {squares.map((square, index) => (
      <Square key={index} value={square} onClick={() => onClick(index)} />
    ))}
  </div>
);

export default Board;


