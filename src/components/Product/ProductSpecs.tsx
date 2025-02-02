import { Specifications } from '../../types/product';
import './ProductSpecs.css';

interface ProductSpecsProps {
  specifications: Specifications;
}

const ProductSpecs = ({ specifications }: ProductSpecsProps) => {
  return (
    <div className="product-specs">
      <div className="specs-header">
        <h2 className="specs-title">Spesifikasi</h2>
      </div>
      
      <div className="specs-content">
        {Object.entries(specifications).map(([category, specs]) => (
          <div key={category} className="specs-category">
            <h3 className="category-title">{category}</h3>
            <div className="specs-list">
              {Object.entries(specs).map(([key, value]) => (
                <div key={key} className="specs-item">
                  <div className="specs-key">{key}</div>
                  <div className="specs-value">
                    {typeof value === 'number' && key.toLowerCase().includes('clock') 
                      ? `${value} MHz`
                      : value.toString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Info Penting Section */}
      <div className="important-info">
        <h2 className="important-info-title">Info Penting</h2>
        <ul className="important-info-list">
          <li>Garansi resmi 3 tahun dari distributor</li>
          <li>Stok terbatas dan dapat berubah sewaktu-waktu</li>
          <li>Pastikan alamat pengiriman sudah benar dan lengkap</li>
          <li>Pengiriman hanya dilakukan pada hari kerja</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductSpecs;
