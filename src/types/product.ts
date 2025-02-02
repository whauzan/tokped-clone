export interface SpecificationGroup {
  [key: string]: string | number;
}

export interface Specifications {
  [category: string]: SpecificationGroup;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  condition: string;
  minOrder: number;
  specifications: Specifications;
  description: string;
  seller: {
    name: string;
    rating: number;
    location: string;
  };
  stock: number;
}
