
import React from "react";
import type { ProductDisplayProps } from "../../types";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {product.imageUrl && {
        <img 
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      }}
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
          {children}
      </div>
    </div>
  );
};

export default ProductDisplay;