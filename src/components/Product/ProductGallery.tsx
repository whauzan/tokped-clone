import { useState, useRef } from 'react';
import './ProductGallery.css';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

const ProductGallery = ({ images, productName }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showZoom, setShowZoom] = useState(false);
  
  const mainImageRef = useRef<HTMLDivElement>(null);
  const zoomLensRef = useRef<HTMLDivElement>(null);
  const zoomedImageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current || !zoomLensRef.current || !zoomedImageRef.current) return;

    const { left, top, width, height } = mainImageRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const x = clientX - left;
    const y = clientY - top;

    // Calculate zoom lens position
    const lensWidth = zoomLensRef.current.offsetWidth;
    const lensHeight = zoomLensRef.current.offsetHeight;
    let lensX = x - lensWidth / 2;
    let lensY = y - lensHeight / 2;

    // Constrain lens position
    lensX = Math.max(0, Math.min(width - lensWidth, lensX));
    lensY = Math.max(0, Math.min(height - lensHeight, lensY));

    // Update lens position
    zoomLensRef.current.style.left = `${lensX}px`;
    zoomLensRef.current.style.top = `${lensY}px`;

    // Calculate and update zoomed image position
    const bgX = (lensX / width) * 100;
    const bgY = (lensY / height) * 100;
    zoomedImageRef.current.style.backgroundPosition = `${bgX}% ${bgY}%`;
  };

  return (
    <div className="product-gallery">
      {/* Main Image */}
      <div 
        className="main-image"
        ref={mainImageRef}
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={images[selectedImage]}
          alt={productName}
        />
        {showZoom && (
          <>
            <div 
              className="zoom-lens"
              ref={zoomLensRef}
            />
            <div 
              className="zoomed-image"
              ref={zoomedImageRef}
              style={{
                backgroundImage: `url(${images[selectedImage]})`,
                backgroundSize: '200%'
              }}
            />
          </>
        )}
      </div>

      {/* Thumbnail Images */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`thumbnail-button ${selectedImage === index ? 'selected' : ''}`}
          >
            <img
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
