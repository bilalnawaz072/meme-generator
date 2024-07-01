'use client';
import { createContext, useState } from 'react';

export const MemeContext = createContext();

export const MemeProvider = ({ children }) => {
  const [elements, setElements] = useState({
    background: null,
    base: null,
    aura: null,
    eyes: null,
    head: null,
    accessories: null,
  });

  const setElement = (type, value) => {
    setElements((prev) => ({ ...prev, [type]: value }));
  };

  const randomizeElements = () => {
    const randomElement = () => Math.floor(Math.random() * 5) + 1; // Example randomizer
    setElements({
      background: randomElement(),
      base: randomElement(),
      aura: randomElement(),
      eyes: randomElement(),
      head: randomElement(),
      accessories: randomElement(),
    });
  };

  return (
    <MemeContext.Provider value={{ elements, setElement, randomizeElements }}>
      {children}
    </MemeContext.Provider>
  );
};
