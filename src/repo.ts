import { Pets } from './model/pets';
export const repo = () => {
  const data: Pets[] = [
    {
      id: crypto.randomUUID(),
      name: 'Ivana',
      breed: 'Furius dog',
      isAdopted: true,
      owner: 'Carlos',
    },

    {
      id: crypto.randomUUID(),
      name: 'Cat',
      breed: 'Persian',
      isAdopted: true,
      owner: 'Carlos',
    },

    {
      id: crypto.randomUUID(),
      name: 'Fox',
      breed: 'Fox',
      isAdopted: true,
      owner: 'Carlos',
    },
  ];

  return data;
};
