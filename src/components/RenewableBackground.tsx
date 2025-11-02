import { useEffect, useState } from 'react';

const RenewableBackground = () => {
  const [elements, setElements] = useState<{ id: number; type: string; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    // Create initial elements
    const initialElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      type: ['wind-turbine', 'solar-panel', 'leaf'][Math.floor(Math.random() * 3)],
      left: Math.random() * 100, // Random position from 0-100%
      delay: Math.random() * 10, // Random delay from 0-10s
      size: 30 + Math.random() * 40 // Random size from 30-70px
    }));
    setElements(initialElements);

    // Add new elements periodically
    const interval = setInterval(() => {
      setElements(prev => {
        const newElement = {
          id: Date.now(),
          type: ['wind-turbine', 'solar-panel', 'leaf'][Math.floor(Math.random() * 3)],
          left: Math.random() * 100,
          delay: 0,
          size: 30 + Math.random() * 40
        };
        return [...prev.slice(-19), newElement]; // Keep last 19 elements + new one
      });
    }, 3000); // Add new element every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="renewable-bg">
      {elements.map(element => (
        <div
          key={element.id}
          className={`renewable-element ${element.type}`}
          style={{
            left: `${element.left}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default RenewableBackground;