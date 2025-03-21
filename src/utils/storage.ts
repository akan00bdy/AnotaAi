import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShoppingList, ShoppingItem } from '../types';

const STORAGE_KEY = '@anotaai:shopping_list';

export const saveShoppingList = async (list: ShoppingList): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (error) {
    console.error('Erro ao salvar lista:', error);
  }
};

export const loadShoppingList = async (): Promise<ShoppingList> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return { items: [] };
  } catch (error) {
    console.error('Erro ao carregar lista:', error);
    return { items: [] };
  }
};

export const addItem = async (item: ShoppingItem): Promise<void> => {
  try {
    const list = await loadShoppingList();
    list.items.push(item);
    await saveShoppingList(list);
  } catch (error) {
    console.error('Erro ao adicionar item:', error);
  }
};

export const updateItem = async (updatedItem: ShoppingItem): Promise<void> => {
  try {
    const list = await loadShoppingList();
    const index = list.items.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
      list.items[index] = updatedItem;
      await saveShoppingList(list);
    }
  } catch (error) {
    console.error('Erro ao atualizar item:', error);
  }
};

export const deleteItem = async (itemId: string): Promise<void> => {
  try {
    const list = await loadShoppingList();
    list.items = list.items.filter(item => item.id !== itemId);
    await saveShoppingList(list);
  } catch (error) {
    console.error('Erro ao deletar item:', error);
  }
};

export const clearList = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Erro ao limpar lista:', error);
  }
}; 