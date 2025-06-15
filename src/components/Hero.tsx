
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mathematical background imagery */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* Venn diagram circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-math-blue-400 rounded-full opacity-30"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 border-4 border-math-purple-400 rounded-full opacity-30"></div>
        
        {/* Mathematical symbols scattered */}
        <div className="absolute top-20 left-10 text-6xl text-math-blue-300 opacity-40">∪</div>
        <div className="absolute top-32 right-20 text-5xl text-math-purple-300 opacity-40">∩</div>
        <div className="absolute bottom-40 left-20 text-4xl text-math-blue-300 opacity-40">⊆</div>
        <div className="absolute bottom-60 right-40 text-6xl text-math-purple-300 opacity-40">∈</div>
        <div className="absolute top-1/2 left-10 text-5xl text-math-blue-300 opacity-40">⊂</div>
        <div className="absolute top-3/4 right-10 text-4xl text-math-purple-300 opacity-40">∅</div>
        <div className="absolute top-1/3 right-1/4 text-5xl text-math-blue-300 opacity-40">⊇</div>
        <div className="absolute bottom-1/4 left-1/3 text-4xl text-math-purple-300 opacity-40">∋</div>
        
        {/* Set notation examples */}
        <div className="absolute top-1/4 right-1/3 text-2xl text-math-blue-300 opacity-30 font-mono">A = {"{1, 2, 3}"}</div>
        <div className="absolute bottom-1/3 left-1/4 text-2xl text-math-purple-300 opacity-30 font-mono">B ∪ C</div>
        <div className="absolute top-2/3 right-1/4 text-2xl text-math-blue-300 opacity-30 font-mono">R ⊆ A × B</div>
        
        {/* Relation arrows */}
        <svg className="absolute top-1/2 left-1/2 w-32 h-32 opacity-20" viewBox="0 0 100 100">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-math-blue-400" />
            </marker>
          </defs>
          <line x1="20" y1="30" x2="80" y2="70" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-math-blue-400" />
          <line x1="20" y1="70" x2="80" y2="30" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" className="text-math-purple-400" />
        </svg>
        
        {/* Grid pattern for mathematical structure */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-gray-300"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Background geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-math-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-math-purple-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-green-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-orange-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-math-blue-600 to-math-purple-600 bg-clip-text text-transparent">
              Set Theory
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-700">
              & Relations
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Explore the fascinating world of mathematical sets, their operations, and relationships. 
            From basic concepts to advanced applications, discover how set theory forms the foundation of modern mathematics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#about"
              className="bg-gradient-to-r from-math-blue-600 to-math-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:from-math-blue-700 hover:to-math-purple-700"
            >
              Start Learning
            </a>
            <a
              href="#operations"
              className="border-2 border-math-blue-600 text-math-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-math-blue-600 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
            >
              Try Interactive Tools
            </a>
          </div>
        </div>

        {/* Mathematical symbols decoration */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 opacity-60">
          <div className="text-4xl font-bold text-math-blue-600 animate-bounce" style={{ animationDelay: '0s' }}>∪</div>
          <div className="text-4xl font-bold text-math-purple-600 animate-bounce" style={{ animationDelay: '0.5s' }}>∩</div>
          <div className="text-4xl font-bold text-green-600 animate-bounce" style={{ animationDelay: '1s' }}>∈</div>
          <div className="text-4xl font-bold text-orange-600 animate-bounce" style={{ animationDelay: '1.5s' }}>⊆</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
