import { MerchItem } from '../types';

export const merchItems: MerchItem[] = [
  {
    id: '1',
    name: 'Midnight Dreams Tour T-Shirt',
    price: 35,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'apparel',
  },
  {
    id: '2',
    name: 'MALAIKA Logo Hoodie',
    price: 65,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'apparel',
  },
  {
    id: '3',
    name: 'Electric Hearts Vinyl',
    price: 28,
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop',
    category: 'music',
  },
  {
    id: '4',
    name: 'Limited Edition Poster Set',
    price: 20,
    image: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=400&fit=crop',
    category: 'accessories',
  },
  {
    id: '5',
    name: 'Sunset Boulevard Cap',
    price: 30,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
    sizes: ['One Size'],
    category: 'apparel',
  },
  {
    id: '6',
    name: 'NOVA Tote Bag',
    price: 22,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
    category: 'accessories',
  },
  {
    id: '7',
    name: 'Origins Album CD',
    price: 15,
    image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&h=400&fit=crop',
    category: 'music',
  },
  {
    id: '8',
    name: 'Neon Dreams Long Sleeve',
    price: 42,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'apparel',
  },
  {
    id: '9',
    name: 'Tour Snapback',
    price: 32,
    image: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400&h=400&fit=crop',
    sizes: ['One Size'],
    category: 'apparel',
  },
];

export const featuredMerch = merchItems.slice(0, 3);
