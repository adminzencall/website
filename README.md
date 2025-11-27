# Kairos AI - Voice Assistant for Modern Barbershops

A modern React-based web application for Kairos AI (Zencall), featuring a sleek UI for voice assistant services tailored to barbershops and service businesses.

## Features

- Modern React 18 with Vite
- React Router for navigation
- Tailwind CSS for styling
- Responsive design with dark/light mode
- Multiple pages: Home, Services, Demo, Pricing, About, Contact
- Voice assistant UI components
- Interactive demo scenarios

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd kairos-ai
```

2. Install dependencies:
```bash
npm install
```

## Development

To run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
kairos-ai/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (Button, Card, etc.)
│   │   ├── home/           # Home page specific components
│   │   └── ...             # Feature components
│   ├── pages/              # Page components
│   │   ├── home.jsx
│   │   ├── services.jsx
│   │   ├── demo.jsx
│   │   ├── pricing.jsx
│   │   ├── about.jsx
│   │   ├── contact.jsx
│   │   └── comingsoon.jsx
│   ├── integrations/       # External integrations
│   ├── utils/              # Utility functions
│   ├── App.jsx            # Main app component with routing
│   ├── Layout.jsx         # Layout wrapper with navigation
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies

```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Framer Motion** - Animation library

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## License

MIT
