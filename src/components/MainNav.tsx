
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Bus, Users, Book, Info } from 'lucide-react';

const MainNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Map', icon: MapPin },
    { path: '/bus', label: 'Bus Timings', icon: Bus },
    { path: '/teachers', label: 'Teachers', icon: Users },
    { path: '/notes', label: 'Notes', icon: Book },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-primary text-xl">
            Campus Compass
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors
                  ${location.pathname === path 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
