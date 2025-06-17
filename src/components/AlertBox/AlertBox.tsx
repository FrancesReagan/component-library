// hey I need React's tools to build my components----like grab a hammer//
import React from "react";
// get my instruction manual from the types folder----grab the blueprint//
import type { AlertBoxProps } from "../../types";

// Like a factory machine---someone puts in ingredients--props---the machine(component) processes them=====out comes a finished product (HTML)//
// creating the component//
//  React.FC---Hey React this is a function component...AlertBoxProps---use the receipe I wrote earlier in types....{{give me these ingredients from recipe}}//
// export const AlertBox--I'm making something called AlertBox that others can use//
// React.FC<AlertBoxProps>---this is a React function component that follows the AlertBoxProps Rules//
export const AlertBox: React.FC<AlertBoxProps> = ({
  // give me these 4 things from whoever has this component//
  type,
  message,
  onClose,
  children,
}) => {
  // the color palette---like--4 paint buckets---each paint has 3 parts----bg-green-100 --light green background....border-green-500--darker green border...text-green 700
  // darker green text//
  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };

  //  building the alert box structre-----//
  // here's what I want to show on the screen//
  return (
    // div --make a rectangular box----className={ } make it look pretty with these styles...p-4 add padding (space) inside the box...border-1-4 add a thick border
    // on the left side....${alertStyles[type]} use the color from our paint bucket based on the type//
    // Like building a room:
    // Make a rectangular room (div)
    // Add carpet padding (p-4)
    // Paint one wall thick (border-l-4)
    // Choose paint color based on mood (alertStyles[type])

    /* flex justify-between items-center ---put things in a row, spead them apart, center them vertically---<p>{message}</p> show the message text.....{onClose && (..)} if 
      there's a close function, then show the x button.....onClick={onClose}-----when clicked, run the close function....X --the x symbol to close the alert */
    // Like arranging furniture: // Put the message on the left side of the couch
    // / IF someone wants a remote control, put it on the right side
    // When they press the remote, turn off the TV (close the alert)

    <div className={`p-4 border-l-4 ${alertStyles[type]}`}>
      <div className="flex justify-between items-center">
        {/* show the message */}
        <p>{message}</p>
        {/* if there is an onClose function */}
        {onClose && (
          // then show the X button//
          <button
            onClick={onClose}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            ×

          </button>
        )}
      </div>
      {/* /* show any extra content....if someone wants to put extra things inside the alert --show it here---it's like having a pocket in my backpack for extra items *
      ---example of what could be put in {children} 
      <AlertBox type="success" message="Saved!">
  <p>Your file was saved to Documents folder</p>  // This is children
</AlertBox> */}
       {/* //wrapped children in a div and added mt-4 to ensure consistent spacing and to avoid rendering an empty div if children are not provided.// */}
 {children && <div className="mt-4"> {children}</div>}
    </div>



//     ); = "I'm done building the HTML structure"//
  );
  // }; = "I'm done with the component function"//
};
// export default AlertBox = "Make this the main thing people get when they import this file"//
export default AlertBox;

// .......................................................................................//
// notes for understanding and remembering: When someone uses it:
// typescript<AlertBox 
//   type="success" 
//   message="Your password was changed!" 
//   onClose={() => console.log("Closing alert")}
// >
//   <p>You can now log in with your new password</p>
// </AlertBox>
// What happens:

// Component receives: type="success", message="Your password...", onClose function, children content
// Picks paint bucket: Green colors because type="success"
// Builds the box: Green background with thick green left border
// Adds message: "Your password was changed!" on the left
// Adds close button: X button on the right (because onClose was provided)
// Adds extra content: The paragraph about logging in

// 🎪 The Magic:
// Input: Someone gives you ingredients
// Process: Your component mixes them according to the recipe
// Output: A beautiful, functional alert box appears on the screen!
// It's like a vending machine:

// Put in coins (props) → Get out a snack (rendered component)
// Different coins (different props) → Different snacks (different looking alerts)
