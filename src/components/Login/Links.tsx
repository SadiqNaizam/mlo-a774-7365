import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LinksProps {
  className?: string;
}

const Links: React.FC<LinksProps> = ({ className }) => {
  return (
    <p className={cn("text-center text-sm text-muted-foreground", className)}>
      {"Don't have an account? "}
      <Button variant="link" className="p-0 h-auto text-sm text-primary font-normal">
        SignUp
      </Button>
    </p>
  );
};

export default Links;
