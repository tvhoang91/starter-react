import { ListItem } from './listItem.type';

export interface Product extends ListItem {
  thumbnail: string;
  description: string;

  outOfStock: boolean;
}
