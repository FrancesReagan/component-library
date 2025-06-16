// app.tsx or app.jsx is just for testing or demoing each component--does not get published//
import  { useState } from "react";
import  { AlertBox }  from "./components/AlertBox/AlertBox";
import  { UserProfileCard }  from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
// add types//
import type { User, Product } from "./types";   
import "./App.css";


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
    inStock: "true",
  };
// possible placeholder---just color//
  // https://place-hold.it/300x200/white/black/black.jpg&bold&italic

const handleAddToCart= (productId:string) => {
  setCartItems([...cartItems, productId]);
  setShowAlert(true);
};

const handleEditUser = (userId: string) => {
  console.log(`Editing user ${userId}`);
};

const handleClose = (alertType: string) => {
  console.log(`Closing ${alertType} alert`);
  setShowAlert(false);
};

  return (
    <div className = "p-4 max-w-5xl mx-auto"> 
      <h1 className = "text-3xl font-bold mb-6">My Components Library</h1>
      
  {/* AlertBox section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Alert Box Components</h2>
        <div className="flex flex-col gap-4">

          <AlertBox 
            type="success" 
            message="Doves Land"
            onClose={() => handleClose("success")}>
        <p className="text-sm mt-2">Operation completed successfully.</p>
          </AlertBox>

          <AlertBox 
            type="error" 
            message="Doves Cry"
            onClose={() => handleClose("error")}>
            <p className="text-sm mt-2">An error occurred. Please try again.</p>
            </AlertBox>

          <AlertBox 
            type="info" 
            message="Doves in mid flight near Land"
            onClose={() => handleClose("info")}>
          <p className="text-sm mt-2">Information updated successfully.</p>
          </AlertBox>

          <AlertBox 
            type="warning" 
            message="Doves far from Land"
            onClose={() => handleClose("warning")}>
           <p className="text-sm mt-2">Proceed with caution</p>
          </AlertBox>
        </div>
      </section>

<section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4">Component Composition</h2>
  {showAlert && (
    <AlertBox
      type="success"
      message="Product added to cart!"
      onClose={() => handleClose(`cart`)}>
    <p className="text-sm mt-2">Item added to your shopping cart.</p>
      </AlertBox>
  )}

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <UserProfileCard
      user={user}
      showEmail={true}
      showRole={true}
      onEdit={handleEditUser}>

      <div className="text-sm text-gray-500 mt-4">  
        Last Login: 4hrs ago
      </div>
      </UserProfileCard>

      <ProductDisplay
       product={product}
       showDescription={true}
       showStockStatus={true}
       onAddToCart={handleAddToCart}>

      <div className="text-sm text-gray-500 mt-4">
        Free Shipping Available
      </div>
      </ProductDisplay>
  </div>
</section>
</div>
  );
}
export default App;