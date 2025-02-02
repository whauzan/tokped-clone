import { useState } from 'react';
import './ProductActions.css';

interface ProductActionsProps {
  stock: number;
  onAddToCart: (quantity: number) => void;
  onBuyNow: (quantity: number) => void;
}

const ProductActions = ({ stock, onAddToCart, onBuyNow }: ProductActionsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= stock) {
      setQuantity(value);
    }
  };

  return (
    <div className="product-actions">
      {/* Quantity Selector */}
      <div className="quantity-section">
        <p className="quantity-label">Atur jumlah dan catatan</p>
        <div className="quantity-controls">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            className="quantity-button"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            className="quantity-input"
          />
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= stock}
            className="quantity-button"
          >
            +
          </button>
          <span className="stock-info">
            Stok: {stock}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button
          onClick={() => onAddToCart(quantity)}
          className="cart-button"
        >
          + Keranjang
        </button>
        <button
          onClick={() => onBuyNow(quantity)}
          className="buy-button"
        >
          Beli Langsung
        </button>
      </div>

      {/* Share and Wishlist */}
      <div className="secondary-actions">
        <button className="secondary-button">
          <span>💬</span>
          Chat
        </button>
        <button className="secondary-button">
          <span>❤️</span>
          Wishlist
        </button>
        <button className="secondary-button">
          <span>↗️</span>
          Share
        </button>
      </div>
    </div>
  );
};

export default ProductActions;
