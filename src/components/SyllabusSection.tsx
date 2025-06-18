
import { BookOpen, Network, Calculator, Target, Brain } from 'lucide-react';

const SyllabusSection = () => {
  return (
    <section id="syllabus" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Complete Syllabus Topics Section */}
        <div className="mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Complete Set Theory & Relations Syllabus</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full mb-4">
                <BookOpen className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-blue-800 mb-3">Basic Concepts of Sets</h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Definition and notation of sets</li>
                <li>• Subset relations and properties</li>
                <li>• Algebra of sets (union, intersection, complement)</li>
                <li>• The power set and its properties</li>
                <li>• Venn diagrams and set operations</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full mb-4">
                <Network className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-purple-800 mb-3">Ordered Pairs & Relations</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Ordered pairs and their properties</li>
                <li>• Cartesian product of sets</li>
                <li>• Relations on sets and between sets</li>
                <li>• Types of relations: reflexive, symmetric, transitive</li>
                <li>• Equivalence relations and partitions</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full mb-4">
                <Calculator className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-green-800 mb-3">Matrix & Graph Representation</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Matrix representation of relations</li>
                <li>• Graph representation of relations</li>
                <li>• Properties of relation matrices</li>
                <li>• Composition of relations</li>
                <li>• Inverse and complement relations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-600 text-white rounded-full mb-4">
                <Target className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-orange-800 mb-3">Partial Ordering & Poset</h4>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• Partial ordering relations</li>
                <li>• Partially ordered sets (Poset)</li>
                <li>• Comparable and incomparable elements</li>
                <li>• Maximal, minimal, greatest, least elements</li>
                <li>• Chains and antichains</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-pink-600 text-white rounded-full mb-4">
                <Network className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-pink-800 mb-3">Hasse Diagrams</h4>
              <ul className="text-pink-700 text-sm space-y-1">
                <li>• Construction of Hasse diagrams</li>
                <li>• Reading properties from diagrams</li>
                <li>• Finding supremum and infimum</li>
                <li>• Upper and lower bounds</li>
                <li>• Covering relations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-indigo-600 text-white rounded-full mb-4">
                <Brain className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-indigo-800 mb-3">Lattices & Boolean Algebra</h4>
              <ul className="text-indigo-700 text-sm space-y-1">
                <li>• Lattices and their properties</li>
                <li>• Join and meet operations</li>
                <li>• Sublattices and their characteristics</li>
                <li>• Boolean algebra fundamentals</li>
                <li>• Boolean functions and expressions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyllabusSection;
