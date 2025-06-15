
import { useState } from 'react';

interface VennDiagramProps {
  operation: string;
  setA: string[];
  setB: string[];
  result: string[];
  title: string;
  description: string;
}

const VennDiagram = ({ operation, setA, setB, result, title, description }: VennDiagramProps) => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const isInA = (element: string) => setA.includes(element);
  const isInB = (element: string) => setB.includes(element);
  const isInResult = (element: string) => result.includes(element);

  const allElements = [...new Set([...setA, ...setB])];

  const getElementPosition = (element: string, index: number) => {
    const inA = isInA(element);
    const inB = isInB(element);
    
    if (inA && inB) {
      // Intersection - center
      return { x: 200, y: 150 + (index * 25) };
    } else if (inA) {
      // Only in A - left circle
      return { x: 150, y: 120 + (index * 25) };
    } else {
      // Only in B - right circle
      return { x: 250, y: 120 + (index * 25) };
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <svg viewBox="0 0 400 300" className="w-full h-64 border rounded-lg bg-gray-50">
            {/* Circle A */}
            <circle
              cx="160"
              cy="150"
              r="80"
              fill="rgba(59, 130, 246, 0.3)"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <text x="120" y="100" className="fill-math-blue-700 font-semibold text-sm">
              Set A
            </text>
            
            {/* Circle B */}
            <circle
              cx="240"
              cy="150"
              r="80"
              fill="rgba(139, 92, 246, 0.3)"
              stroke="#8b5cf6"
              strokeWidth="2"
            />
            <text x="260" y="100" className="fill-math-purple-700 font-semibold text-sm">
              Set B
            </text>
            
            {/* Elements */}
            {allElements.map((element, index) => {
              const position = getElementPosition(element, index);
              const inResult = isInResult(element);
              
              return (
                <g key={element}>
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r="12"
                    fill={inResult ? "#ef4444" : "#6b7280"}
                    stroke="white"
                    strokeWidth="2"
                    className="cursor-pointer hover:r-14 transition-all duration-200"
                    onMouseEnter={() => setHoveredElement(element)}
                    onMouseLeave={() => setHoveredElement(null)}
                  />
                  <text
                    x={position.x}
                    y={position.y + 4}
                    textAnchor="middle"
                    className="fill-white font-semibold text-sm pointer-events-none"
                  >
                    {element}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        
        <div className="lg:w-1/3 space-y-4">
          <div className="bg-math-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-math-blue-800 mb-2">Set A</h4>
            <p className="text-math-blue-700">{"{" + setA.join(", ") + "}"}</p>
          </div>
          
          <div className="bg-math-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-math-purple-800 mb-2">Set B</h4>
            <p className="text-math-purple-700">{"{" + setB.join(", ") + "}"}</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">Result</h4>
            <p className="text-red-700">{"{" + result.join(", ") + "}"}</p>
          </div>
          
          {hoveredElement && (
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                Element <strong>{hoveredElement}</strong> is:
                <br />
                {isInA(hoveredElement) && "• In Set A"}
                <br />
                {isInB(hoveredElement) && "• In Set B"}
                <br />
                {isInResult(hoveredElement) ? "• In the result" : "• Not in the result"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VennDiagram;
