
import { useState } from 'react';
import InteractiveVennDiagram from './InteractiveVennDiagram';
import AnimatedSetCard from './AnimatedSetCard';
import { Play, Pause, RotateCcw, Zap } from 'lucide-react';

const Gallery = () => {
  const [selectedDiagram, setSelectedDiagram] = useState<string>('union');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const operations = {
    union: {
      setA: ['1', '2', '3', '4'],
      setB: ['3', '4', '5', '6'],
      title: 'Union (A ∪ B)',
      description: 'All elements from both sets combined'
    },
    intersection: {
      setA: ['1', '2', '3', '4'],
      setB: ['3', '4', '5', '6'],
      title: 'Intersection (A ∩ B)',
      description: 'Only elements common to both sets'
    },
    difference: {
      setA: ['1', '2', '3', '4'],
      setB: ['3', '4', '5', '6'],
      title: 'Difference (A - B)',
      description: 'Elements in A but not in B'
    },
    complement: {
      setA: ['2', '4', '6'],
      setB: ['1', '2', '3', '4', '5', '6', '7', '8'],
      title: 'Complement (A\')',
      description: 'Elements not in set A'
    }
  };

  const animationSteps = [
    "Click on elements to see them bounce",
    "Hover over elements for detailed info",
    "Try different operations to see the changes",
    "Watch the glow effects and animations"
  ];

  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentStep(0);
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= animationSteps.length - 1) {
          clearInterval(interval);
          setIsAnimating(false);
          return 0;
        }
        return prev + 1;
      });
    }, 2000);
  };

  const setCards = [
    {
      title: "Finite Sets",
      description: "Sets with a specific number of elements",
      elements: ["1", "2", "3"],
      color: "#3b82f6",
      icon: "📊"
    },
    {
      title: "Infinite Sets",
      description: "Sets with unlimited elements",
      elements: ["1", "2", "3", "..."],
      color: "#8b5cf6",
      icon: "♾️"
    },
    {
      title: "Empty Set",
      description: "A set with no elements",
      elements: ["∅"],
      color: "#ef4444",
      icon: "🔴"
    },
    {
      title: "Universal Set",
      description: "Contains all possible elements",
      elements: ["All", "Elements"],
      color: "#10b981",
      icon: "🌍"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Interactive Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Explore set theory through interactive visualizations and animations
          </p>
          
          {/* Control Panel */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={startAnimation}
              className="flex items-center gap-2 px-6 py-3 bg-math-blue-600 text-white rounded-lg hover:bg-math-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              {isAnimating ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isAnimating ? 'Pause Tour' : 'Start Interactive Tour'}
            </button>
            <button
              onClick={() => setCurrentStep(0)}
              className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <RotateCcw className="w-5 h-5" />
              Reset
            </button>
          </div>

          {isAnimating && (
            <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg animate-scale-in">
              <p className="text-yellow-800 font-medium">
                <Zap className="w-4 h-4 inline mr-2" />
                {animationSteps[currentStep]}
              </p>
            </div>
          )}
        </div>

        {/* Operation Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(operations).map(([key, operation]) => (
            <button
              key={key}
              onClick={() => setSelectedDiagram(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedDiagram === key
                  ? 'bg-gradient-to-r from-math-blue-600 to-math-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {operation.title}
            </button>
          ))}
        </div>

        {/* Interactive Venn Diagram */}
        <div className="mb-16">
          <InteractiveVennDiagram
            setA={operations[selectedDiagram as keyof typeof operations].setA}
            setB={operations[selectedDiagram as keyof typeof operations].setB}
            operation={selectedDiagram as 'union' | 'intersection' | 'difference' | 'complement'}
            onElementClick={(element) => console.log(`Clicked element: ${element}`)}
          />
        </div>

        {/* Animated Set Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {setCards.map((card, index) => (
            <AnimatedSetCard
              key={index}
              title={card.title}
              description={card.description}
              elements={card.elements}
              color={card.color}
              icon={card.icon}
              onClick={() => console.log(`Clicked on ${card.title}`)}
            />
          ))}
        </div>

        {/* Interactive Examples */}
        <div className="bg-white p-8 rounded-2xl shadow-xl mb-12 border-2 border-transparent hover:border-math-blue-300 transition-all duration-300">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Live Set Calculator
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-math-blue-50 to-math-blue-100 rounded-xl transform hover:scale-105 transition-all duration-300">
              <h4 className="font-bold text-math-blue-800 mb-3">Set A</h4>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {operations[selectedDiagram as keyof typeof operations].setA.map((element, i) => (
                  <span key={i} className="px-3 py-1 bg-math-blue-600 text-white rounded-full text-sm font-medium animate-fade-in">
                    {element}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-math-purple-50 to-math-purple-100 rounded-xl transform hover:scale-105 transition-all duration-300">
              <h4 className="font-bold text-math-purple-800 mb-3">Set B</h4>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {operations[selectedDiagram as keyof typeof operations].setB.map((element, i) => (
                  <span key={i} className="px-3 py-1 bg-math-purple-600 text-white rounded-full text-sm font-medium animate-fade-in">
                    {element}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl transform hover:scale-105 transition-all duration-300">
              <h4 className="font-bold text-green-800 mb-3">Result</h4>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {/* Result calculation would go here */}
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-medium animate-bounce">
                  Interactive!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mathematical Notation Reference with animations */}
        <div className="bg-gradient-to-r from-math-blue-600 to-math-purple-600 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Interactive Symbol Guide</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              { symbol: '∈', meaning: 'Element of', example: '3 ∈ A' },
              { symbol: '⊆', meaning: 'Subset', example: 'A ⊆ U' },
              { symbol: '∪', meaning: 'Union', example: 'A ∪ B' },
              { symbol: '∩', meaning: 'Intersection', example: 'A ∩ B' },
              { symbol: '∅', meaning: 'Empty Set', example: '∅ = {}' },
              { symbol: '|A|', meaning: 'Cardinality', example: '|A| = 4' },
              { symbol: 'P(A)', meaning: 'Power Set', example: 'P({1,2})' },
              { symbol: '×', meaning: 'Cartesian Product', example: 'A × B' }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2 animate-pulse">{item.symbol}</div>
                <div className="font-semibold">{item.meaning}</div>
                <div className="text-xs opacity-80 mt-1">{item.example}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
