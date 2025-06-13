// this is the recipe card - here are the ingredients I need//
export interface AlertBoxProps {
  // what color style?//
  type: "success" | "error" | "warning" | "info";  
  // what text to show?//
  message: string;
  // what happens when X is clicked?//
  onClose?: () => void;
  // any extra content inside?//
  children?: React.ReactNode;
}

// UserProfileCard//
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
 
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

//  ProductDisplay//
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}
 
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}