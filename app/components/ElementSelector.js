'use client';
import React, { useContext } from 'react';
import { MemeContext } from '../context/MemeContext';

const ElementSelector = () => {
  const { setElement } = useContext(MemeContext);

  return (
    <div className="element-selector">
      {['background', 'base', 'aura', 'eyes', 'head', 'accessories'].map((type) => (
        <div key={type} className="mb-2">
          <label className="block mb-1">{type.charAt(0).toUpperCase() + type.slice(1)}</label>
          <select
            onChange={(e) => setElement(type, e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">Select {type}</option>
            {[1, 2].map((value) => (
              <option key={value} value={value}>{type} {value}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default ElementSelector;

