import { faker } from '@faker-js/faker';

export interface Product {
  id: string;
  title: string;

  thumbnail: string;
  description: string;

  outOfStock: boolean;
}

export function generateProducts(count = 5): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < count; i++) {
    products.push({
      id: faker.string.uuid(),
      title: faker.commerce.product(),
      thumbnail: faker.image.urlLoremFlickr({ category: 'good', width: 200, height: 200 }),
      description: faker.commerce.productDescription(),
      outOfStock: faker.datatype.boolean(),
    });
  }

  return products;
}
