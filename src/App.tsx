
import './App.css'//
import { AlertBox } from "./components/AlertBox/AlertBox";

function App() {
  const handleClose = (alertType: string) => {
    console.log(`Closing ${alertType} alert`);

  };

  return (
    <>
      <h1>Components Library</h1>
      <AlertBox 
      type="success" 
      message="Hello World"
      onClose={() => handleClose("success")}
      />
      <AlertBox 
      type="error" 
      message="Hello World"
      onClose={() => handleClose("error")}
      />
      <AlertBox 
      type="info" 
      message="Hello World"
      onClose={() =>handleClose("info")}
      />
      <AlertBox 
      type="warning" 
      message="Hello World"
      onClose={() => handleClose("warning")}/>
    </>
  )
}

export default App
