import {useState, useEffect} from 'react'

function Products({ product }) {
  const [display, setDisplay] = useState(false)
  const [pictureUrl, setPictureUrl] = useState('')
  const url = `http://18.224.200.47/products/${product.id}/styles`

  async function getImage() {
    let res = await fetch(url);
    let json = await res.json();
    console.log(json)
    let imageUrl = await json.results[0].photos[0].url
    setPictureUrl(imageUrl)
  }

  useEffect(() => {
    getImage()
  }, [])


  function useOpenItem(){
    return () => setDisplay(!display)
  }

  const openDisplay = useOpenItem();

  if (display) {
    return(
      <div>
        <button type='button' onClick={openDisplay}>
          ID: {product.id}
          <br></br>
          Name: {product.name}
          <br></br>
          Slogal: {product.slogan}
          <br></br>
          Desc: {product.description}
          <br></br>
          Cat: {product.category}
          <br></br>
          Price: {product.default_price}
          <br></br>
          <img src={pictureUrl}></img>
        </button>
      </div>
    )
  }
  return (
    <div>
      <button type='button' onClick={openDisplay}>
          <p>{product.name}</p>
          {product.description}
        </button>
    </div>
  );
}

export default Products;