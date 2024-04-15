
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Handle error
      }
    }

    fetchProducts();
  }, []);

  function renderProducts() {
    if (products.length === 0) {
      return <div>No products found.</div>;
    }

    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <Image src={product.image} alt={product.title} width={100} height={100} />
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Placeholder while loading
  if (loading) {
    return <div>Loading...</div>;
  }

  return renderProducts();
}
