import React from 'react';

const Badge = React.forwardRef(({ className = '', variant = 'default', children, ...props }, ref) => {
  const variants = {
    default: 'bg-primary text-white hover:bg-primary/80',
    secondary: 'bg-secondary text-white hover:bg-secondary/80',
    outline: 'border border-input text-foreground',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    destructive: 'bg-red-500 text-white',
  };

  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Badge.displayName = 'Badge';

export { Badge };
