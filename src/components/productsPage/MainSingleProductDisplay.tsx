import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProduct from '../../utils/getProduct';
import ProductUi from './ProductUi';

interface Product {
  _id: string,
  productName: string,
  productPrice: number,
  productImageUrl: string,
};

function mainSingleProductDisplay() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product>({} as Product);
  const params = useParams().productId;

  useEffect(() => {
    async function get() {
      setIsLoading(true);
      const getSingleProduct = await getProduct(params || '1234')
      setProduct(getSingleProduct);
      setIsLoading(false)
    }
    get();
  }, [params]);

  return (
    <div>
      {!isLoading && <ProductUi product={product} />}
    </div>
  );
}

export default mainSingleProductDisplay;
