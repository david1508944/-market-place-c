import { memo  } from "react"
import { useDispatch } from "react-redux"
import { deleteProduct } from "../../redux/slices/cartSlice"
import instance from "../../api/axios";


const CartProduct = ({id, url, model, price}) => {
    const dispatch = useDispatch()

    const removeBasket = () => {
        instance.delete(`cart/${id}`)
            .then(res => {
                if(res.status === 200) {
                    dispatch(deleteProduct(id))
                }
            })
    }    
  

  

    return (
        <div key={id} className="home-page-product">
          <img className="images" alt={model} id={id} src={url}  />
          <p >{model} {price}</p>
          <button onClick={removeBasket} className="button">Remove from basket</button>
        </div>
    )
}

export default memo(CartProduct);