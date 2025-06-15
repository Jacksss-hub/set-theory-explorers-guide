
import { useState } from 'react';

const Gallery = () => {
  const [selectedDiagram, setSelectedDiagram] = useState<string | null>(null);

  const diagrams = [
    {
      id: 'union',
      title: 'Union of Sets (A ∪ B)',
      description: 'Shows all elements that belong to either set A or set B or both',
      svg: (
        <svg viewBox="0 0 300 200" className="w-full h-32">
          <circle cx="100" cy="100" r="60" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="180" cy="100" r="60" fill="rgba(139, 92, 246, 0.3)" stroke="#8b5cf6" strokeWidth="2"/>
          <text x="70" y="70" className="fill-math-blue-700 text-xs font-semibold">A</text>
          <text x="210" y="70" className="fill-math-purple-700 text-xs font-semibold">B</text>
          <text x="140" y="105" className="fill-gray-700 text-xs">A ∪ B</text>
        </svg>
      )
    },
    {
      id: 'intersection',
      title: 'Intersection of Sets (A ∩ B)',
      description: 'Shows elements that belong to both set A and set B',
      svg: (
        <svg viewBox="0 0 300 200" className="w-full h-32">
          <circle cx="100" cy="100" r="60" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="180" cy="100" r="60" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" strokeWidth="2"/>
          <ellipse cx="140" cy="100" rx="20" ry="40" fill="rgba(220, 38, 127, 0.5)"/>
          <text x="70" y="70" className="fill-math-blue-700 text-xs font-semibold">A</text>
          <text x="210" y="70" className="fill-math-purple-700 text-xs font-semibold">B</text>
          <text x="130" y="105" className="fill-pink-700 text-xs">A ∩ B</text>
        </svg>
      )
    },
    {
      id: 'difference',
      title: 'Difference of Sets (A - B)',
      description: 'Shows elements that belong to set A but not to set B',
      svg: (
        <svg viewBox="0 0 300 200" className="w-full h-32">
          <circle cx="100" cy="100" r="60" fill="rgba(59, 130, 246, 0.5)" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="180" cy="100" r="60" fill="white" stroke="#8b5cf6" strokeWidth="2"/>
          <text x="70" y="70" className="fill-math-blue-700 text-xs font-semibold">A</text>
          <text x="210" y="70" className="fill-math-purple-700 text-xs font-semibold">B</text>
          <text x="80" y="105" className="fill-math-blue-700 text-xs">A - B</text>
        </svg>
      )
    },
    {
      id: 'complement',
      title: 'Complement of Set (A\')',
      description: 'Shows all elements in the universal set that are not in set A',
      svg: (
        <svg viewBox="0 0 300 200" className="w-full h-32">
          <rect x="20" y="20" width="260" height="160" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="2"/>
          <circle cx="150" cy="100" r="50" fill="white" stroke="#3b82f6" strokeWidth="2"/>
          <text x="30" y="40" className="fill-green-700 text-xs font-semibold">U</text>
          <text x="140" y="105" className="fill-math-blue-700 text-xs font-semibold">A</text>
          <text x="200" y="60" className="fill-green-700 text-xs">A'</text>
        </svg>
      )
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Visual Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive Venn diagrams and visual representations of set operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {diagrams.map((diagram) => (
            <div
              key={diagram.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedDiagram(diagram.id)}
            >
              <div className="mb-4">
                {diagram.svg}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{diagram.title}</h3>
              <p className="text-sm text-gray-600">{diagram.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Examples */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Interactive Set Examples
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-math-blue-50 rounded-lg">
              <h4 className="font-semibold text-math-blue-800 mb-2">Set A</h4>
              <p className="text-math-blue-700 font-mono">{"{1, 2, 3, 4}"}</p>
            </div>
            <div className="text-center p-4 bg-math-purple-50 rounded-lg">
              <h4 className="font-semibold text-math-purple-800 mb-2">Set B</h4>
              <p className="text-math-purple-700 font-mono">{"{3, 4, 5, 6}"}</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">A ∪ B</h4>
              <p className="text-green-700 font-mono">{"{1, 2, 3, 4, 5, 6}"}</p>
            </div>
          </div>
        </div>

        {/* Mathematical Notation Reference */}
        <div className="mt-12 bg-gradient-to-r from-math-blue-600 to-math-purple-600 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Set Theory Symbols</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-2">∈</div>
              <div>Element of</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⊆</div>
              <div>Subset</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">∪</div>
              <div>Union</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">∩</div>
              <div>Intersection</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">∅</div>
              <div>Empty Set</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">|A|</div>
              <div>Cardinality</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">P(A)</div>
              <div>Power Set</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">×</div>
              <div>Cartesian Product</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
