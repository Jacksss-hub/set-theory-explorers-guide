
import { ArrowDown, BookOpen } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-math-blue-50 via-white to-math-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-math-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-math-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-full shadow-lg">
              <BookOpen className="h-12 w-12 text-math-blue-600" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-math-blue-600 to-math-purple-600">
              Sets in Mathematics
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover the fascinating world of Set Theory through interactive learning, 
            visual examples, and comprehensive explanations designed for students.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-math-blue-600 text-white rounded-lg font-semibold hover:bg-math-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Learning
            </button>
            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-math-purple-600 text-math-purple-600 rounded-lg font-semibold hover:bg-math-purple-600 hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              View Visuals
            </button>
          </div>
          
          <div className="animate-bounce">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center text-math-blue-600 hover:text-math-blue-700 transition-colors duration-200"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
