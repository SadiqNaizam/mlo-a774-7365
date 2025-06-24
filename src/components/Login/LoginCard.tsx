import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FormFields from './FormFields';
import ButtonLogin from './ButtonLogin';
import Links from './Links';
import { cn } from '@/lib/utils';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  return (
    <Card className={cn("w-[300px] bg-card text-card-foreground border shadow-lg", className)}>
      <CardHeader className="pt-10 pb-4">
        <CardTitle className="text-center text-2xl font-bold">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <div className="flex flex-col">
          <FormFields />
          <ButtonLogin className="mt-8" />
          <Links className="mt-6" />
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginCard;