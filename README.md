<img width="1030" alt="image" src="https://github.com/user-attachments/assets/3b1239ce-7612-442b-bcfb-f5e62cd77791" />




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

<img width="153" alt="image" src="https://github.com/user-attachments/assets/3ba155c8-8d46-4153-815d-e64f37c7827f" />

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

*Configure CSS files:
  *Add to the top of /src/index.css:
   @import"tailwindcss";
  *Add to /src/App.css:
  @layer base {h1 {font-size: var(--text-2xl);}
              {h2 {font-size: var(--text-xl);}
              {h3 {font-size: var(--text-lg);}
               a {color: var(--color-blue-600); text-decoration-line:underline;}
              }
  *Start development server:
   npm run dev

*Customizing styles:
 *Components use Tailwind CSS classes. In order to customize you can modify the component files directly for global changes, use the children prop to add custom
  content with your own styling, and or wrap components in containers with additional Tailwind classes.

  Acknowledgments: My instructors, Abraham E. Tavarez and Colton Wright of Per Scholas for their continue support and help when I am challenged; my fellow cohort classmates
  of RTT-2025-23---and to Jermal Wynder--thank you for your presence---you are always with us.
