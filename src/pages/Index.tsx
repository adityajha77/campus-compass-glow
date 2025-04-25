
import React from 'react';
import MainNav from '../components/MainNav';
import Card from '../components/Card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent">
      <MainNav />
      
      <main className="container mx-auto px-4 pt-20 pb-8">
        {/* Hero Section */}
        <div className="text-center mb-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-float">
            Welcome to Campus Compass
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Your smart guide to navigating college life
          </p>
        </div>

        {/* Interactive Map Section */}
        <Card className="mb-8 aspect-video">
          <div className="h-full w-full bg-muted rounded-lg flex items-center justify-center">
            <p className="text-primary">Interactive Campus Map Coming Soon</p>
          </div>
        </Card>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-lg font-semibold mb-2 text-primary">Bus Schedules</h3>
            <p className="text-gray-600">Check real-time bus timings and routes</p>
          </Card>
          
          <Card className="hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-lg font-semibold mb-2 text-primary">Find Teachers</h3>
            <p className="text-gray-600">Locate and connect with faculty members</p>
          </Card>
          
          <Card className="hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-lg font-semibold mb-2 text-primary">Study Resources</h3>
            <p className="text-gray-600">Access notes and study materials</p>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-md py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-white">
          <a 
            href="https://github.com/adityajha77" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-white hover:text-accent transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>Check out the project on GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
