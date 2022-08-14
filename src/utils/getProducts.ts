import serverUrl from '../../serverUrl';

async function getProducts() {

  const fetchProducts = await fetch(`${serverUrl}/products`);
  const products = await fetchProducts.json();
  return products;
}

export default getProducts;