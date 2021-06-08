import logo from './logo.svg';
import './App.css';
import ProductList from './components/productsList'
import { useState, useContext, useEffect } from 'react'
import ProductContext from './contexts/productContext'


function App() {
  const [products, setProducts] = useState([])

  async function getProductList() {
    let res = await fetch("http://18.224.200.47/products/list");
    let json = await res.json();
    console.log(json)
    setProducts(json)
  }

  useEffect(() => {
    getProductList()
  }, [])

  return (
    <ProductContext.Provider
    value = {{
      products,
    }}>
      <div>
          <ProductList />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
