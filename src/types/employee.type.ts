import { SexType } from '@faker-js/faker';

import { ListItem } from './listItem.type';

export interface Employee extends ListItem {
  avatar: string;
  bio: string;

  sex: SexType;
  isOnline: boolean;
}
