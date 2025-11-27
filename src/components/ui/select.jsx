import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SelectContext = createContext();

const Select = ({ children, value, onValueChange, defaultValue }) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [isOpen, setIsOpen] = useState(false);

  const currentValue = value !== undefined ? value : internalValue;

  const handleValueChange = (newValue) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    if (onValueChange) {
      onValueChange(newValue);
    }
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider value={{ value: currentValue, onValueChange: handleValueChange, isOpen, setIsOpen }}>
      <div className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

const SelectTrigger = React.forwardRef(({ className = '', children, ...props }, ref) => {
  const { isOpen, setIsOpen } = useContext(SelectContext);

  return (
    <button
      ref={ref}
      type="button"
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
});

SelectTrigger.displayName = 'SelectTrigger';

const SelectValue = ({ placeholder }) => {
  const { value } = useContext(SelectContext);
  return <span>{value || placeholder}</span>;
};

const SelectContent = ({ children, className = '' }) => {
  const { isOpen } = useContext(SelectContext);

  if (!isOpen) return null;

  return (
    <div className={`absolute z-50 w-full mt-1 rounded-md border bg-popover text-popover-foreground shadow-md ${className}`}>
      <div className="p-1">
        {children}
      </div>
    </div>
  );
};

const SelectItem = ({ value, children, className = '' }) => {
  const { onValueChange } = useContext(SelectContext);

  return (
    <div
      className={`relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground ${className}`}
      onClick={() => onValueChange(value)}
    >
      {children}
    </div>
  );
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
