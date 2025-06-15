
import { useState, useEffect } from 'react';
import { Calculator, RefreshCw, Play } from 'lucide-react';

const LiveSetCalculator = () => {
  const [setA, setSetA] = useState(['1', '2', '3', '4']);
  const [setB, setSetB] = useState(['3', '4', '5', '6']);
  const [operation, setOperation] = useState<'union' | 'intersection' | 'difference' | 'complement'>('union');
  const [result, setResult] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateResult = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      let newResult: string[] = [];
      
      switch (operation) {
        case 'union':
          newResult = [...new Set([...setA, ...setB])];
          break;
        case 'intersection':
          newResult = setA.filter(el => setB.includes(el));
          break;
        case 'difference':
          newResult = setA.filter(el => !setB.includes(el));
          break;
        case 'complement':
          newResult = setB.filter(el => !setA.includes(el));
          break;
      }
      
      setResult(newResult);
      setIsCalculating(false);
    }, 800);
  };

  const addElementToSetA = () => {
    const newElement = prompt('Enter new element for Set A:');
    if (newElement && !setA.includes(newElement)) {
      setSetA([...setA, newElement]);
    }
  };

  const addElementToSetB = () => {
    const newElement = prompt('Enter new element for Set B:');
    if (newElement && !setB.includes(newElement)) {
      setSetB([...setB, newElement]);
    }
  };

  const removeElementFromSetA = (element: string) => {
    setSetA(setA.filter(el => el !== element));
  };

  const removeElementFromSetB = (element: string) => {
    setSetB(setB.filter(el => el !== element));
  };

  const generateRandomSets = () => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const shuffled = [...numbers].sort(() => Math.random() - 0.5);
    setSetA(shuffled.slice(0, 4));
    setSetB(shuffled.slice(2, 6));
  };

  useEffect(() => {
    calculateResult();
  }, [setA, setB, operation]);

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl mb-12 border-2 border-transparent hover:border-math-blue-300 transition-all duration-300">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
        <Calculator className="w-6 h-6" />
        Live Set Calculator
      </h3>
      
      {/* Operation Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {[
          { key: 'union', label: 'A ∪ B', color: 'bg-blue-500' },
          { key: 'intersection', label: 'A ∩ B', color: 'bg-purple-500' },
          { key: 'difference', label: 'A - B', color: 'bg-green-500' },
          { key: 'complement', label: "A'", color: 'bg-orange-500' }
        ].map(({ key, label, color }) => (
          <button
            key={key}
            onClick={() => setOperation(key as typeof operation)}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition-all duration-200 transform hover:scale-105 ${
              operation === key ? color : 'bg-gray-400'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={calculateResult}
          className="flex items-center gap-2 px-4 py-2 bg-math-blue-600 text-white rounded-lg hover:bg-math-blue-700 transition-all duration-200 transform hover:scale-105"
        >
          <Play className="w-4 h-4" />
          Calculate
        </button>
        <button
          onClick={generateRandomSets}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
        >
          <RefreshCw className="w-4 h-4" />
          Random Sets
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Set A */}
        <div className="text-center p-6 bg-gradient-to-br from-math-blue-50 to-math-blue-100 rounded-xl transform hover:scale-105 transition-all duration-300">
          <h4 className="font-bold text-math-blue-800 mb-3">Set A</h4>
          <div className="flex flex-wrap justify-center gap-2 mb-4 min-h-[40px]">
            {setA.map((element, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-math-blue-600 text-white rounded-full text-sm font-medium animate-fade-in cursor-pointer hover:bg-math-blue-700 transition-colors duration-200"
                onClick={() => removeElementFromSetA(element)}
                title="Click to remove"
              >
                {element}
              </span>
            ))}
          </div>
          <button
            onClick={addElementToSetA}
            className="px-3 py-1 bg-math-blue-600 text-white rounded-lg text-sm hover:bg-math-blue-700 transition-colors duration-200"
          >
            + Add Element
          </button>
        </div>
        
        {/* Set B */}
        <div className="text-center p-6 bg-gradient-to-br from-math-purple-50 to-math-purple-100 rounded-xl transform hover:scale-105 transition-all duration-300">
          <h4 className="font-bold text-math-purple-800 mb-3">Set B</h4>
          <div className="flex flex-wrap justify-center gap-2 mb-4 min-h-[40px]">
            {setB.map((element, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-math-purple-600 text-white rounded-full text-sm font-medium animate-fade-in cursor-pointer hover:bg-math-purple-700 transition-colors duration-200"
                onClick={() => removeElementFromSetB(element)}
                title="Click to remove"
              >
                {element}
              </span>
            ))}
          </div>
          <button
            onClick={addElementToSetB}
            className="px-3 py-1 bg-math-purple-600 text-white rounded-lg text-sm hover:bg-math-purple-700 transition-colors duration-200"
          >
            + Add Element
          </button>
        </div>
        
        {/* Result */}
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl transform hover:scale-105 transition-all duration-300">
          <h4 className="font-bold text-green-800 mb-3">Result</h4>
          <div className="flex flex-wrap justify-center gap-2 mb-4 min-h-[40px]">
            {isCalculating ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
              </div>
            ) : (
              result.map((element, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {element}
                </span>
              ))
            )}
          </div>
          <div className="text-sm text-green-700">
            {result.length === 0 && !isCalculating ? 'Empty Set (∅)' : `${result.length} elements`}
          </div>
        </div>
      </div>

      {/* Mathematical notation display */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
        <p className="text-lg font-mono text-gray-800">
          {operation === 'union' && `A ∪ B = {${result.join(', ')}}`}
          {operation === 'intersection' && `A ∩ B = {${result.join(', ')}}`}
          {operation === 'difference' && `A - B = {${result.join(', ')}}`}
          {operation === 'complement' && `A' = {${result.join(', ')}}`}
        </p>
      </div>
    </div>
  );
};

export default LiveSetCalculator;
