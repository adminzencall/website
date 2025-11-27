// Utility function to create page URLs
export const createPageUrl = (pageName) => {
  // Convert page names to lowercase routes
  const routes = {
    'Home': '/',
    'Services': '/services',
    'Demo': '/demo',
    'Pricing': '/pricing',
    'About': '/about',
    'Contact': '/contact',
    'ComingSoon': '/coming-soon'
  };

  return routes[pageName] || '/';
};
