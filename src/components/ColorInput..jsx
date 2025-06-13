
// //define what props this child component expects//
// interface ColorInputProps {
//   //function to call parent back//
//   OnColorChange: (color: string) => void; 
// }

// // 
// function ColorInput({OnColorChange} : ColorInputProps) {
// // handle when user types in the input//
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // get what the user just typed//
//   const newColor = event.target.value;

//   // "call" the parent with the new color//
//   OnColorChange(newColor);
//   };

//   return(
//     <div>
//       <label htmlFor="color-input">Enter a color: </label> 
//       <input
//       type="text"
//       id="colorInput"
//       placeholder="e.g., red, blue, #ff0000"
//       onChange={handleInputChange}
//     />
//     </div>
//   );
// }

// export default ColorInput;
