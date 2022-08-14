import React, { useEffect, useState } from 'react';
import getProducts from '../../utils/getProducts';
import { Link } from 'react-router-dom';
import './ProductsList.css';
interface product {
  _id: string,
  productName: string,
  productPrice: number,
  productImageUrl: string,
};

function ProductsList() {
  const [products, setProducts] = useState<product[]>();

  useEffect(() => {
    // get products
    async function fetchProducts() {
      const products = await getProducts();
      setProducts(products);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <ul className="products">
        {
          products && products.map((product, index) => {
            return (

              <li key={index} className="product-item">
                <Link to={`/${product._id}`}>
                  {product.productName}
                  {product.productPrice}

                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default ProductsList;
