
import { useState } from 'react';
import { ChevronRight, ChevronDown, Network, Grid, Binary, Layers } from 'lucide-react';

const AdvancedTopics = () => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const topics = [
    {
      id: 'relations',
      title: 'Relations on Sets',
      icon: <Network className="h-6 w-6" />,
      definition: 'A relation R from set A to set B is a subset of the Cartesian product A × B.',
      subtopics: [
        'Types of relations: Reflexive, Symmetric, Transitive',
        'Equivalence relations',
        'Representation of relations using matrices and graphs',
        'Composition of relations'
      ],
      example: 'Let A = {1, 2, 3} and B = {a, b}. Then A × B = {(1,a), (1,b), (2,a), (2,b), (3,a), (3,b)}',
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    {
      id: 'poset',
      title: 'Partial Ordering & Poset',
      icon: <Grid className="h-6 w-6" />,
      definition: 'A partially ordered set (poset) is a set with a partial order relation that is reflexive, antisymmetric, and transitive.',
      subtopics: [
        'Partial order relations',
        'Comparable and incomparable elements',
        'Maximal and minimal elements',
        'Greatest and least elements'
      ],
      example: 'The set of natural numbers with the ≤ relation forms a poset.',
      color: 'bg-purple-50 border-purple-200 text-purple-800'
    },
    {
      id: 'hasse',
      title: 'Hasse Diagrams',
      icon: <Binary className="h-6 w-6" />,
      definition: 'A Hasse diagram is a graphical representation of a finite partially ordered set, showing the covering relations.',
      subtopics: [
        'Construction of Hasse diagrams',
        'Properties from Hasse diagrams',
        'Finding chains and antichains',
        'Identifying supremum and infimum'
      ],
      example: 'For the divisibility relation on {1, 2, 3, 6}, the Hasse diagram shows 1 at bottom, 2 and 3 in middle, 6 at top.',
      color: 'bg-green-50 border-green-200 text-green-800'
    },
    {
      id: 'lattices',
      title: 'Lattices & Boolean Algebra',
      icon: <Layers className="h-6 w-6" />,
      definition: 'A lattice is a partially ordered set in which every pair of elements has both a supremum (join) and infimum (meet).',
      subtopics: [
        'Properties of lattices',
        'Sublattices and their characteristics',
        'Boolean algebra fundamentals',
        'Matrix representation of Boolean functions'
      ],
      example: 'The power set of any set forms a Boolean lattice under set inclusion.',
      color: 'bg-orange-50 border-orange-200 text-orange-800'
    }
  ];

  return (
    <section id="advanced" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Advanced Set Theory Topics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore advanced concepts in set theory, relations, and algebraic structures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`p-6 border-l-4 ${topic.color} cursor-pointer`}
                onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {topic.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                      <p className="font-medium">{topic.definition}</p>
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedTopic === topic.id ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </div>
                </div>
              </div>
              
              {expandedTopic === topic.id && (
                <div className="px-6 pb-6 animate-slide-up">
                  <div className="mt-4 space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Subtopics:</h4>
                      <ul className="space-y-2">
                        {topic.subtopics.map((subtopic, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start">
                            <span className="text-math-blue-600 mr-2">•</span>
                            {subtopic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 bg-math-blue-50 rounded-lg">
                      <h4 className="font-semibold text-math-blue-900 mb-2">Example:</h4>
                      <p className="text-math-blue-800">{topic.example}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Matrix and Graph Representation */}
        <div className="mt-16 bg-gradient-to-r from-math-blue-600 to-math-purple-600 text-white p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Matrix and Graph Representations</h3>
            <p className="text-lg opacity-90">Visual and mathematical representations of set relations</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Matrix Representation</h4>
              <p className="mb-4">Relations can be represented using binary matrices where:</p>
              <ul className="space-y-2 text-sm">
                <li>• 1 indicates the relation exists between elements</li>
                <li>• 0 indicates no relation exists</li>
                <li>• Useful for computational analysis</li>
                <li>• Enables matrix operations on relations</li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Graph Representation</h4>
              <p className="mb-4">Relations can be visualized as directed graphs where:</p>
              <ul className="space-y-2 text-sm">
                <li>• Vertices represent set elements</li>
                <li>• Directed edges show relations</li>
                <li>• Helps identify relation properties visually</li>
                <li>• Useful for analyzing connectivity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedTopics;
