Acknowledgements: To my 2025-RTT-23 instructors, Abraham E. Tavarez and Colton Wright, thank you for the many hours of help you have given this cohort and made all of this possible.
To ----Jermal Wynder----06/16/2025---thank you for always lending each of us a hand and for your very calm and intelligent presence in our classroom----you are already dearly missed---and you will always be celebrated for all you were and are to us:).  I will never forget you

React Component Library

A lightweight collection of reusable React components built with TypeScript and styled with Tailwind CSS. Perfect for building modern web applications with consistent UI patterns.

🚀 Features

- **Type-safe** - Built with TypeScript for better developer experience
- **Flexible** - Extensive customization through optional props
- **Modern styling** - Styled with Tailwind CSS utility classes

 📦 Components

- **AlertBox** - Customizable notifications and alerts
- **UserProfileCard** - User information display with optional actions
- **ProductDisplay** - Product showcase with cart integration

🛠️ Quick Start

Create New Vite App with React-TypeScript-Tailwind

```bash
# Create new Vite project
npm create vite@latest component-library 
# Select: React → TypeScript + SWC

# Navigate to your project
cd component-library 

# Edit package.json - Change "devDependencies" "eslint" to "latest"

# Install dependencies
npm i

# Install ESLint and development tools
npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev

# Install Tailwind CSS
npm install tailwindcss @tailwindcss/vite
```

Configure Vite and Tailwind

**1. Update `vite.config.ts`:**

Add to the top:
```typescript
import tailwindcss from '@tailwindcss/vite';
```

Update the plugins section:
```typescript
plugins: [react(), tailwindcss()]
```

**2. Configure CSS files:**

Add to the top of `/src/index.css`:
```css
@import "tailwindcss";
```

Add to `/src/App.css`:
```css
@layer base {
  h1 { font-size: var(--text-2xl); }
  h2 { font-size: var(--text-xl); }
  h3 { font-size: var(--text-lg); }
  a { color: var(--color-blue-600); text-decoration-line: underline; }
}
```

**3. Start development server:**
```bash
npm run dev
```
🏗️ Project Structure

```
src/
├── components/
│   ├── AlertBox/
│   │   └── AlertBox.tsx
│   ├── UserProfileCard/
│   │   └── UserProfileCard.tsx
│   └── ProductDisplay/
│       └── ProductDisplay.tsx
├── types/
│   └── index.ts
├── App.tsx
└── index.css
```

📖 Component Documentation

AlertBox

A versatile alert component for displaying notifications, errors, warnings, and success messages.

#### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `type` | `"success" \| "error" \| "warning" \| "info"` | ✅ | - | Alert style variant |
| `message` | `string` | ✅ | - | Main alert message |
| `onClose` | `() => void` | ❌ | - | Close button callback |
| `children` | `React.ReactNode` | ❌ | - | Additional content |

Examples

**Basic Alert:**
```tsx
import { AlertBox } from "./components/AlertBox/AlertBox";

<AlertBox 
  type="success" 
  message="Doves Land"
  onClose={() => console.log("Alert closed")}
>
  <p className="text-sm mt-2">Operation completed successfully.</p>
</AlertBox>
```

**Different Alert Types:**
```tsx
// Success Alert
<AlertBox 
  type="success" 
  message="Doves Land"
  onClose={() => handleClose("success")}
>
  <p className="text-sm mt-2">Operation completed successfully.</p>
</AlertBox>

// Error Alert
<AlertBox 
  type="error" 
  message="Doves Cry"
  onClose={() => handleClose("error")}
>
  <p className="text-sm mt-2">An error occurred. Please try again.</p>
</AlertBox>

// Warning Alert
<AlertBox 
  type="warning" 
  message="Doves far from Land"
  onClose={() => handleClose("warning")}
>
  <p className="text-sm mt-2">Proceed with caution</p>
</AlertBox>

// Info Alert
<AlertBox 
  type="info" 
  message="Doves in mid flight near Land"
  onClose={() => handleClose("info")}
>
  <p className="text-sm mt-2">Information updated successfully.</p>
</AlertBox>
```
```

UserProfileCard

A clean, customizable user profile display component with optional edit functionality.

#### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `user` | `User` | ✅ | - | User data object |
| `showEmail` | `boolean` | ❌ | `false` | Display user email |
| `showRole` | `boolean` | ❌ | `false` | Display user role |
| `onEdit` | `(userId: string) => void` | ❌ | - | Edit button callback |
| `children` | `React.ReactNode` | ❌ | - | Additional content |

#### User Object Structure

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
```

#### Example

```tsx
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";

const user = {
  id: "1",
  name: "Lois Lane",
  email: "lois.lane@thedailyplanet.com",
  role: "newspaper reporter",
  avatarUrl: "https://i.pravatar.cc/300"
};

function App() {
  const handleEditUser = (userId: string) => {
    console.log(`Editing user ${userId}`);
  };

  return (
    <UserProfileCard
      user={user}
      showEmail={true}
      showRole={true}
      onEdit={handleEditUser}
    >
      <div className="text-sm text-gray-500 mt-4">  
        Last Login: 4hrs ago
      </div>
    </UserProfileCard>
  );
}
```

ProductDisplay

A comprehensive product showcase component with cart integration and flexible display options.

Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `product` | `Product` | ✅ | - | Product data object |
| `showDescription` | `boolean` | ❌ | `false` | Display product description |
| `showStockStatus` | `boolean` | ❌ | `false` | Display stock availability |
| `onAddToCart` | `(productId: string) => void` | ❌ | - | Add to cart callback |
| `children` | `React.ReactNode` | ❌ | - | Additional content |

Product Object Structure

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}
```

Example

```tsx
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";

const product = {
  id: "1",
  name: "Wireless Headphones",
  price: 199.99,
  description: "High-quality wireless headphones with noise cancellation",
  imageUrl: "https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg",
  inStock: true
};

function App() {
  const handleAddToCart = (productId: string) => {
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <ProductDisplay
      product={product}
      showDescription={true}
      showStockStatus={true}
      onAddToCart={handleAddToCart}
    >
      <div className="text-sm text-gray-500 mt-4">
        Free Shipping Available
      </div>
    </ProductDisplay>
  );
}
```

Usage Tips

 Combining Components

See `App.tsx` for examples of how components work together:

```tsx
import { useState } from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import type { User, Product } from './types';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const user: User = {
    id: "1",
    name: "Lois Lane",
    email: "lois.lane@thedailyplanet.com",
    role: "newspaper reporter",
    avatarUrl: "https://i.pravatar.cc/300",
  };

  const product: Product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation",
    imageUrl: "https://images.pexels.com/photos/1001850/pexels-photo-1001850.jpeg",
    inStock: true,
  };

  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
  };

  const handleEditUser = (userId: string) => {
    console.log(`Editing user ${userId}`);
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Components Library</h1>
      
      {/* Show success alert when item added to cart */}
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={handleClose}
        >
          <p className="text-sm mt-2">Item added to your shopping cart.</p>
        </AlertBox>
      )}

      {/* Component composition example */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={handleEditUser}
        >
          <div className="text-sm text-gray-500 mt-4">  
            Last Login: 4hrs ago
          </div>
        </UserProfileCard>

        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
          <div className="text-sm text-gray-500 mt-4">
            Free Shipping Available
          </div>
        </ProductDisplay>
      </div>
    </div>
  );
}
```

Customizing Styles

Components use Tailwind CSS classes. To customize:

1. Modify the component files directly for global changes
2. Use the `children` prop to add custom content with your own styling
3. Wrap components in containers with additional Tailwind classes

TypeScript Integration

All components are fully typed. Import types when needed:

```tsx
import type { User, Product, AlertType } from './types';
```

🔧 Development

Prerequisites

- Node.js 16+ 
- npm
- Basic knowledge of React and TypeScript

Available Scripts

```bash
Start development server
npm run dev

📝 Notes

- **Type Safety**: All props are validated through TypeScript interfaces in `src/types/index.ts`
- **Responsive Design**: Components are mobile-friendly and responsive
- **Error Handling**: Components include defensive checks for optional data

🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and test thoroughly
4. Commit with descriptive messages
5. Push to your fork and submit a pull request

Acknowledgements: To my 2025-RTT-23 instructors, Abraham E. Tavarez and Colton Wright, thank you for the many hours of help you have given this cohort and made all of this possible.
To ----Jermal Wynder----06/16/2025---thank you for always lending each of us a hand and for your very calm and intelligent presence in our classroom----you are already dearly missed---and you will always be celebrated for all you were and are to us:).  I will never forget you
