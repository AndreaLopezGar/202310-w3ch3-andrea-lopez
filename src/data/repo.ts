import { Pet } from '../model/pets';

export const repo = () => {
  const data: Pet[] = [
    {
      id: crypto.randomUUID(),
      name: 'Stitch',
      breed: 'Shitzsu',
      isAdopted: false,
      owner: 'Andrea',
    },
    {
      id: crypto.randomUUID(),
      name: 'Totoro',
      breed: 'Rat',
      isAdopted: false,
      owner: 'Guille',
    },
    {
      id: crypto.randomUUID(),
      name: 'Killua',
      breed: 'Cat',
      isAdopted: true,
      owner: 'Elias',
    },
  ];
  return data;
};
