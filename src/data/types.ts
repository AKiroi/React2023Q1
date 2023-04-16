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

export type CardsType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
