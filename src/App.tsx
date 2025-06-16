// app.tsx or app.jsx is just for testing or demoing each component--does not get published//
import  { useState } from "react";
import  { AlertBox }  from "./components/AlertBox/AlertBox";
import  { UserProfileCard }  from "./components/UserProfileCard/UserProfileCard";
import { ProductDisplay } from "./components/ProductDisplay/ProductDisplay";
// add types//
import { User, Product } from "./types";   
import "./App.css";


function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState[]>([]);

  const user: User = {
    id: "1",
    name: "Lois Lane",
    email: "lois.lane@thedailyplanet.com",
    role: "newspaper reporter",
    avatarUrl: "https://i.pravatar.cc/300",
  }
  



  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>My Components Library</h1>
      
  {/* AlertBox section */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Alert Box Components</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <AlertBox 
            type="success" 
            message="Doves Land"
            onClose={() => handleClose("success")}
          />
          <AlertBox 
            type="error" 
            message="Doves Cry"
            onClose={() => handleClose("error")}
          />
          <AlertBox 
            type="info" 
            message="Doves in mid flight near Land"
            onClose={() => handleClose("info")}
          />
          <AlertBox 
            type="warning" 
            message="Doves far from Land"
            onClose={() => handleClose("warning")}
          />
        </div>
        
      </section>
</div>
)};
export default App;