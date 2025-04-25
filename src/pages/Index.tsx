
import React from 'react';
import MainNav from '../components/MainNav';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <MainNav />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            NMAMIT Loop
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
          >
            Your complete guide to faculty information at NMAMIT
          </motion.p>
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Link to="/teachers">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card p-8 rounded-2xl text-center cursor-pointer"
            >
              <Search className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Find Teachers</h3>
              <p className="text-gray-600">Easily locate faculty members by department, block, or floor</p>
            </motion.div>
          </Link>

          {/* More cards can be added here */}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            <Link to="/teachers">
              Start Exploring
            </Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} NMAMIT Loop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
