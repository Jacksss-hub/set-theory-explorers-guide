
import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const TypesOfSets = () => {
  const [expandedType, setExpandedType] = useState<string | null>(null);

  const setTypes = [
    {
      id: 'finite',
      title: 'Finite Set',
      definition: 'A set with a limited number of elements.',
      example: 'A = {1, 2, 3, 4, 5}',
      explanation: 'This set has exactly 5 elements, so it is finite.',
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    {
      id: 'infinite',
      title: 'Infinite Set',
      definition: 'A set with unlimited number of elements.',
      example: 'N = {1, 2, 3, 4, 5, ...}',
      explanation: 'The set of natural numbers continues indefinitely.',
      color: 'bg-purple-50 border-purple-200 text-purple-800'
    },
    {
      id: 'empty',
      title: 'Empty/Null Set',
      definition: 'A set with no elements.',
      example: '∅ = {} or ∅',
      explanation: 'Also called the null set, denoted by ∅ or {}.',
      color: 'bg-gray-50 border-gray-200 text-gray-800'
    },
    {
      id: 'singleton',
      title: 'Singleton Set',
      definition: 'A set containing exactly one element.',
      example: 'S = {5}',
      explanation: 'This set contains only the element 5.',
      color: 'bg-green-50 border-green-200 text-green-800'
    },
    {
      id: 'equal',
      title: 'Equal Sets',
      definition: 'Two sets are equal if they have the same elements.',
      example: 'A = {1, 2, 3} and B = {3, 2, 1}',
      explanation: 'A = B because they contain the same elements (order doesn\'t matter).',
      color: 'bg-yellow-50 border-yellow-200 text-yellow-800'
    },
    {
      id: 'subset',
      title: 'Subset',
      definition: 'A set A is a subset of B if all elements of A are in B.',
      example: 'A = {1, 2} and B = {1, 2, 3, 4}',
      explanation: 'A ⊆ B because every element of A is also in B.',
      color: 'bg-indigo-50 border-indigo-200 text-indigo-800'
    },
    {
      id: 'power',
      title: 'Power Set',
      definition: 'The set of all subsets of a given set.',
      example: 'If A = {1, 2}, then P(A) = {∅, {1}, {2}, {1, 2}}',
      explanation: 'Power set includes the empty set and the set itself.',
      color: 'bg-pink-50 border-pink-200 text-pink-800'
    },
    {
      id: 'universal',
      title: 'Universal Set',
      definition: 'The set containing all objects under consideration.',
      example: 'U = {all natural numbers less than 10}',
      explanation: 'Context-dependent set that contains all relevant elements.',
      color: 'bg-orange-50 border-orange-200 text-orange-800'
    }
  ];

  return (
    <section id="types" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Types of Sets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different classifications of sets and their unique properties
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {setTypes.map((type, index) => (
            <div
              key={type.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`p-6 border-l-4 ${type.color} cursor-pointer`}
                onClick={() => setExpandedType(expandedType === type.id ? null : type.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                    <p className="font-medium">{type.definition}</p>
                  </div>
                  <div className="ml-4">
                    {expandedType === type.id ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </div>
                </div>
              </div>
              
              {expandedType === type.id && (
                <div className="px-6 pb-6 animate-slide-up">
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Example:</h4>
                    <p className="font-mono text-lg text-math-blue-700 mb-3">{type.example}</p>
                    <p className="text-gray-700">{type.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-math-blue-600 to-math-purple-600 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Quick Reference</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="font-semibold mb-2">Symbols</div>
                <div>∅ - Empty set</div>
                <div>∈ - Element of</div>
                <div>⊆ - Subset</div>
              </div>
              <div>
                <div className="font-semibold mb-2">Notation</div>
                <div>|A| - Cardinality</div>
                <div>P(A) - Power set</div>
                <div>U - Universal set</div>
              </div>
              <div>
                <div className="font-semibold mb-2">Examples</div>
                <div>{"{1, 2, 3}"} - Finite</div>
                <div>{"{}"} - Empty</div>
                <div>ℕ - Natural numbers</div>
              </div>
              <div>
                <div className="font-semibold mb-2">Properties</div>
                <div>Distinct elements</div>
                <div>Unordered</div>
                <div>Well-defined</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesOfSets;
