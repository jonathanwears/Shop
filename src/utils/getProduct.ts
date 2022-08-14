import serverUrl from '../../serverUrl';

async function getProduct(productId:string) {
  const getFetch = await fetch(`${serverUrl}/${productId}`);
  const product = await getFetch.json();
  return product;
}

export default getProduct;
