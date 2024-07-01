'use client';
// components/MemeCanvas.js
import React, { useEffect, useRef } from 'react';

const MemeCanvas = ({ elements }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
      });
    };

    const drawImage = async (type, element) => {
      if (element) {
        const img = await loadImage(`/${type}/${type}${element}.png`);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    const drawElements = async () => {
      await drawImage('backgrounds', elements.background);
      await drawImage('bases', elements.base);
      await drawImage('auras', elements.aura);
      await drawImage('eyes', elements.eyes);
      await drawImage('heads', elements.head);
      await drawImage('accessories', elements.accessories);
    };

    drawElements();
  }, [elements]);

  return (
    <div className="meme-canvas border rounded p-4 mb-4">
      <canvas ref={canvasRef} width={400} height={400} />
    </div>
  );
};

export default MemeCanvas;
