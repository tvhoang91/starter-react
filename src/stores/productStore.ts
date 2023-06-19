import { Product } from '@src/types/product.type';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { generateProducts } from './data/product.data';
import { initListSlice, ListState } from './listSlice';
import { createStockSlice, StockSlice } from './stockSlice';

export type ProductState = ListState<Product> & StockSlice;

export const useProductStore = create<ProductState>()(
  immer(
    devtools((...params) => {
      const createListSlice = initListSlice(generateProducts(12));

      return {
        ...createListSlice(...params),
        ...createStockSlice(...params),
      };
    }),
  ),
);
