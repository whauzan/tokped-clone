import { FC } from 'react';
import './Footer.css';

interface FooterLink {
  title: string;
  links: {
    name: string;
    url: string;
  }[];
}

const footerLinks: FooterLink[] = [
  {
    title: "About Tokopedia",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Blog", url: "/blog" },
      { name: "Tokopedia Care", url: "/care" }
    ]
  },
  {
    title: "For Sellers",
    links: [
      { name: "Seller Education Center", url: "/seller-education" },
      { name: "Mitra Tokopedia", url: "/mitra" },
      { name: "Seller Tools", url: "/seller-tools" },
      { name: "Start Selling", url: "/start-selling" }
    ]
  },
  {
    title: "For Buyers",
    links: [
      { name: "Payment Methods", url: "/payments" },
      { name: "Shipping Info", url: "/shipping" },
      { name: "Tokopedia Care", url: "/care" },
      { name: "Purchase Protection", url: "/protection" }
    ]
  }
];

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          {footerLinks.map((section, index) => (
            <div key={index} className="footer-section">
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com/tokopedia" className="social-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://twitter.com/tokopedia" className="social-link" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
              <a href="https://instagram.com/tokopedia" className="social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="/tokopedia-logo.svg" alt="Tokopedia" />
          </div>
          <p className="copyright">
            © 2024 Tokopedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
