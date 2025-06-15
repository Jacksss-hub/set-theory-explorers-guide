
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface AnimatedSetCardProps {
  title: string;
  description: string;
  elements: string[];
  color: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const AnimatedSetCard = ({ title, description, elements, color, icon, onClick }: AnimatedSetCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 cursor-pointer group ${
        isHovered ? 'scale-105 shadow-2xl' : ''
      }`}
      style={{ background: `linear-gradient(135deg, ${color}20, ${color}10)` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-pulse`}
              style={{
                width: `${20 + i * 10}px`,
                height: `${20 + i * 10}px`,
                backgroundColor: color,
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative p-6 z-10">
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-2xl">{icon}</div>}
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <ChevronRight 
            className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
              isHovered ? 'translate-x-2' : ''
            }`} 
          />
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Element display */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {elements.map((element, index) => (
              <span
                key={`${element}-${index}`}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 animate-fade-in`}
                style={{ 
                  backgroundColor: `${color}30`,
                  color: color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {element}
              </span>
            ))}
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transform -skew-x-12 transition-all duration-700 ${
          isHovered ? 'opacity-20 translate-x-full' : '-translate-x-full'
        }`} />
      </div>
    </div>
  );
};

export default AnimatedSetCard;
