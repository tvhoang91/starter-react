import { faker } from '@faker-js/faker';
import { StateCreator } from 'zustand';

import { ProductState } from './productStore';

export interface StockSlice {
  recalculateStock: () => void;
}

export const createStockSlice: StateCreator<
  ProductState,
  [['zustand/immer', never], ['zustand/devtools', never]],
  [],
  StockSlice
> = (set) => ({
  recalculateStock: () => {
    set((state) => {
      state.items.forEach((product) => {
        product.outOfStock = faker.datatype.boolean();
      });
    });
  },
});
