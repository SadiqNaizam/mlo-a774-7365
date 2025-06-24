import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Props for the MainAppLayout component.
 */
interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   * This is a mandatory prop.
   */
  children: React.ReactNode;
  /**
   * Optional additional class names to apply to the layout container.
   */
  className?: string;
}

/**
 * A full-page layout component that centers its content both vertically and horizontally.
 * It applies the main application background color and uses flexbox for centering.
 * This component acts as the primary layout wrapper for pages like the login screen.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex h-screen w-full items-center justify-center bg-background p-4 font-sans',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
