
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Teachers from "./pages/Teachers";
import NotFound from "./pages/NotFound";
import React from 'react'; // Ensure React is imported

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <div className="min-h-screen bg-background antialiased">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
