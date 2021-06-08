import { useContext } from 'react'
import productContext from '../contexts/productContext'
import Products from './product'

function ProductList() {
  const { products } = useContext(productContext)

  return (
    <div>
      {products.map((indProduct) => (
        <Products product={indProduct} />
      ))}
    </div>
  );
}

export default ProductList;