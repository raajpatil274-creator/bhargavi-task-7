import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  // ही तुमची लाइव्ह बॅकएंड लिंक आहे
  const API_URL = 'https://bhargavi-task-7-1.onrender.com';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/products`);
        setProducts(response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;