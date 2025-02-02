import { FC } from 'react';
import './ProductCategories.css';

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  backgroundColor: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    icon: '📱',
    backgroundColor: '#ffd666',
    link: '/category/electronics'
  },
  {
    id: 2,
    name: 'Fashion',
    description: 'Trendy clothing and accessories',
    icon: '👕',
    backgroundColor: '#b7eb8f',
    link: '/category/fashion'
  },
  {
    id: 3,
    name: 'Home & Living',
    description: 'Everything for your home',
    icon: '🏠',
    backgroundColor: '#91d5ff',
    link: '/category/home'
  },
  {
    id: 4,
    name: 'Health & Beauty',
    description: 'Beauty and personal care products',
    icon: '💄',
    backgroundColor: '#ffadd2',
    link: '/category/beauty'
  },
  {
    id: 5,
    name: 'Sports & Outdoor',
    description: 'Sports equipment and outdoor gear',
    icon: '⚽',
    backgroundColor: '#87e8de',
    link: '/category/sports'
  },
  {
    id: 6,
    name: 'Toys & Games',
    description: 'Fun for all ages',
    icon: '🎮',
    backgroundColor: '#d3adf7',
    link: '/category/toys'
  }
];

const ProductCategories: FC = () => {
  return (
    <section className="product-categories">
      <h2 className="section-title">Browse Categories</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <a 
            key={category.id} 
            href={category.link} 
            className="category-card"
            style={{ backgroundColor: category.backgroundColor }}
          >
            <div className="category-icon">
              <span role="img" aria-label={category.name}>
                {category.icon}
              </span>
            </div>
            <div className="category-content">
              <h3 className="category-title">{category.name}</h3>
              <p className="category-description">{category.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
