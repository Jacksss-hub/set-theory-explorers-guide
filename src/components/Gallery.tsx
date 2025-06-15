
import { useState } from 'react';
import { ZoomIn, Download, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const visualConcepts = [
    {
      id: 1,
      title: 'Basic Set Notation',
      description: 'Visual representation of set elements and notation',
      svg: (
        <svg viewBox="0 0 300 200" className="w-full h-full">
          <rect x="50" y="50" width="200" height="100" rx="20" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="5,5"/>
          <text x="150" y="30" textAnchor="middle" className="fill-gray-700 font-semibold">Set A</text>
          <circle cx="100" cy="80" r="8" fill="#ef4444"/>
          <text x="100" y="86" textAnchor="middle" className="fill-white text-xs font-bold">1</text>
          <circle cx="150" cy="80" r="8" fill="#ef4444"/>
          <text x="150" y="86" textAnchor="middle" className="fill-white text-xs font-bold">2</text>
          <circle cx="200" cy="80" r="8" fill="#ef4444"/>
          <text x="200" y="86" textAnchor="middle" className="fill-white text-xs font-bold">3</text>
          <circle cx="125" cy="120" r="8" fill="#ef4444"/>
          <text x="125" y="126" textAnchor="middle" className="fill-white text-xs font-bold">4</text>
          <circle cx="175" cy="120" r="8" fill="#ef4444"/>
          <text x="175" y="126" textAnchor="middle" className="fill-white text-xs font-bold">5</text>
          <text x="150" y="180" textAnchor="middle" className="fill-gray-600">A = {1, 2, 3, 4, 5}</text>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Union Operation',
      description: 'Visual representation of A ∪ B',
      svg: (
        <svg viewBox="0 0 300 200" className="w-full h-full">
          <circle cx="120" cy="100" r="50" fill="rgba(59, 130, 246, 0.4)" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="180" cy="100" r="50" fill="rgba(139, 92, 246, 0.4)" stroke="#8b5cf6" strokeWidth="2"/>
          <text x="100" y="70" className="fill-blue-700 font-semibold text-sm">A</text>
          <text x="200" y="70" className="fill-purple-700 font-semibold text-sm">B</text>
          <text x="150" y="180" textAnchor="middle" className="fill-gray-600 font-semibold">A ∪ B</text>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Intersection Operation',
      description: 'Visual representation of A ∩ B',
      svg: (
        <svg viewBox="0 0 300 200" className="w-full h-full">
          <defs>
            <clipPath id="clip1">
              <circle cx="120" cy="100" r="50"/>
            </clipPath>
          </defs>
          <circle cx="120" cy="100" r="50" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="180" cy="100" r="50" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" strokeWidth="2"/>
          <circle cx="180" cy="100" r="50" fill="rgba(239, 68, 68, 0.6)" clipPath="url(#clip1)"/>
          <text x="100" y="70" className="fill-blue-700 font-semibold text-sm">A</text>
          <text x="200" y="70" className="fill-purple-700 font-semibold text-sm">B</text>
          <text x="150" y="180" textAnchor="middle" className="fill-gray-600 font-semibold">A ∩ B</text>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Set Difference',
      description: 'Visual representation of A - B',
      svg: (
        <svg viewBox="0 0 300 200" className="w-full h-full">
          <defs>
            <mask id="mask1">
              <rect x="0" y="0" width="300" height="200" fill="white"/>
              <circle cx="180" cy="100" r="50" fill="black"/>
            </mask>
          </defs>
          <circle cx="120" cy="100" r="50" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2"/>
          <circle cx="180" cy="100" r="50" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" strokeWidth="2"/>
          <circle cx="120" cy="100" r="50" fill="rgba(239, 68, 68, 0.6)" mask="url(#mask1)"/>
          <text x="100" y="70" className="fill-blue-700 font-semibold text-sm">A</text>
          <text x="200" y="70" className="fill-purple-700 font-semibold text-sm">B</text>
          <text x="150" y="180" textAnchor="middle" className="fill-gray-600 font-semibold">A - B</text>
        </svg>
      )
    },
    {
      id: 5,
      title: 'Subset Relationship',
      description: 'Visual representation of A ⊆ B',
      svg: (
        <svg viewBox="0 0 300 200" className="w-full h-full">
          <circle cx="150" cy="100" r="70" fill="rgba(139, 92, 246, 0.3)" stroke="#8b5cf6" strokeWidth="2"/>
          <circle cx="150" cy="100" r="40" fill="rgba(59, 130, 246, 0.5)" stroke="#3b82f6" strokeWidth="2"/>
          <text x="150" y="60" textAnchor="middle" className="fill-blue-700 font-semibold text-sm">A</text>
          <text x="120" y="40" className="fill-purple-700 font-semibold text-sm">B</text>
          <text x="150" y="180" textAnchor="middle" className="fill-gray-600 font-semibold">A ⊆ B</text>
        </svg>
      )
    },
    {
      id: 6,
      title: 'Universal Set',
      description: 'Set within the universal set context',
      svg: (
        <svg viewBox="0 0 300 200" className="w-full h-full">
          <rect x="20" y="20" width="260" height="140" rx="10" fill="rgba(156, 163, 175, 0.2)" stroke="#6b7280" strokeWidth="2"/>
          <circle cx="150" cy="90" r="50" fill="rgba(59, 130, 246, 0.4)" stroke="#3b82f6" strokeWidth="2"/>
          <text x="30" y="35" className="fill-gray-700 font-semibold text-sm">U (Universal Set)</text>
          <text x="150" y="60" textAnchor="middle" className="fill-blue-700 font-semibold text-sm">A</text>
          <text x="150" y="180" textAnchor="middle" className="fill-gray-600 font-semibold">A ⊆ U</text>
        </svg>
      )
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Visual Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interactive diagrams and visual representations of set theory concepts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visualConcepts.map((concept, index) => (
            <div
              key={concept.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gray-50 p-4 relative group cursor-pointer"
                   onClick={() => setSelectedImage(concept.title)}>
                {concept.svg}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{concept.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{concept.description}</p>
                
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedImage(concept.title)}
                    className="text-math-blue-600 hover:text-math-blue-700 font-medium text-sm flex items-center"
                  >
                    <ZoomIn className="h-4 w-4 mr-1" />
                    View Larger
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Learning Section */}
        <div className="mt-16 bg-gradient-to-r from-math-blue-50 to-math-purple-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interactive Learning Tips
            </h3>
            <p className="text-gray-600">
              Use these visual aids to better understand set relationships and operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Observe</h4>
              <p className="text-sm text-gray-600">Study the visual patterns and relationships</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Compare</h4>
              <p className="text-sm text-gray-600">Compare different operations side by side</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="w-8 h-8 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Practice</h4>
              <p className="text-sm text-gray-600">Try creating your own examples</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="w-8 h-8 bg-orange-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Apply</h4>
              <p className="text-sm text-gray-600">Use concepts in real-world problems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{selectedImage}</h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="aspect-video bg-gray-50 rounded-lg p-8">
                {visualConcepts.find(c => c.title === selectedImage)?.svg}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
