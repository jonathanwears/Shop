import React, { useState } from 'react';
import NewProductForm from './pages/NewProductForm';
import Products from './pages/Products';

function App() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  function handleOnClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="App">
      {!isClicked && <button onClick={handleOnClick}>Submit New Item</button>}
      {!isClicked ? <Products /> : <NewProductForm />}
    </div>
  )
}

export default App;
