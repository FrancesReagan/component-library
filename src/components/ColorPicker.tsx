// import { useState } from 'react';
// import ColorInput from './ColorInput';

// //parent's "memory box" for the current color//
// function ColorPicker() {
//   const [color, setColor] = useState("white");

//   //this is the "phone line" we give to the child
//   //when child calls this function, we update our state//

//   const handleColorChange = (newColor: string) => {
//     setColor(newColor);
//   }

//   return (
//     <div style={{ 
//       padding: '20px', 
//       border: '2px solid #333',
//       borderRadius: '8px',
//       maxWidth: '400px',
//       margin: '20px auto'
//     }}>
//       <h2>Color Picker</h2>
//       <p><strong>Choose a color</strong></p>
      
//       {/* Give the child component:
//           1. The "phone line" (handleColorChange function)
//       */}
//       <ColorInput onColorChange={handleColorChange} />
      
//       <hr style={{ margin: '20px 0' }} />
      
//       {/* Show the current color */}
//       <p><strong>Current color:</strong> {color}</p>

//       {/* visual display of color */}
//       <div
//         style={{
//           width: "100px",
//           height: "100px",
//           backgroundColor: color, 
//           border: "2px solid #000",
//           borderRadius: "8px",
//           margin: "10px 0",
//           display:"flex",
//           alignItems:"center",
//           justifyContent:"center",
//           color: color === "white" || color === "yellow" ? "black" : "white",
//           fontSize: "12px",
//           fontWeight: "bold"
//         }}
//     >
//       Color Box
    
//     </div>>
 
//  <p style={{ fontSize: '12px', color: '#666' }}>
//     Try typing: red, blue, green, orange, purple, #ff0000, #00ff00, etc.
//     </p>
// </div>
//   );

// }

// export default ColorPicker