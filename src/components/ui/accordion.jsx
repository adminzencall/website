import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionContext = createContext();

const Accordion = ({ children, type = 'single', collapsible = false, className = '' }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (value) => {
    if (type === 'single') {
      if (openItems.includes(value)) {
        setOpenItems(collapsible ? [] : openItems);
      } else {
        setOpenItems([value]);
      }
    } else {
      setOpenItems(prev =>
        prev.includes(value)
          ? prev.filter(item => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={className}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ value, children, className = '' }) => {
  return (
    <div className={`border-b ${className}`} data-value={value}>
      {children}
    </div>
  );
};

const AccordionTrigger = React.forwardRef(({ children, className = '', ...props }, ref) => {
  const { openItems, toggleItem } = useContext(AccordionContext);
  const value = props['data-value'] || '';
  const isOpen = openItems.includes(value);

  return (
    <button
      ref={ref}
      type="button"
      className={`flex flex-1 w-full items-center justify-between py-4 font-medium transition-all hover:underline ${className}`}
      onClick={() => toggleItem(value)}
      {...props}
    >
      {children}
      <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = ({ children, className = '', ...props }) => {
  const { openItems } = useContext(AccordionContext);
  const value = props['data-value'] || '';
  const isOpen = openItems.includes(value);

  if (!isOpen) return null;

  return (
    <div className={`pb-4 pt-0 ${className}`}>
      {children}
    </div>
  );
};

// Wrapper components to pass value down
const AccordionItemWrapper = ({ value, children }) => {
  return (
    <AccordionItem value={value}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { 'data-value': value })
      )}
    </AccordionItem>
  );
};

export { Accordion, AccordionItemWrapper as AccordionItem, AccordionTrigger, AccordionContent };
