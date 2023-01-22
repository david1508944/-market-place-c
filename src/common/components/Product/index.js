import { useDispatch, useSelector } from "react-redux"
import { addProduct, cartsSelector } from "../redux/slices/cartSlice"

const Product = ({id, url, model, productType, price}) => {
    const dispatch = useDispatch()
    const cart = useSelector(cartsSelector)

    const addBasket = () => {
      // const hash = () => Math.floor((1 + Math.random()) * 0x10000)
      //   .toString(16)
      //   .substring(2)

    const prod = {
      id,
      url,
      model,
      price
    }
    fetch('http://localhost:3000/cart',  {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prod)
    })
      .then(() => {
        dispatch(addProduct(prod))
      })
  }


    return (
      
        <div key={id} className="home-page-product">
          <img className="images" alt={model} id={id} src={url}  />
          <p >{model} {price}</p>
          <button onClick={addBasket} className="button">Add basket</button>
        </div>
        
    )
}

export default Product