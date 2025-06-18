
import { Clock, Brain, Target, BookOpen, Network, Calculator, User, Calendar } from 'lucide-react';

const AboutSets = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Sets in Mathematics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the foundation of modern mathematics through Set Theory & Relations
          </p>
        </div>

        {/* Origin of Sets Section */}
        <div className="mb-16 bg-gradient-to-r from-math-blue-50 to-math-purple-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Origin and History of Set Theory</h3>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 text-math-blue-600 mr-3" />
                <h4 className="text-xl font-semibold text-math-blue-800">Georg Cantor (1845-1918)</h4>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Set theory was founded by German mathematician <strong>Georg Cantor</strong> in the late 19th century. 
                Cantor developed this revolutionary mathematical framework while studying problems in mathematical analysis, 
                particularly in his work on trigonometric series and infinite sequences.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                His groundbreaking work introduced the concept of <strong>infinite sets</strong> and showed that there are 
                different "sizes" of infinity, fundamentally changing our understanding of mathematics and logic.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/80fa050a-9c51-433a-b001-fff80c5080bd.png" 
                alt="Georg Cantor, founder of Set Theory" 
                className="w-48 h-60 object-cover rounded-lg shadow-lg border-4 border-white"
              />
            </div>
          </div>
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Calendar className="h-5 w-5 text-math-purple-600 mr-2" />
                <h4 className="font-semibold text-math-purple-800">Key Milestones</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>1874:</strong> Cantor's first paper on set theory</li>
                <li><strong>1878:</strong> Introduction of cardinal numbers</li>
                <li><strong>1883:</strong> Development of ordinal numbers</li>
                <li><strong>1895-1897:</strong> Systematic presentation of set theory</li>
                <li><strong>Early 1900s:</strong> Formalization by Zermelo and Fraenkel</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-math-blue-500">
              <p className="text-math-blue-800 italic text-center">
                "Mathematics is the most beautiful and most powerful creation of the human spirit."
              </p>
              <p className="text-math-blue-600 text-sm text-center mt-2">- Georg Cantor</p>
            </div>
          </div>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Historical Impact</h3>
            <p className="text-gray-600">
              Cantor's work faced initial resistance but eventually became the foundation for modern mathematics, 
              influencing topology, analysis, and logic.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-math-purple-100 rounded-full mb-4">
              <Brain className="h-6 w-6 text-math-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Foundation</h3>
            <p className="text-gray-600">
              Sets form the foundation of modern mathematics, providing a unified 
              language for mathematical concepts and enabling rigorous proofs.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Applications</h3>
            <p className="text-gray-600">
              Essential for computer science, database theory, probability, statistics, 
              and advanced mathematical fields like topology and analysis.
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
