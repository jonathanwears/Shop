import React, { useState } from 'react';
import postNewProduct from '../utils/postNewProduct';

function NewProductForm() {
  const [newProduct, setNewProduct] = useState({});

  function onChangeHandle(event: React.ChangeEvent<HTMLInputElement>) {
    setNewProduct((previousValue) => (
      {
        ...previousValue,
        [event.target.name]: event.currentTarget.value
      }
    ))
  }
  interface PostOptions {
    method: String,
    body: String,
    headers: {},
  }
  
  const postOptions:PostOptions = {
    method: 'POST',
    body: JSON.stringify(newProduct),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //async post function
  async function onClickSubmit() {
    await postNewProduct(postOptions);
  }

  return (
    <div>
      <form>
        <label for="productName">Product Name: </label>
        <input type="text" name="productName" onChange={onChangeHandle} placeholder="New Product Name"></input>
        <label for="productPrice">Product's Price: </label>
        <input type="number" name="productPrice" placeholder="Price"></input>
        <label for="imageUrl" >Picture Link: </label>
        <input type="text" name="imageUrl" placeholder="Image URL"></input>
        <button onClick={onClickSubmit} >Submit</button>
      </form>
    </div>
  );
}

export default NewProductForm;
