import { FC } from 'react';
import './TrendingProducts.css';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  discount?: number;
  backgroundColor: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Earbuds Pro',
    price: 899000,
    rating: 4.8,
    reviews: 1234,
    discount: 20,
    backgroundColor: '#ffd666'
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    price: 2499000,
    rating: 4.7,
    reviews: 856,
    backgroundColor: '#b7eb8f'
  },
  {
    id: 3,
    name: 'Premium Leather Wallet',
    price: 299000,
    rating: 4.9,
    reviews: 2341,
    discount: 15,
    backgroundColor: '#91d5ff'
  },
  {
    id: 4,
    name: 'Portable Power Bank',
    price: 399000,
    rating: 4.6,
    reviews: 1567,
    backgroundColor: '#ffadd2'
  }
];

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

const TrendingProducts: FC = () => {
  return (
    <section className="trending-products">
      <div className="section-header">
        <h2 className="section-title">Trending Products</h2>
        <a href="/trending" className="view-all">View All</a>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div 
              className="product-image"
              style={{ backgroundColor: product.backgroundColor }}
            >
              {product.discount && (
                <span className="discount-badge">-{product.discount}%</span>
              )}
            </div>
            
            <div className="product-content">
              <h3 className="product-name">{product.name}</h3>
              
              <div className="product-price">
                {product.discount ? (
                  <>
                    <span className="original-price">
                      {formatPrice(product.price)}
                    </span>
                    <span className="discounted-price">
                      {formatPrice(product.price * (1 - product.discount / 100))}
                    </span>
                  </>
                ) : (
                  <span className="price">{formatPrice(product.price)}</span>
                )}
              </div>

              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <span 
                      key={index}
                      className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="rating-count">({product.reviews})</span>
              </div>

              <button className="add-to-cart">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
