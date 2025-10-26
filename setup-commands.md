# Setup Commands for Your Portfolio

## After installing Node.js, run these commands:

### Method 1: Vite + React (Recommended for development)
```powershell
# Navigate to your project directory
cd "c:\Projects\DataScience\Portfolio\Yuchuan-Portfolio"

# Initialize npm project
npm init -y

# Install Vite and React
npm install --save-dev vite @vitejs/plugin-react
npm install react react-dom

# Install your component dependencies
npm install framer-motion lucide-react

# Install shadcn/ui dependencies
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Create index.html and main.jsx files (see below)
```

### Method 2: Next.js (Best for deployment)
```powershell
# Create new Next.js app
npx create-next-app@latest portfolio-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd portfolio-app

# Install your dependencies
npm install framer-motion lucide-react

# Install shadcn/ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add card button badge
```

### Method 3: Simple HTML + React CDN (Quick test)
Create an HTML file that loads React from CDN and includes your component.

## Files you'll need to create:

See the individual files created by the assistant below.