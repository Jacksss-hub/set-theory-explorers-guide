
import { useState, useEffect } from 'react';

interface InteractiveVennDiagramProps {
  setA: string[];
  setB: string[];
  operation: 'union' | 'intersection' | 'difference' | 'complement';
  onElementClick?: (element: string) => void;
}

const InteractiveVennDiagram = ({ setA, setB, operation, onElementClick }: InteractiveVennDiagramProps) => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  const allElements = [...new Set([...setA, ...setB])];

  const getOperationResult = () => {
    switch (operation) {
      case 'union':
        return [...new Set([...setA, ...setB])];
      case 'intersection':
        return setA.filter(el => setB.includes(el));
      case 'difference':
        return setA.filter(el => !setB.includes(el));
      case 'complement':
        return setB.filter(el => !setA.includes(el));
      default:
        return [];
    }
  };

  const result = getOperationResult();

  const isInA = (element: string) => setA.includes(element);
  const isInB = (element: string) => setB.includes(element);
  const isInResult = (element: string) => result.includes(element);

  const getElementPosition = (element: string, index: number) => {
    const inA = isInA(element);
    const inB = isInB(element);
    
    if (inA && inB) {
      return { x: 200 + (index % 2) * 30, y: 140 + Math.floor(index / 2) * 30 };
    } else if (inA) {
      return { x: 130 + (index % 2) * 25, y: 120 + Math.floor(index / 2) * 25 };
    } else {
      return { x: 270 + (index % 2) * 25, y: 120 + Math.floor(index / 2) * 25 };
    }
  };

  const handleElementClick = (element: string) => {
    setAnimatedElements(prev => new Set([...prev, element]));
    setTimeout(() => {
      setAnimatedElements(prev => {
        const newSet = new Set(prev);
        newSet.delete(element);
        return newSet;
      });
    }, 1000);
    onElementClick?.(element);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-math-blue-300 transition-all duration-300">
      <svg viewBox="0 0 400 280" className="w-full h-64 cursor-pointer">
        {/* Background with grid pattern */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
          
          {/* Glow effects */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <rect width="400" height="280" fill="url(#grid)" />
        
        {/* Set A Circle with animation */}
        <circle
          cx="160"
          cy="140"
          r="70"
          fill="rgba(59, 130, 246, 0.2)"
          stroke="#3b82f6"
          strokeWidth="3"
          filter="url(#glow)"
          className="animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        
        {/* Set B Circle with animation */}
        <circle
          cx="240"
          cy="140"
          r="70"
          fill="rgba(139, 92, 246, 0.2)"
          stroke="#8b5cf6"
          strokeWidth="3"
          filter="url(#glow)"
          className="animate-pulse"
          style={{ animationDuration: '3s', animationDelay: '0.5s' }}
        />
        
        {/* Labels */}
        <text x="130" y="90" className="fill-math-blue-700 font-bold text-lg" filter="url(#glow)">A</text>
        <text x="270" y="90" className="fill-math-purple-700 font-bold text-lg" filter="url(#glow)">B</text>
        
        {/* Interactive elements */}
        {allElements.map((element, index) => {
          const position = getElementPosition(element, index);
          const inResult = isInResult(element);
          const isAnimated = animatedElements.has(element);
          
          return (
            <g key={element}>
              <circle
                cx={position.x}
                cy={position.y}
                r={hoveredElement === element ? 18 : 14}
                fill={inResult ? "#ef4444" : "#6b7280"}
                stroke="white"
                strokeWidth="3"
                className={`cursor-pointer transition-all duration-300 hover:drop-shadow-lg ${
                  isAnimated ? 'animate-bounce' : ''
                }`}
                filter="url(#glow)"
                onClick={() => handleElementClick(element)}
                onMouseEnter={() => setHoveredElement(element)}
                onMouseLeave={() => setHoveredElement(null)}
              />
              <text
                x={position.x}
                y={position.y + 5}
                textAnchor="middle"
                className="fill-white font-bold text-sm pointer-events-none"
                filter="url(#glow)"
              >
                {element}
              </text>
              
              {/* Hover effect ring */}
              {hoveredElement === element && (
                <circle
                  cx={position.x}
                  cy={position.y}
                  r="25"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className="animate-spin"
                  style={{ animationDuration: '2s' }}
                />
              )}
            </g>
          );
        })}
        
        {/* Operation indicator */}
        <rect x="10" y="10" width="120" height="30" rx="15" fill="rgba(0,0,0,0.8)" />
        <text x="70" y="30" textAnchor="middle" className="fill-white font-semibold text-sm">
          {operation.toUpperCase()}
        </text>
      </svg>
      
      {hoveredElement && (
        <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 rounded animate-fade-in">
          <p className="text-sm font-medium text-yellow-800">
            Element <span className="font-bold">{hoveredElement}</span>:
            {isInA(hoveredElement) && <span className="block">✓ In Set A</span>}
            {isInB(hoveredElement) && <span className="block">✓ In Set B</span>}
            <span className="block">
              {isInResult(hoveredElement) ? '✓ In Result' : '✗ Not in Result'}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default InteractiveVennDiagram;
