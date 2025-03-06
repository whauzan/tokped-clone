import { useState } from 'react';
import './ProductFilter.css';

interface FilterSection {
  id: string;
  title: string;
  isOpen: boolean;
}

const ProductFilter = () => {
  const [sections, setSections] = useState<FilterSection[]>([
    { id: 'category', title: 'Kategori', isOpen: true },
    { id: 'shopType', title: 'Jenis toko', isOpen: true },
    { id: 'location', title: 'Lokasi', isOpen: true },
    { id: 'price', title: 'Harga', isOpen: true },
    { id: 'rating', title: 'Rating', isOpen: true },
    { id: 'condition', title: 'Kondisi', isOpen: true },
    { id: 'offers', title: 'Penawaran', isOpen: true },
    { id: 'services', title: 'Layanan Tokopedia', isOpen: true },
    { id: 'shipping', title: 'Durasi Pengiriman', isOpen: true }
  ]);

  const toggleSection = (id: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, isOpen: !section.isOpen } : section
    ));
  };

  return (
    <div className="product-filter">
      <div className="filter-header">
        <h2>Filter</h2>
        <button className="clear-filter">Hapus Filter</button>
      </div>

      {sections.map(section => (
        <div key={section.id} className="filter-section">
          <button 
            className="section-header"
            onClick={() => toggleSection(section.id)}
          >
            <span>{section.title}</span>
            <svg 
              className={`arrow-icon ${section.isOpen ? 'open' : ''}`}
              width="16" 
              height="16" 
              viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {section.isOpen && (
            <div className="section-content">
              {section.id === 'category' && (
                <div className="category-list">
                  <a href="#" className="category-item">Komputer & Laptop</a>
                  <a href="#" className="category-item">Komponen Komputer</a>
                  <a href="#" className="category-item">Aksesoris Komputer & Laptop</a>
                  <a href="#" className="category-item">Printer</a>
                  <a href="#" className="category-item">Media Penyimpanan Data</a>
                </div>
              )}

              {section.id === 'shopType' && (
                <div className="checkbox-list">
                  <label className="checkbox-item">
                    <input type="checkbox" /> Power Shop
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" /> Mall
                  </label>
                </div>
              )}

              {section.id === 'location' && (
                <div className="checkbox-list">
                  <label className="checkbox-item">
                    <input type="checkbox" /> DKI Jakarta
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" /> Jabodetabek
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" /> Bandung
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" /> Medan
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" /> Surabaya
                  </label>
                </div>
              )}

              {section.id === 'price' && (
                <div className="price-range">
                  <div className="price-inputs">
                    <input 
                      type="text" 
                      placeholder="Harga Minimum" 
                      className="price-input"
                    />
                    <input 
                      type="text" 
                      placeholder="Harga Maksimum" 
                      className="price-input"
                    />
                  </div>
                  <button className="apply-price">Terapkan</button>
                </div>
              )}

              {section.id === 'rating' && (
                <div className="rating-list">
                  <label className="rating-item">
                    <input type="checkbox" />
                    <span className="stars">★★★★★</span>
                  </label>
                  <label className="rating-item">
                    <input type="checkbox" />
                    <span className="stars">★★★★☆</span>
                  </label>
                  <label className="rating-item">
                    <input type="checkbox" />
                    <span className="stars">★★★☆☆</span>
                  </label>
                </div>
              )}

              {section.id === 'condition' && (
                <div className="checkbox-list">
                  <label className="checkbox-item">
                    <input type="checkbox" /> Baru
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" /> Bekas
                  </label>
                </div>
              )}

              {section.id === 'shipping' && (
                <div className="checkbox-list">
                  <label className="checkbox-item">
                    <input type="checkbox" /> Instan
                  </label>
                  <label className="checkbox-item">
                    <input type="checkbox" /> Same Day
                  </label>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;
