import { FC, useState, useEffect } from 'react';
import './Banner.css';

interface BannerItem {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  backgroundColor: string;
  textColor: string;
}

const bannerData: BannerItem[] = [
  {
    id: 1,
    title: 'Special Discount Up to 50%',
    description: 'Get amazing deals on your favorite products',
    buttonText: 'Shop Now',
    backgroundColor: '#ff4d4f',
    textColor: '#ffffff'
  },
  {
    id: 2,
    title: 'New Collection Arrival',
    description: 'Discover the latest trends and styles',
    buttonText: 'Explore',
    backgroundColor: '#36cfc9',
    textColor: '#ffffff'
  },
  {
    id: 3,
    title: 'Flash Sale Today',
    description: 'Limited time offers on popular items',
    buttonText: 'View Deals',
    backgroundColor: '#7cb305',
    textColor: '#ffffff'
  }
];

const Banner: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="banner">
      <div className="banner-container">
        <div 
          className="banner-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerData.map((banner) => (
            <div 
              key={banner.id} 
              className="banner-slide"
              style={{ 
                backgroundColor: banner.backgroundColor,
                color: banner.textColor 
              }}
            >
              <div className="banner-content">
                <h2 className="banner-title">{banner.title}</h2>
                <p className="banner-description">{banner.description}</p>
                <button className="banner-button">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="banner-dots">
          {bannerData.map((_, index) => (
            <button
              key={index}
              className={`banner-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
