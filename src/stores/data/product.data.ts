import { faker } from '@faker-js/faker';
import { Product } from '@src/types/product.type';

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
