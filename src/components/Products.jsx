import productsData from '../data/products.js';
import './Products.css';

const Products = () => {
  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="section-header">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Professional CCTV cameras and security solutions for every need
          </p>
        </div>

        <div className="products-grid">
          {productsData.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
              </div>
              <div className="product-content">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-features">
                  <h4 className="features-title">Key Features:</h4>
                  <ul className="features-list">
                    {product.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
