import React from 'react';

const Button = React.forwardRef(({
  className = '',
  variant = 'default',
  size = 'default',
  asChild = false,
  children,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  // Check if className contains custom bg/text colors - if so, skip variant colors
  const hasCustomBg = className.includes('bg-');
  const hasCustomText = className.includes('text-');

  // Only apply variant styles if no custom colors are provided
  let variantStyles = variants[variant] || '';
  if (hasCustomBg || hasCustomText) {
    // Remove bg and text classes from variant if custom ones are provided
    variantStyles = variantStyles
      .split(' ')
      .filter(cls => {
        if (hasCustomBg && cls.startsWith('bg-')) return false;
        if (hasCustomText && cls.startsWith('text-')) return false;
        if (hasCustomBg && cls.startsWith('hover:bg-')) return false;
        return true;
      })
      .join(' ');
  }

  const combinedClassName = `${baseStyles} ${variantStyles} ${sizes[size]} ${className}`;

  // When asChild is true, clone the child element and pass all props/styles to it
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${combinedClassName} ${children.props.className || ''}`.trim(),
      ref,
      ...props,
    });
  }

  return (
    <button
      className={combinedClassName}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
