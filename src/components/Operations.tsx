
import { useState } from 'react';
import VennDiagram from './VennDiagram';
import InteractiveVennDiagram from './InteractiveVennDiagram';
import { Calculator, Sparkles, RefreshCw } from 'lucide-react';

const Operations = () => {
  const [activeOperation, setActiveOperation] = useState('union');
  const [customSetA, setCustomSetA] = useState(['1', '2', '3', '4']);
  const [customSetB, setCustomSetB] = useState(['3', '4', '5', '6']);
  const [showCustomMode, setShowCustomMode] = useState(false);

  const operations = {
    union: {
      title: 'Union (A ∪ B)',
      description: 'All elements that are in A or B or both',
      setA: customSetA,
      setB: customSetB,
      result: [...new Set([...customSetA, ...customSetB])],
      explanation: 'The union contains all unique elements from both sets.',
      formula: 'A ∪ B = {x | x ∈ A or x ∈ B}',
      color: 'from-blue-500 to-cyan-500'
    },
    intersection: {
      title: 'Intersection (A ∩ B)',
      description: 'Elements that are in both A and B',
      setA: customSetA,
      setB: customSetB,
      result: customSetA.filter(el => customSetB.includes(el)),
      explanation: 'The intersection contains only the common elements.',
      formula: 'A ∩ B = {x | x ∈ A and x ∈ B}',
      color: 'from-purple-500 to-pink-500'
    },
    difference: {
      title: 'Difference (A - B)',
      description: 'Elements that are in A but not in B',
      setA: customSetA,
      setB: customSetB,
      result: customSetA.filter(el => !customSetB.includes(el)),
      explanation: 'The difference contains elements unique to the first set.',
      formula: 'A - B = {x | x ∈ A and x ∉ B}',
      color: 'from-green-500 to-emerald-500'
    },
    complement: {
      title: 'Complement (A\')',
      description: 'Elements in the universal set but not in A',
      setA: ['2', '4', '6'],
      setB: ['1', '2', '3', '4', '5', '6', '7', '8'],
      result: ['1', '3', '5', '7', '8'],
      explanation: 'The complement contains all elements not in the original set.',
      formula: 'A\' = {x | x ∈ U and x ∉ A}',
      color: 'from-orange-500 to-red-500'
    }
  };

  const generateRandomSets = () => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const shuffled = [...numbers].sort(() => Math.random() - 0.5);
    setCustomSetA(shuffled.slice(0, 4));
    setCustomSetB(shuffled.slice(2, 6));
  };

  const currentOp = operations[activeOperation as keyof typeof operations];

  return (
    <section id="operations" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Interactive Set Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Explore set operations with dynamic visualizations and real-time calculations
          </p>
        </div>

        {/* Control Panel */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setShowCustomMode(!showCustomMode)}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-math-blue-600 to-math-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            <Calculator className="w-5 h-5" />
            {showCustomMode ? 'Use Default Sets' : 'Custom Mode'}
          </button>
          
          {showCustomMode && (
            <button
              onClick={generateRandomSets}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <RefreshCw className="w-5 h-5" />
              Generate Random Sets
            </button>
          )}
        </div>

        {/* Operation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(operations).map(([key, operation]) => (
            <button
              key={key}
              onClick={() => setActiveOperation(key)}
              className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden group ${
                activeOperation === key
                  ? `bg-gradient-to-r ${operation.color} text-white shadow-xl`
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-lg border-2 border-gray-200'
              }`}
            >
              <span className="relative z-10">{operation.title}</span>
              {activeOperation === key && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 animate-slide-right" />
              )}
            </button>
          ))}
        </div>

        {/* Interactive Formula Display */}
        <div className="mb-8 text-center">
          <div className={`inline-block px-8 py-4 bg-gradient-to-r ${currentOp.color} text-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300`}>
            <div className="flex items-center gap-2 justify-center mb-2">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span className="font-bold">Mathematical Formula</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="text-xl font-mono bg-black bg-opacity-20 px-4 py-2 rounded-lg">
              {currentOp.formula}
            </div>
          </div>
        </div>

        {/* Active Operation Display */}
        <div className="mb-12">
          <InteractiveVennDiagram
            setA={currentOp.setA}
            setB={currentOp.setB}
            operation={activeOperation as 'union' | 'intersection' | 'difference' | 'complement'}
            onElementClick={(element) => console.log(`Element ${element} clicked in ${activeOperation}`)}
          />
          
          <div className={`mt-6 p-6 bg-gradient-to-r ${currentOp.color} text-white rounded-xl shadow-lg transform hover:scale-102 transition-all duration-300`}>
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Explanation
            </h3>
            <p className="text-lg">{currentOp.explanation}</p>
            <div className="mt-4 p-3 bg-black bg-opacity-20 rounded-lg">
              <span className="font-semibold">Result: </span>
              <span className="font-mono">{"{" + currentOp.result.join(", ") + "}"}</span>
            </div>
          </div>
        </div>

        {/* Step-by-step animation */}
        <div className="mb-12 bg-white p-8 rounded-2xl shadow-xl border-2 border-transparent hover:border-math-blue-300 transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Step-by-Step Visualization
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-math-blue-50 to-math-blue-100 rounded-xl transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-math-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="font-bold text-math-blue-800 mb-2">Identify Sets</h4>
              <p className="text-math-blue-700">Find the elements in each set</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                {currentOp.setA.map((el, i) => (
                  <span key={i} className="px-2 py-1 bg-math-blue-600 text-white rounded text-xs animate-fade-in">
                    {el}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-math-purple-50 to-math-purple-100 rounded-xl transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-math-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="font-bold text-math-purple-800 mb-2">Apply Operation</h4>
              <p className="text-math-purple-700">Use the {activeOperation} rule</p>
              <div className="mt-3 text-lg font-bold text-math-purple-800">
                {activeOperation === 'union' && '∪'}
                {activeOperation === 'intersection' && '∩'}
                {activeOperation === 'difference' && '-'}
                {activeOperation === 'complement' && '\''}
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="font-bold text-green-800 mb-2">Get Result</h4>
              <p className="text-green-700">Final set of elements</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                {currentOp.result.map((el, i) => (
                  <span key={i} className="px-2 py-1 bg-green-600 text-white rounded text-xs animate-bounce">
                    {el}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Operation Properties with enhanced visuals */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Union Properties',
              color: 'blue',
              properties: [
                'Commutative: A ∪ B = B ∪ A',
                'Associative: (A ∪ B) ∪ C = A ∪ (B ∪ C)',
                'Identity: A ∪ ∅ = A'
              ],
              icon: '∪'
            },
            {
              title: 'Intersection Properties',
              color: 'purple',
              properties: [
                'Commutative: A ∩ B = B ∩ A',
                'Associative: (A ∩ B) ∩ C = A ∩ (B ∩ C)',
                'Identity: A ∩ U = A'
              ],
              icon: '∩'
            },
            {
              title: 'Difference Properties',
              color: 'green',
              properties: [
                'Not commutative: A - B ≠ B - A',
                'A - A = ∅',
                'A - ∅ = A'
              ],
              icon: '-'
            },
            {
              title: 'Complement Properties',
              color: 'orange',
              properties: [
                'Double complement: (A\')\'= A',
                'De Morgan\'s laws apply',
                'A ∪ A\' = U'
              ],
              icon: '\''
            }
          ].map((section, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-${section.color}-50 to-${section.color}-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-${section.color}-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:animate-pulse`}>
                  {section.icon}
                </div>
                <h3 className={`font-bold text-${section.color}-800`}>{section.title}</h3>
              </div>
              <ul className={`text-${section.color}-700 text-sm space-y-2`}>
                {section.properties.map((prop, i) => (
                  <li key={i} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <span className="text-xs mt-1">•</span>
                    <span>{prop}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Operations;
