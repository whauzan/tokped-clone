import { useState } from 'react';
import './ProductGrid.css';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  shop: {
    name: string;
    location: string;
    isPowerMerchant: boolean;
  };
  rating: number;
  soldCount: number;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  const [sortBy, setSortBy] = useState('relevant');

  // Sample data with placeholder images
  const productsWithPlaceholder = products.map(product => ({
    ...product,
    image: 'https://placehold.co/300x300/e5e7e9/a4a7ac?text=RTX+5080'
  }));

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatSoldCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}rb`;
    }
    return count.toString();
  };

  return (
    <div className="product-grid-container">
      <div className="product-grid-header">
        <div className="results-count">
          <span>Menampilkan {products.length} produk</span>
        </div>
        
        <div className="sort-container">
          <label>Urutkan:</label>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="relevant">Paling Sesuai</option>
            <option value="latest">Terbaru</option>
            <option value="price-low">Harga Terendah</option>
            <option value="price-high">Harga Tertinggi</option>
            <option value="rating">Rating Tertinggi</option>
          </select>
        </div>
      </div>

      <div className="product-grid">
        {productsWithPlaceholder.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              
              <div className="product-price">
                {formatPrice(product.price)}
              </div>
              
              <div className="shop-info">
                {product.shop.isPowerMerchant && (
                  <span className="power-merchant-badge">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="#03AC0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
                <span className="shop-name">{product.shop.name}</span>
              </div>
              
              <div className="product-meta">
                <div className="rating">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFC400">
                    <path d="M8 0L10.2571 4.89337L15.6085 5.52786L11.8042 9.22663L12.7023 14.4721L8 12L3.29772 14.4721L4.19577 9.22663L0.391548 5.52786L5.74292 4.89337L8 0Z"/>
                  </svg>
                  <span>{product.rating}</span>
                </div>
                <div className="separator">|</div>
                <div className="sold-count">
                  Terjual {formatSoldCount(product.soldCount)}
                </div>
              </div>
              
              <div className="shop-location">
                {product.shop.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
