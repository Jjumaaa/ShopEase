import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const products = [
  { 
    id: 1, 
    name: 'Premium Headphones', 
    price: 249.99, 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'electronics',
    rating: 4.8
  },
  { 
    id: 2, 
    name: 'Smart Watch Pro', 
    price: 349.99, 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80',
    category: 'electronics',
    rating: 4.6
  },
  { 
    id: 3, 
    name: 'Running Shoes', 
    price: 129.99, 
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'fashion',
    rating: 4.7
  },
  { 
    id: 4, 
    name: 'Designer Sunglasses', 
    price: 179.99, 
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
    category: 'fashion',
    rating: 4.5
  },
  { 
    id: 5, 
    name: 'PS5 DualSense Controller', 
    price: 69.99, 
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'gaming',
    rating: 4.9
  },
  { 
    id: 6, 
    name: 'Xbox Series X Controller', 
    price: 59.99, 
    image: 'https://images.unsplash.com/photo-1690719056122-56bc90404ba7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFhib3glMjBTZXJpZXMlMjBYJTIwQ29udHJvbGxlcnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'gaming',
    rating: 4.7
  },
  { 
    id: 7, 
    name: 'Gaming Headset', 
    price: 89.99, 
    image: 'https://images.unsplash.com/photo-1629429407756-4a7703614972?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D',
    category: 'gaming',
    rating: 4.5
  },
  { 
    id: 8, 
    name: 'Mechanical Keyboard', 
    price: 109.99, 
    image: 'https://images.unsplash.com/photo-1626958390898-162d3577f293?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww',
    category: 'gaming',
    rating: 4.6
  },
  { 
    id: 9, 
    name: 'Gaming Mouse', 
    price: 79.99, 
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
    category: 'gaming',
    rating: 4.8
  },
  { 
    id: 10, 
    name: '4K Gaming Monitor', 
    price: 499.99, 
    image: 'https://gagadget.com/media/uploads/best-4k-gaming-monitor.png',
    category: 'gaming',
    rating: 4.7
  },
];

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('default');

  const filteredProducts = products
    .filter(product => filter === 'all' || product.category === filter)
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="products-container">
      <div className="filter-controls">
        <div className="filter-group">
          <label>Category:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
  <option value="all">All Products</option>
  <option value="electronics">Electronics</option>
  <option value="fashion">Fashion</option>
  <option value="gaming">Gaming</option>
</select>
        </div>
        
        <div className="filter-group">
          <label>Sort By:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="default">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;