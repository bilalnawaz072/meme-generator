'use client';
// components/ControlPanel.js
import React, { useContext } from 'react';
import { MemeContext } from '../context/MemeContext';

const ControlPanel = () => {
  const { randomizeElements } = useContext(MemeContext);

  const downloadMeme = () => {
    const canvas = document.querySelector('canvas');
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="control-panel flex justify-between mt-4">
      <button
        onClick={randomizeElements}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Randomize Meme
      </button>
      <button
        onClick={downloadMeme}
        className="bg-green-500 text-white p-2 rounded"
      >
        Download Meme
      </button>
    </div>
  );
};

export default ControlPanel;

