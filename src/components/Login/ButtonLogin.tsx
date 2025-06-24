import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonLoginProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ className, onClick, disabled }) => {
  return (
    <Button
      className={cn("w-full", className)}
      type="submit"
      onClick={onClick}
      disabled={disabled}
    >
      Login
    </Button>
  );
};

export default ButtonLogin;
