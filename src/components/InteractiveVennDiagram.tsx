
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
  const [movingElements, setMovingElements] = useState<Set<string>>(new Set());
  const [showResult, setShowResult] = useState(false);

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

  const getElementPosition = (element: string, index: number, isResultView = false) => {
    const inA = isInA(element);
    const inB = isInB(element);
    
    if (isResultView && isInResult(element)) {
      return { x: 200 + (index % 3) * 40, y: 220 + Math.floor(index / 3) * 30 };
    }
    
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

  const animateToResult = () => {
    setShowResult(true);
    setMovingElements(new Set(result));
    
    setTimeout(() => {
      setMovingElements(new Set());
    }, 2000);
  };

  const resetAnimation = () => {
    setShowResult(false);
    setMovingElements(new Set());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      animateToResult();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [operation]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-math-blue-300 transition-all duration-300">
      {/* Mathematical Set Notation Display */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow-md border-l-4 border-math-blue-600">
        <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Mathematical Representation</h3>
        <div className="grid md:grid-cols-2 gap-4 text-center">
          <div className="bg-math-blue-50 p-3 rounded-lg">
            <span className="font-bold text-math-blue-800">Set A = </span>
            <span className="font-mono text-math-blue-700">{"{"}{setA.join(", ")}{"}"}</span>
          </div>
          <div className="bg-math-purple-50 p-3 rounded-lg">
            <span className="font-bold text-math-purple-800">
              {operation === 'complement' ? 'Universal Set U = ' : 'Set B = '}
            </span>
            <span className="font-mono text-math-purple-700">{"{"}{setB.join(", ")}{"}"}</span>
          </div>
        </div>
        <div className="mt-4 bg-green-50 p-3 rounded-lg text-center">
          <span className="font-bold text-green-800">Result = </span>
          <span className="font-mono text-green-700">{"{"}{result.join(", ")}{"}"}</span>
        </div>
      </div>

      {/* Control buttons */}
      <div className="flex gap-4 mb-4 justify-center">
        <button
          onClick={animateToResult}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
        >
          Show Elements Moving
        </button>
        <button
          onClick={resetAnimation}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
        >
          Reset View
        </button>
      </div>

      <svg viewBox="0 0 400 280" className="w-full h-64 cursor-pointer">
        {/* Background with grid pattern */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="trail">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Animated gradient for moving elements */}
          <linearGradient id="movingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444">
              <animate attributeName="stop-color" values="#ef4444;#f97316;#eab308;#22c55e;#3b82f6;#8b5cf6;#ef4444" dur="2s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6;#ef4444;#f97316;#eab308;#22c55e;#3b82f6;#8b5cf6" dur="2s" repeatCount="indefinite"/>
            </stop>
          </linearGradient>
        </defs>
        
        <rect width="400" height="280" fill="url(#grid)" />
        
        {/* Set A Circle with enhanced animation */}
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
        
        {/* Set B Circle with enhanced animation */}
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
        
        {/* Result area with enhanced styling */}
        {showResult && (
          <rect
            x="150"
            y="200"
            width="100"
            height="60"
            fill="rgba(34, 197, 94, 0.2)"
            stroke="#22c55e"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        )}
        
        {/* Enhanced Labels with glow */}
        <text x="130" y="90" className="fill-math-blue-700 font-bold text-lg" filter="url(#glow)">A</text>
        <text x="270" y="90" className="fill-math-purple-700 font-bold text-lg" filter="url(#glow)">B</text>
        {showResult && (
          <text x="200" y="190" className="fill-green-700 font-bold text-sm" textAnchor="middle" filter="url(#glow)">
            Result
          </text>
        )}
        
        {/* Interactive elements with enhanced movement */}
        {allElements.map((element, index) => {
          const position = getElementPosition(element, index, showResult && isInResult(element));
          const inResult = isInResult(element);
          const isAnimated = animatedElements.has(element);
          const isMoving = movingElements.has(element);
          
          return (
            <g key={element}>
              {/* Enhanced movement trail */}
              {isMoving && (
                <>
                  <circle
                    cx={position.x - 20}
                    cy={position.y - 10}
                    r="12"
                    fill="url(#movingGradient)"
                    opacity="0.4"
                    filter="url(#trail)"
                  />
                  <circle
                    cx={position.x - 40}
                    cy={position.y - 20}
                    r="8"
                    fill="url(#movingGradient)"
                    opacity="0.3"
                    filter="url(#trail)"
                  />
                  <circle
                    cx={position.x - 60}
                    cy={position.y - 30}
                    r="4"
                    fill="url(#movingGradient)"
                    opacity="0.2"
                    filter="url(#trail)"
                  />
                </>
              )}
              
              <circle
                cx={position.x}
                cy={position.y}
                r={hoveredElement === element ? 18 : 14}
                fill={isMoving ? "url(#movingGradient)" : (inResult ? "#ef4444" : "#6b7280")}
                stroke="white"
                strokeWidth="3"
                className={`cursor-pointer transition-all duration-500 hover:drop-shadow-lg ${
                  isAnimated ? 'animate-bounce' : ''
                } ${isMoving ? 'animate-pulse' : ''}`}
                filter="url(#glow)"
                onClick={() => handleElementClick(element)}
                onMouseEnter={() => setHoveredElement(element)}
                onMouseLeave={() => setHoveredElement(null)}
                style={{
                  transform: isMoving ? 'scale(1.3)' : 'scale(1)',
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
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
              
              {/* Enhanced hover effect ring */}
              {hoveredElement === element && (
                <>
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
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r="30"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    className="animate-spin"
                    style={{ animationDuration: '3s', animationDirection: 'reverse' }}
                  />
                </>
              )}
              
              {/* Enhanced movement path indicator */}
              {isMoving && (
                <path
                  d={`M ${getElementPosition(element, index).x} ${getElementPosition(element, index).y} L ${position.x} ${position.y}`}
                  stroke="url(#movingGradient)"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  opacity="0.7"
                  className="animate-pulse"
                />
              )}
            </g>
          );
        })}
        
        {/* Enhanced operation indicator */}
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
