import { Employee } from '@src/types/employee.type';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { generateEmployees } from './data/employee.data';
import { initListSlice, ListState } from './listSlice';
import { createOnlineSlice, OnlineSlice } from './onlineSlice';

export type EmployeeState = ListState<Employee> & OnlineSlice;

export const useEmployeeStore = create<EmployeeState>()(
  immer(
    devtools((...params) => {
      const createListSlice = initListSlice(generateEmployees(10));

      return {
        ...createListSlice(...params),
        ...createOnlineSlice(...params),
      };
    }),
  ),
);
