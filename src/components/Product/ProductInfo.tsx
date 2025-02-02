import { Product } from '../../types/product';
import './ProductInfo.css';

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const formatPrice = (price: number) => {
    return `Rp${price.toLocaleString('id-ID')}`;
  };

  return (
    <div className="product-info">
      {/* Product Title */}
      <h1 className="product-title">{product.name}</h1>

      {/* Price */}
      <div className="product-price">
        {formatPrice(product.price)}
      </div>

      {/* Basic Info */}
      <div className="basic-info">
        <div className="info-row">
          <span className="info-label">Kondisi:</span>
          <span className="info-value">{product.condition}</span>
        </div>
        <div className="info-row">
          <span className="info-label">Min. Pemesanan:</span>
          <span className="info-value">{product.minOrder} Buah</span>
        </div>
        <div className="info-row">
          <span className="info-label">Stok:</span>
          <span className="info-value">Sisa {product.stock}</span>
        </div>
      </div>

      {/* Seller Info */}
      <div className="seller-info">
        <div className="seller-header">
          <div className="seller-avatar">
            <span>🏪</span>
          </div>
          <div className="seller-details">
            <h3>{product.seller.name}</h3>
            <div className="seller-rating">
              <span className="star">⭐</span>
              <span>{product.seller.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="seller-location">
          <span>📍</span>
          <span>{product.seller.location}</span>
        </div>

        {/* Seller Badges */}
        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
          <span className="badge badge-official">Official Store</span>
          <span className="badge badge-power">Power Merchant</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
