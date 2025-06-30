import React from 'react';
import { Zap } from 'lucide-react';

interface PoweredByBoltProps {
  className?: string;
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center' | 'footer';
}

const PoweredByBolt: React.FC<PoweredByBoltProps> = ({ 
  className = '', 
  position = 'bottom-right' 
}) => {
  const positionClasses = {
    'bottom-right': 'fixed bottom-4 right-4',
    'bottom-left': 'fixed bottom-4 left-4',
    'bottom-center': 'fixed bottom-4 left-1/2 transform -translate-x-1/2',
    'footer': 'relative'
  };

  return (
    <a
      href="https://bolt.new"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 bg-white/90 text-gray-800 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 shadow-sm hover:shadow ${positionClasses[position]} ${className}`}
    >
      <Zap className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
      Powered by Bolt
    </a>
  );
};

export default PoweredByBolt;