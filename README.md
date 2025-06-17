---My Component Library---
Created this library of reusable React components built with Typescript and used Tailwind CSS for styles.  
This component library includes these features:
*Type-safe as it is built with TypeScript so less challenges at deployment
*Flexible includes optional props so that customization is limitless--presently includes just 3 components---AlertBox, UserProfileCard, and ProductDisplay.
*Modern styles via use of Tailwind CSS utility classes

COMPONENTS Library:
*AlertBox--offers customizable notifications and alerts
*UserProfileCard - for user information capture and display with optional actions
*ProductDisplay - showcases products with shopping cart integrated

Project Structure:
src/
-components
  -AlertBox
    -AlertBox.tsx
  -UserProfileCard
    -UserProfileCard.tsx
  -ProductDisplay
    -ProductDisplay.tsx
-types
  -index.ts
-App.tsx
-index.css

----To Use---
*Create New Vite app with React-TypeScript-Tailwind
  *Create new Vite project
    *in VS Code and in new terminal use this command:
     npm create vite@latest component-library
    *select: React-->Typescript + SWC
    *navigate to your project:
      cd component library
    *edit package.json - change "devDependencies" "eslint" to "latest"
    *Install dependencies
    npm install  or npm i
    *Install ESLint and development tools
    npm i eslint vite-plugin-eslint eslint-config-react-app-sav-dev
    *Install Tailwind CSS
    npm install tailwindcss@tailwindcss/vite
    *Configure Vite and Tailwind
      *update vite.ocnfig.ts: 
        add this to the top of file:
        import tailwindcss from "@tailwindcss/vite";
    *Update plugin section:
     plugins: [react(), tailwindcss()]

     
