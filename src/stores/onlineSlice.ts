import { faker } from '@faker-js/faker';
import { StateCreator } from 'zustand';

import { EmployeeState } from './employeeStore';

export interface OnlineSlice {
  refresh: () => void;
}

export const createOnlineSlice: StateCreator<
  EmployeeState,
  [['zustand/immer', never], ['zustand/devtools', never]],
  [],
  OnlineSlice
> = (set) => ({
  refresh: () => {
    set((state) => {
      state.items.forEach((employee) => {
        employee.isOnline = faker.datatype.boolean();
      });
    });
  },
});
