
import { useState } from 'react';
import VennDiagram from './VennDiagram';

const Operations = () => {
  const [activeOperation, setActiveOperation] = useState('union');

  const operations = {
    union: {
      title: 'Union (A ∪ B)',
      description: 'All elements that are in A or B or both',
      setA: ['1', '2', '3', '4'],
      setB: ['3', '4', '5', '6'],
      result: ['1', '2', '3', '4', '5', '6'],
      explanation: 'The union contains all unique elements from both sets.'
    },
    intersection: {
      title: 'Intersection (A ∩ B)',
      description: 'Elements that are in both A and B',
      setA: ['1', '2', '3', '4'],
      setB: ['3', '4', '5', '6'],
      result: ['3', '4'],
      explanation: 'The intersection contains only the common elements.'
    },
    difference: {
      title: 'Difference (A - B)',
      description: 'Elements that are in A but not in B',
      setA: ['1', '2', '3', '4'],
      setB: ['3', '4', '5', '6'],
      result: ['1', '2'],
      explanation: 'The difference contains elements unique to the first set.'
    },
    complement: {
      title: 'Complement (A\')',
      description: 'Elements in the universal set but not in A',
      setA: ['2', '4', '6'],
      setB: ['1', '2', '3', '4', '5', '6', '7', '8'], // Universal set
      result: ['1', '3', '5', '7', '8'],
      explanation: 'The complement contains all elements not in the original set.'
    }
  };

  return (
    <section id="operations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Operations on Sets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn the fundamental operations with interactive visual examples
          </p>
        </div>

        {/* Operation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(operations).map(([key, operation]) => (
            <button
              key={key}
              onClick={() => setActiveOperation(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeOperation === key
                  ? 'bg-math-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {operation.title}
            </button>
          ))}
        </div>

        {/* Active Operation Display */}
        <div className="mb-12">
          <VennDiagram
            operation={activeOperation}
            setA={operations[activeOperation as keyof typeof operations].setA}
            setB={operations[activeOperation as keyof typeof operations].setB}
            result={operations[activeOperation as keyof typeof operations].result}
            title={operations[activeOperation as keyof typeof operations].title}
            description={operations[activeOperation as keyof typeof operations].description}
          />
          
          <div className="mt-6 bg-math-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-math-blue-800 mb-2">Explanation:</h3>
            <p className="text-math-blue-700">
              {operations[activeOperation as keyof typeof operations].explanation}
            </p>
          </div>
        </div>

        {/* Operation Properties */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <h3 className="font-bold text-blue-800 mb-3">Union Properties</h3>
            <ul className="text-blue-700 text-sm space-y-1">
              <li>• Commutative: A ∪ B = B ∪ A</li>
              <li>• Associative: (A ∪ B) ∪ C = A ∪ (B ∪ C)</li>
              <li>• Identity: A ∪ ∅ = A</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <h3 className="font-bold text-purple-800 mb-3">Intersection Properties</h3>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• Commutative: A ∩ B = B ∩ A</li>
              <li>• Associative: (A ∩ B) ∩ C = A ∩ (B ∩ C)</li>
              <li>• Identity: A ∩ U = A</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <h3 className="font-bold text-green-800 mb-3">Difference Properties</h3>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Not commutative: A - B ≠ B - A</li>
              <li>• A - A = ∅</li>
              <li>• A - ∅ = A</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
            <h3 className="font-bold text-orange-800 mb-3">Complement Properties</h3>
            <ul className="text-orange-700 text-sm space-y-1">
              <li>• Double complement: (A')' = A</li>
              <li>• De Morgan's laws</li>
              <li>• A ∪ A' = U</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operations;
