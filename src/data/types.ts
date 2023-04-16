export type CardType = {
  id: number;
  category: string;
  name: string;
  brand: string;
  photo: string;
  price: number;
  inStock: number;
  rating: number;
};

export type RegistrationForm = {
  id: string;
  firstName: string;
  lastName: string;
  birthday: string;
  gender: string;
  country: string;
  photo: string;
  check: boolean;
};
