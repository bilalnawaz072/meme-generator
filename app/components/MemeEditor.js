'use client';
import React, { useContext } from 'react';
import { MemeContext } from '../context/MemeContext';
import ElementSelector from './ElementSelector';
import MemeCanvas from './MemeCanvas';
import ControlPanel from './ControlPanel';

const MemeEditor = () => {
  const { elements } = useContext(MemeContext);

  return (
    <div className="meme-editor container mx-auto p-4">
      <ElementSelector />
      <MemeCanvas elements={elements} />
      <ControlPanel />
    </div>
  );
};

export default MemeEditor;
