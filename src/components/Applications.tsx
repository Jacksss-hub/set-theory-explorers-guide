
import { Computer, BarChart3, Brain, Database } from 'lucide-react';

const Applications = () => {
  const applications = [
    {
      icon: Computer,
      title: 'Computer Science',
      description: 'Sets are fundamental in programming and data structures',
      examples: [
        'Database queries and operations',
        'Programming language design',
        'Algorithm analysis and complexity',
        'Data structures like hash sets'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Probability & Statistics',
      description: 'Set theory forms the foundation of probability theory',
      examples: [
        'Sample spaces and events',
        'Conditional probability',
        'Bayesian statistics',
        'Statistical inference'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Brain,
      title: 'Logic & Philosophy',
      description: 'Sets help formalize logical reasoning and arguments',
      examples: [
        'Formal logic systems',
        'Mathematical proofs',
        'Philosophical arguments',
        'Semantic analysis'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'Real-World Applications',
      description: 'Sets appear in many practical scenarios',
      examples: [
        'Social media friend groups',
        'Product recommendation systems',
        'Survey data analysis',
        'Classification problems'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="applications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Applications of Sets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how set theory applies to various fields and real-world scenarios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {applications.map((app, index) => (
            <div
              key={app.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${app.color}`}></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${app.color} text-white mr-4`}>
                    <app.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{app.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{app.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Applications:</h4>
                  <ul className="space-y-2">
                    {app.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-math-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Examples */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Practical Examples
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-math-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-math-blue-800 mb-3">Database Queries</h4>
              <p className="text-math-blue-700 mb-4">
                SQL operations directly correspond to set operations:
              </p>
              <div className="bg-white p-3 rounded border font-mono text-sm">
                <div>UNION → A ∪ B</div>
                <div>INTERSECT → A ∩ B</div>
                <div>EXCEPT → A - B</div>
              </div>
            </div>
            
            <div className="bg-math-purple-50 p-6 rounded-xl">
              <h4 className="font-bold text-math-purple-800 mb-3">Probability Events</h4>
              <p className="text-math-purple-700 mb-4">
                Events in probability are sets of outcomes:
              </p>
              <div className="bg-white p-3 rounded text-sm">
                <div>• Sample space = Universal set</div>
                <div>• Event = Subset of sample space</div>
                <div>• P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</div>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <h4 className="font-bold text-green-800 mb-3">Social Networks</h4>
              <p className="text-green-700 mb-4">
                Friend recommendations use set operations:
              </p>
              <div className="bg-white p-3 rounded text-sm">
                <div>• Your friends = Set A</div>
                <div>• Their friends = Set B</div>
                <div>• Suggestions = B - A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
