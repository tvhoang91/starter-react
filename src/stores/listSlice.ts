import { ListItem } from '@src/types/listItem.type';
import { StateCreator } from 'zustand';

export interface ListState<Type extends ListItem> {
  items: Type[];
  pop: () => Type | null;
}

export function initListSlice<Type extends ListItem>(
  items: Type[],
): StateCreator<ListState<Type>, [], [], ListState<Type>> {
  return (set, get) => ({
    items,
    pop: () => {
      const items = get().items;
      if (items.length === 0) {
        return null;
      }

      const lastItem = items[items.length - 1];
      set({ items: items.slice(0, -1) });
      return lastItem;
    },
  });
}
