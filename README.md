# React + Vite + TypeScript + Tailwind CSS v4

A modern, production-ready React development setup combining Vite's blazing-fast build tooling with Tailwind CSS v4 for utility-first styling. Built with TypeScript for type safety and best practices.

## 🚀 Features

- ⚡ **Vite** - Lightning-fast HMR (Hot Module Replacement) and build optimization
- ⚛️ **React 19** - Latest React with concurrent features
- 🔒 **TypeScript** - Full type safety and better developer experience
- 🎨 **Tailwind CSS v4** - Latest version with new @tailwindcss/vite plugin for optimal performance
- 📦 **ESLint** - Modern ESLint configuration with React and TypeScript support
- 🎯 **Responsive Design** - Mobile-first responsive utilities built into Tailwind

## 📋 Prerequisites

- **Node.js** 16.0 or higher
- **npm** 7.0 or higher (or use yarn/pnpm)

## 🛠️ Installation & Setup

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm lint
```

### Development

After running `npm run dev`, your application will be available at:
- **Local:** http://localhost:5173/
- **Network:** See console output for your machine's IP address

The development server includes:
- Hot Module Replacement (HMR) for instant feedback
- Automatic CSS processing with Tailwind CSS
- TypeScript compilation with source maps

### Production Build

```bash
npm run build
```

This generates an optimized production build in the `dist/` directory:
- JavaScript is minified and chunked
- CSS is processed and optimized by Tailwind CSS
- Assets are optimized and hashed for caching

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
.
├── src/
│   ├── App.tsx           # Main React component with Tailwind demo
│   ├── main.tsx          # React DOM entry point
│   ├── index.css         # Tailwind CSS import (all utilities)
│   └── assets/           # Static assets (images, etc.)
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration (optional)
├── package.json          # Project dependencies
└── eslint.config.js      # ESLint configuration
```

## 🎨 Tailwind CSS v4

This project uses Tailwind CSS v4 with the new `@tailwindcss/vite` plugin for optimal performance:

### Key Features:
- **Zero Configuration** - Works out of the box with sensible defaults
- **Vite Integration** - Native Vite plugin for seamless integration
- **Modern CSS** - Uses modern CSS features for smaller bundle sizes
- **Utility Classes** - Thousands of utility classes for rapid UI development

### Usage Examples:

```jsx
// Container and padding
<div className="max-w-7xl mx-auto px-4">

// Gradient backgrounds
<div className="bg-gradient-to-r from-blue-500 to-purple-600">

// Responsive design
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

// Hover effects
<button className="hover:shadow-lg hover:scale-105 transition-all">

// Dark mode (if enabled)
<div className="dark:bg-gray-900 dark:text-white">
```

### Customization

To customize Tailwind CSS (create `tailwind.config.js` if needed):

```javascript
export default {
  theme: {
    extend: {
      colors: {
        custom: '#1f2937',
      },
      spacing: {
        128: '32rem',
      },
    },
  },
}
```

## 🔧 Configuration Files

### `vite.config.ts`
Configures Vite build tool with React and Tailwind CSS plugins:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### `tsconfig.json`
TypeScript configuration for React and modern JavaScript:
- `strict` mode enabled for type safety
- ES2020 target for modern browser support
- JSX support for React

### `index.css`
Imports Tailwind CSS:
```css
@import "tailwindcss";
```

## 📚 Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.1+ | UI library |
| Vite | 7.1+ | Build tool & dev server |
| TypeScript | 5.9+ | Type safety |
| Tailwind CSS | 4.1+ | Utility-first CSS framework |
| Node.js | 16+ | Runtime environment |

## 🚀 Best Practices

### Component Structure
```typescript
// Always use TypeScript for type safety
import { FC, useState } from 'react'

const MyComponent: FC<{ title: string }> = ({ title }) => {
  const [state, setState] = useState(false)
  
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  )
}

export default MyComponent
```

### Styling Patterns
1. **Use Tailwind utility classes** - Avoid custom CSS when possible
2. **Responsive design first** - Use `sm:`, `md:`, `lg:` prefixes
3. **Component composition** - Build reusable components
4. **Extract complex styles** - Use `@apply` in custom CSS or component files

### Performance Tips
- Tree-shaking unused Tailwind classes (automatic with v4)
- Code splitting for lazy-loaded routes
- Image optimization for production
- ESLint for code quality

## 🐛 Troubleshooting

### Tailwind Classes Not Applying
1. Verify `src/index.css` contains `@import "tailwindcss";`
2. Check `vite.config.ts` has the tailwindcss plugin
3. Restart the dev server if you modified config files

### Build Errors
1. Clear cache: `rm -rf node_modules/.vite`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check TypeScript errors: `npm run build`

### HMR Not Working
1. Ensure you're accessing `http://localhost:5173/` (not IP address)
2. Check browser console for errors
3. Restart dev server

## 📖 Resources

- [Vite Documentation](https://vite.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📄 License

This project is open source and available under the MIT License.

## 🎯 Next Steps

1. Edit `src/App.tsx` to start building your application
2. Create reusable components in `src/components/`
3. Add more routes if needed (consider React Router)
4. Customize Tailwind CSS in `tailwind.config.js` if needed
5. Deploy to your hosting provider

---

**Happy coding! 🎉**

