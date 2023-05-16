export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
}

export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy Z Fold4',
    price: 399990,
    description: 'Available. Released 2022, August 25'
  },
  {
    id: 2,
    name: 'Samsung Galaxy Z Flip4',
    price: 409990,
    description: 'Available. Released 2022, August 25'
  },
  {
    id: 3,
    name: 'Samsung Galaxy S23 Ultra',
    price: 319990,
    description: 'Coming soon. Exp. release 2023, February 17'
    },
    {
    id: 4,
    name: 'Samsung Galaxy S22 Ultra 5G',
    price: 304990,
    description: 'Available. Released 2022, February 25'
  }
];