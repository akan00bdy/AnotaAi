export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ShoppingList {
  items: ShoppingItem[];
} 