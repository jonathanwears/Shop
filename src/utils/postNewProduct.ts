import serverUrl from "../../serverUrl";

async function postNewProduct(postOptions:{}) {

  const send = await fetch(`${serverUrl}/createProduct`, postOptions);
  const res = send.json();
  console.log(res);
}

export default postNewProduct;
