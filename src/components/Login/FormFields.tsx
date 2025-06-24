import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FormFieldsProps {
  className?: string;
}

const FormFields: React.FC<FormFieldsProps> = ({ className }) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const inputClassName = "border-0 border-b border-input rounded-none px-1 h-10 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary placeholder:text-muted-foreground";

  return (
    <form className={cn("w-full space-y-8", className)} onSubmit={(e) => e.preventDefault()}>
      <Input
        type="email"
        id="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClassName}
        autoComplete="email"
      />
      <div className="space-y-2">
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClassName}
          autoComplete="current-password"
        />
        <Button variant="link" className="p-0 h-auto text-xs font-normal text-muted-foreground hover:text-primary">
          Forgot Password
        </Button>
      </div>
    </form>
  );
};

export default FormFields;
