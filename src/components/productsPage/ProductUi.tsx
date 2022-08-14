import React from 'react';

interface productProps {
  product: product;
}
interface product {
  _id: string,
  productName: string,
  productPrice: number,
  productImageUrl: string,
};

function productUi({ product }: productProps) {

  return (
    <>
      {product.productName}
      {product.productPrice}
      <img src={product.productImageUrl}></img>
    </>
  );
}

export default productUi;
