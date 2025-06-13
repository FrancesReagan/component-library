
import React from "react";
import { ProductDisplayProps } from "../../tyoes";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {product.imgUrl && {
        <img 
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
        />
      }}
      



    </div>
  )
}