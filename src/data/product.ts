import { Product } from '../types/product';

export const productData: Product = {
  id: 'rtx5080-x3',
  name: 'INNO3D GEFORCE RTX 5080 X3 16GB GDDR7',
  price: 20999999,
  images: [
    'https://placehold.co/600x400/png?text=RTX+5080+Main',
    'https://placehold.co/600x400/png?text=RTX+5080+Side',
    'https://placehold.co/600x400/png?text=RTX+5080+Back',
    'https://placehold.co/600x400/png?text=RTX+5080+Ports'
  ],
  condition: 'Baru',
  minOrder: 1,
  specifications: {
    'GPU Engine Specs': {
      'CUDA Cores': 10752,
      'Boost Clock (MHz)': 2617,
      'Base Clock (MHz)': 2295
    },
    'Memory Specs': {
      'Memory Size': '16GB',
      'Memory Type': 'GDDR7',
      'Memory Interface': '256-bit'
    }
  },
  description: 'GeForce RTX 50 Series',
  seller: {
    name: 'Nano Komputer',
    rating: 5.0,
    location: 'Kota Administrasi Jakarta Pusat'
  },
  stock: 3
};

export default productData;
