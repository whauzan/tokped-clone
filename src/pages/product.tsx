import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Breadcrumb from '../components/Product/Breadcrumb';
import ProductGallery from '../components/Product/ProductGallery';
import ProductInfo from '../components/Product/ProductInfo';
import ProductActions from '../components/Product/ProductActions';
import ProductSpecs from '../components/Product/ProductSpecs';
import { productData } from '../data/product';
import './product.css';

const ProductPage = () => {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const breadcrumbItems = [
    { label: 'Komputer & Laptop', href: '/komputer-laptop' },
    { label: 'Komponen Komputer', href: '/komputer-laptop/komponen' },
    { label: 'VGA Card', href: '/komputer-laptop/komponen/vga-card' },
    { label: productData.name, href: '#' }
  ];

  const handleAddToCart = (quantity: number) => {
    setToastMessage(`${quantity} item ditambahkan ke keranjang`);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const handleBuyNow = (quantity: number) => {
    // Handle buy now logic
    console.log('Buy now:', quantity);
  };

  return (
    <div className="product-page">
      <Header />
      
      <main className="product-main">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="product-container">
          <div className="product-grid">
            {/* Left Column - Product Gallery */}
            <div>
              <ProductGallery 
                images={productData.images}
                productName={productData.name}
              />
            </div>

            {/* Middle Column - Product Info */}
            <div>
              <ProductInfo product={productData} />
            </div>

            {/* Right Column - Actions */}
            <div>
              <ProductActions
                stock={productData.stock}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            </div>
          </div>

          {/* Specifications Section */}
          <div className="product-specs">
            <ProductSpecs specifications={productData.specifications} />
          </div>
        </div>
      </main>

      <Footer />

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="success-toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
