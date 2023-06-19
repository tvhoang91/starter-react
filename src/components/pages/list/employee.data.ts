import { faker, SexType } from '@faker-js/faker';

export interface Employee {
  id: string;
  title: string;

  avatar: string;
  bio: string;

  sex: SexType;
}

export function generateEmployees(count = 5): Employee[] {
  const employees: Employee[] = [];
  const sex = faker.person.sexType();

  for (let i = 0; i < count; i++) {
    employees.push({
      id: faker.string.uuid(),
      title: faker.person.firstName(sex),
      avatar: faker.image.avatar(),
      sex: sex,
      bio: faker.person.bio(),
    });
  }

  return employees;
}
