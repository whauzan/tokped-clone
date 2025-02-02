import './Breadcrumb.css';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="breadcrumb">
      <a href="/" className="breadcrumb-home">
        Home
      </a>
      
      {items.map((item, index) => (
        <div key={item.href} className="breadcrumb-item">
          <span className="breadcrumb-separator">›</span>
          {index === items.length - 1 ? (
            <span className="breadcrumb-current">{item.label}</span>
          ) : (
            <a href={item.href} className="breadcrumb-link">
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
