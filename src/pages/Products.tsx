import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainSingleProductDisplay from '../components/productsPage/MainSingleProductDisplay';
import ProductsList from '../components/productsPage/ProductsList';

function Products() {

  return (
    <>
      <BrowserRouter>
        <ProductsList />
        <Routes>
          <Route path="/:productId" element={<MainSingleProductDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Products;
