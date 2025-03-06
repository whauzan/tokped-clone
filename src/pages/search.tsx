import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ProductFilter from "../components/ProductFilter/ProductFilter";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import "../styles/variables.css";
import "./search.css";

// Sample data for testing
const sampleProducts = [
  {
    id: "1",
    name: "Colorful RTX 5080 Ultra White OC 16GB GDDR7",
    price: 21655000,
    image: "https://placehold.co/300x300/e5e7e9/a4a7ac?text=RTX+5080",
    shop: {
      name: "L.pedia pc",
      location: "Jakarta Pusat",
      isPowerMerchant: true,
    },
    rating: 4.9,
    soldCount: 2500,
  },
  {
    id: "2",
    name: "INNO3D GEFORCE RTX 5080 ICHILL X3 16GB GDDR7",
    price: 20999999,
    image: "https://placehold.co/300x300/e5e7e9/a4a7ac?text=RTX+5080",
    shop: {
      name: "Nano Komputer",
      location: "Jakarta Barat",
      isPowerMerchant: true,
    },
    rating: 4.8,
    soldCount: 1800,
  },
  {
    id: "3",
    name: "MSI GeForce RTX 5080 GAMING X TRIO 16GB GDDR7",
    price: 22210000,
    image: "https://placehold.co/300x300/e5e7e9/a4a7ac?text=RTX+5080",
    shop: {
      name: "StarComp",
      location: "Surabaya",
      isPowerMerchant: true,
    },
    rating: 4.9,
    soldCount: 3200,
  },
  {
    id: "4",
    name: "ASUS TUF Gaming GeForce RTX 5080 OC 16GB GDDR7",
    price: 21800000,
    image: "https://placehold.co/300x300/e5e7e9/a4a7ac?text=RTX+5080",
    shop: {
      name: "GASOL SUMBERSARI",
      location: "Bandung",
      isPowerMerchant: true,
    },
    rating: 4.7,
    soldCount: 1500,
  },
  {
    id: "5",
    name: "ZOTAC GeForce RTX 5080 Trinity OC 16GB GDDR7",
    price: 21800000,
    image: "https://placehold.co/300x300/e5e7e9/a4a7ac?text=RTX+5080",
    shop: {
      name: "GASOL SURABAYA",
      location: "Surabaya",
      isPowerMerchant: true,
    },
    rating: 4.8,
    soldCount: 2100,
  },
  {
    id: "6",
    name: "VGA Nvidia GeForce RTX 5080 Colorful Ultra White",
    price: 23150000,
    image: "https://placehold.co/300x300/e5e7e9/a4a7ac?text=RTX+5080",
    shop: {
      name: "Belanja Aja Yuu",
      location: "Jakarta Timur",
      isPowerMerchant: true,
    },
    rating: 4.9,
    soldCount: 2800,
  },
];

const SearchPage = () => {
  const [searchQuery] = useState("rtx 5080");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll to top button
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="search-wrapper">
        <div className="search-content">
          <div className="search-breadcrumb">
            <span>Beranda</span>
            <span className="separator">/</span>
            <span>Hasil pencarian</span>
            <span className="separator">/</span>
            <span className="current">{searchQuery}</span>
          </div>

          <div className="search-results">
            <aside className="search-sidebar">
              <ProductFilter />
            </aside>

            <div className="search-main">
              <ProductGrid products={sampleProducts} />
            </div>
          </div>
        </div>

        {showScrollTop && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
