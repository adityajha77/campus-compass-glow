
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-card backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
