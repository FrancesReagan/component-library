// type definitions for all components//

// AlertBox--display types with visual styling variations//
export type AlertType = 'success' | 'error' | 'warning' | 'info';

// props for AlertBox component//
// @param type - visual style and semantic meanting of alert//
// @param message - main alert message text//
// @param onClose - optional callback when close button is clicked//
// @param children - optional additional content inside alert//
 
export interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
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