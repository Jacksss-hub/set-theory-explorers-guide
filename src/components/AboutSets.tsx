
import { Clock, Brain, Target } from 'lucide-react';

const AboutSets = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Sets in Mathematics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the foundation of modern mathematics through Set Theory
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What is a Set?</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <strong>set</strong> is a well-defined collection of distinct objects, considered as an object in its own right. 
              The objects in a set are called <strong>elements</strong> or <strong>members</strong> of the set.
            </p>
            <div className="bg-math-blue-50 p-6 rounded-lg border-l-4 border-math-blue-500">
              <p className="text-math-blue-800 font-medium">
                Example: The set of even numbers less than 10 can be written as: {"{2, 4, 6, 8}"}
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-math-blue-100 to-math-purple-100 p-8 rounded-2xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                <span className="text-2xl font-bold text-math-blue-600">∈</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Element Symbol</h4>
              <p className="text-gray-700">The symbol ∈ means "is an element of" or "belongs to"</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-math-blue-100 rounded-full mb-4">
              <Clock className="h-6 w-6 text-math-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">History</h3>
            <p className="text-gray-600">
              Set theory was developed by Georg Cantor in the late 19th century, 
              revolutionizing mathematics and logic.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-math-purple-100 rounded-full mb-4">
              <Brain className="h-6 w-6 text-math-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Foundation</h3>
            <p className="text-gray-600">
              Sets form the foundation of modern mathematics, providing a unified 
              language for mathematical concepts.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Importance</h3>
            <p className="text-gray-600">
              Essential for understanding probability, statistics, computer science, 
              and advanced mathematical concepts.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-math-blue-50 to-math-purple-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Key Properties of Sets</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-math-blue-700 mb-2">Well-Defined</h4>
              <p className="text-gray-700">It must be clear whether an object belongs to the set or not.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-math-blue-700 mb-2">Distinct Elements</h4>
              <p className="text-gray-700">Each element appears only once in a set.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-math-blue-700 mb-2">Unordered</h4>
              <p className="text-gray-700">The order of elements doesn't matter in a set.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-semibold text-math-blue-700 mb-2">Notation</h4>
              <p className="text-gray-700">Sets are typically denoted with curly braces: {"{a, b, c}"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSets;
