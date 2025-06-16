
import React from "react";
import type { ProductDisplayProps } from "../../types";

// productdisplay component renders product details with optional description, stock status, and add-to-cart button//
export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product, //product object wiht id, name, price, description, optional imageUrl, and inStock//
  showDescription = false, //show description if true//
  showStockStatus = false, //show stock status if true//
  onAddToCart, //optional function to handle add-to-cart action
  children //optional additional content//
}) => {
  return (
    //container for product card with max width, centered, white background, rounded corners and shadow.//
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      //render image if Url is provided//
      {product.imageUrl && (
        <img 
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      )}
      //content section with padding//
      <div className="p-6">
        <h3 className="text=xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
          {showDescription && (
            <p className="text-gray-600 mb-4">{product.description}</p>
          )}
          {showStockStatus && (
            <p className={`text-sm font-medium mb-4 ${product.inStock ? "text-green-600" : "text-red-600"}`}>
               {product.inStock ? "In Stock" : "Out of Stock"} </p>
          )}
          {onAddToCart && (
            <button onClick={() => onAddToCart(product.id)}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            disabled={!product.inStock}>
              Add to Cart
            </button>
          )}
         //wrapped children in a div and added mt-4 to ensure consistent spacing and to avoid rendering an empty div if children are not provided.//
       {children && <div className="mt-4"> {children}</div>}
      </div>
    </div>
  );
};

export default ProductDisplay;