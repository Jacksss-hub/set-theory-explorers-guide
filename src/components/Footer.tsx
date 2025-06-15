
import { BookOpen, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Sets', href: '#about' },
    { name: 'Types of Sets', href: '#types' },
    { name: 'Operations', href: '#operations' },
    { name: 'Applications', href: '#applications' },
  ];

  const resources = [
    { name: 'Visual Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Practice Problems', href: '#' },
    { name: 'Study Guide', href: '#' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-math-blue-600 rounded-lg mr-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Sets in Mathematics</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              An interactive learning platform designed to make set theory accessible and engaging 
              for students of all levels. Explore, learn, and master the fundamentals of sets through 
              visual examples and comprehensive explanations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Educational Disclaimer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h4 className="text-lg font-semibold mb-3 text-math-blue-400">Educational Purpose</h4>
            <p className="text-gray-300 text-sm">
              This website is created for educational purposes to help students understand set theory concepts. 
              The content is designed to supplement formal mathematical education and provide visual, 
              interactive learning experiences. For academic use, please verify concepts with your instructor or textbook.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-gray-400">© {currentYear} Sets in Mathematics. Made with </span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span className="text-gray-400">for learning.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
              >
                Back to Top ↑
              </button>
              <span className="text-gray-500 text-sm">
                Built with React & Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
